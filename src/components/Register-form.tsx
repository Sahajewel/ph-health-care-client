/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { useActionState, useEffect } from "react";
import { registerPatient } from "@/services/auth/registerPatient";
import { toast } from "sonner";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerPatient, null);
  const getFieldError = (fieldName: string) => {
    if (state && state.error) {
      const fieldError = state.error.find(
        (err: any) => err.field === fieldName
      );
      return fieldError ? fieldError.message : null;
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <form action={formAction}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input id="name" name="name" type="text" placeholder="Full Name" />
          {getFieldError("name") && (
            <FieldDescription className="text-red-600">
              {getFieldError("name")}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" name="email" type="email" placeholder="email" />
          {getFieldError("email") && (
            <FieldDescription className="text-red-600">
              {getFieldError("email")}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="password"
          />
          {getFieldError("password") && (
            <FieldDescription className="text-red-600">
              {getFieldError("password")}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Confirm Password</FieldLabel>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
          {getFieldError("confirmPassword") && (
            <FieldDescription className="text-red-600">
              {getFieldError("confirmPassword")}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="contactNumber">Contact Number</FieldLabel>
          <Input
            id="contactNumber"
            name="contactNumber"
            type="text"
            placeholder="Contact Number"
          />
          {getFieldError("contactNumber") && (
            <FieldDescription className="text-red-600">
              {getFieldError("contactNumber")}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="address">Address</FieldLabel>
          <Input
            id="address"
            name="address"
            type="text"
            placeholder="Address"
          />
          {getFieldError("address") && (
            <FieldDescription className="text-red-600">
              {getFieldError("address")}
            </FieldDescription>
          )}
        </Field>
        <FieldGroup>
          <Field>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Creating Account..." : "Create Account"}
            </Button>
            <FieldDescription>
              Already Have an account? please <Link href="/login">Sign In</Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
}
