
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { user, tasks } from "@/lib/data";
import { Flame, Star, Zap, Trophy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const dailyChallenge = tasks[0];

export default function DashboardPage() {
  const xpPercentage = (user.xp / user.xpToNextLevel) * 100;

  return (
    <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl">
          Dashboard
        </h1>
      </header>
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Zap className="h-6 w-6 text-yellow-400" />
              Today's Challenge
            </CardTitle>
            <CardDescription>{dailyChallenge.category}</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="mb-2 text-lg font-semibold">
              {dailyChallenge.title}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {dailyChallenge.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <span className="text-sm font-medium">
                  Difficulty: {dailyChallenge.difficulty}
                </span>
                <span className="text-sm font-medium text-primary">
                  +{dailyChallenge.xp} XP
                </span>
              </div>
              <Button asChild className="hover:scale-105 transition-transform duration-200">
                <Link href={`/tasks/${dailyChallenge.id}`}>Start Coding</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Your Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Level {user.level}</span>
                <span className="text-muted-foreground">
                  {user.xp} / {user.xpToNextLevel} XP
                </span>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="w-full">
                    <Progress value={xpPercentage} className="h-3" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{user.xpToNextLevel - user.xp} XP to next level</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex justify-around text-center">
              <div className="flex flex-col items-center gap-1">
                <Flame className="h-8 w-8 text-orange-500 animate-subtle-flicker" />
                <span className="text-2xl font-bold">{user.streak}</span>
                <span className="text-xs text-muted-foreground">
                  Day Streak
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Trophy className="h-8 w-8 text-yellow-500" />
                <span className="text-2xl font-bold">{user.badges.length}</span>
                <span className="text-xs text-muted-foreground">Badges</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Badges</CardTitle>
            <CardDescription>Your collection of achievements.</CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <div className="flex flex-wrap gap-4">
                {user.badges.map((badge) => (
                  <Tooltip key={badge.id}>
                    <TooltipTrigger>
                      <div className="relative h-16 w-16 transform transition-transform duration-200 hover:scale-110">
                        <Image
                          src={badge.icon}
                          alt={badge.name}
                          width={64}
                          height={64}
                          data-ai-hint="medal award"
                          className="rounded-full border-2 border-accent object-cover"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-bold">{badge.name}</p>
                      <p className="text-sm">{badge.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  );
}
