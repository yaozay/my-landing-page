import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yahya Ozay - Portfolio",
  description:
    "Personal portfolio of Yahya Ozay, showcasing projects and skills in web development and software engineering.",
  keywords: ["Portfolio", "Next.js", "React", "TypeScript", "Tailwind CSS", "Software Engineer", "Web Developer"],
  authors: [{ name: "Yahya Ozay" }],
  creator: "Yahya Ozay",
  openGraph: {
    title: "Yahya Ozay - Portfolio",
    description: "Building scalable web apps with React & Rust.",
    url: "https://your-domain.com",
    siteName: "Yahya Ozay",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yahya Ozay's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yahya Ozay - Portfolio",
    description: "Building scalable web apps with React & Rust.",
    creator: "@your_twitter_handle",
    images: ["/og-image.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} relative`}>
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute -z-20 top-0 right-0 h-full w-full aurora-bg"></div>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
