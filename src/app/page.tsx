"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className="flex items-center gap-4">
          <Code className="h-16 w-16 text-primary" />
          <h1 className="font-headline text-6xl font-bold">
            CodeCraft
          </h1>
        </div>
        <p className="max-w-2xl text-lg text-muted-foreground">
          The ultimate gamified learning platform for coders. Sharpen your skills, complete challenges, and level up your career.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg" className="text-lg">
            <Link href="/dashboard">Start Coding</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg">
            <Link href="/tasks">Browse Tasks</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
