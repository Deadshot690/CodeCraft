import { Code } from "lucide-react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background">
            <div className="mb-8 flex items-center gap-2 font-headline text-2xl font-bold">
                <Code className="h-8 w-8 text-primary" />
                <span>CodeCraft</span>
            </div>
            {children}
        </div>
    );
}
