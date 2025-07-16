"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { auth } from "@/lib/firebase";
import { getUserPhotos, uploadUserPhoto, setMainPhoto, deleteUserPhoto } from "@/lib/profile";
import { Button } from "@/components/ui/button";
import { Plus, X, Star } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Photo {
  id: string;
  url: string;
  isMain: boolean;
}

export function ProfilePhotos() {
  const [photoList, setPhotoList] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch photos on mount
  useEffect(() => {
    const fetchPhotos = async () => {
      const user = auth.currentUser;
      if (!user) {
        setError("No authenticated user");
        setLoading(false);
        return;
      }

      try {
        const photos = await getUserPhotos(user.uid);
        setPhotoList(photos);
      } catch (err) {
        setError("Failed to fetch photos");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  // Handle photo upload
  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const user = auth.currentUser;
    if (!user || !event.target.files || event.target.files.length === 0) {
      setError("No file selected or user not authenticated");
      return;
    }

    const file = event.target.files[0];
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }

    try {
      setLoading(true);
      const newPhoto = await uploadUserPhoto(user.uid, file);
      setPhotoList((prev) => [...prev.filter((p) => !p.isMain), newPhoto]);
      setError(null);
    } catch (err) {
      setError("Failed to upload photo");
    } finally {
      setLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset file input
      }
    }
  };

  // Handle setting main photo
  const handleSetMain = async (id: string) => {
    const user = auth.currentUser;
    if (!user) {
      setError("No authenticated user");
      return;
    }

    try {
      setLoading(true);
      await setMainPhoto(user.uid, id);
      setPhotoList((prev) =>
        prev.map((photo) => ({ ...photo, isMain: photo.id === id }))
      );
      setError(null);
    } catch (err) {
      setError("Failed to set main photo");
    } finally {
      setLoading(false);
    }
  };

  // Handle photo removal
  const handleRemove = async (id: string, url: string) => {
    const user = auth.currentUser;
    if (!user) {
      setError("No authenticated user");
      return;
    }

    try {
      setLoading(true);
      await deleteUserPhoto(user.uid, id, url);
      setPhotoList((prev) => prev.filter((photo) => photo.id !== id));
      setError(null);
    } catch (err) {
      setError("Failed to delete photo");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Photos</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
          disabled={loading}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Photo
        </Button>
        <Input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          ref={fileInputRef}
          className="hidden"
        />
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
                  disabled={loading}
                >
                  Set as Main
                </Button>
              )}
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleRemove(photo.id, photo.url)}
                disabled={loading}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {/* Add photo placeholder */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-xl h-48 flex items-center justify-center hover:border-pink-400 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
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
  );
}