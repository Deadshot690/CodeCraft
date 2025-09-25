
"use client";

import Link from "next/link";
import React, { useState, useMemo, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { securityFortressChallenges } from "@/lib/data";
import type { SecurityFortressChallenge } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Shield } from "lucide-react";

type Category = SecurityFortressChallenge['category'] | 'all';
type Difficulty = SecurityFortressChallenge['difficulty'] | 'all';

export default function SecurityFortressLobbyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('all');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const categories = useMemo(() => ['all', ...Array.from(new Set(securityFortressChallenges.map(q => q.category)))], []);
  const difficulties = useMemo(() => ['all', ...Array.from(new Set(securityFortressChallenges.map(q => q.difficulty)))], []);


  const filteredChallenges = useMemo(() => securityFortressChallenges.filter((challenge) => {
    const matchesCategory = selectedCategory === 'all' || challenge.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty;
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  }), [searchQuery, selectedCategory, selectedDifficulty]);

  const difficultyVariant = (difficulty: SecurityFortressChallenge['difficulty']): "default" | "secondary" | "destructive" | "outline" => {
    switch (difficulty) {
      case "Beginner":
        return "default";
      case "Intermediate":
        return "secondary";
      case "Advanced":
        return "destructive";
      default:
        return "default";
    }
  }

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col">
       <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl">
          Security Fortress: Choose a Vulnerability
        </h1>
      </header>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search vulnerabilities..." 
              className="pl-10" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <Select onValueChange={(value: Category) => setSelectedCategory(value)} defaultValue="all">
              <SelectTrigger className="w-full md:w-[220px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                    <SelectItem key={category} value={category}>{category === 'all' ? 'All Categories' : category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={(value: Difficulty) => setSelectedDifficulty(value)} defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="All Difficulties" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map(difficulty => (
                    <SelectItem key={difficulty} value={difficulty}>{difficulty === 'all' ? 'All Difficulties' : difficulty}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="border rounded-lg">
           {filteredChallenges.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Sr. No.</TableHead>
                  <TableHead>Challenge</TableHead>
                  <TableHead className="hidden md:table-cell">Category</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead className="hidden md:table-cell">XP</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredChallenges.map((challenge, index) => (
                  <TableRow key={challenge.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">{challenge.title}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{challenge.category}</TableCell>
                    <TableCell>
                      <Badge variant={difficultyVariant(challenge.difficulty)}>{challenge.difficulty}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-primary font-semibold">
                      {challenge.xp} XP
                    </TableCell>
                    <TableCell className="text-right">
                      <Button asChild size="sm">
                        <Link href={`/games/security-fortress/${challenge.id}`}>
                          <Shield className="mr-2 h-4 w-4" />
                          Fortify
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
             ) : (
                <div className="text-center p-8 text-muted-foreground">
                No challenges found matching your criteria.
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
