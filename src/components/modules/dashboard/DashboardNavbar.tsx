import { UserInfo } from "@/types/user.interface";
import DashboardNavbarContent from "./DashboardNavbarContent";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getNavItemsByRole } from "@/lib/navItems.config";
import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoute } from "@/lib/auth-utils";

export default async function DashboardNavbar() {
  const userInfo = (await getUserInfo()) as UserInfo;
  const navItems: NavSection[] = getNavItemsByRole(userInfo.role);
  const dashboardHome = getDefaultDashboardRoute(userInfo.role);
  return (
    <DashboardNavbarContent
      userInfo={userInfo}
      navItems={navItems}
      dashboardHome={dashboardHome}
    />
  );
}
