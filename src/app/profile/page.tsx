
'use client';

import { useState, useEffect } from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Shield, Star, Swords, BrainCircuit, Bot, Loader2 } from "lucide-react";
import Link from 'next/link';
import { challenges as allChallenges, Challenge } from '@/lib/challenges';
import { formatDistanceToNow } from 'date-fns';
import { useAuth } from '@/hooks/use-auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface SolvedChallengeInfo {
  id: string;
  title: string;
  solvedAt: string; // ISO date string
}

interface UserProfileData {
    username: string;
    email: string;
    level: number;
    xp: number;
    solvedChallenges: SolvedChallengeInfo[];
}

const XP_PER_CHALLENGE = 100;
const XP_FOR_NEXT_LEVEL = 1000;
const calculateLevel = (xp: number) => Math.floor(xp / XP_FOR_NEXT_LEVEL) + 1;

const achievements = [
  { icon: <Star className="w-8 h-8 text-yellow-400" />, title: "Century Mark", description: "Solved 100 problems", unlocked: false },
  { icon: <Swords className="w-8 h-8 text-red-500" />, title: "Problem Slayer", description: "Solved a Hard problem", unlocked: true },
  { icon: <BrainCircuit className="w-8 h-8 text-blue-500" />, title: "DSA Expert", description: "Solved 25 DSA problems", unlocked: true },
  { icon: <Bot className="w-8 h-8 text-primary" />, title: "AI Enthusiast", description: "Solved 5 AI problems", unlocked: true },
  { icon: <Shield className="w-8 h-8 text-green-500" />, title: "Web Weaver", description: "Solved 10 Web problems", unlocked: true },
  { icon: <Star className="w-8 h-8 text-yellow-400" />, title: "First Blood", description: "Solved your first problem", unlocked: true },
];

export default function ProfilePage() {
    const { user, loading } = useAuth();
    const [profile, setProfile] = useState<UserProfileData | null>(null);
    const [domainStats, setDomainStats] = useState({ DSA: 0, Web: 0, AI: 0 });
    const [recentSolutions, setRecentSolutions] = useState<SolvedChallengeInfo[]>([]);

    useEffect(() => {
        const fetchProfileData = async () => {
            if (user) {
                const userDocRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data() as UserProfileData;
                    setProfile({
                        ...userData,
                        level: calculateLevel(userData.xp || 0),
                    });
                    
                    const sortedSolutions = [...(userData.solvedChallenges || [])].sort((a, b) => new Date(b.solvedAt).getTime() - new Date(a.solvedAt).getTime());
                    setRecentSolutions(sortedSolutions.slice(0, 5));

                    const solvedIds = new Set(userData.solvedChallenges.map(s => s.id));
                    const allSolvedChallenges = allChallenges.filter(c => solvedIds.has(c.id));

                    const domains = allSolvedChallenges.reduce((acc, c) => {
                        const domainKey = c.domain as keyof typeof acc;
                        acc[domainKey] = (acc[domainKey] || 0) + 1;
                        return acc;
                    }, { DSA: 0, Web: 0, AI: 0 });
                    setDomainStats(domains);
                }
            } else {
                // Handle non-logged in user (fallback to localStorage)
                const storedSolutions: SolvedChallengeInfo[] = JSON.parse(localStorage.getItem('solvedChallengesInfo') || '[]');
                const sortedSolutions = [...storedSolutions].sort((a, b) => new Date(b.solvedAt).getTime() - new Date(a.solvedAt).getTime());
                const challengesSolved = storedSolutions.length;
                const xp = challengesSolved * XP_PER_CHALLENGE;

                setProfile({
                    username: 'Local Adventurer',
                    email: '',
                    level: calculateLevel(xp),
                    xp: xp,
                    solvedChallenges: storedSolutions,
                });
                setRecentSolutions(sortedSolutions.slice(0, 5));
                 // Logic for domain stats for local user
                 const solvedIds = new Set(storedSolutions.map(s => s.id));
                 const localSolvedChallenges = allChallenges.filter(c => solvedIds.has(c.id));
                 const domains = localSolvedChallenges.reduce((acc, c) => {
                     const domainKey = c.domain as keyof typeof acc;
                     acc[domainKey] = (acc[domainKey] || 0) + 1;
                     return acc;
                 }, { DSA: 0, Web: 0, AI: 0 });
                 setDomainStats(domains);
            }
        };
        
        if (!loading) {
            fetchProfileData();
        }

    }, [user, loading]);

  if (loading || !profile) {
      return (
        <DashboardLayout>
          <div className="flex justify-center items-center h-full"><Loader2 className="h-8 w-8 animate-spin"/></div>
        </DashboardLayout>
      );
  }

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
        
        <Card className="overflow-hidden">
          <div className="relative h-32 w-full bg-gradient-to-r from-primary to-accent" />
          <CardContent className="p-6 pt-0">
            <div className="flex items-end gap-4 -mt-16">
              <Avatar className="h-32 w-32 border-4 border-background">
                <AvatarImage src={`https://picsum.photos/seed/${profile.username}/200`} data-ai-hint="user avatar" />
                <AvatarFallback className="text-4xl">{profile.username.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="pb-2">
                <h1 className="text-3xl font-bold tracking-tight font-headline">{profile.username}</h1>
                <p className="text-muted-foreground">{profile.email || 'Local Account'}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between"><span>Challenges Solved</span> <span className="font-bold">{profile.solvedChallenges.length}</span></div>
                <div className="flex justify-between"><span>XP Earned</span> <span className="font-bold">{profile.xp.toLocaleString()} XP</span></div>
                <div className="flex justify-between"><span>Level</span> <span className="font-bold">{profile.level}</span></div>
                <Separator />
                <h3 className="font-semibold text-sm">Solved by Domain</h3>
                <div className="flex justify-between"><span>Data Structures & Algo</span> <span className="font-bold">{domainStats.DSA}</span></div>
                <div className="flex justify-between"><span>Web Development</span> <span className="font-bold">{domainStats.Web}</span></div>
                <div className="flex justify-between"><span>Artificial Intelligence</span> <span className="font-bold">{domainStats.AI}</span></div>
              </CardContent>
            </Card>
          </div>

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
