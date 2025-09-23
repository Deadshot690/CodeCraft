"use server";

import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import type { User } from "@/lib/types";

// This is a server action. It can be called from client-side components
// and will execute on the server.
export async function createUserProfile(user: { uid: string; email: string | null; name: string | null; avatarUrl: string | null; }) {
  const newUser: User = {
    uid: user.uid,
    email: user.email,
    name: user.name ?? user.email?.split("@")[0] ?? "Anonymous",
    avatarUrl: user.avatarUrl ?? `https://picsum.photos/seed/${user.uid}/100/100`,
    xp: 0,
    level: 1,
    xpToNextLevel: 100,
    streak: 0,
    badges: [],
    completedTasks: [],
  };

  try {
    // The user's UID will be the document ID in the 'users' collection
    await setDoc(doc(db, "users", user.uid), newUser);
    return { success: true, data: newUser };
  } catch (error) {
    console.error("Error creating user document: ", error);
    return { success: false, error: "Failed to create user profile." };
  }
}
