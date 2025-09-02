
'use client';

import { DashboardLayout } from "@/components/dashboard-layout";
import { challenges as battleChallenges, BattleChallenge } from "@/lib/battle-challenges";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";


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
                <code className="font-semibold bg-primary/10 text-primary p-1 rounded-sm">{challenge.answer}</code>
            </TableCell>
        </TableRow>
    )
}


export default function BattleQuestionsPage() {

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
         <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-headline flex items-center gap-2"><HelpCircle /> Monster Battle Questions</h1>
              <p className="text-muted-foreground">
                Review all the questions to prepare for your next battle.
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
                            <TableHead>Answer</TableHead>
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
