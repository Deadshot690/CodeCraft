
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { DashboardLayout } from "@/components/dashboard-layout";
import { getDebugTowerChallengeById, DebugTowerChallenge } from '@/lib/debug-tower-challenges';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

export default function DebugTowerGamePage() {
    const params = useParams<{ id: string }>();
    const [challenge, setChallenge] = useState<DebugTowerChallenge | null>(null);

    useEffect(() => {
        const foundChallenge = getDebugTowerChallengeById(params.id);
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
            <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-900">
                <div className="flex-shrink-0 p-4 border-b flex justify-between items-center bg-background">
                    <Button variant="outline" asChild>
                        <Link href="/m/debug-tower">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Levels
                        </Link>
                    </Button>
                     <div className="text-center">
                        <h1 className="text-xl font-bold tracking-tight font-headline">{challenge.title}</h1>
                        <p className="text-sm text-muted-foreground">{challenge.description}</p>
                     </div>
                    <Button variant="ghost" >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Restart
                    </Button>
                </div>
                 <div className="flex-grow flex p-4 md:p-6 gap-6 justify-center items-start">
                    {/* Game Area */}
                    <div className="w-1/2 flex flex-col items-center">
                        <h2 className="text-lg font-semibold mb-4">The Code Tower</h2>
                         <div className="w-full max-w-md space-y-1">
                             {challenge.tower.map((block, index) => (
                                 <Card key={index} className={cn("p-3 font-code text-center border-2", block.isBuggy ? "border-dashed border-red-500 bg-red-500/10" : "border-gray-300 dark:border-gray-700")}>
                                     <code>{block.line}</code>
                                 </Card>
                             ))}
                         </div>
                    </div>
                     {/* Fixes Panel */}
                     <div className="w-1/3">
                         <Card>
                             <CardHeader>
                                 <CardTitle>Available Fixes</CardTitle>
                                 <CardDescription>Drag a fix to the correct buggy block.</CardDescription>
                             </CardHeader>
                             <CardContent className="space-y-2">
                                 {challenge.tower.filter(b => b.isBuggy).map((block, index) => (
                                     <Card key={index} className="p-3 font-code bg-blue-500/10 border-blue-500 cursor-grab">
                                         <code>{block.fix}</code>
                                     </Card>
                                 ))}
                             </CardContent>
                         </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
