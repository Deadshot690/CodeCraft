
'use client'

import { useState, useEffect } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getChallenge, getNextChallengeId, getPreviousChallengeId, Challenge } from '@/lib/challenges';
import { DashboardLayout } from "@/components/dashboard-layout";
import IdePanel from '@/components/ide-panel';
import AiAssistant from '@/components/ai-assistant';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Info, BotMessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';


export default function ChallengePage() {
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const [challenge, setChallenge] = useState<Challenge | null>(null);
    const [nextChallengeId, setNextChallengeId] = useState<string | null>(null);
    const [prevChallengeId, setPrevChallengeId] = useState<string | null>(null);

    useEffect(() => {
        const foundChallenge = getChallenge(params.id);
        if (foundChallenge) {
            setChallenge(foundChallenge);
            setNextChallengeId(getNextChallengeId(foundChallenge.id));
            setPrevChallengeId(getPreviousChallengeId(foundChallenge.id));
        } else {
            notFound();
        }
    }, [params.id]);
    
    const navigate = (id: string | null) => {
        if (id) {
            router.push(`/challenge/${id}`);
        }
    };

    if (!challenge) {
        return <DashboardLayout><div>Loading Challenge...</div></DashboardLayout>;
    }

    return (
        <DashboardLayout>
            <div className="flex flex-col h-full">
                <div className="flex-shrink-0 p-4 border-b flex justify-between items-center gap-4">
                     <Button variant="outline" asChild>
                        <Link href="/challenge">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Challenges
                        </Link>
                    </Button>

                     <div className='text-center'>
                         <h1 className="text-2xl font-bold tracking-tight font-headline">{challenge.title}</h1>
                          <div className='flex items-center gap-2 justify-center mt-1'>
                            <Badge variant={challenge.difficulty === 'Easy' ? 'default' : challenge.difficulty === 'Medium' ? 'secondary' : 'destructive'} >{challenge.difficulty}</Badge>
                            <Badge variant="outline">{challenge.domain}</Badge>
                         </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                         <Button variant="outline" size="icon" onClick={() => navigate(prevChallengeId)} disabled={!prevChallengeId}>
                            <ChevronLeft className="h-4 w-4" />
                             <span className="sr-only">Previous Challenge</span>
                        </Button>
                         <Button variant="outline" size="icon" onClick={() => navigate(nextChallengeId)} disabled={!nextChallengeId}>
                            <ChevronRight className="h-4 w-4" />
                             <span className="sr-only">Next Challenge</span>
                        </Button>
                    </div>
                </div>

                <ResizablePanelGroup direction="horizontal" className="flex-grow">
                    <ResizablePanel defaultSize={40} minSize={25}>
                         <Tabs defaultValue="description" className="h-full flex flex-col">
                            <div className="p-2">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="description"><Info className="mr-2"/> Description</TabsTrigger>
                                    <TabsTrigger value="ai-tutor"><BotMessageSquare className="mr-2"/> AI Tutor</TabsTrigger>
                                </TabsList>
                            </div>
                            <TabsContent value="description" className="flex-grow mt-0">
                               <ScrollArea className="h-full">
                                <Card className="border-0 shadow-none rounded-none">
                                    <CardHeader>
                                        <CardTitle>Problem Description</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="whitespace-pre-wrap text-sm">{challenge.description}</p>
                                        <div className="space-x-1">
                                            {challenge.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                        </div>
                                    </CardContent>
                                </Card>
                               </ScrollArea>
                            </TabsContent>
                            <TabsContent value="ai-tutor" className="flex-grow mt-0">
                               <ScrollArea className="h-full">
                                 <div className="p-4">
                                    <AiAssistant problemDescription={challenge.description} />
                                 </div>
                               </ScrollArea>
                            </TabsContent>
                        </Tabs>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={60} minSize={40}>
                       <IdePanel challenge={challenge} />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </DashboardLayout>
    );
}
