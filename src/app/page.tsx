
'use client';

import { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Flame, CircleDollarSign, Trophy, ArrowRight, Dna, Loader2 } from 'lucide-react';
import AiAssistant from '@/components/ai-assistant';
import Image from 'next/image';
import Link from 'next/link';
import { getDailyChallenge, Challenge } from '@/lib/challenges';
import { useAuth } from '@/hooks/use-auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const dungeonProgress = {
  floor: 'The Syntax Swamp',
  level: 3,
  progress: 60,
  nextBoss: 'The Pythonic Serpent',
};

// --- Leveling Logic ---
const XP_FOR_NEXT_LEVEL = 1000;
const calculateLevel = (xp: number) => Math.floor(xp / XP_FOR_NEXT_LEVEL) + 1;
const calculateXpForNextLevel = (xp: number) => XP_FOR_NEXT_LEVEL - (xp % XP_FOR_NEXT_LEVEL);
const calculateProgressToNextLevel = (xp: number) => (xp % XP_FOR_NEXT_LEVEL) / 10;
// --- End Leveling Logic ---

export default function Home() {
  const { user, loading } = useAuth();
  const [dailyChallenge, setDailyChallenge] = useState<Challenge | null>(null);
  const [userXp, setUserXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [xpToNext, setXpToNext] = useState(XP_FOR_NEXT_LEVEL);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setDailyChallenge(getDailyChallenge());

    const fetchUserData = async () => {
      let currentXp = 0;
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          currentXp = userDoc.data().xp || 0;
        }
      } else {
        const storedSolutions: { id: string }[] = JSON.parse(localStorage.getItem('solvedChallengesInfo') || '[]');
        currentXp = storedSolutions.length * 100; // Simple XP for non-logged in users
      }
      setUserXp(currentXp);
      setLevel(calculateLevel(currentXp));
      setXpToNext(calculateXpForNextLevel(currentXp));
      setProgress(calculateProgressToNextLevel(currentXp));
    };

    if (!loading) {
      fetchUserData();
    }
  }, [user, loading]);

  if (loading || !dailyChallenge) {
    return (
        <DashboardLayout>
            <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
                <div className="flex justify-center items-center h-64">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    <p className="ml-4 text-muted-foreground">Loading Dashboard...</p>
                </div>
            </div>
        </DashboardLayout>
    );
  }
  
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h1 className="text-3xl font-bold tracking-tight font-headline text-foreground">
            Welcome, Adventurer!
          </h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Level {level}</CardTitle>
              <Dna className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userXp.toLocaleString()} XP</div>
              <p className="text-xs text-muted-foreground">{xpToNext.toLocaleString()} XP to next level</p>
              <Progress value={progress} className="mt-2 h-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gold Coins</CardTitle>
              <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4,231</div>
              <p className="text-xs text-muted-foreground">+150 from last challenge</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Streak</CardTitle>
              <Flame className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                5 days <span role="img" aria-label="fire">🔥</span>
              </div>
              <p className="text-xs text-muted-foreground">Keep it up for a reward!</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leaderboard Rank</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#12</div>
              <p className="text-xs text-muted-foreground">Top 5% of all players</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
           <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Daily Challenge</CardTitle>
                    <CardDescription>A new challenge every day to keep your skills sharp.</CardDescription>
                </CardHeader>
                <CardContent>
                    <h3 className="font-semibold text-lg">{dailyChallenge.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{dailyChallenge.description}</p>
                    <div className="flex gap-2 mt-2">
                        <Badge variant="secondary">{dailyChallenge.difficulty}</Badge>
                        <Badge variant="outline">{dailyChallenge.domain}</Badge>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href={`/challenge/${dailyChallenge.id}`}>
                            Attempt Challenge <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>

          <Card className="lg:col-span-1 relative flex flex-col justify-between overflow-hidden min-h-[300px]">
             <Image
              src="https://picsum.photos/600/400"
              alt="Dungeon artwork"
              fill
              className="object-cover z-0 opacity-20"
              data-ai-hint="dungeon entrance"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>

            <div className="p-6 relative z-20">
              <CardTitle className="font-headline text-xl">Code Dungeon</CardTitle>
              <CardDescription>Continue your adventure.</CardDescription>
            </div>
            
            <div className="p-6 pt-0 relative z-20 mt-auto">
                <h3 className="font-semibold text-lg">{dungeonProgress.floor}</h3>
                <p className="text-sm text-muted-foreground">Level {dungeonProgress.level}</p>
                <Progress value={dungeonProgress.progress} className="my-2 h-2" />
                <p className="text-xs text-muted-foreground">Next Boss: {dungeonProgress.nextBoss}</p>
                 <Button variant="secondary" className="w-full mt-4" asChild>
                  <Link href="/dungeon">
                    Enter Dungeon
                  </Link>
                </Button>
            </div>
          </Card>
        </div>
        
        <AiAssistant />
        
      </div>
    </DashboardLayout>
  );
}
