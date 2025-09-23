import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { games } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GamesPage() {
  return (
    <div className="flex flex-col">
       <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl">
          Mini-Games
        </h1>
      </header>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {games.map((game) => (
            <Card
              key={game.id}
              className="flex flex-col justify-between transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="flex-row items-center gap-4">
                <game.icon className="h-10 w-10 text-primary" />
                <div>
                  <CardTitle className="font-headline">{game.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{game.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={game.href}>Play Now</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
