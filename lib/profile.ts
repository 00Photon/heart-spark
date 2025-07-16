
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
import { ZODIAC_SIGNS } from "@/lib/constants"; // Adjust path as needed

import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
// Interface for signup data
interface Photo {
  id: string; // Firestore document ID
  url: string; // Firebase Storage URL
  isMain: boolean;
}


export async function getUserPhotos(uid: string): Promise<Photo[]> {
  try {
    const photosRef = collection(db, `users/${uid}/photos`);
    const snapshot = await getDocs(photosRef);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Photo[];
  } catch (error) {
    console.error("Get user photos error:", error);
    throw new Error("Failed to fetch photos");
  }
}

export async function uploadUserPhoto(uid: string, file: File): Promise<Photo> {
  try {
    // Generate a unique file name
    const fileName = `${Date.now()}-${file.name}`;
    const storageRef = ref(storage, `users/${uid}/photos/${fileName}`);
    
    // Upload to Firebase Storage
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    // Save metadata to Firestore
    const photosRef = collection(db, `users/${uid}/photos`);
    const isMain = (await getDocs(photosRef)).empty; // Set as main if first photo
    const docRef = await addDoc(photosRef, { url, isMain });
    
    return { id: docRef.id, url, isMain };
  } catch (error) {
    console.error("Upload photo error:", error);
    throw new Error("Failed to upload photo");
  }
}

// Set a photo as main
export async function setMainPhoto(uid: string, photoId: string): Promise<void> {
  try {
    const photosRef = collection(db, `users/${uid}/photos`);
    const snapshot = await getDocs(photosRef);
    
    // Update all photos to set isMain to false
    const updates = snapshot.docs.map((doc) =>
      updateDoc(doc.ref, { isMain: doc.id === photoId })
    );
    await Promise.all(updates);
  } catch (error) {
    console.error("Set main photo error:", error);
    throw new Error("Failed to set main photo");
  }
}

export async function deleteUserPhoto(uid: string, photoId: string, url: string): Promise<void> {
  try {
    // Delete from Firebase Storage
    const storageRef = ref(storage, url);
    await deleteObject(storageRef);

    // Delete from Firestore
    const photoRef = doc(db, `users/${uid}/photos`, photoId);
    await deleteDoc(photoRef);
  } catch (error) {
    console.error("Delete photo error:", error);
    throw new Error("Failed to delete photo");
  }
}
