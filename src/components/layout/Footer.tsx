import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { footerColumns, legalLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="max-w-md">
            <Logo tone="dark" />

            <p className="mt-6 text-body-m text-ink-700">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form className="mt-6 flex gap-3" aria-label="Newsletter signup">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email"
                className="h-12 w-full max-w-xs rounded-full border border-ink-200 px-5 text-body-m text-ink-950 outline-none placeholder:text-ink-400 focus:border-brand-600"
              />
              <Button type="submit" size="md">
                Search
              </Button>
            </form>

            <p className="mt-5 max-w-sm text-body-s text-ink-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates
              from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerColumns.map((column, i) => (
              <ul key={i} className="flex flex-col gap-4">
                {column.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body-m text-ink-700 transition-colors hover:text-brand-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-s text-ink-400">
            &copy; 2023 ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-8">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-body-s text-ink-400 underline-offset-4 transition-colors hover:text-ink-700 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
