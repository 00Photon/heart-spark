"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Filter } from "lucide-react"

export function DiscoverFilters() {
  const [filters, setFilters] = useState({
    ageRange: [22, 35],
    distance: [25],
    zodiacSigns: [] as string[],
    interests: [] as string[],
  })

  const zodiacSigns = [
    "Aries ♈",
    "Taurus ♉",
    "Gemini ♊",
    "Cancer ♋",
    "Leo ♌",
    "Virgo ♍",
    "Libra ♎",
    "Scorpio ♏",
    "Sagittarius ♐",
    "Capricorn ♑",
    "Aquarius ♒",
    "Pisces ♓",
  ]

  const interests = [
    "Travel",
    "Photography",
    "Music",
    "Art",
    "Sports",
    "Cooking",
    "Reading",
    "Movies",
    "Hiking",
    "Yoga",
    "Dancing",
    "Gaming",
  ]

  const handleZodiacChange = (sign: string, checked: boolean) => {
    if (checked) {
      setFilters({ ...filters, zodiacSigns: [...filters.zodiacSigns, sign] })
    } else {
      setFilters({ ...filters, zodiacSigns: filters.zodiacSigns.filter((s) => s !== sign) })
    }
  }

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFilters({ ...filters, interests: [...filters.interests, interest] })
    } else {
      setFilters({ ...filters, interests: filters.interests.filter((i) => i !== interest) })
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Filter className="h-5 w-5 mr-2 text-gray-600" />
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
      </div>

      <div className="space-y-6">
        {/* Age Range */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">
            Age Range: {filters.ageRange[0]} - {filters.ageRange[1]}
          </Label>
          <Slider
            value={filters.ageRange}
            onValueChange={(value) => setFilters({ ...filters, ageRange: value })}
            max={50}
            min={18}
            step={1}
            className="w-full"
          />
        </div>

        {/* Distance */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-2 block">Distance: {filters.distance[0]} miles</Label>
          <Slider
            value={filters.distance}
            onValueChange={(value) => setFilters({ ...filters, distance: value })}
            max={100}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        {/* Zodiac Signs */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">Zodiac Signs</Label>
          <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
            {zodiacSigns.map((sign) => (
              <div key={sign} className="flex items-center space-x-2">
                <Checkbox
                  id={sign}
                  checked={filters.zodiacSigns.includes(sign)}
                  onCheckedChange={(checked) => handleZodiacChange(sign, checked as boolean)}
                />
                <Label htmlFor={sign} className="text-sm text-gray-600">
                  {sign}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div>
          <Label className="text-sm font-medium text-gray-700 mb-3 block">Interests</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {interests.map((interest) => (
              <div key={interest} className="flex items-center space-x-2">
                <Checkbox
                  id={interest}
                  checked={filters.interests.includes(interest)}
                  onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                />
                <Label htmlFor={interest} className="text-sm text-gray-600">
                  {interest}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Filters */}
        <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
          Apply Filters
        </Button>

        {/* Clear Filters */}
        <Button variant="outline" className="w-full bg-transparent">
          Clear All
        </Button>
      </div>
    </div>
  )
}
