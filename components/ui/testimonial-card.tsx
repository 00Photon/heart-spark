import Image from "next/image"
import { Star, MapPin, Heart } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  zodiacMatch: string
  story: string
  image: string
  rating: number
  timeframe: string
}

export function TestimonialCard({
  name,
  location,
  zodiacMatch,
  story,
  image,
  rating,
  timeframe,
}: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative mb-6">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name} success story`}
          width={400}
          height={300}
          className="rounded-xl w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
          <Heart className="h-4 w-4 text-pink-500" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Story */}
      <p className="text-gray-700 mb-4 leading-relaxed">"{story}"</p>

      {/* Details */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900">{name}</span>
          <span className="text-sm text-gray-500">{timeframe}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>

        <div className="bg-white rounded-lg p-3 text-center">
          <div className="text-sm font-medium text-purple-600">{zodiacMatch}</div>
          <div className="text-xs text-gray-500">Perfect Cosmic Match</div>
        </div>
      </div>
    </div>
  )
}
