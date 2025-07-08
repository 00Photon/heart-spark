import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "light" | "dark"
  className?: string
}

export function Logo({ variant = "light", className }: LogoProps) {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-xl">
        <Heart className="h-6 w-6 text-white" />
      </div>
      <span
        className={cn(
          "text-2xl font-bold",
          variant === "light"
            ? "bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
            : "text-white",
        )}
      >
        HeartSpark
      </span>
    </div>
  )
}
