
"use client"

import * as React from "react"
import { ImperativePanelHandle, PanelGroup, Panel } from "react-resizable-panels"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = React.forwardRef<
  ImperativePanelHandle,
  React.ComponentProps<typeof PanelGroup>
>(({ className, ...props }, ref) => (
  <PanelGroup
    ref={ref}
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
))
ResizablePanelGroup.displayName = "ResizablePanelGroup"

const ResizablePanel = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<typeof Panel>
>((props, ref) => {
    return <Panel ref={ref} {...props} />;
});
ResizablePanel.displayName = "ResizablePanel"


const ResizableHandle = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { withHandle?: boolean }
>(({ className, withHandle, ...props }, ref) => (
  <PanelGroup.Handle
    ref={ref}
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-id]]:focus-visible:ring-offset-background",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-1.5 items-center justify-center rounded-sm border bg-border" />
    )}
  </PanelGroup.Handle>
))
ResizableHandle.displayName = "ResizableHandle"

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
