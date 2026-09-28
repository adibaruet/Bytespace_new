import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "search"
  | "bag"
  | "star"
  | "level"
  | "check"
  | "menu"
  | "close"
  | "design"
  | "development"
  | "software"
  | "business"
  | "marketing"
  | "photography"
  | "facebook"
  | "google";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

/**
 * One inline SVG sprite for the whole site. Inline beats an icon package here:
 * no extra dependency, no network request, and every glyph inherits
 * `currentColor` so a parent's text colour drives it.
 */
const paths: Record<IconName, ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  star: <path d="m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6.1L12 16.8 6.7 19.7l1.1-6.1L3.4 9.4l6-.8L12 3Z" />,
  level: (
    <>
      <path d="M5 20v-5" />
      <path d="M12 20V8" />
      <path d="M19 20v-9" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.9" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </>
  ),
  design: (
    <>
      <path d="m3 21 4-1 10.5-10.5a2.1 2.1 0 0 0-3-3L4 17l-1 4Z" />
      <path d="m14 6 4 4" />
      <path d="M13 3 21 11" />
    </>
  ),
  development: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2.5" />
      <path d="m10.5 9-2 3 2 3" />
      <path d="m13.5 9 2 3-2 3" />
    </>
  ),
  software: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M2 20h20" />
    </>
  ),
  business: (
    <>
      <path d="M4 21V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v15" />
      <path d="M14 10h5a1 1 0 0 1 1 1v10" />
      <path d="M7 9h4M7 13h4M7 17h4M17 14h1M17 18h1" />
      <path d="M2 21h20" />
    </>
  ),
  marketing: (
    <>
      <path d="M4 10v4a1 1 0 0 0 1 1h3l6 4V5L8 9H5a1 1 0 0 0-1 1Z" />
      <path d="M18 9a4 4 0 0 1 0 6" />
    </>
  ),
  facebook: (
    <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6A21 21 0 0 0 14.3 4.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V14h2.7v8Z" />
  ),
  google: (
    <>
      <path d="M21.35 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h5.25a4.5 4.5 0 0 1-1.95 2.95v2.45h3.15c1.84-1.7 2.9-4.2 2.9-7.05Z" fill="#4285F4" />
      <path d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.15-2.45c-.87.58-1.98.93-3.3.93-2.54 0-4.69-1.71-5.46-4.02H3.3v2.53A9.5 9.5 0 0 0 12 21.5Z" fill="#34A853" />
      <path d="M6.54 13.61a5.7 5.7 0 0 1 0-3.64V7.44H3.3a9.5 9.5 0 0 0 0 8.7l3.24-2.53Z" fill="#FBBC05" />
      <path d="M12 6.44c1.43 0 2.72.49 3.73 1.46l2.8-2.8C16.83 3.52 14.62 2.5 12 2.5a9.5 9.5 0 0 0-8.7 4.94l3.24 2.53C7.31 8.16 9.46 6.44 12 6.44Z" fill="#EA4335" />
    </>
  ),
  photography: (
    <>
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.8l1.3-2h6.8l1.3 2h2.8A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-9Z" />
      <circle cx="12" cy="13" r="3.2" />
    </>
  ),
};

const filled: IconName[] = ["star", "check", "facebook", "google"];

export function Icon({ name, ...props }: IconProps) {
  const isFilled = filled.includes(name);
  return (
    <svg
      viewBox="0 0 24 24"
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {name === "check" ? (
        <>
          <circle cx="12" cy="12" r="9" fill="currentColor" />
          <path
            d="m8.5 12.2 2.4 2.4 4.6-4.9"
            fill="none"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : (
        paths[name]
      )}
    </svg>
  );
}
