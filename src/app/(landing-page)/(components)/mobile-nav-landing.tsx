"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ViewVerticalIcon } from "@radix-ui/react-icons";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";
import { ButtonLink } from "@/components/button-link";
import { landingNavItem } from "./defaults";

export function MobileNavLanding() {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <ViewVerticalIcon className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex max-w-[50vw] items-center"
          onOpenChange={setOpen}
        >
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <ScrollArea className="my-4 pl-6">
          <div className="flex max-w-[50vw] flex-col  space-y-3">
            {landingNavItem.map((item, i) => {
              if (item.buttonLink) {
                return (
                  <ButtonLink
                    key={i}
                    href={item.href}
                    className=" ring-gray-500 focus:ring"
                    size={"sm"}
                  >
                    {item.title}
                  </ButtonLink>
                );
              }
              return (
                item.href && (
                  <MobileLink key={i} href={item.href} onOpenChange={setOpen}>
                    {item.title}
                  </MobileLink>
                )
              );
            })}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<React.ComponentProps<"svg">>;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  icon: Icon,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("flex items-center", className)}
      {...props}
    >
      {Icon && <Icon className="mr-2 h-4 w-4" />}
      {children}
    </Link>
  );
}
