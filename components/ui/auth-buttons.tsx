import Link from "next/link"
import { Button } from "./button"

export function AuthButtons() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link href="/login">
        <Button variant="ghost" className="text-gray-700 hover:text-pink-600">
          Sign In
        </Button>
      </Link>
      <Link href="/signup">
        <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full px-6 shadow-lg">
          Get Started
        </Button>
      </Link>
    </div>
  )
}
