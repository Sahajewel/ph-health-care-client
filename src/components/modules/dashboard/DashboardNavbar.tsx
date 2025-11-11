import { UserInfo } from "@/types/user.interface";
import DashboardNavbarContent from "./DashboardNavbarContent";
import { getUserInfo } from "@/services/auth/getUserInfo";

export default async function DashboardNavbar() {
  const userInfo = (await getUserInfo()) as UserInfo;
  return <DashboardNavbarContent userInfo={userInfo} />;
}
