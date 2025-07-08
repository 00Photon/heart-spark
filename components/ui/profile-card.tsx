import { Heart } from "lucide-react"

export function ProfileCard() {
  return (
    <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-pink-100">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
        <div>
          <div className="text-sm font-semibold text-gray-900">Sarah, 28</div>
          <div className="text-xs text-gray-500">2 miles away</div>
        </div>
        <Heart className="h-5 w-5 text-pink-500 ml-2" />
      </div>
    </div>
  )
}
