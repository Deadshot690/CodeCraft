import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import type { User } from "@/components/auth-provider";

export async function createUserProfile(user: {
  uid: string;
  email: string | null;
  name: string | null;
  avatarUrl: string | null;
}) {
  const newUser: User = {
    uid: user.uid,
    email: user.email,
    name: user.name ?? user.email?.split("@")[0] ?? "Anonymous",
    avatarUrl: user.avatarUrl ?? `https://picsum.photos/seed/${user.uid}/100/100`,
    // other default fields...
  };
  await setDoc(doc(db, "users", user.uid), newUser);
  return newUser;
}
