
"use client";

import { useAuth } from "@/components/auth-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If the auth state is not loading and a user is logged in,
    // redirect them to the main dashboard.
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);

  // While checking auth state, show a loader.
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }
  
  // If not loading and no user, show the children (Login or Signup page).
  // This prevents a flash of the login page before the redirect can happen for a logged-in user.
  if (!user) {
    return <>{children}</>;
  }

  // If there is a user, we'll show a loader while the useEffect above handles the redirect.
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
