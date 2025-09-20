
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { debugTowerChallenges, DebugTowerChallenge } from "@/lib/debug-tower-challenges";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TowerControl, Languages } from "lucide-react";
import { Button } from '@/components/ui/button';

const languageDisplayMap: { [key: string]: string } = {
    'javascript': 'JavaScript',
    'python': 'Python',
};

const difficultyColorMap: { [key: string]: string } = {
    'Easy': 'text-green-500',
    'Medium': 'text-yellow-500',
    'Hard': 'text-red-500',
};

function ChallengeRow({ challenge }: { challenge: DebugTowerChallenge }) {
    return (
        <TableRow>
            <TableCell>{challenge.srNo}</TableCell>
            <TableCell className="w-2/3">
                 <p className="font-medium">{challenge.title}</p>
                 <p className="text-sm text-muted-foreground mt-1">{challenge.description}</p>
            </TableCell>
            <TableCell>
                 <Badge variant="outline" className='flex items-center gap-1'>
                    <Languages className="h-3 w-3" />
                    {languageDisplayMap[challenge.language]}
                </Badge>
            </TableCell>
            <TableCell>
                 <span className={difficultyColorMap[challenge.difficulty] || 'text-muted-foreground'}>{challenge.difficulty}</span>
            </TableCell>
            <TableCell className="text-right">
                <Button asChild size="sm">
                    <Link href={`/m/debug-tower/${challenge.id}`}>
                        <TowerControl className="mr-2 h-4 w-4" />
                        Build
                    </Link>
                </Button>
            </TableCell>
        </TableRow>
    )
}

export default function DebugTowerListPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
         <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2"><TowerControl /> Debug Tower</h1>
              <p className="text-muted-foreground">
                Stabilize the wobbly towers of code by fixing the bugs.
              </p>
            </div>
          </div>

        <Card>
            <CardContent className="!p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Sr. No.</TableHead>
                            <TableHead className="w-2/3">Challenge</TableHead>
                            <TableHead>Language</TableHead>
                             <TableHead>Difficulty</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {debugTowerChallenges.map(challenge => (
                           <ChallengeRow 
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
