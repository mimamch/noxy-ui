"use client";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import { SidebarNavItem } from "@/types/nav";

import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";
import { navigationConfig } from "@/config/navigation";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

export function DocsSidebarNav() {
  const pathname = usePathname();
  const items = navigationConfig.sidebarNav;
  const selectedPath = "/" + useSelectedLayoutSegments().join("/");

  return items.length ? (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-4")}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-md font-semibold tracking-tight">
            {item.title}
          </h4>
          {item?.items?.length && (
            <DocsSidebarNavItems
              selectedPath={selectedPath}
              items={item.items}
              pathname={pathname}
            />
          )}
        </div>
      ))}
    </div>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
  selectedPath?: string | null;
}

export function DocsSidebarNavItems({
  items,
  pathname,
  selectedPath,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm space-y-1">
      {items.map(({ icon: Icon, ...item }, index) =>
        item.href && !item.disabled ? (
          <SidebarItem
            size="sm"
            variant={selectedPath == item.href ? "secondary" : "ghost"}
            className="w-full justify-start"
            href={item.href}
            key={index}
          >
            {Icon && <Icon className="mr-2 h-4 w-4" />}
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </SidebarItem>
        ) : (
          <span
            key={index}
            className={cn(
              "flex w-full cursor-not-allowed items-center rounded-md px-3 py-2 text-muted-foreground hover:underline  justify-start",
              item.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            {Icon && <Icon className="mr-2 h-4 w-4" />}
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        )
      )}
    </div>
  ) : null;
}
