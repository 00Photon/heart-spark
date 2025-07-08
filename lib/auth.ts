import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  type User,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth"
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore"
import { auth, db } from "./firebase"

// Types
export interface UserProfile {
  uid: string
  email: string
  firstName: string
  lastName: string
  birthDate: string
  location: string
  zodiacSign?: string
  profileComplete: boolean
  createdAt: Date
  lastActive: Date
}

export interface SignUpData {
  firstName: string
  lastName: string
  email: string
  password: string
  birthDate: string
  location: string
}

// Initialize emulators in development (optional)
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  try {
    // Only connect if not already connected
    if (!auth.config.emulator) {
      // connectAuthEmulator(auth, "http://localhost:9099")
    }
    // if (!db._delegate._databaseId.projectId.includes("demo-")) {
    //   connectFirestoreEmulator(db, "localhost", 8080)
    // }
  } catch (error) {
    // Emulators already connected or not available
    console.log("Firebase emulators not connected:", error)
  }
}

// Calculate zodiac sign from birth date
function calculateZodiacSign(birthDate: string): string {
  const date = new Date(birthDate)
  const month = date.getMonth() + 1
  const day = date.getDate()

  const zodiacSigns = [
    { sign: "Capricorn ♑", start: [12, 22], end: [1, 19] },
    { sign: "Aquarius ♒", start: [1, 20], end: [2, 18] },
    { sign: "Pisces ♓", start: [2, 19], end: [3, 20] },
    { sign: "Aries ♈", start: [3, 21], end: [4, 19] },
    { sign: "Taurus ♉", start: [4, 20], end: [5, 20] },
    { sign: "Gemini ♊", start: [5, 21], end: [6, 20] },
    { sign: "Cancer ♋", start: [6, 21], end: [7, 22] },
    { sign: "Leo ♌", start: [7, 23], end: [8, 22] },
    { sign: "Virgo ♍", start: [8, 23], end: [9, 22] },
    { sign: "Libra ♎", start: [9, 23], end: [10, 22] },
    { sign: "Scorpio ♏", start: [10, 23], end: [11, 21] },
    { sign: "Sagittarius ♐", start: [11, 22], end: [12, 21] },
  ]

  for (const zodiac of zodiacSigns) {
    const [startMonth, startDay] = zodiac.start
    const [endMonth, endDay] = zodiac.end

    if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
      return zodiac.sign
    }
  }

  return "Capricorn ♑" // Default fallback
}

// Sign up with email and password
export async function signUpWithEmail(userData: SignUpData): Promise<User> {
  try {
    const { email, password, firstName, lastName, birthDate, location } = userData

    // Create user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    // Update user profile
    await updateProfile(user, {
      displayName: `${firstName} ${lastName}`,
    })

    // Calculate zodiac sign
    const zodiacSign = calculateZodiacSign(birthDate)

    // Create user profile in Firestore
    const userProfile: UserProfile = {
      uid: user.uid,
      email: user.email!,
      firstName,
      lastName,
      birthDate,
      location,
      zodiacSign,
      profileComplete: false,
      createdAt: new Date(),
      lastActive: new Date(),
    }

    await setDoc(doc(db, "users", user.uid), userProfile)

    // Send email verification
    await sendEmailVerification(user)

    return user
  } catch (error: any) {
    console.error("Sign up error:", error)
    throw new Error(getAuthErrorMessage(error.code))
  }
}

// Sign in with email and password
export async function signInWithEmail(email: string, password: string): Promise<User> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)

    // Update last active timestamp
    await updateDoc(doc(db, "users", userCredential.user.uid), {
      lastActive: new Date(),
    })

    return userCredential.user
  } catch (error: any) {
    console.error("Sign in error:", error)
    throw new Error(getAuthErrorMessage(error.code))
  }
}

// Sign in with Google
export async function signInWithGoogle(): Promise<User> {
  try {
    const provider = new GoogleAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    const user = userCredential.user

    // Check if user profile exists
    const userDoc = await getDoc(doc(db, "users", user.uid))

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
      }

      await setDoc(doc(db, "users", user.uid), userProfile)
    } else {
      // Update last active
      await updateDoc(doc(db, "users", user.uid), {
        lastActive: new Date(),
      })
    }

    return user
  } catch (error: any) {
    console.error("Google sign in error:", error)
    throw new Error(getAuthErrorMessage(error.code))
  }
}

// Sign in with Facebook
export async function signInWithFacebook(): Promise<User> {
  try {
    const provider = new FacebookAuthProvider()
    const userCredential = await signInWithPopup(auth, provider)
    const user = userCredential.user

    // Check if user profile exists
    const userDoc = await getDoc(doc(db, "users", user.uid))

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
      }

      await setDoc(doc(db, "users", user.uid), userProfile)
    } else {
      // Update last active
      await updateDoc(doc(db, "users", user.uid), {
        lastActive: new Date(),
      })
    }

    return user
  } catch (error: any) {
    console.error("Facebook sign in error:", error)
    throw new Error(getAuthErrorMessage(error.code))
  }
}

// Sign out
export async function signOutUser(): Promise<void> {
  try {
    await signOut(auth)
  } catch (error: any) {
    console.error("Sign out error:", error)
    throw new Error("Failed to sign out")
  }
}

// Send password reset email
export async function resetPassword(email: string): Promise<void> {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch (error: any) {
    console.error("Password reset error:", error)
    throw new Error(getAuthErrorMessage(error.code))
  }
}

// Update user password
export async function updateUserPassword(currentPassword: string, newPassword: string): Promise<void> {
  try {
    const user = auth.currentUser
    if (!user || !user.email) {
      throw new Error("No authenticated user")
    }

    // Re-authenticate user
    const credential = EmailAuthProvider.credential(user.email, currentPassword)
    await reauthenticateWithCredential(user, credential)

    // Update password
    await updatePassword(user, newPassword)
  } catch (error: any) {
    console.error("Password update error:", error)
    throw new Error(getAuthErrorMessage(error.code))
  }
}

// Get user profile
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  try {
    const userDoc = await getDoc(doc(db, "users", uid))
    if (userDoc.exists()) {
      return userDoc.data() as UserProfile
    }
    return null
  } catch (error) {
    console.error("Get user profile error:", error)
    return null
  }
}

// Update user profile
export async function updateUserProfile(uid: string, updates: Partial<UserProfile>): Promise<void> {
  try {
    await updateDoc(doc(db, "users", uid), {
      ...updates,
      lastActive: new Date(),
    })
  } catch (error) {
    console.error("Update user profile error:", error)
    throw new Error("Failed to update profile")
  }
}

// Helper function to get user-friendly error messages
function getAuthErrorMessage(errorCode: string): string {
  switch (errorCode) {
    case "auth/user-not-found":
      return "No account found with this email address."
    case "auth/wrong-password":
      return "Incorrect password."
    case "auth/email-already-in-use":
      return "An account with this email already exists."
    case "auth/weak-password":
      return "Password should be at least 6 characters."
    case "auth/invalid-email":
      return "Invalid email address."
    case "auth/too-many-requests":
      return "Too many failed attempts. Please try again later."
    case "auth/network-request-failed":
      return "Network error. Please check your connection."
    case "auth/popup-closed-by-user":
      return "Sign-in popup was closed."
    case "auth/cancelled-popup-request":
      return "Sign-in was cancelled."
    default:
      return "An error occurred. Please try again."
  }
}
