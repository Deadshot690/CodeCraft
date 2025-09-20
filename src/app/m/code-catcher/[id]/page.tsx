
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { DashboardLayout } from "@/components/dashboard-layout";
import { getCatcherChallengeById, CatcherChallenge } from '@/lib/catcher-challenges';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Heart, Star, Play } from 'lucide-react';

export default function CodeCatcherGamePage() {
    const params = useParams<{ id: string }>();
    const [challenge, setChallenge] = useState<CatcherChallenge | null>(null);

    useEffect(() => {
        const foundChallenge = getCatcherChallengeById(params.id);
        if (foundChallenge) {
            setChallenge(foundChallenge);
        } else {
            notFound();
        }
    }, [params.id]);

    if (!challenge) {
        return <DashboardLayout><div>Loading...</div></DashboardLayout>;
    }

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full bg-gray-900 text-white">
                <div className="flex-shrink-0 p-4 border-b border-gray-700 flex justify-between items-center bg-gray-800">
                    <Button variant="outline" asChild>
                        <Link href="/m/code-catcher">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Levels
                        </Link>
                    </Button>
                    <div className="flex items-center gap-6 text-lg">
                        <div className="flex items-center gap-2">
                            <Star className="text-yellow-400" />
                            <span className="font-bold">Score: 0</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Heart className="text-red-500" />
                            <span className="font-bold">Lives: 3</span>
                        </div>
                    </div>
                </div>

                <div className="flex-grow flex items-center justify-center p-4">
                    <div className="w-full max-w-4xl h-[600px] bg-black border-4 border-primary rounded-lg flex flex-col items-center justify-center">
                        {/* Game Canvas Area */}
                        <Card className="bg-gray-800 border-primary text-center">
                            <CardHeader>
                                <CardTitle className="font-headline text-3xl">{challenge.title}</CardTitle>
                                <CardDescription>{challenge.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button size="lg">
                                    <Play className="mr-2" />
                                    Start Game
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
