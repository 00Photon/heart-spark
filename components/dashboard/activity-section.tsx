"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { subscribeToUserActivities, markActivityAsRead } from "@/lib/activities";
import { MessageCircle, Heart, Eye } from "lucide-react";

// Map activity types to icons and colors
const activityConfig = {
  like: { icon: Heart, color: "text-pink-500" },
  message: { icon: MessageCircle, color: "text-blue-500" },
  view: { icon: Eye, color: "text-green-500" },
};

interface Activity {
  id: string;
  type: "like" | "message" | "view";
  message: string;
  time: string;
  read: boolean;
}

export function ActivitySection() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Calculate relative time (e.g., "2 minutes ago")
  const getRelativeTime = (time: string): string => {
    const date = new Date(time);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
  };

  // Subscribe to activities on mount
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      setError("No authenticated user");
      setLoading(false);
      return;
    }

    const unsubscribe = subscribeToUserActivities(
      user.uid,
      (fetchedActivities) => {
        setActivities(fetchedActivities);
        setLoading(false);
        setError(null);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Handle marking activity as read
  const handleMarkAsRead = async (activityId: string) => {
    const user = auth.currentUser;
    if (!user) {
      setError("No authenticated user");
      return;
    }

    try {
      await markActivityAsRead(user.uid, activityId);
      setActivities((prev) =>
        prev.map((activity) =>
          activity.id === activityId ? { ...activity, read: true } : activity
        )
      );
    } catch (err) {
      setError("Failed to mark activity as read");
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
      <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>

      <div className="space-y-4">
        {activities.length === 0 ? (
          <p className="text-sm text-gray-500">No recent activity</p>
        ) : (
          activities.map((activity) => {
            const { icon: Icon, color } = activityConfig[activity.type] || {
              icon: Eye,
              color: "text-gray-500",
            };

            return (
              <div
                key={activity.id}
                className={`flex items-center space-x-4 p-3 rounded-xl transition-colors cursor-pointer ${
                  activity.read ? "bg-gray-50" : "bg-blue-50 hover:bg-blue-100"
                }`}
                onClick={() => !activity.read && handleMarkAsRead(activity.id)}
              >
                <div className={`p-2 rounded-full bg-gray-100 ${color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${activity.read ? "text-gray-600" : "text-gray-900"}`}>
                    {activity.message}
                  </p>
                  <p className="text-xs text-gray-500">{getRelativeTime(activity.time)}</p>
                </div>
                {!activity.read && (
                  <span className="text-xs text-blue-600 font-medium">New</span>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}