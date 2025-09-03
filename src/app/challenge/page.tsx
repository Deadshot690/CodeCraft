
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { getAllChallenges, Challenge } from "@/lib/challenges";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { Suspense } from 'react';
import ChallengeFilter from './_components/challenge-filter';

const difficultyColorMap: { [key: string]: string } = {
    'Easy': 'text-green-500',
    'Medium': 'text-yellow-500',
    'Hard': 'text-red-500',
};

function ChallengeRow({ challenge, isSolved }: { challenge: Challenge, isSolved: boolean }) {
    return (
        <TableRow>
            <TableCell>
                <div className="flex items-center gap-2">
                    {/* Note: isSolved will not work on server, would need a DB. This is a placeholder. */}
                    <CheckCircle className={`text-green-500 invisible`} /> 
                    <Link href={`/challenge/${challenge.id}`} className="font-medium hover:underline">
                        {challenge.title}
                    </Link>
                </div>
            </TableCell>
            <TableCell>
                <span className={difficultyColorMap[challenge.difficulty]}>{challenge.difficulty}</span>
            </TableCell>
            <TableCell>
                 <Badge variant="outline" className="border-primary text-primary">{challenge.domain}</Badge>
            </TableCell>
            <TableCell>
                <div className="flex flex-wrap gap-2">
                    {challenge.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
            </TableCell>
        </TableRow>
    )
}

function ChallengeTable({ status, difficulty, tag }: { status: string; difficulty: string; tag: string; }) {
    let challenges = getAllChallenges();

    if (difficulty !== 'all') {
        challenges = challenges.filter(c => c.difficulty === difficulty);
    }

    if (tag !== 'all') {
        challenges = challenges.filter(c => c.tags.includes(tag));
    }
    
    // Note: 'status' filter for solved/unsolved is removed as it depends on localStorage, 
    // which is not available on the server. This would need a database to be implemented fully.

    return (
        <Card>
            <CardContent className="!p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-2/5">Title</TableHead>
                            <TableHead>Difficulty</TableHead>
                            <TableHead>Domain</TableHead>
                            <TableHead>Tags</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {challenges.map(challenge => (
                           <ChallengeRow 
                                key={challenge.id} 
                                challenge={challenge} 
                                isSolved={false} // Placeholder
                            />
                        ))}
                    </TableBody>
                </Table>
                 {challenges.length === 0 && (
                    <div className="text-center p-8 text-muted-foreground">
                        No challenges found matching your criteria.
                    </div>
                )}
            </CardContent>
        </Card>
    );
}


export default function AllChallengesPage({
  searchParams,
}: {
  searchParams?: {
    status?: string;
    difficulty?: string;
    tag?: string;
  };
}) {
    const status = searchParams?.status ?? 'all';
    const difficulty = searchParams?.difficulty ?? 'all';
    const tag = searchParams?.tag ?? 'all';

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
         <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-headline">Challenges</h1>
              <p className="text-muted-foreground">
                Sharpen your skills with our collection of challenges.
              </p>
            </div>
          </div>

        <ChallengeFilter />

        <Suspense fallback={<div>Loading challenges...</div>}>
            <ChallengeTable status={status} difficulty={difficulty} tag={tag} />
        </Suspense>
      </div>
    </DashboardLayout>
  );
}
