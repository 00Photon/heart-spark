"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Edit, Save } from "lucide-react"

export function ProfilePreferences() {
  const [isEditing, setIsEditing] = useState(false)
  const [preferences, setPreferences] = useState({
    ageRange: [22, 35],
    maxDistance: [25],
    showOnline: true,
    showDistance: true,
    zodiacCompatibility: true,
    verifiedOnly: false,
  })

  const handleSave = () => {
    console.log("Saving preferences:", preferences)
    setIsEditing(false)
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Preferences</h2>
        {!isEditing ? (
          <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        ) : (
          <Button size="sm" onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Age Range */}
        <div>
          <Label className="text-sm font-medium text-gray-700">
            Age Range: {preferences.ageRange[0]} - {preferences.ageRange[1]}
          </Label>
          <div className="mt-2">
            <Slider
              value={preferences.ageRange}
              onValueChange={(value) => setPreferences({ ...preferences, ageRange: value })}
              max={50}
              min={18}
              step={1}
              className="w-full"
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Distance */}
        <div>
          <Label className="text-sm font-medium text-gray-700">
            Maximum Distance: {preferences.maxDistance[0]} miles
          </Label>
          <div className="mt-2">
            <Slider
              value={preferences.maxDistance}
              onValueChange={(value) => setPreferences({ ...preferences, maxDistance: value })}
              max={100}
              min={1}
              step={1}
              className="w-full"
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Toggle Preferences */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="showOnline" className="text-sm font-medium text-gray-700">
              Show when I'm online
            </Label>
            <Switch
              id="showOnline"
              checked={preferences.showOnline}
              onCheckedChange={(checked) => setPreferences({ ...preferences, showOnline: checked })}
              disabled={!isEditing}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="showDistance" className="text-sm font-medium text-gray-700">
              Show my distance
            </Label>
            <Switch
              id="showDistance"
              checked={preferences.showDistance}
              onCheckedChange={(checked) => setPreferences({ ...preferences, showDistance: checked })}
              disabled={!isEditing}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="zodiacCompatibility" className="text-sm font-medium text-gray-700">
              Prioritize zodiac compatibility
            </Label>
            <Switch
              id="zodiacCompatibility"
              checked={preferences.zodiacCompatibility}
              onCheckedChange={(checked) => setPreferences({ ...preferences, zodiacCompatibility: checked })}
              disabled={!isEditing}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="verifiedOnly" className="text-sm font-medium text-gray-700">
              Show verified profiles only
            </Label>
            <Switch
              id="verifiedOnly"
              checked={preferences.verifiedOnly}
              onCheckedChange={(checked) => setPreferences({ ...preferences, verifiedOnly: checked })}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Zodiac Info */}
        <div className="bg-purple-50 rounded-xl p-4">
          <h3 className="font-semibold text-purple-900 mb-2">Your Zodiac Sign</h3>
          <div className="flex items-center space-x-3">
            <span className="text-2xl">♎</span>
            <div>
              <p className="font-medium text-purple-800">Libra</p>
              <p className="text-sm text-purple-600">September 23 - October 22</p>
            </div>
          </div>
          <p className="text-sm text-purple-700 mt-2">Most compatible with: Gemini, Leo, Sagittarius, Aquarius</p>
        </div>
      </div>
    </div>
  )
}
