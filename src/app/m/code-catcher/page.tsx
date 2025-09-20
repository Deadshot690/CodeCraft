
import Link from 'next/link';
import { DashboardLayout } from "@/components/dashboard-layout";
import { catcherChallenges, CatcherChallenge } from "@/lib/catcher-challenges";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Grab, Languages } from "lucide-react";
import { Button } from '@/components/ui/button';

const languageDisplayMap: { [key: string]: string } = {
    'javascript': 'JavaScript',
    'python': 'Python',
};

function ChallengeRow({ challenge }: { challenge: CatcherChallenge }) {
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
            <TableCell className="text-right">
                <Button asChild size="sm">
                    <Link href={`/m/code-catcher/${challenge.id}`}>
                        <Grab className="mr-2 h-4 w-4" />
                        Start
                    </Link>
                </Button>
            </TableCell>
        </TableRow>
    )
}

export default function CodeCatcherListPage() {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
         <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2"><Grab /> Code Catcher</h1>
              <p className="text-muted-foreground">
                Catch the good code, dodge the bad.
              </p>
            </div>
          </div>

        <Card>
            <CardContent className="!p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Sr. No.</TableHead>
                            <TableHead className="w-2/3">Level</TableHead>
                            <TableHead>Language</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {catcherChallenges.map(challenge => (
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
