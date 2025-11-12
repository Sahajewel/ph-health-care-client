"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserInfo } from "@/types/user.interface";
import { Bell, Menu, Search } from "lucide-react";
import UserDropdown from "./UserDropdown";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DashboardMobileSidebar from "./DashboardMobileSidebar";
import { NavSection } from "@/types/dashboard.interface";
import { useEffect, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkSmallScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkSmallScreen();
    window.addEventListener("resize", checkSmallScreen);
    return () => {
      window.removeEventListener("resize", checkSmallScreen);
    };
  }, []);
  return (
    <div>
      <header className="flex w-full items-center justify-between space-y-0 border-b px-4 py-2">
        <div>
          <Sheet open={isMobile && isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline">
                <Menu></Menu>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <DashboardMobileSidebar
                userInfo={userInfo}
                navItems={navItems || []}
                dashboardHome={dashboardHome || ""}
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
