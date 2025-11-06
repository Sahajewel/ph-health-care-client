"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

export default function LoginForm() {
  return (
    <form>
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
        <FieldGroup>
          <Field>
            <Button type="submit">Login now</Button>
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
