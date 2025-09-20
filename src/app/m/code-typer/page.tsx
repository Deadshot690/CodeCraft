
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { typerChallenges, TyperChallenge } from "@/lib/typer-challenges";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Code, Keyboard, Languages } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';
import ChallengeFilter from './_components/challenge-filter';

const difficultyColorMap: { [key: string]: string } = {
    'Easy': 'text-green-500',
    'Medium': 'text-yellow-500',
    'Hard': 'text-red-500',
};

const languageDisplayMap: { [key: string]: string } = {
    'javascript': 'JavaScript',
    'python': 'Python',
    'html': 'HTML',
    'css': 'CSS',
    'java': 'Java',
    'cpp': 'C++',
};

function ChallengeRow({ challenge }: { challenge: TyperChallenge }) {
    return (
        <TableRow>
            <TableCell>{challenge.srNo}</TableCell>
            <TableCell className="w-1/2">
                 <p className="font-medium">{challenge.title}</p>
                 <pre className="text-sm text-muted-foreground mt-1 bg-muted/50 p-2 rounded-md font-code overflow-x-auto"><code>{challenge.snippet.substring(0, 80)}{challenge.snippet.length > 80 ? '...' : ''}</code></pre>
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
                <Button asChild size="sm">
                    <Link href={`/m/code-typer/${challenge.id}`}>
                        <Keyboard className="mr-2 h-4 w-4" />
                        Start Typing
                    </Link>
                </Button>
            </TableCell>
        </TableRow>
    )
}

function ChallengeTable({ difficulty, language, search }: { difficulty: string; language: string; search: string; }) {
    let challenges = typerChallenges;

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
            c.snippet.toLowerCase().includes(searchTerm)
        );
    }

    return (
        <Card>
            <CardContent className="!p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Sr. No.</TableHead>
                            <TableHead className="w-1/2">Snippet</TableHead>
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
                                />
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No challenges found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

export default function CodeTyperListPage({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    difficulty?: string;
    language?: string;
  };
}) {
    const search = searchParams?.search || '';
    const difficulty = searchParams?.difficulty || 'all';
    const language = searchParams?.language || 'all';

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
         <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2"><Code /> Code Typer</h1>
              <p className="text-muted-foreground">
                Improve your typing speed and accuracy with real code snippets.
              </p>
            </div>
          </div>

        <ChallengeFilter />

        <Suspense fallback={<div>Loading challenges...</div>}>
            <ChallengeTable search={search} difficulty={difficulty} language={language} />
        </Suspense>
      </div>
    </DashboardLayout>
  );
}
