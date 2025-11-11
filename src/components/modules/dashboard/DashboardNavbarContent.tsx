"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserInfo } from "@/types/user.interface";
import { Bell, Menu, Search } from "lucide-react";
import UserDropdown from "./UserDropdown";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import DashboardMobileSidebar from "./DashboardMobileSidebar";
import { NavSection } from "@/types/dashboard.interface";

interface DashboardNavbarContentProps {
  userInfo: UserInfo;
  navItems: NavSection[];
  dashboardHome: string;
}
export default function DashboardNavbarContent({
  userInfo,
  navItems,
  dashboardHome,
}: DashboardNavbarContentProps) {
  return (
    <div>
      <header className="flex w-full items-center justify-between space-y-0 border-b px-4 py-2">
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu></Menu>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <DashboardMobileSidebar
                userInfo={userInfo}
                navItems={navItems}
                dashboardHome={dashboardHome}
              />
            </SheetContent>
          </Sheet>
          <Input type="search" placeholder="Search..."></Input>
        </div>
        <div>
          <Button variant="ghost" size="icon">
            <Bell></Bell>
          </Button>
        </div>
        <div>
          <UserDropdown userInfo={userInfo} />
        </div>
      </header>
    </div>
  );
}
