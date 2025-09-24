
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
import { battleQuestions } from "@/lib/data";
import type { BattleQuestion } from "@/lib/types";
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
import { Search, Swords } from "lucide-react";

type Category = BattleQuestion['category'] | 'all';
type Difficulty = BattleQuestion['difficulty'] | 'all';

export default function MonsterBattleLobbyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('all');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const categories = useMemo(() => ['all', ...Array.from(new Set(battleQuestions.map(q => q.category)))], []);
  const difficulties = useMemo(() => ['all', ...Array.from(new Set(battleQuestions.map(q => q.difficulty)))], []);


  const filteredQuestions = useMemo(() => battleQuestions.filter((question) => {
    const matchesCategory = selectedCategory === 'all' || question.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || question.difficulty === selectedDifficulty;
    const matchesSearch = question.question.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  }), [searchQuery, selectedCategory, selectedDifficulty]);

  const difficultyVariant = (difficulty: BattleQuestion['difficulty']): "default" | "secondary" | "destructive" | "outline" => {
    switch (difficulty) {
      case "Beginner":
        return "default";
      case "Intermediate":
        return "secondary";
      case "Advanced":
        return "outline";
      case "Expert":
        return "destructive";
      default:
        return "default";
    }
  }

  if (!isClient) {
    return null; // Or a loading spinner
  }

  return (
    <div className="flex flex-col">
       <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl">
          Monster Battle: Choose Your Challenge
        </h1>
      </header>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search challenges..." 
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
           {filteredQuestions.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Sr.No.</TableHead>
                  <TableHead>Challenge</TableHead>
                  <TableHead className="hidden md:table-cell">Category</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead className="hidden md:table-cell">XP</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredQuestions.map((question, index) => (
                  <TableRow key={question.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">{question.question}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{question.category}</TableCell>
                    <TableCell>
                      <Badge variant={difficultyVariant(question.difficulty)}>{question.difficulty}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-primary font-semibold">
                      {question.xp} XP
                    </TableCell>
                    <TableCell className="text-right">
                      <Button asChild size="sm">
                        <Link href={`/games/monster-battle/${question.id}`}>
                          <Swords className="mr-2 h-4 w-4" />
                          Battle!
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

    