import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Code } from 'lucide-react';
import Link from 'next/link';

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  footerText: string;
  footerLinkText: string;
  footerHref: string;
}

export const AuthCard: React.FC<AuthCardProps> = ({
  children,
  title,
  description,
  footerText,
  footerLinkText,
  footerHref,
}) => {
  return (
    <Card className="w-[400px]">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 font-headline font-bold text-lg mb-4">
          <Code className="h-6 w-6 text-primary" />
          <span>CodeCraft</span>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <p className="w-full text-center text-sm text-muted-foreground">
          {footerText}{' '}
          <Link href={footerHref} className="text-primary hover:underline">
            {footerLinkText}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};
