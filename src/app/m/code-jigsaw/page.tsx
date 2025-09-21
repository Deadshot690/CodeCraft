
'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { jigsawChallenges, JigsawChallenge } from "@/lib/jigsaw-challenges";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Puzzle, Languages, CheckCircle, Loader2 } from "lucide-react";
import { Button } from '@/components/ui/button';
import ChallengeFilter from './_components/challenge-filter';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const difficultyColorMap: { [key: string]: string } = {
    'Easy': 'text-green-500',
    'Medium': 'text-yellow-500',
    'Hard': 'text-red-500',
};

const languageDisplayMap: { [key: string]: string } = {
    'javascript': 'JavaScript',
    'python': 'Python',
    'java': 'Java',
    'cpp': 'C++',
};

function ChallengeRow({ challenge, isSolved }: { challenge: JigsawChallenge, isSolved: boolean }) {
    return (
        <TableRow>
            <TableCell>{challenge.srNo}</TableCell>
            <TableCell className="w-1/2">
                 <p className="font-medium">{challenge.title}</p>
                 <p className="text-sm text-muted-foreground mt-1">{challenge.description}</p>
            </TableCell>
            <TableCell>
                 <Badge variant="outline" className='flex items-center gap-1'>
                    <Languages className="h-3 w-3" />
                    {languageDisplayMap[challenge.language]}
                </Badge>
            </TableCell>
            <TableCell>
                <span className={difficultyColorMap[challenge.difficulty] || 'text-muted-foreground'}>{challenge.difficulty}</span>
            </TableCell>
            <TableCell className="text-right">
                 {isSolved ? (
                    <Badge variant="secondary" className="bg-green-500/10 text-green-700 border-green-500/20">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Completed!
                    </Badge>
                ) : (
                    <Button asChild size="sm">
                        <Link href={`/m/code-jigsaw/${challenge.id}`}>
                            <Puzzle className="mr-2 h-4 w-4" />
                            Start Puzzle
                        </Link>
                    </Button>
                )}
            </TableCell>
        </TableRow>
    )
}

function ChallengeTable({ difficulty, language, search, solvedGameIds }: { difficulty: string; language: string; search: string; solvedGameIds: Set<string> }) {
    let challenges = jigsawChallenges;

    if (difficulty !== 'all') {
        challenges = challenges.filter(c => c.difficulty === difficulty);
    }
    if (language !== 'all') {
        challenges = challenges.filter(c => c.language === language);
    }
    if (search) {
        const searchTerm = search.toLowerCase();
        challenges = challenges.filter(c => 
            c.title.toLowerCase().includes(searchTerm) || 
            c.description.toLowerCase().includes(searchTerm)
        );
    }

    return (
         <Card>
            <CardContent className="!p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Sr. No.</TableHead>
                            <TableHead className="w-1/2">Puzzle</TableHead>
                            <TableHead>Language</TableHead>
                            <TableHead>Difficulty</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {challenges.length > 0 ? (
                            challenges.map(challenge => (
                               <ChallengeRow 
                                    key={challenge.id} 
                                    challenge={challenge} 
                                    isSolved={solvedGameIds.has(challenge.id)}
                                />
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No puzzles found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

function PageContent() {
    const searchParams = useSearchParams();
    const { user, loading } = useAuth();
    const search = searchParams.get('search') || '';
    const difficulty = searchParams.get('difficulty') || 'all';
    const language = searchParams.get('language') || 'all';

    const [solvedGameIds, setSolvedGameIds] = useState<Set<string>>(new Set());
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient || loading) return;

        const fetchSolvedGames = async () => {
            if (user) {
                const userDocRef = doc(db, 'users', user.uid);
                try {
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        const solvedIds = new Set((userData.solvedMiniGames || []));
                        setSolvedGameIds(solvedIds);
                    }
                } catch (error) {
                    console.error("Error fetching user data from Firestore:", error);
                }
            } else {
                try {
                    const storedSolvedGames: string[] = JSON.parse(localStorage.getItem('solvedMiniGames') || '[]');
                    setSolvedGameIds(new Set(storedSolvedGames));
                } catch (e) {
                    console.error("Failed to parse solved mini-games from localStorage", e);
                }
            }
        };

        fetchSolvedGames();
    }, [user, loading, isClient]);

    if (!isClient || loading) {
        return (
          <DashboardLayout>
            <div className="flex justify-center items-center h-full"><Loader2 className="h-8 w-8 animate-spin" /></div>
          </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
          <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
             <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2"><Puzzle /> Code Jigsaw</h1>
                  <p className="text-muted-foreground">
                    Piece together scrambled code to solve the puzzle.
                  </p>
                </div>
              </div>
    
            <ChallengeFilter />
    
            <ChallengeTable search={search} difficulty={difficulty} language={language} solvedGameIds={solvedGameIds} />
          </div>
        </DashboardLayout>
      );
}

export default function CodeJigsawListPage() {
  return (
    <Suspense fallback={<DashboardLayout><div>Loading...</div></DashboardLayout>}>
      <PageContent />
    </Suspense>
  )
}
