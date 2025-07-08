"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./button"
import { Input } from "./input"

export function EmailSignup() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email signup
    console.log("Email signup:", email)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0 mb-8">
      <Input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 h-12 rounded-full border-2 border-pink-200 focus:border-pink-500 px-6"
        required
      />
      <Button
        type="submit"
        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-8 h-12 shadow-lg"
      >
        Start Dating
      </Button>
    </form>
  )
}
