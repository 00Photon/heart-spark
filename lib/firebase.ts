// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBeS0noo5jvkts9Q93ijHOr5_n34NXlgg",
  authDomain: "heart-saprk.firebaseapp.com",
  projectId: "heart-saprk",
  storageBucket: "heart-saprk.firebasestorage.app",
  messagingSenderId: "755367627849",
  appId: "1:755367627849:web:b6d6379824ccfe46f40398",
  measurementId: "G-T5D7FWSG7G",
}

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

// Initialize Firebase services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

// Initialize Analytics only in browser environment
export const analytics =
  typeof window !== "undefined" && typeof window.gtag !== "undefined"
    ? (async () => {
        const { getAnalytics } = await import("firebase/analytics")
        return getAnalytics(app)
      })()
    : null

export default app
