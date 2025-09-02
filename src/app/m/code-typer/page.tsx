
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { typerChallenges, TyperChallenge } from "@/lib/typer-challenges";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Code, Keyboard, Languages } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from '@/components/ui/input';

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
};

function ChallengeRow({ challenge }: { challenge: TyperChallenge }) {
    return (
        <TableRow>
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

export default function CodeTyperListPage() {
    const [filteredChallenges, setFilteredChallenges] = useState<TyperChallenge[]>(typerChallenges);
    const [difficultyFilter, setDifficultyFilter] = useState('all');
    const [languageFilter, setLanguageFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        let challenges = typerChallenges;

        if (difficultyFilter !== 'all') {
            challenges = challenges.filter(c => c.difficulty === difficultyFilter);
        }
        if (languageFilter !== 'all') {
            challenges = challenges.filter(c => c.language === languageFilter);
        }
        if (searchTerm) {
            challenges = challenges.filter(c => 
                c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                c.snippet.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredChallenges(challenges);
    }, [difficultyFilter, languageFilter, searchTerm]);

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

        <div className="flex flex-col md:flex-row items-center gap-4">
            <Input 
                placeholder="Search snippets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:max-w-sm"
            />
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by difficulty" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Difficulties</SelectItem>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
            </Select>
            <Select value={languageFilter} onValueChange={setLanguageFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Languages</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="html">HTML</SelectItem>
                    <SelectItem value="css">CSS</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <Card>
            <CardContent className="!p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-1/2">Snippet</TableHead>
                            <TableHead>Language</TableHead>
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
      </div>
    </DashboardLayout>
  );
}
