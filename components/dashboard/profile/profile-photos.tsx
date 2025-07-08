"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus, X, Star } from "lucide-react"

const photos = [
  { id: 1, url: "/placeholder.svg?height=300&width=300", isMain: true },
  { id: 2, url: "/placeholder.svg?height=300&width=300", isMain: false },
  { id: 3, url: "/placeholder.svg?height=300&width=300", isMain: false },
]

export function ProfilePhotos() {
  const [photoList, setPhotoList] = useState(photos)

  const handleSetMain = (id: number) => {
    setPhotoList(photoList.map((photo) => ({ ...photo, isMain: photo.id === id })))
  }

  const handleRemove = (id: number) => {
    setPhotoList(photoList.filter((photo) => photo.id !== id))
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Photos</h2>
        <Button variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Photo
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photoList.map((photo) => (
          <div key={photo.id} className="relative group">
            <Image
              src={photo.url || "/placeholder.svg"}
              alt="Profile photo"
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-xl"
            />

            {/* Main photo indicator */}
            {photo.isMain && (
              <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <Star className="h-3 w-3 mr-1" />
                Main
              </div>
            )}

            {/* Hover actions */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center space-x-2">
              {!photo.isMain && (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleSetMain(photo.id)}
                  className="bg-white text-gray-900 hover:bg-gray-100"
                >
                  Set as Main
                </Button>
              )}
              <Button size="sm" variant="destructive" onClick={() => handleRemove(photo.id)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {/* Add photo placeholder */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl h-48 flex items-center justify-center hover:border-pink-400 transition-colors cursor-pointer">
          <div className="text-center">
            <Plus className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Add Photo</p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-pink-50 rounded-xl">
        <p className="text-sm text-pink-800">
          <strong>Tip:</strong> Profiles with 3+ photos get 40% more matches! Add photos that show your personality and
          interests.
        </p>
      </div>
    </div>
  )
}
