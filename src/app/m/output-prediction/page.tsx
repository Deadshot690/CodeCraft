
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { outputPredictionChallenges, OutputPredictionChallenge } from "@/lib/output-prediction-challenges";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Languages } from "lucide-react";
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
    'java': 'Java',
    'cpp': 'C++',
};

function ChallengeRow({ challenge }: { challenge: OutputPredictionChallenge }) {
    return (
        <TableRow>
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
                <Button asChild size="sm">
                    <Link href={`/m/output-prediction/${challenge.id}`}>
                        <BrainCircuit className="mr-2 h-4 w-4" />
                        Predict
                    </Link>
                </Button>
            </TableCell>
        </TableRow>
    )
}

function ChallengeTable({ difficulty, language, search }: { difficulty: string; language: string; search: string; }) {
    let challenges = outputPredictionChallenges;

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
                            <TableHead className="w-1/2">Challenge</TableHead>
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
                                <TableCell colSpan={4} className="h-24 text-center">
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


export default function OutputPredictionListPage({
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
              <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2"><BrainCircuit /> Output Prediction</h1>
              <p className="text-muted-foreground">
                Predict the output of code snippets to test your knowledge.
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
