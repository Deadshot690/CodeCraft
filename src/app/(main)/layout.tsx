
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
    // If the user is not loading and is not logged in, redirect them to the login page.
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // If the page is loading, show a full-screen loader.
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  // If the user is logged in, show the main application layout.
  return user ? (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="min-h-screen flex-1 flex-col">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  ) : null; // or a fallback component if you prefer
}
