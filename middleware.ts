import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("authjs.session-token")
  const isLoggedIn = !!token
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")
  const isLoginPage = request.nextUrl.pathname === "/admin/login"

  if (isAdminRoute && !isLoginPage && !isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
