import { auth, db } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateProfile,
  sendEmailVerification,
  signOut,
  sendPasswordResetEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  User,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
// In @/lib/auth.ts
import { ZODIAC_SIGNS } from "@/lib/constants"; 

import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
// Interface for signup data
interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: string;
  location: string;
}
// Interface for photo metadata
// Interface for user profile
export interface UserProfile {
 uid: string;
  email: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  location?: string;
  zodiac?: string; // Stores zodiac name (e.g., "Libra")
  occupation?: string;
  education?: string;
  bio?: string;
  interests?: string[];
  profileComplete: boolean;
  createdAt: Date | string;
  lastActive: Date | string;
}


function calculateZodiacSign(birthDate: string): string {
  const date = new Date(birthDate);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid birth date");
  }
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();

  for (const zodiac of ZODIAC_SIGNS) {
    const [startDate, endDate] = zodiac.dates.split(" - ");
    const [startMonthStr, startDayStr] = startDate.split(" ");
    const [endMonthStr, endDayStr] = endDate.split(" ");
    
    const startMonth = getMonthNumber(startMonthStr);
    const endMonth = getMonthNumber(endMonthStr);
    const startDay = parseInt(startDayStr);
    const endDay = parseInt(endDayStr);

    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay) ||
      (startMonth > endMonth && (month > startMonth || month < endMonth)) ||
      (startMonth > endMonth && month === startMonth && day >= startDay) ||
      (startMonth > endMonth && month === endMonth && day <= endDay)
    ) {
      return zodiac.name;
    }
  }

  throw new Error("Unable to determine zodiac sign");
}

// Helper function to convert month name to number
function getMonthNumber(monthStr: string): number {
  const months: { [key: string]: number } = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
    Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
  };
  return months[monthStr] || 1;
}

// Sign up with email and password
export async function signUpWithEmail(userData: SignUpData): Promise<User> {
  try {
    console.log("Starting email signup for:", userData.email);
    const { email, password, firstName, lastName, birthDate, location } = userData;

    // Validate inputs
    if (!email || !firstName || !lastName || !birthDate || !location) {
      throw new Error("All fields are required");
    }
    if (isNaN(new Date(birthDate).getTime())) {
      throw new Error("Invalid birth date");
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User created, UID:", user.uid);

    console.log("Updating Firebase profile...");
    await updateProfile(user, { displayName: `${firstName} ${lastName}` });

    console.log("Calculating zodiac sign...");
    const zodiac = calculateZodiacSign(birthDate);

    console.log("Writing user profile to Firestore...");
    const userProfile: UserProfile = {
      uid: user.uid,
      email: user.email!,
      firstName,
      lastName,
      birthDate,
      location,
      zodiac, // Updated field
      profileComplete: false,
      createdAt: new Date(),
      lastActive: new Date(),
    };
    await setDoc(doc(db, "users", user.uid), userProfile);
    console.log("User profile written");

    console.log("Sending email verification...");
    await sendEmailVerification(user);
    console.log("Email verification sent");

    return user;
  } catch (error: any) {
    console.error("SignUpWithEmail error:", error.code, error.message);
    throw new Error(getAuthErrorMessage(error.code));
  }
}

// Sign in with email and password
export async function signInWithEmail(email: string, password: string): Promise<User> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    // Update last active timestamp
    await updateDoc(doc(db, "users", userCredential.user.uid), {
      lastActive: new Date(),
    });

    return userCredential.user;
  } catch (error: any) {
    console.error("Sign in error:", error);
    throw new Error(getAuthErrorMessage(error.code));
  }
}

// Sign in with Google
export async function signInWithGoogle(): Promise<User> {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    // Check if user profile exists
    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (!userDoc.exists()) {
      // Create new user profile
      const userProfile: Partial<UserProfile> = {
        uid: user.uid,
        email: user.email!,
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: user.displayName?.split(" ").slice(1).join(" ") || "",
        profileComplete: false,
        createdAt: new Date(),
        lastActive: new Date(),
      };
      await setDoc(doc(db, "users", user.uid), userProfile);
    } else {
      // Update last active
      await updateDoc(doc(db, "users", user.uid), {
        lastActive: new Date(),
      });
    }

    return user;
  } catch (error: any) {
    console.error("Google sign in error:", error);
    throw new Error(getAuthErrorMessage(error.code));
  }
}

export async function signInWithFacebook(): Promise<User> {
  try {
    const provider = new FacebookAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    // Check if user profile exists
    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (!userDoc.exists()) {
      // Create new user profile
      const userProfile: Partial<UserProfile> = {
        uid: user.uid,
        email: user.email!,
        firstName: user.displayName?.split(" ")[0] || "",
        lastName: user.displayName?.split(" ").slice(1).join(" ") || "",
        profileComplete: false,
        createdAt: new Date(),
        lastActive: new Date(),
      };
      await setDoc(doc(db, "users", user.uid), userProfile);
    } else {
      // Update last active
      await updateDoc(doc(db, "users", user.uid), {
        lastActive: new Date(),
      });
    }

    return user;
  } catch (error: any) {
    console.error("Facebook sign in error:", error);
    throw new Error(getAuthErrorMessage(error.code));
  }
}
// Sign out
export async function signOutUser(): Promise<void> {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error("Sign out error:", error);
    throw new Error("Failed to sign out");
  }
}

// Send password reset email
export async function resetPassword(email: string): Promise<void> {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error: any) {
    console.error("Password reset error:", error);
    throw new Error(getAuthErrorMessage(error.code));
  }
}

// Update user password
export async function updateUserPassword(currentPassword: string, newPassword: string): Promise<void> {
  try {
    const user = auth.currentUser;
    if (!user || !user.email) {
      throw new Error("No authenticated user");
    }

    // Re-authenticate user
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    await reauthenticateWithCredential(user, credential);

    // Update password
    await updatePassword(user, newPassword);
  } catch (error: any) {
    console.error("Password update error:", error);
    throw new Error(getAuthErrorMessage(error.code));
  }
}

// Get user profile
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      return userDoc.data() as UserProfile;
    }
    return null;
  } catch (error) {
    console.error("Get user profile error:", error);
    return null;
  }
}

export async function updateUserProfile(uid: string, updates: Partial<UserProfile>): Promise<void> {
  try {
    // If birthDate is updated, recalculate zodiac
    if (updates.birthDate) {
      updates.zodiac = calculateZodiacSign(updates.birthDate);
    }
    await updateDoc(doc(db, "users", uid), {
      ...updates,
      lastActive: new Date(),
    });
  } catch (error) {
    console.error("Update user profile error:", error);
    throw new Error("Failed to update profile");
  }
}

// Helper function to get user-friendly error messages
function getAuthErrorMessage(errorCode: string): string {
  switch (errorCode) {
    case "auth/user-not-found":
      return "No account found with this email address.";
    case "auth/wrong-password":
      return "Incorrect password.";
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/weak-password":
      return "Password should be at least 8 characters.";
    case "auth/invalid-email":
      return "Invalid email address.";
    case "auth/too-many-requests":
      return "Too many failed attempts. Please try again later.";
    case "auth/network-request-failed":
      return "Network error. Please check your connection.";
    case "auth/popup-closed-by-user":
      return "Sign-in popup was closed.";
    case "auth/cancelled-popup-request":
      return "Sign-in was cancelled.";
    default:
      return "An error occurred. Please try again.";
  }
}