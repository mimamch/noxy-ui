import { MainNavItem, SidebarNavItem } from "@/types/nav";
import { DashboardIcon } from "@radix-ui/react-icons";
import {
  FilePlus2,
  FileX,
  LayoutDashboardIcon,
  ListIcon,
  MailsIcon,
  SendIcon,
  ShoppingCartIcon,
} from "lucide-react";

interface NavigationTypes {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const navigationConfig: NavigationTypes = {
  mainNav: [
    // {
    //   title: "Documentation",
    //   href: "/docs",
    // },
    // {
    //   title: "Components",
    //   href: "/docs/components/accordion",
    // },
    // {
    //   title: "Examples",
    //   href: "/examples",
    // },
    // {
    //   title: "Figma",
    //   href: "/docs/figma",
    // },
    // {
    //   title: "GitHub",
    //   href: "https://github.com/shadcn/ui",
    //   external: true,
    // },
    // {
    //   title: "Twitter",
    //   href: "https://twitter.com/shadcn",
    //   external: true,
    // },
  ],
  sidebarNav: [
    {
      title: "Main Menu",
      items: [
        {
          title: "Dashboard",
          href: "/dashboard",
          items: [],
          icon: DashboardIcon,
        },
      ],
    },
    {
      title: "Orders",
      items: [
        {
          title: "New Order",
          href: "/orders/new",
          items: [],
          icon: FilePlus2,
        },
        {
          title: "All Order",
          href: "/orders",
          items: [],
          icon: ShoppingCartIcon,
        },

        {
          title: "Canceled Order",
          href: "/orders/canceled",
          items: [],
          icon: FileX,
        },
      ],
    },
    {
      title: "Messages",
      items: [
        {
          title: "New Messages",
          href: "/messages/new",
          icon: SendIcon,
          items: [],
        },
        {
          title: "Recent Messages",
          href: "/messages",
          icon: MailsIcon,
          label: "9+",
          items: [],
        },
      ],
    },
  ],
};
