import { UserRole } from "@/lib/auth-utils";

export interface NavItem {
  title: string;
  href: string;
  icon?: string | number;
  badge?: string;
  description?: string;
  roles: UserRole[];
}

export interface NavSection {
  title?: string;
  items: NavItem[];
}
