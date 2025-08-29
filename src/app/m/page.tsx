
import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, ArrowRight } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";

const miniGames = [
    {
        title: "Monster Battle",
        description: "Defeat menacing monsters by solving code challenges in a turn-based battle.",
        href: "/m/monster-battle",
        image: "https://picsum.photos/seed/games/400/300",
        imageHint: "fantasy battle monster"
    },
    {
        title: "Code Guesser",
        description: "Guess the output of a mysterious code snippet. How well do you know your language?",
        href: "#", // Placeholder link
        image: "https://picsum.photos/seed/guesser/400/300",
        imageHint: "crystal ball code"
    },
    {
        title: "Bug Squasher",
        description: "Find and fix the single error in a block of code before time runs out!",
        href: "#", // Placeholder link
        image: "https://picsum.photos/seed/bug/400/300",
        imageHint: "magnifying glass bug"
    }
];

export default function MiniGamesPage() {
  return (
    <DashboardLayout>
        <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight font-headline">Mini-Games</h1>
                    <p className="text-muted-foreground">
                        Engage in fun, interactive games to test your logic and coding skills.
                    </p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {miniGames.map((game) => (
                    <Card key={game.title} className="flex flex-col">
                         <div className="relative h-48 w-full">
                            <Image 
                                src={game.image} 
                                alt={game.title} 
                                fill
                                className="object-cover rounded-t-lg"
                                data-ai-hint={game.imageHint}
                             />
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline">{game.title}</CardTitle>
                            <CardDescription>{game.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="mt-auto">
                            <Button asChild className="w-full" disabled={game.href === '#'}>
                                <Link href={game.href}>
                                    {game.href === '#' ? 'Coming Soon' : 'Play Now'} 
                                    {game.href !== '#' && <ArrowRight className="ml-2" />}
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
