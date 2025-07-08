import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Clock } from "lucide-react"

interface NearbyUserCardProps {
  id: number
  name: string
  age: number
  distance: string
  zodiacSign: string
  compatibility: number
  avatar: string
  lastSeen: string
  interests: string[]
}

export function NearbyUserCard({
  name,
  age,
  distance,
  zodiacSign,
  compatibility,
  avatar,
  lastSeen,
  interests,
}: NearbyUserCardProps) {
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-gray-900 truncate">
              {name}, {age}
            </h3>
            <span className="text-sm font-medium text-purple-600">{compatibility}%</span>
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-1">
            <MapPin className="h-3 w-3 mr-1" />
            <span className="mr-3">{distance}</span>
            <span className="mr-3">{zodiacSign}</span>
          </div>

          <div className="flex items-center text-xs text-gray-500 mb-2">
            <Clock className="h-3 w-3 mr-1" />
            {lastSeen}
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {interests.slice(0, 2).map((interest, index) => (
              <span key={index} className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-medium">
                {interest}
              </span>
            ))}
            {interests.length > 2 && <span className="text-xs text-gray-500">+{interests.length - 2} more</span>}
          </div>

          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  )
}
