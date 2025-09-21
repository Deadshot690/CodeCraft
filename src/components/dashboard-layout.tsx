import React from 'react';
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { SidebarWrapper } from './sidebar-wrapper';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarWrapper>
        <main className="flex-1 overflow-auto">{children}</main>
      </SidebarWrapper>
    </SidebarProvider>
  );
}
