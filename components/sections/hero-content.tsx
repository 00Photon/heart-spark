import { Badge } from "../ui/badge"
import { EmailSignup } from "../ui/email-signup"
import { TrustIndicators } from "../ui/trust-indicators"
import { Sparkles } from "lucide-react"

export function HeroContent() {
  return (
    <div className="text-center lg:text-left">
      <Badge className="inline-flex items-center bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Sparkles className="h-4 w-4 mr-2" />
        {"#1 Dating App of 2024"}
      </Badge>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
        Find Your
        <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent block">
          Perfect Match
        </span>
      </h1>

      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
        Connect with meaningful relationships through our AI-powered matching system. Join millions who found love on
        HeartSpark.
      </p>

      <EmailSignup />
      <TrustIndicators />
    </div>
  )
}
