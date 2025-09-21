
import React from 'react';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import SidebarWrapper from './sidebar-wrapper';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarWrapper />
      <SidebarInset>
        <main className="flex-1 overflow-auto">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
