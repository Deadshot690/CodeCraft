
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Code, Puzzle, Swords } from 'lucide-react';
import Image from 'next/image';

const games = [
    {
        title: "Monster Battle",
        description: "Answer coding questions to defeat powerful monsters in a turn-based RPG.",
        icon: <Swords className="w-12 h-12 text-primary" />,
        href: "/m/monster-battle",
        status: "Live"
    },
    {
        title: "Debug Hunt",
        description: "Find and fix bugs in short code snippets before the timer runs out.",
        icon: <Bot className="w-12 h-12 text-primary" />,
        href: "/m/debug-hunt",
        status: "Live"
    },
    {
        title: "Code Typer",
        description: "Test your typing speed and accuracy with real programming syntax.",
        icon: <Code className="w-12 h-12 text-primary" />,
        href: "#",
        status: "Coming Soon"
    },
    
];

export default function MiniGamesPage() {
    return (
        <DashboardLayout>
            <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight font-headline">Mini-Games</h1>
                        <p className="text-muted-foreground">
                            Fun, interactive games to sharpen your coding skills.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {games.map(game => (
                        <Card key={game.title} className="flex flex-col">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    {game.icon}
                                    <div>
                                        <CardTitle className="font-headline text-xl">{game.title}</CardTitle>
                                        <CardDescription>{game.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                {/* Can add more details here in the future */}
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full" disabled={game.status !== 'Live'}>
                                    <Link href={game.href}>
                                        {game.status === 'Live' ? 'Play Now' : game.status}
                                        {game.status === 'Live' && <ArrowRight className="ml-2 h-4 w-4" />}
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
