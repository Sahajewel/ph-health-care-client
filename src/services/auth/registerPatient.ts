/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import z from "zod";
import { loginUser } from "./loginUser";

const registerValidationZodSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" }),
    contactNumber: z
      .string()
      .min(10, {
        message: "Contact Number must be at least 10 characters long",
      })

      .regex(/^[0-9]+$/, {
        message: "Contact Number must contain only digits",
      }),
    email: z.email({ message: "Invalid email address" }),
    address: z
      .string()
      .min(5, { message: "Address must be at least 5 characters long" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string().min(6, {
      message: "Confirm Password must be at least 6 characters long",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export async function registerPatient(_currentSate: any, formData: any) {
  try {
    const validateData = {
      name: formData.get("name"),
      contactNumber: formData.get("contactNumber"),
      email: formData.get("email"),
      address: formData.get("address"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };
    const validatedFields = registerValidationZodSchema.safeParse(validateData);
    if (!validatedFields.success) {
      return {
        error: validatedFields.error.issues.map((issue) => {
          return { field: issue.path[0], message: issue.message };
        }),
      };
    }

    const registerData = {
      password: formData.get("password"),
      patient: {
        name: formData.get("name"),
        contactNumber: formData.get("contactNumber"),
        email: formData.get("email"),
        address: formData.get("address"),
      },
    };
    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(registerData));
    const res = await fetch(
      "http://localhost:5000/api/v1/user/create-patient",
      {
        method: "POST",
        body: newFormData,
      }
    );
    const result = await res.json();
    if (result.success) {
      await loginUser(_currentSate, formData);
    }
    return result;
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "Register Failed"
      }`,
    };
  }
}
