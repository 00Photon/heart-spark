import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { AuthProvider } from "@/contexts/auth-context"
import { FirebaseProvider } from "@/components/firebase-provider"
import { ErrorBoundary } from "@/components/error-boundary"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
})

export const metadata: Metadata = {
  title: "HeartSpark - Find Your Perfect Match",
  description: "Connect with meaningful relationships through our modern dating platform",
  keywords: ["dating", "relationships", "love", "singles", "match"],
  authors: [{ name: "HeartSpark Team" }],
  openGraph: {
    title: "HeartSpark - Find Your Perfect Match",
    description: "Connect with meaningful relationships through our modern dating platform",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-sans antialiased`}>
        <ErrorBoundary>
          <FirebaseProvider>
            <AuthProvider>{children}</AuthProvider>
          </FirebaseProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
