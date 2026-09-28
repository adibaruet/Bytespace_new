"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { primaryNav } from "@/data/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 py-5">
      <Container>
        <nav className="flex items-center justify-between gap-6" aria-label="Main">
          <Logo />

          <ul className="hidden items-center gap-8 md:flex">
            {primaryNav.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-label-m text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="/login"
              className="text-label-m text-white/85 transition-colors hover:text-white"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="text-label-m text-white/85 transition-colors hover:text-white"
            >
              Join Us
            </a>
            <button
              type="button"
              aria-label="Cart"
              className="cursor-pointer text-white/85 transition-colors hover:text-white"
            >
              <Icon name="bag" className="h-5 w-5" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="cursor-pointer text-white md:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </nav>

        {open ? (
          <ul className="mt-4 flex flex-col gap-1 rounded-2xl bg-white/10 p-3 backdrop-blur-md md:hidden">
            {[...primaryNav, { label: "Sign In", href: "/login" }, { label: "Join Us", href: "/signup" }].map(
              (link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-label-m text-white/90 hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>
        ) : null}
      </Container>
    </header>
  );
}
