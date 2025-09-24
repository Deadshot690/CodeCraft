"use client";

import Link from "next/link";
import React from "react";
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
import { Swords } from "lucide-react";

export default function MonsterBattleLobbyPage() {

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

  return (
    <div className="flex flex-col">
       <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl">
          Monster Battle: Choose Your Challenge
        </h1>
      </header>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Challenge</TableHead>
                  <TableHead className="hidden md:table-cell">Category</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead className="hidden md:table-cell">XP</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {battleQuestions.map((question) => (
                  <TableRow key={question.id}>
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
        </div>
      </div>
    </div>
  );
}
