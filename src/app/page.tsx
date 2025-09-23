
"use client";

import { useAuth } from "@/components/auth-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function LandingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If the auth state is not loading, decide where to route the user.
    if (!loading) {
      if (user) {
        // If the user is logged in, redirect them to the dashboard.
        router.replace("/dashboard");
      } else {
        // If the user is not logged in, redirect them to the login page.
        router.replace("/login");
      }
    }
  }, [user, loading, router]);

  // While the auth state is loading, show a full-screen loader.
  // This prevents a "flash" of the wrong page.
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
