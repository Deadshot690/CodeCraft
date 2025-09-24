"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter, notFound, useParams } from 'next/navigation';
import { codeTyperChallenges } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

export default function CodeTyperArenaPage() {
    const params = useParams();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const challenge = useMemo(() => {
        if (!isClient) return null;
        return codeTyperChallenges.find((c) => c.id === params.id);
    }, [isClient, params.id]);

    const [userInput, setUserInput] = useState('');

    if (!isClient) {
        return null; // Or a loading spinner
    }

    if (!challenge) {
        notFound();
    }

    return (
        <div className="flex flex-col h-screen p-4 md:p-6">
            <header className="flex h-16 shrink-0 items-center gap-4">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => router.push('/games/code-typer')}>
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl truncate">
                    Code Typer: {challenge.title}
                </h1>
            </header>

            <main className="flex-1 flex flex-col gap-6 pt-4">
                <Card className="flex-1 flex flex-col">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Code to Type</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <pre className="p-4 bg-muted rounded-md text-sm text-foreground overflow-auto font-code whitespace-pre-wrap">
                            <code>
                                {challenge.snippet}
                            </code>
                        </pre>
                    </CardContent>
                </Card>

                <Card className="flex-1 flex flex-col">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Your Input</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <Textarea
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            className="h-full font-code text-sm"
                            placeholder="Start typing here..."
                        />
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
