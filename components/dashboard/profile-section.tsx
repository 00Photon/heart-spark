"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { getUserProfile, updateUserProfile, UserProfile } from "@/lib/auth";
import { ZODIAC_SIGNS } from "@/lib/constants"; // Adjust path as needed
import { Button } from "../ui/button";
import { Edit, Star, MapPin, Calendar } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"; // Assuming you have a Select component

export function ProfileSection() {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<UserProfile>>({});
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

  // Calculate time since joined
  const calculateTimeSinceJoined = (createdAt: Date | string): string => {
    const joinedDate = new Date(createdAt);
    const now = new Date();
    const diffInMonths = (now.getFullYear() - joinedDate.getFullYear()) * 12 + now.getMonth() - joinedDate.getMonth();
    if (diffInMonths < 1) return "Less than a month ago";
    return `${diffInMonths} month${diffInMonths === 1 ? "" : "s"} ago`;
  };

  // Calculate profile completion percentage
  const calculateProfileCompletion = (profile: UserProfile): number => {
    const fields = [
      profile.firstName,
      profile.lastName,
      profile.birthDate,
      profile.location,
      profile.zodiac,
    ];
    const filledFields = fields.filter((field) => field && field.trim() !== "").length;
    return Math.round((filledFields / fields.length) * 100);
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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle zodiac selection
  const handleZodiacChange = (value: string) => {
    setFormData((prev) => ({ ...prev, zodiac: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

  // Find zodiac symbol for display
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
        <h2 className="text-xl font-bold text-gray-900">Your Profile</h2>
        <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
          <Edit className="h-4 w-4 mr-1" />
          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="birthDate">Birth Date</Label>
            <Input
              id="birthDate"
              name="birthDate"
              type="date"
              value={formData.birthDate || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location || ""}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="zodiac">Zodiac Sign</Label>
            <Select onValueChange={handleZodiacChange} defaultValue={formData.zodiac || ""}>
              <SelectTrigger id="zodiac">
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
          </div>
          <Button type="submit">Save Changes</Button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      ) : (
        <>
          {/* Profile Image */}
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-900">
              {userProfile.firstName} {userProfile.lastName}
            </h3>
            <p className="text-gray-600">{calculateAge(userProfile.birthDate!)} years old</p>
          </div>

          {/* Profile Stats */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-purple-600 mr-2" />
                <span className="text-sm text-gray-600">Zodiac Sign</span>
              </div>
              <span className="text-sm font-medium">{getZodiacDisplay(userProfile.zodiac)}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">Location</span>
              </div>
              <span className="text-sm font-medium">{userProfile.location || "Not set"}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">Joined</span>
              </div>
              <span className="text-sm font-medium">{calculateTimeSinceJoined(userProfile.createdAt)}</span>
            </div>
          </div>

          {/* Profile Completion */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Profile Completion</span>
              <span className="text-sm font-bold text-purple-600">{calculateProfileCompletion(userProfile)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full"
                style={{ width: `${calculateProfileCompletion(userProfile)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 mt-2">Add more photos to increase your match rate!</p>
          </div>
        </>
      )}
    </div>
  );
}