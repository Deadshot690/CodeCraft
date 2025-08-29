
import { DashboardLayout } from "@/components/dashboard-layout";
import { getChallenge, Challenge } from "@/lib/challenges";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, Zap } from "lucide-react";
import AiAssistant from "@/components/ai-assistant";
import { notFound } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Languages } from "lucide-react";
import IdePanel from "@/components/ide-panel";

function ChallengeDetails({ challenge }: { challenge: Challenge }) {
  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="font-headline text-2xl">{challenge.title}</CardTitle>
                <CardDescription>Coding Challenge</CardDescription>
            </div>
            <div className="flex items-center gap-2">
                <Badge variant="secondary">{challenge.difficulty}</Badge>
                <Badge variant="outline" className="border-primary text-primary">{challenge.domain}</Badge>
            </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{challenge.description}</p>
        <div className="flex gap-2">
            {challenge.tags.map(tag => (
                <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default async function SingleChallengePage({ params }: { params: { id: string } }) {
  const challenge = getChallenge(params.id);

  if (!challenge) {
    notFound();
  }

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-7">
            <ChallengeDetails challenge={challenge} />
            <IdePanel challenge={challenge} />
        </div>
        <AiAssistant problemDescription={challenge.description} />
      </div>
    </DashboardLayout>
  );
}
