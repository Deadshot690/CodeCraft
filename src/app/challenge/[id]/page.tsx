
import { DashboardLayout } from "@/components/dashboard-layout";
import { getChallenge, Challenge } from "@/lib/challenges";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import IdePanel from "@/components/ide-panel";
import AiAssistant from "@/components/ai-assistant";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function SingleChallengePage({ params }: { params: { id: string } }) {
  const challenge = getChallenge(params.id);

  if (!challenge) {
    notFound();
  }

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-60px)] flex">
        {/* Left Panel: Problem Description */}
        <ScrollArea className="w-1/2 p-4 lg:p-6 border-r">
           <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">{challenge.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="secondary">{challenge.difficulty}</Badge>
                  <Badge variant="outline" className="border-primary text-primary">{challenge.domain}</Badge>
                  {challenge.tags.map(tag => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                 <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p>{challenge.description}</p>
                 </div>
              </CardContent>
            </Card>
            <AiAssistant problemDescription={challenge.description} />
           </div>
        </ScrollArea>

        {/* Right Panel: IDE */}
        <div className="w-1/2 flex flex-col h-full">
            <IdePanel challenge={challenge} />
        </div>
      </div>
    </DashboardLayout>
  );
}
