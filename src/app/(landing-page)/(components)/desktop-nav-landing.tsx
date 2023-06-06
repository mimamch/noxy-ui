import { ButtonLink } from "@/components/button-link";
import Link from "next/link";
import React from "react";
import { landingNavItem } from "./defaults";

export default function DesktopNavLanding() {
  return (
    <ul className="flex items-center gap-x-10 ">
      {landingNavItem.map((e, i) => {
        if (e.buttonLink) {
          return (
            <ButtonLink
              key={i}
              size={"sm"}
              href={e.href ?? "/"}
              className={"dark:bg-black dark:text-white"}
            >
              {e.title}
            </ButtonLink>
          );
        }
        return (
          <Link href={e.href ?? "/"} key={i} className="first:text-blue-500">
            {e.title}
          </Link>
        );
      })}
    </ul>
  );
}
