
'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { challenges as battleChallenges, BattleChallenge } from "@/lib/battle-challenges";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Swords, Trophy, CheckCircle } from "lucide-react";
import { Button } from '@/components/ui/button';
import { useSearchParams, useRouter } from 'next/navigation';

const difficultyColorMap: { [key: string]: string } = {
    'Beginner': 'text-cyan-500',
    'Easy': 'text-green-500',
    'Medium': 'text-yellow-500',
    'Hard': 'text-red-500',
    'Very Hard': 'text-orange-500',
    'Extreme': 'text-fuchsia-600',
}

function QuestionRow({ challenge, isSolved }: { challenge: BattleChallenge, isSolved: boolean }) {
    return (
        <TableRow>
            <TableCell>{challenge.srNo}</TableCell>
            <TableCell className="w-2/3">
                 <p className="font-medium">{challenge.question}</p>
                 {challenge.code && (
                    <pre className="mt-2 bg-muted p-2 rounded-md font-code text-xs overflow-x-auto">
                        <code>{challenge.code}</code>
                    </pre>
                 )}
            </TableCell>
            <TableCell>
                 <Badge variant="outline">{challenge.domain}</Badge>
            </TableCell>
            <TableCell>
                <span className={difficultyColorMap[challenge.difficulty] || 'text-muted-foreground'}>{challenge.difficulty}</span>
            </TableCell>
            <TableCell className="text-right">
                {isSolved ? (
                    <Badge variant="secondary" className="bg-green-500/10 text-green-700 border-green-500/20">
                        <Trophy className="mr-2 h-4 w-4" />
                        Won!
                    </Badge>
                ) : (
                    <Button asChild size="sm">
                        <Link href={`/m/battle/${challenge.id}`}>
                            <Swords className="mr-2 h-4 w-4" />
                            Fight
                        </Link>
                    </Button>
                )}
            </TableCell>
        </TableRow>
    )
}

function PageContent() {
  const [solvedGames, setSolvedGames] = useState<Set<string>>(new Set());
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Check for win status from URL
    const status = searchParams.get('status');
    const challengeId = searchParams.get('id');

    if (status === 'won' && challengeId) {
      try {
        const storedSolvedGames: string[] = JSON.parse(localStorage.getItem('solvedMiniGames') || '[]');
        if (!storedSolvedGames.includes(challengeId)) {
          storedSolvedGames.push(challengeId);
          localStorage.setItem('solvedMiniGames', JSON.stringify(storedSolvedGames));
        }
        // Update state to re-render the table
        setSolvedGames(new Set(storedSolvedGames));

        // Clean the URL
        const newUrl = window.location.pathname;
        router.replace(newUrl, { scroll: false });
      } catch (e) {
        console.error("Failed to update solved mini-games in localStorage", e);
      }
    } else {
        // Initial load without status
        try {
          const storedSolvedGames: string[] = JSON.parse(localStorage.getItem('solvedMiniGames') || '[]');
          setSolvedGames(new Set(storedSolvedGames));
        } catch (e) {
          console.error("Failed to parse solved mini-games from localStorage", e);
        }
    }
  }, [searchParams, router]);

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
         <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2"><Swords /> Monster Battle</h1>
              <p className="text-muted-foreground">
                Choose a challenge to begin your battle.
              </p>
            </div>
          </div>


        <Card>
            <CardContent className="!p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Sr. No.</TableHead>
                            <TableHead className="w-2/3">Question</TableHead>
                            <TableHead>Domain</TableHead>
                            <TableHead>Difficulty</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {battleChallenges.map(challenge => (
                           <QuestionRow 
                                key={challenge.id} 
                                challenge={challenge} 
                                isSolved={solvedGames.has(challenge.id)}
                            />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}


export default function MonsterBattleListPage() {
  return (
    <Suspense fallback={<DashboardLayout><div>Loading...</div></DashboardLayout>}>
      <PageContent />
    </Suspense>
  )
}
