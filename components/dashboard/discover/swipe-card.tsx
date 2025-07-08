"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, X, MapPin, Briefcase, GraduationCap } from "lucide-react"

const profiles = [
  {
    id: 1,
    name: "Emma",
    age: 26,
    distance: "2.5 miles away",
    zodiacSign: "Cancer ♋",
    compatibility: 94,
    occupation: "Marketing Manager",
    education: "NYU",
    bio: "Love trying new restaurants and weekend getaways. Looking for someone who appreciates good food and great conversations!",
    interests: ["Foodie", "Travel", "Photography", "Yoga"],
    images: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
  },
  {
    id: 2,
    name: "Michael",
    age: 29,
    distance: "1.8 miles away",
    zodiacSign: "Sagittarius ♐",
    compatibility: 89,
    occupation: "Software Engineer",
    education: "Columbia University",
    bio: "Adventure seeker and tech enthusiast. When I'm not coding, you'll find me rock climbing or planning my next travel destination.",
    interests: ["Rock Climbing", "Tech", "Travel", "Music"],
    images: ["/placeholder.svg?height=600&width=400", "/placeholder.svg?height=600&width=400"],
  },
]

export function SwipeCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentProfile = profiles[currentIndex]

  const handleLike = () => {
    console.log("Liked:", currentProfile.name)
    nextProfile()
  }

  const handlePass = () => {
    console.log("Passed:", currentProfile.name)
    nextProfile()
  }

  const nextProfile = () => {
    setCurrentImageIndex(0)
    setCurrentIndex((prev) => (prev + 1) % profiles.length)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentProfile.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentProfile.images.length) % currentProfile.images.length)
  }

  if (!currentProfile) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No more profiles!</h3>
        <p className="text-gray-600">Check back later for new matches.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-md mx-auto">
      {/* Image Section */}
      <div className="relative h-96">
        <Image
          src={currentProfile.images[currentImageIndex] || "/placeholder.svg"}
          alt={`${currentProfile.name}'s photo`}
          fill
          className="object-cover cursor-pointer"
          onClick={nextImage}
        />

        {/* Image Navigation */}
        <div className="absolute top-4 left-4 right-4 flex space-x-1">
          {currentProfile.images.map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-1 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>

        {/* Compatibility Badge */}
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
          <span className="text-sm font-semibold text-purple-600">{currentProfile.compatibility}% match</span>
        </div>

        {/* Navigation Buttons */}
        <button onClick={prevImage} className="absolute left-0 top-0 w-1/2 h-full" aria-label="Previous image" />
        <button onClick={nextImage} className="absolute right-0 top-0 w-1/2 h-full" aria-label="Next image" />
      </div>

      {/* Profile Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-bold text-gray-900">
            {currentProfile.name}, {currentProfile.age}
          </h2>
          <span className="text-xl">{currentProfile.zodiacSign}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{currentProfile.distance}</span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Briefcase className="h-4 w-4 mr-2" />
            {currentProfile.occupation}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <GraduationCap className="h-4 w-4 mr-2" />
            {currentProfile.education}
          </div>
        </div>

        <p className="text-gray-700 mb-4 leading-relaxed">{currentProfile.bio}</p>

        {/* Interests */}
        <div className="flex flex-wrap gap-2 mb-6">
          {currentProfile.interests.map((interest, index) => (
            <span key={index} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
              {interest}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button
            variant="outline"
            size="lg"
            className="flex-1 border-gray-300 hover:bg-gray-50 bg-transparent h-14"
            onClick={handlePass}
          >
            <X className="h-6 w-6 mr-2" />
            Pass
          </Button>
          <Button
            size="lg"
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 h-14"
            onClick={handleLike}
          >
            <Heart className="h-6 w-6 mr-2" />
            Like
          </Button>
        </div>
      </div>
    </div>
  )
}
