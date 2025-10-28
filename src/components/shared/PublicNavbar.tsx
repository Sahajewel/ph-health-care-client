import Link from "next/link";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Menu } from "lucide-react";

export default function PublicNavbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Consultation", href: "/consultation" },
    { name: "Health Plans", href: "/health-plans" },
    { name: "Diagonstics", href: "/diagonstics" },
    { name: "NGOs", href: "/ngos" },
  ];
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
              <li className="" key={item.name}>
                {item.name}
                <Link href={item.href}></Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>
      <div className=" md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu></Menu>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-accent">
            <div className="grid flex-1 auto-rows-min  gap-6 px-4">
              <div className="grid gap-3">
                <ul className=" p-4 space-y-2">
                  {navItems.map((item) => (
                    <li
                      key={item.name}
                      className="bg-amber-200 p-2 cursor-pointer hover:bg-amber-100 text-center"
                    >
                      {item.name}
                      <Link href={item.href}></Link>
                    </li>
                  ))}
                  <Link href="/login">
                    {" "}
                    <Button type="submit" className="w-full cursor-pointer p-2">
                      Login
                    </Button>
                  </Link>
                </ul>
              </div>
            </div>
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
