import Image from "next/image"
import { Button } from "./button"
import { Heart, X, MapPin } from "lucide-react"

interface MatchCardProps {
  id: number
  name: string
  age: number
  distance: string
  zodiacSign: string
  compatibility: number
  image: string
  interests: string[]
}

export function MatchCard({ name, age, distance, zodiacSign, compatibility, image, interests }: MatchCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name}'s profile`}
          width={300}
          height={300}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
          <span className="text-sm font-semibold text-purple-600">{compatibility}% match</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">
            {name}, {age}
          </h3>
          <span className="text-lg">{zodiacSign}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{distance}</span>
        </div>

        {/* Interests */}
        <div className="flex flex-wrap gap-2 mb-4">
          {interests.slice(0, 3).map((interest, index) => (
            <span key={index} className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-medium">
              {interest}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex-1 border-gray-300 hover:bg-gray-50 bg-transparent">
            <X className="h-4 w-4 mr-1" />
            Pass
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
          >
            <Heart className="h-4 w-4 mr-1" />
            Like
          </Button>
        </div>
      </div>
    </div>
  )
}
