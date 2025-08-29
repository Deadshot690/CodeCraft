
import { DashboardLayout } from "@/components/dashboard-layout";
import { getChallenge, Challenge } from "@/lib/challenges";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import IdePanel from "@/components/ide-panel";
import { ScrollArea } from "@/components/ui/scroll-area";

function ChallengeDetails({ challenge }: { challenge: Challenge }) {
  return (
      <ScrollArea className="h-full">
        <div className="p-1">
            <h1 className="text-2xl font-bold font-headline">{challenge.title}</h1>
            <div className="flex items-center gap-2 my-2">
                <Badge variant="secondary">{challenge.difficulty}</Badge>
                <Badge variant="outline" className="border-primary text-primary">{challenge.domain}</Badge>
            </div>
            <p className="text-muted-foreground my-4">{challenge.description}</p>
            <div className="flex gap-2">
                {challenge.tags.map(tag => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
            </div>
        </div>
      </ScrollArea>
  );
}

export default async function SingleChallengePage({ params }: { params: { id: string } }) {
  const challenge = getChallenge(params.id);

  if (!challenge) {
    notFound();
  }

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-60px)] grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <div className="h-full overflow-y-auto">
            <ChallengeDetails challenge={challenge} />
        </div>
        <div className="h-full overflow-y-auto">
            <IdePanel challenge={challenge} />
        </div>
      </div>
    </DashboardLayout>
  );
}
