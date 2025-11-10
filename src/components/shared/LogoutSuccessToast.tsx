"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const LogoutSuccessToast = () => {
  const searchParama = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    if (searchParama.get("loggedout") === "true") {
      toast.success("Logged out successfully");
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete("loggedout");
      router.replace(newUrl.toString());
    }
  }, [searchParama, router]);
  return null;
};

export default LogoutSuccessToast;
