
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
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
import { Icons } from '@/components/icons';
import {
  LayoutGrid,
  Castle,
  Library,
  Trophy,
  Settings,
  Gamepad2,
  Swords,
  Bug,
  Code,
  Puzzle,
  BrainCircuit,
  BookCopy,
  LogIn,
  LogOut,
  User as UserIcon,
} from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { auth } from '@/lib/firebase/client';
import { signOut } from '@/app/actions';


export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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
                        <Trophy />
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
                   <SidebarMenuItem>
                    <SidebarMenuSubButton asChild isActive={pathname.startsWith('/m/debug-hunt')}>
                      <Link href="/m/debug-hunt">
                        <Bug />
                        <span>Debug Hunt</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                    <SidebarMenuSubButton asChild isActive={pathname.startsWith('/m/code-typer')}>
                      <Link href="/m/code-typer">
                        <Code />
                        <span>Code Typer</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                    <SidebarMenuSubButton asChild isActive={pathname.startsWith('/m/code-jigsaw')}>
                      <Link href="/m/code-jigsaw">
                        <Puzzle />
                        <span>Code Jigsaw</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                    <SidebarMenuSubButton asChild isActive={pathname.startsWith('/m/output-prediction')}>
                      <Link href="/m/output-prediction">
                        <BrainCircuit />
                        <span>Output Prediction</span>
                      </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuItem>
                   <SidebarMenuItem>
                    <SidebarMenuSubButton asChild isActive={pathname.startsWith('/m/concept-match')}>
                      <Link href="/m/concept-match">
                        <BookCopy />
                        <span>Concept Match</span>
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
            {user && (
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === '/profile'}>
                  <Link href="/profile">
                    <UserIcon />
                    Profile
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
             {user ? (
                <form action={signOut} className="w-full">
                    <SidebarMenuItem>
                        <SidebarMenuButton className="w-full">
                                <LogOut />
                                Sign Out
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                 </form>
            ) : (
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === '/login'}>
                        <Link href="/login">
                            <LogIn />
                            Sign In
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            )}
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
            <ThemeToggle />
             {user && (
              <Avatar>
                <AvatarImage src={user.photoURL ?? ''} />
                <AvatarFallback>
                  {user.email?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            )}
        </header>
        <main className="flex-1 overflow-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
