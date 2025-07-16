// In @/lib/auth.ts
import { db, auth } from "@/lib/firebase";
import { collection, onSnapshot, updateDoc, doc, query, orderBy } from "firebase/firestore";

interface Activity {
  id: string; // Firestore document ID
  type: "like" | "message" | "view";
  message: string;
  time: string; // ISO timestamp (e.g., "2025-07-12T06:59:00Z")
  read: boolean;
}

// Fetch user activities with real-time updates
export function subscribeToUserActivities(
  uid: string,
  callback: (activities: Activity[]) => void,
  onError: (error: string) => void
) {
  try {
    const activitiesRef = collection(db, `users/${uid}/activities`);
    const q = query(activitiesRef, orderBy("time", "desc")); // Order by time descending
    return onSnapshot(
      q,
      (snapshot) => {
        const activities = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Activity[];
        callback(activities);
      },
      (error) => {
        console.error("Subscribe to activities error:", error);
        onError("Failed to fetch activities");
      }
    );
  } catch (error) {
    console.error("Subscribe to activities error:", error);
    onError("Failed to fetch activities");
    return () => {}; // Return empty unsubscribe function
  }
}

// Mark an activity as read
export async function markActivityAsRead(uid: string, activityId: string): Promise<void> {
  try {
    const activityRef = doc(db, `users/${uid}/activities`, activityId);
    await updateDoc(activityRef, { read: true });
  } catch (error) {
    console.error("Mark activity as read error:", error);
    throw new Error("Failed to mark activity as read");
  }
}