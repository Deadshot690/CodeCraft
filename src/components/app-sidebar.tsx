
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code, Gamepad, Home, Settings } from "lucide-react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { useSettings } from "@/hooks/use-settings";

const CodeCraftLogo = () => (
    <div className="flex items-center gap-2 font-headline font-bold text-lg">
        <Code className="h-6 w-6 text-primary" />
        <span>CodeCraft</span>
    </div>
);


export function AppSidebar() {
  const pathname = usePathname();
  const { settings } = useSettings();
  
  const isActive = (path: string) => {
    if (path === '/dashboard') return pathname === path || pathname === '/profile';
    return pathname.startsWith(path);
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
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={isActive("/settings")}
              tooltip="Settings"
            >
              <Link href="/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
       <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <Avatar className="size-8">
                            <AvatarImage src={settings.avatarUrl} alt={settings.name} />
                            <AvatarFallback>{settings.name.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <span>{settings.name}</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

    
