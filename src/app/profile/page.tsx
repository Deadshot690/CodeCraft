
'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Shield, Star, Swords, BrainCircuit, Bot, Loader2 } from "lucide-react";
import Link from 'next/link';
import { challenges, Challenge } from '@/lib/challenges';
import { formatDistanceToNow } from 'date-fns';
import { auth } from '@/lib/firebase/client';

interface SolvedChallengeInfo {
  id: string;
  title: string;
  solvedAt: string; // ISO date string
}

const achievements = [
  { icon: <Star className="w-8 h-8 text-yellow-400" />, title: "Century Mark", description: "Solved 100 problems", unlocked: false },
  { icon: <Swords className="w-8 h-8 text-red-500" />, title: "Problem Slayer", description: "Solved a Hard problem", unlocked: true },
  { icon: <BrainCircuit className="w-8 h-8 text-blue-500" />, title: "DSA Expert", description: "Solved 25 DSA problems", unlocked: true },
  { icon: <Bot className="w-8 h-8 text-primary" />, title: "AI Enthusiast", description: "Solved 5 AI problems", unlocked: true },
  { icon: <Shield className="w-8 h-8 text-green-500" />, title: "Web Weaver", description: "Solved 10 Web problems", unlocked: true },
  { icon: <Star className="w-8 h-8 text-yellow-400" />, title: "First Blood", description: "Solved your first problem", unlocked: true },
];

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    name: "CodeCrafter",
    level: 1,
    xp: 0,
    rank: 0,
    challengesSolved: 0,
    domains: { DSA: 0, Web: 0, AI: 0 }
  });
  const [recentSolutions, setRecentSolutions] = useState<SolvedChallengeInfo[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // In a real app, you would fetch profile data from Firestore here
        // For now, we'll continue using localStorage for solved challenges
        const storedSolutions: SolvedChallengeInfo[] = JSON.parse(localStorage.getItem('solvedChallengesInfo') || '[]');
        
        const sortedSolutions = storedSolutions.sort((a, b) => new Date(b.solvedAt).getTime() - new Date(a.solvedAt).getTime());
        setRecentSolutions(sortedSolutions.slice(0, 5));

        const challengesSolved = storedSolutions.length;
        const solvedIds = new Set(storedSolutions.map(s => s.id));
        const allSolvedChallenges = challenges.filter(c => solvedIds.has(c.id));

        const domains = allSolvedChallenges.reduce((acc, c) => {
            const domainKey = c.domain as keyof typeof acc;
            acc[domainKey] = (acc[domainKey] || 0) + 1;
            return acc;
        }, { DSA: 0, Web: 0, AI: 0 });

        const xp = challengesSolved * 100;
        const level = Math.floor(xp / 1000) + 1;

        setStats({
            name: currentUser.email?.split('@')[0] || 'CodeCrafter',
            challengesSolved,
            domains,
            xp,
            level,
            rank: 500 - (challengesSolved * 10) // dummy rank
        });
        
      } else {
        router.push('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading || !user) {
      return (
        <DashboardLayout>
          <div className="flex justify-center items-center h-full">
            <Loader2 className="w-16 h-16 animate-spin" />
          </div>
        </DashboardLayout>
      );
  }

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
        
        {/* Header */}
        <Card className="overflow-hidden">
          <div className="relative h-32 w-full bg-gradient-to-r from-primary to-accent" />
          <CardContent className="p-6 pt-0">
            <div className="flex items-end gap-4 -mt-16">
              <Avatar className="h-32 w-32 border-4 border-background">
                <AvatarImage src={user.photoURL ?? `https://picsum.photos/seed/${user.uid}/200`} data-ai-hint="user avatar" />
                <AvatarFallback className="text-4xl">{stats.name.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="pb-2">
                <h1 className="text-3xl font-bold tracking-tight font-headline">{stats.name}</h1>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Left Column */}
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between"><span>Challenges Solved</span> <span className="font-bold">{stats.challengesSolved}</span></div>
                <div className="flex justify-between"><span>XP Earned</span> <span className="font-bold">{stats.xp.toLocaleString()} XP</span></div>
                <div className="flex justify-between"><span>Leaderboard Rank</span> <span className="font-bold">#{stats.rank}</span></div>
                <Separator />
                <h3 className="font-semibold text-sm">Solved by Domain</h3>
                <div className="flex justify-between"><span>Data Structures & Algo</span> <span className="font-bold">{stats.domains.DSA}</span></div>
                <div className="flex justify-between"><span>Web Development</span> <span className="font-bold">{stats.domains.Web}</span></div>
                <div className="flex justify-between"><span>Artificial Intelligence</span> <span className="font-bold">{stats.domains.AI}</span></div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-6">
             <Card>
              <CardHeader>
                <CardTitle>Recent Solutions</CardTitle>
                <CardDescription>Your last 5 accepted solutions.</CardDescription>
              </CardHeader>
              <CardContent>
                 {recentSolutions.length === 0 ? (
                    <p className="text-muted-foreground text-center py-4">No solutions submitted yet.</p>
                ) : (
                <ul className="space-y-2">
                  {recentSolutions.map(sol => (
                    <li key={sol.id} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50">
                       <Link href={`/challenge/${sol.id}`} className="hover:underline">
                         <span className="font-medium">{sol.title}</span>
                         <p className="text-sm text-muted-foreground">{formatDistanceToNow(new Date(sol.solvedAt), { addSuffix: true })}</p>
                       </Link>
                       <Badge variant="default" className="bg-green-500/20 text-green-700 hover:bg-green-500/30">
                        <Check className="w-3 h-3 mr-1"/>
                        Accepted
                       </Badge>
                    </li>
                  ))}
                </ul>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                 <CardDescription>Badges you've earned on your journey.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {achievements.map(ach => (
                    <div key={ach.title} className={`flex flex-col items-center text-center p-4 rounded-lg border ${ach.unlocked ? 'opacity-100' : 'opacity-40'}`}>
                      {ach.icon}
                      <p className="font-bold mt-2 text-sm">{ach.title}</p>
                      <p className="text-xs text-muted-foreground">{ach.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
