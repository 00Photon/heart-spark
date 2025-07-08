"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Save, X, Plus } from "lucide-react"

export function ProfileInfo() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "Sarah",
    lastName: "Johnson",
    age: "28",
    location: "Brooklyn, NY",
    occupation: "Graphic Designer",
    education: "Bachelor's in Design",
    bio: "Love exploring new coffee shops, hiking trails, and art galleries. Looking for someone who shares my passion for adventure and creativity. Libra seeking balance in all things! ♎",
    interests: ["Photography", "Hiking", "Coffee", "Art", "Travel", "Yoga"],
  })

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving profile:", formData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset form data if needed
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
        {!isEditing ? (
          <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
        ) : (
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={handleCancel}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button size="sm" onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            {isEditing ? (
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="mt-1"
              />
            ) : (
              <p className="mt-1 text-gray-900">{formData.firstName}</p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            {isEditing ? (
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="mt-1"
              />
            ) : (
              <p className="mt-1 text-gray-900">{formData.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="age">Age</Label>
            {isEditing ? (
              <Input
                id="age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="mt-1"
              />
            ) : (
              <p className="mt-1 text-gray-900">{formData.age}</p>
            )}
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            {isEditing ? (
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="mt-1"
              />
            ) : (
              <p className="mt-1 text-gray-900">{formData.location}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="occupation">Occupation</Label>
            {isEditing ? (
              <Input
                id="occupation"
                value={formData.occupation}
                onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                className="mt-1"
              />
            ) : (
              <p className="mt-1 text-gray-900">{formData.occupation}</p>
            )}
          </div>
          <div>
            <Label htmlFor="education">Education</Label>
            {isEditing ? (
              <Input
                id="education"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                className="mt-1"
              />
            ) : (
              <p className="mt-1 text-gray-900">{formData.education}</p>
            )}
          </div>
        </div>

        {/* Bio */}
        <div>
          <Label htmlFor="bio">About Me</Label>
          {isEditing ? (
            <Textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="mt-1"
              rows={4}
              placeholder="Tell others about yourself..."
            />
          ) : (
            <p className="mt-1 text-gray-900 leading-relaxed">{formData.bio}</p>
          )}
        </div>

        {/* Interests */}
        <div>
          <Label>Interests</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.interests.map((interest, index) => (
              <span key={index} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                {interest}
              </span>
            ))}
            {isEditing && (
              <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                <Plus className="h-4 w-4 mr-1" />
                Add Interest
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
