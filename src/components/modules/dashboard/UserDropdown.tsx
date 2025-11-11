"use client";

import { logoutUser } from "@/services/auth/logoutUser";
import { UserInfo } from "@/types/user.interface";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Settings, User } from "lucide-react";
import LogoutButton from "@/components/shared/LououtButton";
import Link from "next/link";
interface UserDropdownProps {
  userInfo: UserInfo;
}
export default function UserDropdown({ userInfo }: UserDropdownProps) {
  const handleLogout = async () => {
    await logoutUser();
  };
  return (
    <div>
      {" "}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>{userInfo.name}</DropdownMenuItem>
            <DropdownMenuItem>{userInfo.email}</DropdownMenuItem>
            <DropdownMenuItem>
              <User></User>
              <DropdownMenuShortcut>Profile</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings></Settings>
              <Link href="/change-password">
                {" "}
                <DropdownMenuShortcut>Change Password</DropdownMenuShortcut>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <DropdownMenuShortcut>
              <LogoutButton></LogoutButton>
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
