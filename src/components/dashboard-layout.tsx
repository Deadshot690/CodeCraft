
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { onAuthUserChanged, signOut } from '@/lib/firebase/auth';
import type { User } from 'firebase/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
  SidebarMenuBadge,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import {
  LayoutGrid,
  Castle,
  Library,
  Trophy,
  User as UserIcon,
  Settings,
  LogOut,
  Moon,
  Sun,
  Gamepad2,
  Swords,
  HelpCircle,
  Loader2,
} from 'lucide-react';
import { Badge } from './ui/badge';


function UserNav({ user, onSignOut }: { user: User; onSignOut: () => void; }) {
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut();
    onSignOut();
    router.push('/login');
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-9 w-9 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.photoURL || undefined} alt={user.displayName || ""} data-ai-hint="user avatar" />
            <AvatarFallback>{user.displayName?.[0] || 'U'}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.displayName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/profile" passHref>
          <DropdownMenuItem>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

   useEffect(() => {
    const unsubscribe = onAuthUserChanged((user) => {
      if (!user) {
        router.push('/login');
      } else {
        setUser(user);
        setLoading(false);
      }
    }, router);
    return () => unsubscribe();
  }, [router]);


  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    // This case should be handled by the redirect in the effect,
    // but as a fallback, we can render null or a login link.
    return null;
  }
  
  const onSignOut = () => {
    setUser(null);
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <Icons.logo className="w-8 h-8 text-primary" />
            <span className="font-bold text-lg font-headline">CodeCraft</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/'}>
                <Link href="/">
                  <LayoutGrid />
                  Dashboard
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname.startsWith('/challenge')}>
                <Link href="/challenge">
                  <Library />
                  Challenges
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton>
                  <Gamepad2 />
                  Mini-Games
              </SidebarMenuButton>
               <SidebarMenuSub>
                  <SidebarMenuItem>
                    <SidebarMenuSubButton asChild isActive={pathname === '/minigames'}>
                      <Link href="/minigames">
                        <Gamepad2 />
                        <span>All Games</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                    <SidebarMenuSubButton asChild isActive={pathname.startsWith('/m/monster-battle')}>
                      <Link href="/m/monster-battle">
                        <Swords />
                        <span>Monster Battle</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuItem>
                </SidebarMenuSub>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/dungeon'}>
                <Link href="/dungeon">
                  <Castle />
                  Code Dungeon
                  <SidebarMenuBadge>New</SidebarMenuBadge>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Trophy />
                  Leaderboard
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="#">
                  <Settings />
                  Settings
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-background/95 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
            <SidebarTrigger className="lg:hidden" />
            <div className="w-full flex-1">
                {/* Can add search bar here if needed */}
            </div>
            <UserNav user={user} onSignOut={onSignOut} />
        </header>
        <main className="flex-1 overflow-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
