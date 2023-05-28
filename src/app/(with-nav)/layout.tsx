import React, { PropsWithChildren } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DocsSidebarNav } from "@/components/sidebar-nav";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function WithNavLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
            <ScrollArea className="py-6 pr-6 lg:py-8">
              <DocsSidebarNav />
            </ScrollArea>
          </aside>
          <main className="relative py-6  ">{children}</main>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
