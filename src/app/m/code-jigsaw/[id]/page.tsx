
'use client';

import { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { getJigsawChallengeById, JigsawChallenge } from "@/lib/jigsaw-challenges";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Puzzle, CheckCircle, XCircle, Shuffle, Lightbulb, Sparkles } from 'lucide-react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

function shuffleArray(array: any[]) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function SortableItem({ id, isCorrect, isIncorrect }: { id: string, isCorrect: boolean | null, isIncorrect: boolean | null }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const baseClasses = "p-3 bg-muted rounded-md font-code text-sm shadow-sm cursor-grab active:cursor-grabbing select-none";
  const correctClasses = "border-2 border-green-500 bg-green-500/10";
  const incorrectClasses = "border-2 border-destructive bg-destructive/10";

  return (
    <div 
        ref={setNodeRef} 
        style={style} 
        {...attributes} 
        {...listeners} 
        className={`${baseClasses} ${isCorrect ? correctClasses : ''} ${isIncorrect ? incorrectClasses : ''}`}
    >
      {id}
    </div>
  );
}


export default function CodeJigsawGamePage() {
    const params = useParams<{ id: string }>();
    const [challenge, setChallenge] = useState<JigsawChallenge | null>(null);
    const [scrambledLines, setScrambledLines] = useState<string[]>([]);
    const [solutionLines, setSolutionLines] = useState<string[]>([]);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const { toast } = useToast();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    useEffect(() => {
        const foundChallenge = getJigsawChallengeById(params.id);
        if (foundChallenge) {
            setChallenge(foundChallenge);
            resetGame(foundChallenge);
        } else {
            notFound();
        }
    }, [params.id]);
    
    const resetGame = (challengeToReset: JigsawChallenge) => {
        setSolutionLines(shuffleArray(challengeToReset.correctOrder));
        setIsCorrect(null);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            setSolutionLines((items) => {
                const oldIndex = items.indexOf(active.id as string);
                const newIndex = items.indexOf(over.id as string);
                return arrayMove(items, oldIndex, newIndex);
            });
            setIsCorrect(null); // Reset correctness on change
        }
    };
    
    const checkAnswer = () => {
        if (!challenge) return;
        const correct = JSON.stringify(solutionLines) === JSON.stringify(challenge.correctOrder);
        setIsCorrect(correct);
        if (correct) {
            toast({
                title: "Correct!",
                description: "You've assembled the code perfectly.",
            });
        } else {
            toast({
                variant: "destructive",
                title: "Not Quite",
                description: "The order is incorrect. Keep trying!",
            });
        }
    };

    if (!challenge) {
        return <DashboardLayout><div>Loading...</div></DashboardLayout>;
    }

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                 <div className="flex-shrink-0 p-4 border-b flex justify-between items-center">
                    <Button variant="outline" asChild>
                        <Link href="/m/code-jigsaw">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Puzzles
                        </Link>
                    </Button>
                    <div className="text-center">
                        <h1 className="text-xl font-bold tracking-tight font-headline">{challenge.title}</h1>
                        <p className="text-sm text-muted-foreground">{challenge.description}</p>
                    </div>
                    <Button variant="ghost" onClick={() => resetGame(challenge)}>
                        <Shuffle className="mr-2 h-4 w-4" />
                        Reset
                    </Button>
                </div>
                <div className="flex-grow p-4 md:p-6 flex justify-center items-start">
                     <Card className="w-full max-w-2xl">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Puzzle /> Your Solution</CardTitle>
                            <CardDescription>Drag and drop the lines below into the correct order.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                                 <SortableContext items={solutionLines} strategy={verticalListSortingStrategy}>
                                    <div className="space-y-2 bg-background p-4 rounded-lg border">
                                        {solutionLines.map((line, index) => (
                                            <SortableItem key={`${line}-${index}`} id={line} isCorrect={isCorrect} isIncorrect={isCorrect === false} />
                                        ))}
                                    </div>
                                 </SortableContext>
                             </DndContext>
                        </CardContent>
                        <CardFooter className="flex-col gap-4">
                            <Button onClick={checkAnswer} className="w-full">
                                <CheckCircle className="mr-2" />
                                Submit Answer
                            </Button>
                             {isCorrect === true && (
                                <Alert className="border-green-500 text-green-700">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <AlertTitle>Success!</AlertTitle>
                                    <AlertDescription>Great job! The code is in the correct order.</AlertDescription>
                                </Alert>
                            )}
                             {isCorrect === false && (
                                <Alert variant="destructive">
                                    <XCircle className="h-4 w-4" />
                                    <AlertTitle>Incorrect</AlertTitle>
                                    <AlertDescription>That's not quite right. Rearrange the lines and try again.</AlertDescription>
                                </Alert>
                            )}
                        </CardFooter>
                     </Card>
                </div>
            </div>
        </DashboardLayout>
    );
}
