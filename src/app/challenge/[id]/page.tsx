
import { DashboardLayout } from "@/components/dashboard-layout";
import { getChallenge, Challenge } from "@/lib/challenges";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import IdePanel from "@/components/ide-panel";
import AiAssistant from "@/components/ai-assistant";

export default async function SingleChallengePage({ params }: { params: { id: string } }) {
  const challenge = getChallenge(params.id);

  if (!challenge) {
    notFound();
  }

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-8 p-4 pt-6 md:p-8">
        <Card>
          <CardHeader>
            <CardTitle>{challenge.title}</CardTitle>
            <CardDescription>{challenge.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{challenge.difficulty}</Badge>
              <Badge variant="outline" className="border-primary text-primary">{challenge.domain}</Badge>
              {challenge.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        <IdePanel challenge={challenge} />
        <AiAssistant problemDescription={challenge.description} />
      </div>
    </DashboardLayout>
  );
}
