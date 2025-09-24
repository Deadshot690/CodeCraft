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
import { codeJigsawChallenges } from "@/lib/data";
import type { CodeJigsawChallenge } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Puzzle } from "lucide-react";

export default function CodeJigsawLobbyPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const difficultyVariant = (difficulty: CodeJigsawChallenge['difficulty']): "default" | "secondary" | "destructive" | "outline" => {
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
    return null; // Or a loading spinner
  }

  return (
    <div className="flex flex-col">
       <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl">
          Code Jigsaw: Choose a Puzzle
        </h1>
      </header>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="border rounded-lg">
           {codeJigsawChallenges.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Challenge</TableHead>
                  <TableHead className="hidden md:table-cell">Language</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead className="hidden md:table-cell">XP</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {codeJigsawChallenges.map((challenge) => (
                  <TableRow key={challenge.id}>
                    <TableCell className="font-medium">{challenge.title}</TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">{challenge.language.charAt(0).toUpperCase() + challenge.language.slice(1)}</TableCell>
                    <TableCell>
                      <Badge variant={difficultyVariant(challenge.difficulty)}>{challenge.difficulty}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-primary font-semibold">
                      {challenge.xp} XP
                    </TableCell>
                    <TableCell className="text-right">
                      <Button asChild size="sm">
                        <Link href={`/games/code-jigsaw/${challenge.id}`}>
                          <Puzzle className="mr-2 h-4 w-4" />
                          Start Puzzle
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
             ) : (
                <div className="text-center p-8 text-muted-foreground">
                No puzzles found.
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
