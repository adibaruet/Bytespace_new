import type { Metadata } from "next";
import Link from "next/link";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { TextField } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
  description: "A seamless sign-in that grants you instant access to a world of knowledge.",
};

const socials = [
  { name: "Facebook", icon: "facebook" as const },
  { name: "Google", icon: "google" as const },
];

export default function LoginPage() {
  return (
    <AuthLayout
      eyebrow="Sign in with ease"
      blurb="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <p className="text-body-l text-brand-600">Sign In</p>
      <h2 className="mt-3 text-h-s text-ink-950 sm:text-h-m">Welcome Back</h2>

      <form className="mt-10 flex flex-col gap-6">
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
          autoComplete="current-password"
          required
        />

        <div className="flex justify-end">
          <Button type="submit" size="lg">
            Sign In
          </Button>
        </div>
      </form>

      <div className="mt-12 flex items-center gap-4" role="separator">
        <span className="h-px flex-1 bg-ink-200" />
        <span className="text-body-m text-ink-400">or</span>
        <span className="h-px flex-1 bg-ink-200" />
      </div>

      <div className="mt-8 flex justify-center gap-5">
        {socials.map((social) => (
          <button
            key={social.name}
            type="button"
            aria-label={`Continue with ${social.name}`}
            className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl border border-ink-200 transition-colors hover:border-ink-400"
          >
            <Icon name={social.icon} className="h-7 w-7 text-ink-950" />
          </button>
        ))}
      </div>

      <p className="mt-12 text-body-m text-ink-500">
        New user?{" "}
        <Link href="/signup" className="text-brand-600 underline-offset-4 hover:underline">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
