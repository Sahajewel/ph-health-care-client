"use client";

import { useUser } from "@/providers/UserProvider";
import { Button } from "../ui/button";

import Link from "next/link";
import { logout } from "@/utility/logout";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

const PublicNavbar = () => {
  const { user } = useUser();
  const role = user?.role || "guest";

  const navItems = [
    { href: "#", label: "consultation" },
    { href: "#", label: "Health Plans" },
    { href: "#", label: "Medicine" },
    { href: "#", label: "Diagonstics" },
    { href: "#", label: "NGOs" },
  ];

  if (role === "ADMIN") {
    navItems.push({ href: "/admin/dashboard", label: "Admin Dashboard" });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur  dark:bg-background/95">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">PH Doc</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          {role !== "guest" ? (
            <Button variant="destructive" onClick={() => logout()}>
              Logout
            </Button>
          ) : (
            <Link href="/login" className="text-lg font-medium">
              <Button>Login</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                {" "}
                <menu />{" "}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t pt-4 flex flex-col space-y-4">
                  <div className="flex justify-center"></div>
                  {role !== "guest" ? (
                    <Button variant="destructive">Logout</Button>
                  ) : (
                    <Link href="/login" className="text-lg font-medium">
                      <Button>Login</Button>
                    </Link>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
