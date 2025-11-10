import LogoutButton from "@/components/shared/LououtButton";
import { getCookie } from "@/services/auth/tokenHandlers";

export default async function CommonDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accessToken = await getCookie("accessToken");
  return (
    <div>
      {accessToken && <LogoutButton></LogoutButton>}
      {children}
    </div>
  );
}
