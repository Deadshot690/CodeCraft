
'use client';

import type {Metadata} from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { ProgressProvider } from '@/hooks/use-progress';
import { useAuth } from '@/hooks/use-auth';

// No longer exporting metadata from here as it needs to be a client component
// export const metadata: Metadata = {
//   title: 'CodeCraft Quest',
//   description: 'Gamified coding learning platform',
// };

function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const userKey = loading ? 'loading' : user ? user.uid : 'anonymous';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* We can add a metadata component here if needed for titles */}
         <title>CodeCraft Quest</title>
        <meta name="description" content="Gamified coding learning platform" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&family=Source+Code+Pro:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "min-h-screen bg-background font-sans")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressProvider key={userKey}>
            {children}
          </ProgressProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppLayout>{children}</AppLayout>
}
