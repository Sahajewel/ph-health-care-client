"use client";

import { logoutUser } from "@/services/auth/logoutUser";
import { Button } from "../ui/button";

const LogoutButton = () => {
  const handleButton = async () => {
    await logoutUser();
  };
  return <Button onClick={handleButton}>Logout</Button>;
};

export default LogoutButton;
