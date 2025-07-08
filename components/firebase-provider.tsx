"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { auth } from "@/lib/firebase"
import { Loader2 } from "lucide-react"

interface FirebaseProviderProps {
  children: React.ReactNode
}

export function FirebaseProvider({ children }: FirebaseProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Wait for Firebase to initialize
    const checkFirebaseInit = () => {
      if (auth.app) {
        setIsInitialized(true)
      } else {
        // Retry after a short delay
        setTimeout(checkFirebaseInit, 100)
      }
    }

    checkFirebaseInit()
  }, [])

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-pink-600 mx-auto mb-4" />
          <p className="text-gray-600">Initializing...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
