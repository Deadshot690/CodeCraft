
'use client';

import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { getAllChallenges, Challenge } from "@/lib/challenges";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const difficultyColorMap = {
    'Easy': 'text-green-500',
    'Medium': 'text-yellow-500',
    'Hard': 'text-red-500',
}

function ChallengeRow({ challenge, isSolved }: { challenge: Challenge, isSolved: boolean }) {
    return (
        <TableRow>
            <TableCell>
                <div className="flex items-center gap-2">
                    <CheckCircle className={`text-green-500 ${isSolved ? 'visible' : 'invisible'}`} />
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


export default function AllChallengesPage() {
    const allChallenges = getAllChallenges();
    const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>(allChallenges);
    const [solvedChallenges, setSolvedChallenges] = useState<Set<string>>(new Set());
    
    // State for filters
    const [statusFilter, setStatusFilter] = useState('all');
    const [difficultyFilter, setDifficultyFilter] = useState('all');
    const [tagFilter, setTagFilter] = useState('all');

    const allTags = [...new Set(allChallenges.flatMap(c => c.tags))];

    useEffect(() => {
        const storedSolved = localStorage.getItem('solvedChallenges');
        if (storedSolved) {
            setSolvedChallenges(new Set(JSON.parse(storedSolved)));
        }
    }, []);

    useEffect(() => {
        let challenges = allChallenges;

        if (statusFilter !== 'all') {
            challenges = challenges.filter(c => 
                statusFilter === 'solved' ? solvedChallenges.has(c.id) : !solvedChallenges.has(c.id)
            );
        }

        if (difficultyFilter !== 'all') {
            challenges = challenges.filter(c => c.difficulty === difficultyFilter);
        }

        if (tagFilter !== 'all') {
            challenges = challenges.filter(c => c.tags.includes(tagFilter));
        }

        setFilteredChallenges(challenges);
    }, [statusFilter, difficultyFilter, tagFilter, allChallenges, solvedChallenges]);
    
    const resetFilters = () => {
        setStatusFilter('all');
        setDifficultyFilter('all');
        setTagFilter('all');
    }

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

        <div className="flex flex-col md:flex-row items-center gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="solved">Solved</SelectItem>
                    <SelectItem value="unsolved">Unsolved</SelectItem>
                </SelectContent>
            </Select>

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

            <Select value={tagFilter} onValueChange={setTagFilter}>
                <SelectTrigger className="w-full md:w-[240px]">
                    <SelectValue placeholder="Filter by tag" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Tags</SelectItem>
                    {allTags.map(tag => (
                        <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Button variant="ghost" onClick={resetFilters} className="flex items-center gap-2">
                <XCircle className="h-4 w-4" />
                Reset Filters
            </Button>
        </div>

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
                        {filteredChallenges.map(challenge => (
                           <ChallengeRow 
                                key={challenge.id} 
                                challenge={challenge} 
                                isSolved={solvedChallenges.has(challenge.id)}
                            />
                        ))}
                    </TableBody>
                </Table>
                 {filteredChallenges.length === 0 && (
                    <div className="text-center p-8 text-muted-foreground">
                        No challenges found matching your criteria.
                    </div>
                )}
            </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
