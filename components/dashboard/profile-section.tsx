import { Button } from "../ui/button"
import { Edit, Star, MapPin, Calendar } from "lucide-react"

export function ProfileSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Your Profile</h2>
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4 mr-1" />
          Edit
        </Button>
      </div>

      {/* Profile Image */}
      <div className="text-center mb-6">
        <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mb-4"></div>
        <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
        <p className="text-gray-600">28 years old</p>
      </div>

      {/* Profile Stats */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm text-gray-600">Zodiac Sign</span>
          </div>
          <span className="text-sm font-medium">Libra ♎</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm text-gray-600">Location</span>
          </div>
          <span className="text-sm font-medium">Brooklyn, NY</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm text-gray-600">Joined</span>
          </div>
          <span className="text-sm font-medium">2 months ago</span>
        </div>
      </div>

      {/* Profile Completion */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Profile Completion</span>
          <span className="text-sm font-bold text-purple-600">85%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full" style={{ width: "85%" }}></div>
        </div>
        <p className="text-xs text-gray-600 mt-2">Add more photos to increase your match rate!</p>
      </div>
    </div>
  )
}
