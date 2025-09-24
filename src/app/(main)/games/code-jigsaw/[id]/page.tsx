
"use client";

import React, { useState, useMemo, useEffect, use } from "react";
import { notFound, useRouter } from "next/navigation";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import type { DropResult } from "react-beautiful-dnd";
import { codeJigsawChallenges } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ChevronLeft, Lightbulb, PartyPopper, GripVertical, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";


// Helper function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  // Guard against shuffling a single-item array into the same order
  if (array.length <= 1) return [...array];
  
  let shuffled;
  do {
    shuffled = [...array].sort(() => Math.random() - 0.5);
  } while (JSON.stringify(shuffled) === JSON.stringify(array));
  
  return shuffled;
};

export default function CodeJigsawArenaPage({ params }: { params: { id: string } }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  const challenge = useMemo(() => {
    return codeJigsawChallenges.find((c) => c.id === resolvedParams.id);
  }, [resolvedParams.id]);

  const [puzzleLines, setPuzzleLines] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    setIsClient(true);
    if (challenge) {
      setPuzzleLines(shuffleArray(challenge.lines));
      setIsCorrect(null);
    }
  }, [challenge]);

  if (!challenge) {
    notFound();
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // If dropped outside of any droppable area
    if (!destination) {
      return;
    }
    
    // Reorder logic for a single list
    const newLines = Array.from(puzzleLines);
    const [reorderedItem] = newLines.splice(source.index, 1);
    newLines.splice(destination.index, 0, reorderedItem);

    setPuzzleLines(newLines);
  };

  const checkSolution = () => {
    // Compare the reordered lines with the original correct lines
    if (JSON.stringify(puzzleLines) === JSON.stringify(challenge.lines)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextChallenge = () => {
    const currentIndex = codeJigsawChallenges.findIndex(c => c.id === challenge.id);
    const nextChallenge = codeJigsawChallenges[(currentIndex + 1) % codeJigsawChallenges.length];
    router.push(`/games/code-jigsaw/${nextChallenge.id}`);
  };
  
  return (
    <div className="flex flex-col h-screen">
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <Button variant="outline" size="icon" className="h-8 w-8" asChild>
          <a href="/games/code-jigsaw"><ChevronLeft className="h-4 w-4" /></a>
        </Button>
        <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl truncate">
          Code Jigsaw: {challenge.title}
        </h1>
        <div className="ml-auto">
            <Button onClick={handleNextChallenge}>Next Puzzle</Button>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-4 md:p-6">
          <Card className="mb-6 max-w-4xl mx-auto">
              <CardHeader>
                  <CardTitle className="font-headline">{challenge.title}</CardTitle>
                   <CardDescription className="flex items-center gap-4 pt-2">
                        <Badge variant="outline">{challenge.language}</Badge>
                        <Badge variant="secondary">{challenge.difficulty}</Badge>
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                            {challenge.xp} XP
                        </Badge>
                    </CardDescription>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">{challenge.description}</p>
              </CardContent>
          </Card>
          
          {isClient && (
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="max-w-4xl mx-auto">
                    {/* The only droppable area */}
                    <div className="flex flex-col gap-4">
                        <h2 className="font-headline text-lg font-semibold">Arrange the Code</h2>
                        <Droppable droppableId="puzzle">
                            {(provided, snapshot) => (
                                <Card 
                                    ref={provided.innerRef} 
                                    {...provided.droppableProps}
                                    className={`min-h-[200px] p-4 transition-colors ${snapshot.isDraggingOver ? 'bg-accent' : ''}`}
                                >
                                    {puzzleLines.map((line, index) => (
                                        <Draggable key={`line-${index}`} draggableId={`line-${line}-${index}`} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={`mb-2 flex items-center gap-2 rounded-md p-3 font-code text-sm shadow-sm transition-shadow ${snapshot.isDragging ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
                                                >
                                                    <GripVertical className="h-5 w-5 text-muted-foreground" />
                                                    <span className="w-6 text-muted-foreground">{index + 1}.</span>
                                                    <pre className="whitespace-pre-wrap">{line}</pre>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                    {puzzleLines.length === 0 && <p className="text-center text-muted-foreground p-4">Loading puzzle...</p>}
                                </Card>
                            )}
                        </Droppable>
                    </div>
                </div>
            </DragDropContext>
          )}
          
          <div className="mt-6 flex flex-col items-center gap-4">
              <Button onClick={checkSolution} disabled={puzzleLines.length === 0}>
                  <Check className="mr-2 h-4 w-4" />
                  Check Answer
              </Button>

              {isCorrect === true && (
                  <Alert className="max-w-md bg-green-500/10 border-green-500/50">
                      <PartyPopper className="h-4 w-4 text-green-500" />
                      <AlertTitle className="font-bold text-green-400">Correct!</AlertTitle>
                      <AlertDescription>
                          Excellent! You pieced the code together perfectly. You've earned {challenge.xp} XP!
                      </AlertDescription>
                  </Alert>
              )}
              {isCorrect === false && (
                  <Alert variant="destructive" className="max-w-md">
                      <Lightbulb className="h-4 w-4" />
                      <AlertTitle className="font-bold">Not Quite</AlertTitle>
                      <AlertDescription>
                          The lines aren't in the right order yet. Keep trying!
                      </AlertDescription>
                  </Alert>
              )}
          </div>
      </div>
    </div>
  );
}
