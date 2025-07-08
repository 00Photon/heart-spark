import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Logo } from "../ui/logo"
import { Button } from "../ui/button"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  showBackToHome?: boolean
}

export function AuthLayout({ children, title, subtitle, showBackToHome = true }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex flex-col">
      {/* Header */}
      <header className="p-6">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Logo />
          {showBackToHome && (
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-pink-600">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-600">{subtitle}</p>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl p-8">{children}</div>
        </div>
      </main>

      {/* Background Decorations */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-50 blur-xl -z-10" />
      <div className="fixed bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-xl -z-10" />
    </div>
  )
}
