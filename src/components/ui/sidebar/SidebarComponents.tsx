import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebar } from "./SidebarContext";
import { SidebarMenuButtonProps, SidebarMenuActionProps, SidebarMenuSkeletonProps } from "./types";

// ... Export all the sidebar components from the original file, 
// but with enhanced styling and animations

export const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(
          "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none",
          "ring-sidebar-ring transition-all duration-200 ease-in-out",
          "hover:bg-sidebar-accent/90 hover:text-sidebar-accent-foreground focus-visible:ring-2",
          "active:bg-sidebar-accent active:text-sidebar-accent-foreground",
          "disabled:pointer-events-none disabled:opacity-50",
          "group-has-[[data-sidebar=menu-action]]/menu-item:pr-8",
          "aria-disabled:pointer-events-none aria-disabled:opacity-50",
          "data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground",
          "data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground",
          "group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2",
          "[&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
          className
        )}
        {...props}
      />
    );

    if (!tooltip) return button;

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...(typeof tooltip === "string" ? { children: tooltip } : tooltip)}
        />
      </Tooltip>
    );
  }
);

// ... Add all other component exports with enhanced styling