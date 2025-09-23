import { tasks } from "@/lib/data";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Terminal } from "lucide-react";

export default function TaskPage({ params }: { params: { id: string } }) {
  const task = tasks.find((t) => t.id === params.id);

  if (!task) {
    notFound();
  }

  return (
    <div className="flex flex-col">
       <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl truncate">
          {task.title}
        </h1>
      </header>
    <div className="flex-1 p-4 md:p-6 grid gap-6 lg:grid-cols-2">
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">{task.title}</CardTitle>
            <div className="flex items-center gap-2 pt-2">
              <Badge variant="outline">{task.difficulty}</Badge>
              <Badge variant="secondary">{task.category}</Badge>
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                {task.xp} XP
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{task.description}</p>
          </CardContent>
        </Card>
        
        {task.examples.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-lg">Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {task.examples.map((example, index) => (
                <div key={index}>
                  <p className="font-semibold">Example {index + 1}:</p>
                  <pre className="mt-2 rounded-md bg-muted p-4 font-code text-sm">
                    <code>
                      <strong>Input:</strong> {example.input}
                      <br />
                      <strong>Output:</strong> {example.output}
                      {example.explanation && (
                        <>
                          <br />
                          <strong>Explanation:</strong> {example.explanation}
                        </>
                      )}
                    </code>
                  </pre>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {task.constraints.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-lg">Constraints</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {task.constraints.map((constraint, index) => (
                  <li key={index}>{constraint}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <Card className="flex-grow flex flex-col">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="font-headline text-lg">Solution</CardTitle>
            <Select defaultValue="javascript">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col">
            <Textarea
              defaultValue={task.starterCode.javascript}
              className="flex-grow font-code text-base bg-muted/50 resize-none"
              placeholder="Write your code here..."
            />
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline">Reset</Button>
              <Button>Run Code</Button>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="output" className="w-full">
          <TabsList>
            <TabsTrigger value="output">Output</TabsTrigger>
            <TabsTrigger value="test-cases">Test Cases</TabsTrigger>
          </TabsList>
          <TabsContent value="output">
            <Card>
              <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><Terminal /> Console</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted rounded-md h-32 text-sm text-muted-foreground">
                    Click "Run Code" to see the output.
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="test-cases">
             <Card>
                 <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><AlertCircle/> Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-muted rounded-md h-32 text-sm text-muted-foreground">
                    Run your code to see test results.
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </div>
  );
}
