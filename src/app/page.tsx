
"use client";

import { useAuth } from "@/components/auth-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function LandingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Wait until the authentication status is fully determined.
    if (!loading) {
      if (user) {
        // If logged in, go to the dashboard.
        router.replace("/dashboard");
      } else {
        // If not logged in, go to the login page.
        router.replace("/login");
      }
    }
  }, [user, loading, router]);

  // Show a loader while we determine the user's auth state.
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
