
'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { DashboardLayout } from "@/components/dashboard-layout";
import { challenges, Challenge } from "@/lib/challenges";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Code, CheckCircle, Trophy, FileCode, Loader2 } from "lucide-react";
import { Button } from '@/components/ui/button';
import ChallengeFilter from './_components/challenge-filter';
import { useProgress } from '@/hooks/use-progress';

const difficultyColorMap: { [key: string]: string } = {
    'Easy': 'text-green-500',
    'Medium': 'text-yellow-500',
    'Hard': 'text-red-500',
};

function ChallengeRow({ challenge, isSolved }: { challenge: Challenge, isSolved: boolean }) {
    return (
        <TableRow>
            <TableCell>{challenge.srNo}</TableCell>
            <TableCell className="font-medium">
                <Link href={`/challenge/${challenge.id}`} className="hover:underline">
                    {challenge.title}
                </Link>
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
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Solved
                    </Badge>
                ) : (
                    <Button asChild size="sm">
                        <Link href={`/challenge/${challenge.id}`}>
                            <FileCode className="mr-2 h-4 w-4" />
                            Solve
                        </Link>
                    </Button>
                )}
            </TableCell>
        </TableRow>
    )
}

function ChallengeTable({ difficulty, domain, search }: { difficulty: string; domain: string; search: string; }) {
    const { solvedChallengeIds, loading } = useProgress();

    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <p className="ml-4 text-muted-foreground">Loading challenges...</p>
         </div>
      );
    }

    let filteredChallenges = challenges;

    if (difficulty !== 'all') {
        filteredChallenges = filteredChallenges.filter(c => c.difficulty === difficulty);
    }
    if (domain !== 'all') {
        filteredChallenges = filteredChallenges.filter(c => c.domain === domain);
    }
    if (search) {
        const searchTerm = search.toLowerCase();
        filteredChallenges = filteredChallenges.filter(c => 
            c.title.toLowerCase().includes(searchTerm) || 
            c.description.toLowerCase().includes(searchTerm) ||
            c.tags.some(t => t.toLowerCase().includes(searchTerm))
        );
    }

    return (
        <Card>
            <CardContent className="!p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>#</TableHead>
                            <TableHead className="w-1/2">Title</TableHead>
                            <TableHead>Domain</TableHead>
                            <TableHead>Difficulty</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredChallenges.length > 0 ? (
                            filteredChallenges.map(challenge => (
                               <ChallengeRow 
                                    key={challenge.id} 
                                    challenge={challenge} 
                                    isSolved={solvedChallengeIds.has(challenge.id)}
                                />
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No challenges found. Try adjusting your filters.
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
    const search = searchParams.get('search') || '';
    const difficulty = searchParams.get('difficulty') || 'all';
    const domain = searchParams.get('domain') || 'all';

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2"><Trophy /> Coding Challenges</h1>
            <p className="text-muted-foreground">
              Select a challenge and start coding.
            </p>
          </div>
        </div>

        <ChallengeFilter />

        <ChallengeTable search={search} difficulty={difficulty} domain={domain} />
      </div>
    </DashboardLayout>
  );
}

export default function AllChallengesPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PageContent />
        </Suspense>
    )
}
