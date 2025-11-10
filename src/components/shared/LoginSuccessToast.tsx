"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const LoginSuccessToast = () => {
  const searchParama = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    if (searchParama.get("loggedIn") === "true") {
      toast.success("Login successfully");
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete("loggedIn");
      router.replace(newUrl.toString());
    }
  }, [searchParama, router]);
  return null;
};

export default LoginSuccessToast;
