
import { DashboardLayout } from "@/components/dashboard-layout";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Shield, Star, Swords, BrainCircuit, Bot } from "lucide-react";
import Link from 'next/link';

const user = {
  name: "CodeCrafter",
  email: "crafter@example.com",
  level: 12,
  xp: 12500,
  xpToNextLevel: 250,
  rank: 12,
  challengesSolved: 58,
  domains: {
    DSA: 40,
    Web: 10,
    AI: 8
  }
};

const recentSolutions = [
  { id: 'two-sum', title: 'Two Sum', date: '2 days ago', status: 'Accepted' },
  { id: 'reverse-string', title: 'Reverse String', date: '3 days ago', status: 'Accepted' },
  { id: 'longest-substring', title: 'Longest Substring', date: '5 days ago', status: 'Accepted' },
  { id: 'max-subarray', title: 'Maximum Subarray', date: '1 week ago', status: 'Accepted' },
  { id: 'valid-parentheses', title: 'Valid Parentheses', date: '1 week ago', status: 'Accepted' },
];

const achievements = [
  { icon: <Star className="w-8 h-8 text-yellow-400" />, title: "Century Mark", description: "Solved 100 problems", unlocked: false },
  { icon: <Swords className="w-8 h-8 text-red-500" />, title: "Problem Slayer", description: "Solved a Hard problem", unlocked: true },
  { icon: <BrainCircuit className="w-8 h-8 text-blue-500" />, title: "DSA Expert", description: "Solved 25 DSA problems", unlocked: true },
  { icon: <Bot className="w-8 h-8 text-primary" />, title: "AI Enthusiast", description: "Solved 5 AI problems", unlocked: true },
  { icon: <Shield className="w-8 h-8 text-green-500" />, title: "Web Weaver", description: "Solved 10 Web problems", unlocked: true },
  { icon: <Star className="w-8 h-8 text-yellow-400" />, title: "First Blood", description: "Solved your first problem", unlocked: true },
];

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
        
        {/* Header */}
        <Card className="overflow-hidden">
          <div className="relative h-32 w-full bg-gradient-to-r from-primary to-accent" />
          <CardContent className="p-6 pt-0">
            <div className="flex items-end gap-4 -mt-16">
              <Avatar className="h-32 w-32 border-4 border-background">
                <AvatarImage src="https://picsum.photos/200/200" data-ai-hint="user avatar" />
                <AvatarFallback className="text-4xl">CC</AvatarFallback>
              </Avatar>
              <div className="pb-2">
                <h1 className="text-3xl font-bold tracking-tight font-headline">{user.name}</h1>
                <p className="text-muted-foreground">{user.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Left Column */}
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between"><span>Challenges Solved</span> <span className="font-bold">{user.challengesSolved}</span></div>
                <div className="flex justify-between"><span>XP Earned</span> <span className="font-bold">{user.xp.toLocaleString()} XP</span></div>
                <div className="flex justify-between"><span>Leaderboard Rank</span> <span className="font-bold">#{user.rank}</span></div>
                <Separator />
                <h3 className="font-semibold text-sm">Solved by Domain</h3>
                <div className="flex justify-between"><span>Data Structures & Algo</span> <span className="font-bold">{user.domains.DSA}</span></div>
                <div className="flex justify-between"><span>Web Development</span> <span className="font-bold">{user.domains.Web}</span></div>
                <div className="flex justify-between"><span>Artificial Intelligence</span> <span className="font-bold">{user.domains.AI}</span></div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-6">
             <Card>
              <CardHeader>
                <CardTitle>Recent Solutions</CardTitle>
                <CardDescription>Your last 5 accepted solutions.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recentSolutions.map(sol => (
                    <li key={sol.id} className="flex items-center justify-between p-2 rounded-md hover:bg-muted/50">
                       <div>
                         <Link href={`/challenge/${sol.id}`} className="font-medium hover:underline">{sol.title}</Link>
                         <p className="text-sm text-muted-foreground">{sol.date}</p>
                       </div>
                       <Badge variant="default" className="bg-green-500/20 text-green-700 hover:bg-green-500/30">
                        <Check className="w-3 h-3 mr-1"/>
                        {sol.status}
                       </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                 <CardDescription>Badges you've earned on your journey.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {achievements.map(ach => (
                    <div key={ach.title} className={`flex flex-col items-center text-center p-4 rounded-lg border ${ach.unlocked ? 'opacity-100' : 'opacity-40'}`}>
                      {ach.icon}
                      <p className="font-bold mt-2 text-sm">{ach.title}</p>
                      <p className="text-xs text-muted-foreground">{ach.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
