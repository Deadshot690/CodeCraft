import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Flame, CircleDollarSign, Trophy, ArrowRight, Dna } from 'lucide-react';
import AiAssistant from '@/components/ai-assistant';
import Image from 'next/image';

const dailyChallenge = {
  title: 'Two Sum',
  description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
  difficulty: 'Easy',
  domain: 'DSA',
};

const dungeonProgress = {
  floor: 'The Syntax Swamp',
  level: 3,
  progress: 60,
  nextBoss: 'The Pythonic Serpent',
};

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h1 className="text-3xl font-bold tracking-tight font-headline text-foreground">
            Welcome, Adventurer!
          </h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Level 12</CardTitle>
              <Dna className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,500 XP</div>
              <p className="text-xs text-muted-foreground">250 XP to next level</p>
              <Progress value={80} className="mt-2 h-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gold Coins</CardTitle>
              <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4,231</div>
              <p className="text-xs text-muted-foreground">+150 from last challenge</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Streak</CardTitle>
              <Flame className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                5 days <span role="img" aria-label="fire">🔥</span>
              </div>
              <p className="text-xs text-muted-foreground">Keep it up for a reward!</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leaderboard Rank</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#12</div>
              <p className="text-xs text-muted-foreground">Top 5% of all players</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <Card className="lg:col-span-3 flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="font-headline text-xl">Daily Challenge</CardTitle>
                  <CardDescription>A new challenge to test your skills.</CardDescription>
                </div>
                <Badge variant="outline" className="border-primary text-primary">{dailyChallenge.domain}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <h3 className="font-semibold text-lg font-headline">{dailyChallenge.title}</h3>
              <p className="text-muted-foreground my-2">{dailyChallenge.description}</p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Difficulty:</span>
                <Badge variant="secondary">{dailyChallenge.difficulty}</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Start Challenge <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="lg:col-span-2 relative flex flex-col justify-between overflow-hidden">
             <Image
              src="https://picsum.photos/600/400"
              alt="Dungeon artwork"
              fill
              className="object-cover z-0 opacity-20"
              data-ai-hint="dungeon entrance"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>

            <div className="p-6 relative z-20">
              <CardTitle className="font-headline text-xl">Code Dungeon</CardTitle>
              <CardDescription>Continue your adventure.</CardDescription>
            </div>
            
            <div className="p-6 pt-0 relative z-20 mt-auto">
                <h3 className="font-semibold text-lg">{dungeonProgress.floor}</h3>
                <p className="text-sm text-muted-foreground">Level {dungeonProgress.level}</p>
                <Progress value={dungeonProgress.progress} className="my-2 h-2" />
                <p className="text-xs text-muted-foreground">Next Boss: {dungeonProgress.nextBoss}</p>
                <Button variant="secondary" className="w-full mt-4">
                  Enter Dungeon
                </Button>
            </div>
          </Card>
        </div>
        
        <AiAssistant />
        
      </div>
    </DashboardLayout>
  );
}
