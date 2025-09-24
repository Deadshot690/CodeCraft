
"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { useAuth } from "@/components/auth-provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return; // Do nothing while loading
    // If auth has finished loading and there is NO user, redirect to login.
    if (!user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  // While authentication is loading, show a full-screen loader.
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  // If loading is complete and we have a user, show the main application.
  if (user) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main className="min-h-screen flex-1 flex-col">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    );
  }

  // If loading is complete and there's no user, we are redirecting. Show a loader.
  return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
  );
}
