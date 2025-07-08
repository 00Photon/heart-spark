"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { sendEmailVerification } from "firebase/auth"
import { useAuth } from "@/contexts/auth-context"
import { Loader2, Mail, CheckCircle } from "lucide-react"

export function OtpVerificationForm() {
  const router = useRouter()
  const { user, refreshProfile } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [resendCooldown, setResendCooldown] = useState(0)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    // Check if user is already verified
    if (user?.emailVerified) {
      setIsVerified(true)
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    }
  }, [user, router])

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [resendCooldown])

  const handleResendVerification = async () => {
    if (!user) return

    setError("")
    setLoading(true)

    try {
      await sendEmailVerification(user)
      setResendCooldown(60)
    } catch (error: any) {
      setError("Failed to send verification email. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleCheckVerification = async () => {
    if (!user) return

    setLoading(true)
    try {
      await user.reload()
      await refreshProfile()

      if (user.emailVerified) {
        setIsVerified(true)
        setTimeout(() => {
          router.push("/dashboard")
        }, 2000)
      } else {
        setError("Email not verified yet. Please check your email and click the verification link.")
      }
    } catch (error) {
      setError("Failed to check verification status. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (isVerified) {
    return (
      <div className="text-center space-y-6">
        <div className="bg-green-100 p-6 rounded-xl">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Email Verified!</h3>
          <p className="text-green-700">Your account has been successfully verified.</p>
        </div>
        <p className="text-gray-600">Redirecting to your dashboard...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      <div className="text-center mb-6">
        <Mail className="h-16 w-16 text-pink-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Verify Your Email</h3>
        <p className="text-gray-600">
          We've sent a verification link to <strong>{user?.email}</strong>. Please check your email and click the link
          to verify your account.
        </p>
      </div>

      <div className="space-y-4">
        <Button
          onClick={handleCheckVerification}
          disabled={loading}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full h-12 text-lg font-semibold"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Checking...
            </>
          ) : (
            "I've Verified My Email"
          )}
        </Button>

        <div className="text-center">
          {resendCooldown > 0 ? (
            <p className="text-gray-500">
              Resend verification email in <span className="font-semibold text-pink-600">{resendCooldown}s</span>
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResendVerification}
              disabled={loading}
              className="text-pink-600 hover:underline font-semibold"
            >
              Resend verification email
            </button>
          )}
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-500">Didn't receive the email? Check your spam folder or contact support.</p>
      </div>
    </div>
  )
}
