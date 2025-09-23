"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code, Gamepad, Home, LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/components/auth-provider";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const CodeCraftLogo = () => (
    <div className="flex items-center gap-2 font-headline font-bold text-lg">
        <Code className="h-6 w-6 text-primary" />
        <span>CodeCraft</span>
    </div>
);


export function AppSidebar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const { toast } = useToast();
  const isActive = (path: string) => pathname === path || (path !== '/dashboard' && pathname.startsWith(path));

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect is handled by the main layout
    } catch (error) {
      console.error("Logout Error:", error);
      toast({
        title: "Logout Failed",
        description: "There was a problem signing you out. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <CodeCraftLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive("/dashboard")}
              tooltip="Dashboard"
            >
              <Link href="/dashboard">
                <Home />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive("/tasks")}
              tooltip="Tasks"
            >
              <Link href="/tasks">
                <Code />
                <span>Task Library</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive("/games")}
              tooltip="Games"
            >
              <Link href="/games">
                <Gamepad />
                <span>Mini-Games</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator />
      {user && (
        <SidebarFooter className="p-2 flex flex-col gap-2">
          <Link href="/profile" className="w-full">
              <div className="flex items-center gap-3 rounded-md p-2 hover:bg-accent">
                   <Avatar className="h-9 w-9">
                      <AvatarImage src={user.avatarUrl} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="overflow-hidden">
                      <p className="truncate font-semibold">{user.name}</p>
                      <p className="truncate text-xs text-muted-foreground">Level {user.level}</p>
                  </div>
              </div>
          </Link>
          <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2"/>
              Logout
          </Button>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
