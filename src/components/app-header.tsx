import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { user } from '@/lib/data';
import { Flame, Star, Zap } from 'lucide-react';

type AppHeaderProps = {
  title: string;
};

export function AppHeader({ title }: AppHeaderProps) {
  const xpPercentage = (user.xp / user.xpToNextLevel) * 100;

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden" />
        <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl">
          {title}
        </h1>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="hidden items-center gap-4 sm:flex">
          <div className="flex items-center gap-2" title={`${user.xp} / ${user.xpToNextLevel} XP`}>
            <Zap className="h-5 w-5 text-yellow-400" />
            <div className="w-24">
              <Progress value={xpPercentage} className="h-2" />
            </div>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <Star className="h-5 w-5 text-green-400" />
            <span>Level {user.level}</span>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <Flame className="h-5 w-5 text-orange-500 animate-subtle-flicker" />
            <span>{user.streak} Days</span>
          </div>
        </div>

        <Link href="/profile">
          <Avatar className="h-9 w-9 border-2 border-primary/50">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
}
