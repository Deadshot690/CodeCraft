
'use client';

import { useState } from 'react';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getCommanderChallenge, CommanderChallenge } from '@/lib/code-commander-challenges';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, Bug, ArrowRight, Bot } from 'lucide-react';
import { runTestAction, submitAction } from '@/app/actions';
import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import IdePanel from '@/components/ide-panel';


export default function CodeCommanderPage() {
    const [level, setLevel] = useState(0);
    const [challenge, setChallenge] = useState<CommanderChallenge>(getCommanderChallenge(level)!);
    
    const handleNextLevel = () => {
        const nextLevel = level + 1;
        const nextChallenge = getCommanderChallenge(nextLevel);
        if (nextChallenge) {
            setLevel(nextLevel);
            setChallenge(nextChallenge);
        } else {
            // Handle game completion
            alert("Congratulations! You've completed all levels!");
        }
    };

    return (
        <DashboardLayout>
            <div className="h-[calc(100vh-60px)] flex">
                {/* Left Panel: Game View */}
                <div className="w-1/2 p-4 lg:p-6 border-r flex flex-col gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl flex items-center gap-2">
                                <Bot /> Code Commander
                            </CardTitle>
                            <CardDescription>Level {level + 1}: {challenge.title}</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <p className="prose prose-sm dark:prose-invert max-w-none">{challenge.description}</p>
                        </CardContent>
                    </Card>

                    <div className="flex-grow grid grid-cols-3 gap-4 items-center p-4 bg-muted/30 rounded-lg border">
                        <div className="flex flex-col items-center justify-center text-center">
                            <Shield className="w-24 h-24 text-blue-500" />
                            <p className="mt-2 font-bold">Defense Tower</p>
                            <p className="text-sm text-muted-foreground">Your code controls its logic.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                           <ArrowRight className="w-16 h-16 text-muted-foreground" />
                        </div>
                         <div className="flex flex-col items-center justify-center text-center">
                            <Bug className="w-24 h-24 text-red-500" />
                            <p className="mt-2 font-bold">Enemy "Bug"</p>
                            <p className="text-sm text-muted-foreground">Will it be defeated?</p>
                        </div>
                    </div>
                     <Button onClick={handleNextLevel}>
                        Next Level <ArrowRight className="ml-2" />
                    </Button>
                </div>

                {/* Right Panel: IDE */}
                <div className="w-1/2 flex flex-col h-full">
                    {/* The key prop ensures the IDE resets when the challenge changes */}
                    <IdePanel key={challenge.id} challenge={challenge as any} />
                </div>
            </div>
        </DashboardLayout>
    );
}
