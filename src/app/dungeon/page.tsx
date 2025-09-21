
'use client';

import { useState, useEffect } from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Lock, Unlock, Loader2 } from 'lucide-react';
import { dungeon } from '@/lib/dungeon';
import { challenges } from '@/lib/challenges';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function DungeonPage() {
    const { user, loading } = useAuth();
    const [solvedDungeonChallenges, setSolvedDungeonChallenges] = useState<Set<string>>(new Set());
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const fetchSolvedChallenges = async () => {
            if (user) {
                const userDocRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userDocRef);
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    const solvedIds = new Set((userData.solvedChallenges || []).map((info: { id: string }) => info.id));
                    setSolvedDungeonChallenges(solvedIds);
                }
            } else {
                // Fallback to localStorage for non-logged-in users
                const storedSolvedInfo: { id: string }[] = JSON.parse(localStorage.getItem('solvedChallengesInfo') || '[]');
                const solvedIds = new Set(storedSolvedInfo.map(info => info.id));
                setSolvedDungeonChallenges(solvedIds);
            }
        };

        if (!loading) {
            fetchSolvedChallenges();
        }
    }, [user, loading]);

    const isFloorUnlocked = (floorIndex: number) => {
        if (floorIndex === 0) return true; 
        const prevFloor = dungeon[floorIndex - 1];
        if (!prevFloor) return false;
        const prevFloorSolvedCount = prevFloor.challenges.filter(id => solvedDungeonChallenges.has(id)).length;
        return prevFloorSolvedCount >= prevFloor.challenges.length / 2;
    };
    
    if (!isClient || loading) {
        return <DashboardLayout><div className="flex justify-center items-center h-full"><Loader2 className="h-8 w-8 animate-spin"/></div></DashboardLayout>;
    }

    return (
        <DashboardLayout>
            <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight font-headline">The Code Dungeon</h1>
                        <p className="text-muted-foreground">
                            Battle your way through floors of challenges to claim your prize.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    {dungeon.map((floor, index) => {
                        const unlocked = isFloorUnlocked(index);
                        const floorChallenges = floor.challenges.map(id => challenges.find(c => c.id === id)).filter(Boolean);
                        const solvedCount = floorChallenges.filter(c => solvedDungeonChallenges.has(c!.id)).length;
                        const progress = floorChallenges.length > 0 ? (solvedCount / floorChallenges.length) * 100 : 0;

                        return (
                            <Card key={floor.id} className={`transition-opacity ${!unlocked ? 'opacity-50' : ''}`}>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <div>
                                        <CardTitle className="font-headline text-2xl">{floor.title}</CardTitle>
                                        <CardDescription>{floor.description}</CardDescription>
                                    </div>
                                    {unlocked ? <Unlock className="text-green-500" /> : <Lock className="text-red-500" />}
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="text-sm font-medium">Progress</p>
                                            <p className="text-sm text-muted-foreground">{solvedCount} / {floorChallenges.length}</p>
                                        </div>
                                        <Progress value={progress} className="h-2"/>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {floorChallenges.map(challenge => {
                                            if (!challenge) return null;
                                            const isSolved = solvedDungeonChallenges.has(challenge.id);
                                            return (
                                                <Link key={challenge.id} href={`/challenge/${challenge.id}`} className={`group ${!unlocked ? 'pointer-events-none' : ''}`}>
                                                    <Card className="h-full transition-all hover:border-primary">
                                                        <CardContent className="p-4 flex items-center justify-between">
                                                            <div className="flex items-center gap-2">
                                                               {isSolved ? <CheckCircle className="text-green-500"/> : <div className="w-5 h-5 rounded-full border-2 border-muted" /> }
                                                                <div>
                                                                    <p className="font-semibold">{challenge.title}</p>
                                                                    <Badge variant="secondary" className="mt-1">{challenge.difficulty}</Badge>
                                                                </div>
                                                            </div>
                                                            <ArrowRight className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        </CardContent>
                                                    </Card>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </DashboardLayout>
    );
}
