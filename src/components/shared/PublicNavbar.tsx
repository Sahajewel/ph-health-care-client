"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import checkAuthStatus from "@/utility/auth";

export default function PublicNavbar() {
  const [user, setUser] = useState<{ role?: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await checkAuthStatus();
        if (res.isAuthenticated) {
          setUser(res.user);
        } else {
          setUser({ role: "guest" });
        }
      } catch (err) {
        setUser({ role: "guest" });
      }
    };
    fetchUser();
  }, []);

  const role = user?.role || "guest";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Consultation", href: "/consultation" },
    { label: "Health Plans", href: "/health-plans" },
    { label: "Diagonstics", href: "/diagonstics" },
    { label: "NGOs", href: "/ngos" },
  ];

  if (role === "ADMIN") {
    navItems.push({
      href: "/dashboard/admin",
      label: "Admin Dashboard",
    });
  }

  return (
    <header className="flex  md:justify-around bg-background/95 h-16 p-4 w-full border-b shadow sticky top-0  z-50">
      <div className="flex w-full  md:justify-around items-center">
        <div>
          <Link href="/" className="text-primary">
            PH Health
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          {role !== "guest" ? (
            <Button>Logout</Button>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className=" md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-accent">
            <ul className="p-4 space-y-2">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="bg-amber-200 p-2 cursor-pointer hover:bg-amber-100 text-center"
                >
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              {role !== "guest" ? (
                <Button>Logout</Button>
              ) : (
                <Link href="/login">
                  <Button className="w-full">Login</Button>
                </Link>
              )}
            </ul>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
