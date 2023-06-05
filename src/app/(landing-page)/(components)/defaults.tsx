import { NavItem } from "@/types/nav";

interface LandingNavItem extends NavItem {
  buttonLink?: boolean;
}
export const landingNavItem: LandingNavItem[] = [
  { title: "Home", href: "/" },
  { title: "Features", href: "/" },
  { title: "About Us", href: "/" },
  { title: "Contact", href: "/" },
  { title: "Go To Dashboard", href: "/dashboard", buttonLink: true },
];
