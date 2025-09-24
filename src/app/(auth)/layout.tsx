
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

  // While checking auth state, or if we are about to redirect, show a loader.
  if (loading || user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }
  
  // If not loading and there is NO user, show the login/signup page.
  return <>{children}</>;
}
