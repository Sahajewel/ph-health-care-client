/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { useActionState, useEffect } from "react";
import { loginUser } from "@/services/auth/loginUser";
import { toast } from "sonner";

export default function LoginForm({ redirect }: { redirect?: string }) {
  const [state, formAction, isPending] = useActionState(loginUser, null);

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
      {redirect && <input type="hidden" name="redirect" value={redirect} />}
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="email"
            required
          />
          {getFieldError("email") && (
            <FieldDescription className="text-red-600">
              {getFieldError("email")}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          {getFieldError("password") && (
            <FieldDescription className="text-red-600">
              {getFieldError("password")}
            </FieldDescription>
          )}
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            required
          />
        </Field>
        <FieldGroup>
          <Field>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Loging now..." : "Login"}
            </Button>
            <FieldDescription>
              Don&apos;t Have an account? please{" "}
              <Link href="/register">Register Now</Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
}
