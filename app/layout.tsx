import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tecnodespegue.com'),
  title: {
    default: "Tecnodespegue - Desarrollo Web y Programación Freelance | Agencia Digital",
    template: "%s | Tecnodespegue"
  },
  description: "⭐ Agencia freelance #1 en desarrollo web y programación. Creamos aplicaciones web modernas, software a medida y soluciones digitales que impulsan tu negocio. React, Next.js, Node.js. Presupuesto gratis.",
  keywords: [
    "desarrollo web",
    "desarrollo web profesional",
    "programación freelance",
    "agencia desarrollo web",
    "desarrollador web freelance",
    "aplicaciones web",
    "software a medida",
    "Next.js",
    "React",
    "desarrollo frontend",
    "desarrollo backend",
    "Node.js",
    "TypeScript",
    "diseño web",
    "páginas web modernas",
    "e-commerce",
    "tienda online",
    "landing page",
    "sitio web responsive",
    "SEO",
    "optimización web",
    "tecnodespegue",
    "España",
    "Madrid"
  ],
  authors: [{ name: "Tecnodespegue", url: "https://tecnodespegue.com" }],
  creator: "Tecnodespegue",
  publisher: "Tecnodespegue",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tecnodespegue.com",
    siteName: "Tecnodespegue",
    title: "Tecnodespegue - Desarrollo Web y Programación Freelance | Agencia Digital",
    description: "⭐ Agencia freelance #1 en desarrollo web y programación. Creamos aplicaciones web modernas, software a medida y soluciones digitales. React, Next.js, Node.js. Presupuesto gratis.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tecnodespegue - Desarrollo Web Profesional"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecnodespegue - Desarrollo Web y Programación Freelance",
    description: "⭐ Agencia freelance #1 en desarrollo web. React, Next.js, Node.js. Presupuesto gratis.",
    images: ["/og-image.jpg"],
    creator: "@tecnodespegue",
  },
  alternates: {
    canonical: "https://tecnodespegue.com",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
