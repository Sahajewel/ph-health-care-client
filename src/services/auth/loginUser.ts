/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import z from "zod";
import { parse } from "cookie";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { JwtPayload } from "jsonwebtoken";
import {
  getDefaultDashboardRoute,
  isValidRedirectForRole,
} from "@/lib/auth-utils";
import { setCookie } from "./tokenHandlers";

type UserRole = "ADMIN" | "PATIENT" | "DOCTOR";
const loginValidationZodSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export async function loginUser(
  _couurentState: any,
  formData: any
): Promise<any> {
  try {
    const redirectTo = formData.get("redirect") || null;

    let accessTokenObj: null | any = null;
    let refreshTokenObj: null | any = null;
    const loginFormData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const validatedFields = loginValidationZodSchema.safeParse(loginFormData);
    if (!validatedFields.success) {
      return {
        error: validatedFields.error.issues.map((issue) => {
          return { field: issue.path[0], message: issue.message };
        }),
      };
    }

    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginFormData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    const getCookieHeaders = res.headers.getSetCookie();

    if (getCookieHeaders && getCookieHeaders.length > 0) {
      getCookieHeaders.forEach((cookie: string) => {
        const parsedCookie = parse(cookie);

        if (parsedCookie["accessToken"]) {
          accessTokenObj = parsedCookie;
        }
        if (parsedCookie["refreshToken"]) {
          refreshTokenObj = parsedCookie;
        }
      });
    } else {
      throw new Error("No Set-Cookie header found");
    }
    if (!accessTokenObj) {
      throw new Error("Login failed: No access token received");
    }
    if (!refreshTokenObj) {
      throw new Error("Login failed: No refresh token received");
    }

    await setCookie("accessToken", accessTokenObj.accessToken, {
      secure: true,
      httpOnly: true,
      maxAge: parseInt(accessTokenObj["Max-Age"]) || 100 * 60 * 60,
      path: refreshTokenObj.Path || "/",
      sameSite: accessTokenObj["sameSite"] || "none",
    });

    setCookie("refreshToken", refreshTokenObj.refreshToken, {
      secure: true,
      httpOnly: true,
      maxAge: parseInt(refreshTokenObj["Max-Age"]) || 1000 * 60 * 60 * 24 * 90,
      path: refreshTokenObj.Path || "/",
      sameSite: refreshTokenObj["sameSite"] || "none",
    });
    const verifiedToken: JwtPayload | string = jwt.verify(
      accessTokenObj.accessToken,
      process.env.JWT_SECRET as string
    );
    if (typeof verifiedToken === "string") {
      throw new Error("Invalid token received");
    }
    const userRole: UserRole = verifiedToken.role;

    if (!result.success) {
      throw new Error(result.message || "Login failed");
    }

    if (redirectTo) {
      const requestedPath = redirectTo.toString();
      if (isValidRedirectForRole(requestedPath, userRole)) {
        redirect(`${requestedPath}?loggedIn=true`);
      } else {
        redirect(`${getDefaultDashboardRoute(userRole)}?loggedIn=true`);
      }
    } else {
      redirect(`${getDefaultDashboardRoute(userRole)}?loggedIn=true`);
    }
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development" ? error.message : "Login Failed"
      }`,
    };
  }
}
