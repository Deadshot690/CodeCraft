"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code, Gamepad, Home } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const CodeCraftLogo = () => (
    <div className="flex items-center gap-2 font-headline font-bold text-lg">
        <Code className="h-6 w-6 text-primary" />
        <span>CodeCraft</span>
    </div>
);


export function AppSidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path || (path !== '/dashboard' && pathname.startsWith(path));

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
    </Sidebar>
  );
}
