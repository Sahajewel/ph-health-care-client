/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import z from "zod";
import { parse } from "cookie";

import { cookies } from "next/headers";
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
    console.log(res, "res", result, "result");
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
    console.log(accessTokenObj.accessToken, "access token");
    const cookieStore = await cookies();
    cookieStore.set("accessToken", accessTokenObj.accessToken, {
      secure: true,
      httpOnly: true,
      sameSite: "none",
      maxAge: parseInt(accessTokenObj["Max-Age"]),
      path: refreshTokenObj.Path || "/",
    });

    cookieStore.set("refreshToken", refreshTokenObj.refreshToken, {
      secure: true,
      httpOnly: true,
      sameSite: "none",
      maxAge: parseInt(refreshTokenObj["Max-Age"]),
      path: refreshTokenObj.Path || "/",
    });

    return result;
  } catch (error) {
    console.log(error);
    return { error: "Login Failed" };
  }
}
