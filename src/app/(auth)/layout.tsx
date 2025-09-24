
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
    if (loading) return; // Do nothing while loading.
    // If auth is not loading and a user IS logged in, redirect to dashboard.
    if (user) {
      router.replace("/dashboard");
    }
  }, [user, loading, router]);

  // While checking auth state, show a full-screen loader.
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }
  
  // If not loading and there is NO user, show the login/signup page.
  // This prevents a flash of the login page for an already logged-in user.
  if (!user) {
    return <>{children}</>;
  }

  // If there is a user, we're in the process of redirecting. Show a loader to prevent content flash.
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
