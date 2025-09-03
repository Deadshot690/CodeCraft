
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { challenges as battleChallenges, BattleChallenge } from "@/lib/battle-challenges";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Swords } from "lucide-react";
import { Button } from '@/components/ui/button';

const difficultyColorMap: { [key: string]: string } = {
    'Beginner': 'text-cyan-500',
    'Easy': 'text-green-500',
    'Medium': 'text-yellow-500',
    'Hard': 'text-red-500',
    'Very Hard': 'text-orange-500',
    'Extreme': 'text-fuchsia-600',
}

function QuestionRow({ challenge }: { challenge: BattleChallenge }) {
    return (
        <TableRow>
            <TableCell className="w-2/3">
                 <p className="font-medium">{challenge.question}</p>
                 {challenge.code && (
                    <pre className="mt-2 bg-muted p-2 rounded-md font-code text-xs overflow-x-auto">
                        <code>{challenge.code}</code>
                    </pre>
                 )}
            </TableCell>
            <TableCell>
                 <Badge variant="outline">{challenge.domain}</Badge>
            </TableCell>
            <TableCell>
                <span className={difficultyColorMap[challenge.difficulty] || 'text-muted-foreground'}>{challenge.difficulty}</span>
            </TableCell>
            <TableCell className="text-right">
                <Button asChild size="sm">
                    <Link href={`/m/battle/${challenge.id}`}>
                        <Swords className="mr-2 h-4 w-4" />
                        Fight
                    </Link>
                </Button>
            </TableCell>
        </TableRow>
    )
}


export default function MonsterBattleListPage() {

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
         <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2"><Swords /> Monster Battle</h1>
              <p className="text-muted-foreground">
                Choose a challenge to begin your battle.
              </p>
            </div>
          </div>


        <Card>
            <CardContent className="!p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-2/3">Question</TableHead>
                            <TableHead>Domain</TableHead>
                            <TableHead>Difficulty</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {battleChallenges.map(challenge => (
                           <QuestionRow 
                                key={challenge.id} 
                                challenge={challenge} 
                            />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
