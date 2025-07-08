"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Locate } from "lucide-react"

const nearbyUsers = [
  { id: 1, name: "Alex", lat: 40.7128, lng: -74.006, distance: "0.5 mi" },
  { id: 2, name: "Jordan", lat: 40.7589, lng: -73.9851, distance: "1.2 mi" },
  { id: 3, name: "Taylor", lat: 40.7505, lng: -73.9934, distance: "2.1 mi" },
]

export function NearbyMap() {
  const [selectedUser, setSelectedUser] = useState<number | null>(null)

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="font-semibold text-gray-900">Map View</h2>
        <Button variant="outline" size="sm">
          <Locate className="h-4 w-4 mr-2" />
          My Location
        </Button>
      </div>

      {/* Map Placeholder */}
      <div className="h-96 bg-gradient-to-br from-blue-100 to-green-100 relative flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Interactive Map</p>
          <p className="text-sm text-gray-500">Map integration would go here</p>
        </div>

        {/* User Markers */}
        {nearbyUsers.map((user) => (
          <div
            key={user.id}
            className={`absolute w-8 h-8 rounded-full border-2 border-white shadow-lg cursor-pointer transition-transform hover:scale-110 ${
              selectedUser === user.id ? "bg-pink-500 scale-110" : "bg-purple-500"
            }`}
            style={{
              left: `${20 + user.id * 15}%`,
              top: `${30 + user.id * 10}%`,
            }}
            onClick={() => setSelectedUser(user.id)}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
              {user.name[0]}
            </div>
          </div>
        ))}
      </div>

      {/* Selected User Info */}
      {selectedUser && (
        <div className="p-4 bg-pink-50 border-t border-pink-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{nearbyUsers.find((u) => u.id === selectedUser)?.name}</h3>
              <p className="text-sm text-gray-600">{nearbyUsers.find((u) => u.id === selectedUser)?.distance} away</p>
            </div>
            <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600">
              View Profile
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
