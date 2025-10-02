import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { database } from "@/lib/db"
import bcrypt from "bcryptjs"
import { logSecurityEvent } from "@/lib/security-logger"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await database.getUserByEmail(credentials.email as string)

        if (!user) {
          return null
        }

        // Secure password comparison with bcrypt
        const isValidPassword = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (!isValidPassword) {
          await logSecurityEvent({
            event: "login_failed",
            email: credentials.email as string,
          })
          return null
        }

        await logSecurityEvent({
          event: "login_success",
          email: user.email,
        })

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
})
