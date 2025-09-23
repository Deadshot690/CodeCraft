
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
    // If the auth state is done loading and there is still no user,
    // then we can safely redirect to the login page.
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // While checking the auth state, show a full-screen loader.
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  // If loading is complete and we have a user, show the main application layout.
  // The 'user' check prevents a flash of the child content before the redirect in the useEffect can happen.
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

  // If loading is complete and there's no user, we'll show the loader briefly
  // while the useEffect above handles the redirect. Returning this loader prevents
  // rendering the children for a split second before the redirect occurs.
  return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
  );
}
