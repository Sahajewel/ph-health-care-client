"use server";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getCookie } from "./tokenHandlers";
import { UserInfo } from "@/types/user.interface";

export const getUserInfo = async (): Promise<UserInfo | null> => {
  try {
    const accessToken = await getCookie("accessToken");
    if (!accessToken) {
      return null;
    }

    const verifiedToken = jwt.verify(
      accessToken,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    if (!verifiedToken) {
      return null;
    }

    const userInfo: UserInfo = {
      name: verifiedToken.name || "unknown user",
      email: verifiedToken.email,
      role: verifiedToken.role,
    };

    return userInfo; // Add this line
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return null;
  }
};
