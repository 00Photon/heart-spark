"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Checkbox } from "../ui/checkbox"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { signInWithEmail, signInWithGoogle, signInWithFacebook } from "@/lib/auth"
import { useAuth } from "@/contexts/auth-context"

export function LoginForm() {
  const router = useRouter()
  const { refreshProfile } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await signInWithEmail(formData.email, formData.password)
      await refreshProfile()
      router.push("/dashboard")
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setError("")
    setLoading(true)

    try {
      await signInWithGoogle()
      await refreshProfile()
      router.push("/dashboard")
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleFacebookSignIn = async () => {
    setError("")
    setLoading(true)

    try {
      await signInWithFacebook()
      await refreshProfile()
      router.push("/dashboard")
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("") // Clear error when user starts typing
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
      )}

      {/* Email */}
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="mt-1"
          placeholder="your@email.com"
          required
          disabled={loading}
        />
      </div>

      {/* Password */}
      <div>
        <Label htmlFor="password">Password</Label>
        <div className="relative mt-1">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className="pr-10"
            required
            disabled={loading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            disabled={loading}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={formData.rememberMe}
            onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
            disabled={loading}
          />
          <Label htmlFor="remember" className="text-sm text-gray-600">
            Remember me
          </Label>
        </div>
        <Link href="/forgot-password" className="text-sm text-pink-600 hover:underline">
          Forgot password?
        </Link>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full h-12 text-lg font-semibold"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Signing In...
          </>
        ) : (
          "Sign In"
        )}
      </Button>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      {/* Social Login */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          type="button"
          variant="outline"
          className="h-12 bg-transparent"
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className="h-12 bg-transparent"
          onClick={handleFacebookSignIn}
          disabled={loading}
        >
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </Button>
      </div>

      {/* Signup Link */}
      <div className="text-center">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Link href="/signup" className="text-pink-600 hover:underline font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  )
}
