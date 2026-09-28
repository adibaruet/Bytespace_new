import type { Metadata } from "next";
import Link from "next/link";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { TextField } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Create an Account — ByteSpace",
  description:
    "The registration process is straightforward, uncomplicated, and efficient.",
};

export default function SignupPage() {
  return (
    <AuthLayout
      eyebrow="Sign up and come in"
      blurb="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
    >
      <p className="text-body-l text-brand-600">Create an Account</p>
      <h2 className="mt-3 max-w-sm text-h-s text-ink-950 sm:text-h-m">
        Welcome to ByteSpace
      </h2>

      <form className="mt-10 flex flex-col gap-6">
        <TextField id="name" label="Full Name" placeholder="Jamie Davis" autoComplete="name" required />
        <TextField
          id="email"
          label="Email"
          type="email"
          placeholder="designer@example.com"
          autoComplete="email"
          required
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          placeholder="********"
          autoComplete="new-password"
          required
        />

        <div className="flex justify-end">
          <Button type="submit" size="lg">
            Continue
          </Button>
        </div>
      </form>

      <p className="mt-12 text-body-m text-ink-500">
        Already have an account?{" "}
        <Link href="/login" className="text-brand-600 underline-offset-4 hover:underline">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
