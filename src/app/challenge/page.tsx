import { DashboardLayout } from "@/components/dashboard-layout";
import { getAllChallenges, Challenge } from "@/lib/challenges";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const difficultyColorMap = {
    'Easy': 'text-green-500',
    'Medium': 'text-yellow-500',
    'Hard': 'text-red-500',
}

function ChallengeRow({ challenge }: { challenge: Challenge }) {
    return (
        <TableRow>
            <TableCell>
                <div className="flex items-center gap-2">
                    {/* In a real app, we'd track solved status */}
                    <CheckCircle className="text-green-500 invisible" />
                    <Link href={`/challenge/${challenge.id}`} className="font-medium hover:underline">
                        {challenge.title}
                    </Link>
                </div>
            </TableCell>
            <TableCell>
                <span className={difficultyColorMap[challenge.difficulty]}>{challenge.difficulty}</span>
            </TableCell>
            <TableCell>
                 <Badge variant="outline" className="border-primary text-primary">{challenge.domain}</Badge>
            </TableCell>
            <TableCell>
                <div className="flex gap-2">
                    {challenge.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
            </TableCell>
        </TableRow>
    )
}


export default function AllChallengesPage() {
  const allChallenges = getAllChallenges();

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
         <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-headline">Challenges</h1>
              <p className="text-muted-foreground">
                Sharpen your skills with our collection of challenges.
              </p>
            </div>
          </div>
        <Card>
            <CardContent className="!p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-2/5">Title</TableHead>
                            <TableHead>Difficulty</TableHead>
                            <TableHead>Domain</TableHead>
                            <TableHead>Tags</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allChallenges.map(challenge => (
                           <ChallengeRow key={challenge.id} challenge={challenge} />
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
