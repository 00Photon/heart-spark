"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { getUserProfile, updateUserProfile, UserProfile } from "@/lib/auth";
import { ZODIAC_SIGNS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Edit, Save, X, Plus, Trash2 } from "lucide-react";

export function ProfileInfo() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<UserProfile>>({});
  const [newInterest, setNewInterest] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Calculate age from birthDate
  const calculateAge = (birthDate: string): number => {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  // Fetch user profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (!user) {
        setError("No authenticated user");
        setLoading(false);
        return;
      }

      try {
        const profile = await getUserProfile(user.uid);
        if (profile) {
          setUserProfile(profile);
          setFormData(profile); // Initialize form with current profile data
        } else {
          setError("Profile not found");
        }
      } catch (err) {
        setError("Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle zodiac selection
  const handleZodiacChange = (value: string) => {
    setFormData((prev) => ({ ...prev, zodiac: value }));
  };

  // Handle interest addition
  const handleAddInterest = () => {
    if (newInterest.trim() && !formData.interests?.includes(newInterest.trim())) {
      setFormData((prev) => ({
        ...prev,
        interests: [...(prev.interests || []), newInterest.trim()],
      }));
      setNewInterest("");
    }
  };

  // Handle interest removal
  const handleRemoveInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: (prev.interests || []).filter((i) => i !== interest),
    }));
  };

  // Handle form submission
  const handleSave = async () => {
    const user = auth.currentUser;
    if (!user) {
      setError("No authenticated user");
      return;
    }

    try {
      await updateUserProfile(user.uid, formData);
      const updatedProfile = await getUserProfile(user.uid);
      setUserProfile(updatedProfile);
      setIsEditing(false);
      setError(null);
    } catch (err) {
      setError("Failed to update profile");
    }
  };

  // Handle cancel
  const handleCancel = () => {
    setIsEditing(false);
    setFormData(userProfile || {}); // Reset to original profile data
    setNewInterest("");
  };

  // Get zodiac display
  const getZodiacDisplay = (zodiacName: string | undefined) => {
    if (!zodiacName) return "Not set";
    const zodiac = ZODIAC_SIGNS.find((z) => z.name === zodiacName);
    return zodiac ? `${zodiac.name} ${zodiac.symbol}` : "Not set";
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !userProfile) {
    return <div>{error || "Profile not found"}</div>;
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
                name="firstName"
                value={formData.firstName || ""}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            ) : (
              <p className="mt-1 text-gray-900">{userProfile.firstName}</p>
            )}
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            {isEditing ? (
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName || ""}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            ) : (
              <p className="mt-1 text-gray-900">{userProfile.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="birthDate">Birth Date</Label>
            {isEditing ? (
              <Input
                id="birthDate"
                name="birthDate"
                type="date"
                value={formData.birthDate || ""}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            ) : (
              <p className="mt-1 text-gray-900">
                {userProfile.birthDate ? `${calculateAge(userProfile.birthDate)} years old` : "Not set"}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            {isEditing ? (
              <Input
                id="location"
                name="location"
                value={formData.location || ""}
                onChange={handleInputChange}
                className="mt-1"
                required
              />
            ) : (
              <p className="mt-1 text-gray-900">{userProfile.location || "Not set"}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="zodiac">Zodiac Sign</Label>
            {isEditing ? (
              <Select onValueChange={handleZodiacChange} defaultValue={formData.zodiac || ""}>
                <SelectTrigger id="zodiac" className="mt-1">
                  <SelectValue placeholder="Select Zodiac Sign" />
                </SelectTrigger>
                <SelectContent>
                  {ZODIAC_SIGNS.map((zodiac) => (
                    <SelectItem key={zodiac.name} value={zodiac.name}>
                      {zodiac.name} {zodiac.symbol}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <p className="mt-1 text-gray-900">{getZodiacDisplay(userProfile.zodiac)}</p>
            )}
          </div>
          <div>
            <Label htmlFor="occupation">Occupation</Label>
            {isEditing ? (
              <Input
                id="occupation"
                name="occupation"
                value={formData.occupation || ""}
                onChange={handleInputChange}
                className="mt-1"
              />
            ) : (
              <p className="mt-1 text-gray-900">{userProfile.occupation || "Not set"}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="education">Education</Label>
            {isEditing ? (
              <Input
                id="education"
                name="education"
                value={formData.education || ""}
                onChange={handleInputChange}
                className="mt-1"
              />
            ) : (
              <p className="mt-1 text-gray-900">{userProfile.education || "Not set"}</p>
            )}
          </div>
        </div>

        {/* Bio */}
        <div>
          <Label htmlFor="bio">About Me</Label>
          {isEditing ? (
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio || ""}
              onChange={handleInputChange}
              className="mt-1"
              rows={4}
              placeholder="Tell others about yourself..."
            />
          ) : (
            <p className="mt-1 text-gray-900 leading-relaxed">{userProfile.bio || "Not set"}</p>
          )}
        </div>

        {/* Interests */}
        <div>
          <Label>Interests</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(formData.interests || userProfile.interests || []).map((interest, index) => (
              <div key={index} className="flex items-center bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                {interest}
                {isEditing && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-2 p-0 h-auto"
                    onClick={() => handleRemoveInterest(interest)}
                  >
                    <Trash2 className="h-4 w-4 text-pink-600" />
                  </Button>
                )}
              </div>
            ))}
            {isEditing && (
              <div className="flex items-center gap-2">
                <Input
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  placeholder="Add new interest"
                  className="mt-1 w-40"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full bg-transparent"
                  onClick={handleAddInterest}
                  disabled={!newInterest.trim()}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}