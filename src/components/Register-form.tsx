"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { useActionState } from "react";
import { registerPatient } from "@/services/auth/registerPatient";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerPatient, null);
  console.log(state, "state", isPending, "isPending");
  return (
    <form action={formAction}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Full Name"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="contactNumber">Contact Number</FieldLabel>
          <Input
            id="contactNumber"
            name="contactNumber"
            type="text"
            placeholder="Contact Number"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="address">Address</FieldLabel>
          <Input
            id="address"
            name="address"
            type="text"
            placeholder="Address"
            required
          />
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
