
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
  Loader2,
} from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { auth } from '@/lib/firebase/client';
import { signOut } from '@/app/actions';


export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !user && pathname !== '/login' && pathname !== '/signup') {
      router.push('/login');
    }
  }, [loading, user, pathname, router]);

  // While Firebase is checking auth state, show a loader
  if (loading) {
    return (
        <div className="flex items-center justify-center h-screen">
            <Loader2 className="w-16 h-16 animate-spin" />
        </div>
    );
  }

  // If there is no user, we are on the login/signup pages, so render nothing but the children.
  if (!user) {
    return <>{children}</>;
  }
  
  // If there IS a user but they are trying to access login/signup, redirect to home
  if (user && (pathname === '/login' || pathname === '/signup')) {
      router.push('/');
       return (
        <div className="flex items-center justify-center h-screen">
            <Loader2 className="w-16 h-16 animate-spin" />
        </div>
    );
  }

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
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                  <Settings />
                  Settings
              </SidebarMenuButton>
              <SidebarMenuSub>
                  {user && (
                     <SidebarMenuItem>
                        <SidebarMenuSubButton asChild isActive={pathname.startsWith('/profile')}>
                        <Link href="/profile">
                            <UserIcon />
                            <span>Profile</span>
                        </Link>
                        </SidebarMenuSubButton>
                    </SidebarMenuItem>
                  )}
                  {user ? (
                    <SidebarMenuItem>
                        <form action={signOut} className="w-full">
                            <SidebarMenuSubButton className="w-full">
                                    <LogOut />
                                    <span>Sign Out</span>
                            </SidebarMenuSubButton>
                        </form>
                    </SidebarMenuItem>
                ) : (
                    <SidebarMenuItem>
                        <SidebarMenuSubButton asChild isActive={pathname === '/login'}>
                            <Link href="/login">
                                <LogIn />
                                <span>Sign In</span>
                            </Link>
                        </SidebarMenuSubButton>
                    </SidebarMenuItem>
                )}
              </SidebarMenuSub>
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
