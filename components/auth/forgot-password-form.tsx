"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Mail, Loader2 } from "lucide-react"
import { resetPassword } from "@/lib/auth"

export function ForgotPasswordForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await resetPassword(email)
      setIsSubmitted(true)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center space-y-6">
        <div className="bg-green-100 p-4 rounded-xl">
          <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">Check Your Email</h3>
          <p className="text-green-700">
            We've sent a password reset link to <strong>{email}</strong>
          </p>
        </div>
        <p className="text-sm text-gray-600">
          Didn't receive the email? Check your spam folder or{" "}
          <button onClick={() => setIsSubmitted(false)} className="text-pink-600 hover:underline font-semibold">
            try again
          </button>
        </p>
        <Link href="/login">
          <Button variant="outline" className="w-full bg-transparent">
            Back to Sign In
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1"
          placeholder="your@email.com"
          required
          disabled={loading}
        />
        <p className="text-sm text-gray-500 mt-2">
          Enter the email address associated with your account and we'll send you a link to reset your password.
        </p>
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full h-12 text-lg font-semibold"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Sending Reset Link...
          </>
        ) : (
          "Send Reset Link"
        )}
      </Button>

      <div className="text-center">
        <Link href="/login" className="text-pink-600 hover:underline font-semibold">
          Back to Sign In
        </Link>
      </div>
    </form>
  )
}
