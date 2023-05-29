"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { LogOutIcon, SettingsIcon, User2Icon } from "lucide-react";

export default function UserAvatar() {
  const router = useRouter();
  const logout = () => {
    router.push("/auth");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <Avatar className="h-7 w-7">
            <AvatarImage src="/avatars/02.png" />
            <AvatarFallback>IM</AvatarFallback>
          </Avatar>
          <span className="sr-only">Profile Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <User2Icon className="w-4 mr-2" /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon className="w-4 mr-2" /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logout}>
          <LogOutIcon className="w-4 mr-2" /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
