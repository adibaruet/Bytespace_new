import type { SVGProps } from "react";

type ShapeProps = Omit<SVGProps<SVGSVGElement>, "viewBox">;

/**
 * The floating 3D props from the hero and CTA bands, rebuilt as inline SVG.
 * Doing them in SVG rather than as exported PNGs keeps them crisp at any size,
 * themeable, and adds nothing to the asset payload.
 */

/** Thick coiled spring, the signature lime squiggle. */
export function Coil({ className = "", ...props }: ShapeProps) {
  return (
    <svg viewBox="0 0 120 170" className={className} aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="coilFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e4ff53" />
          <stop offset="55%" stopColor="#cbfc00" />
          <stop offset="100%" stopColor="#8cb400" />
        </linearGradient>
      </defs>
      <path
        d="M30 24c34-18 62 4 58 20-4 16-58 10-62 26s52 12 56 28-56 12-60 28 44 18 58 10"
        fill="none"
        stroke="#8cb400"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 5)"
        opacity="0.55"
      />
      <path
        d="M30 24c34-18 62 4 58 20-4 16-58 10-62 26s52 12 56 28-56 12-60 28 44 18 58 10"
        fill="none"
        stroke="url(#coilFill)"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Same coil in white, used on the blue panels. */
export function CoilLight({ className = "", ...props }: ShapeProps) {
  return (
    <svg viewBox="0 0 120 170" className={className} aria-hidden="true" {...props}>
      <path
        d="M30 24c34-18 62 4 58 20-4 16-58 10-62 26s52 12 56 28-56 12-60 28 44 18 58 10"
        fill="none"
        stroke="#ced0d3"
        strokeWidth="22"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 5)"
      />
      <path
        d="M30 24c34-18 62 4 58 20-4 16-58 10-62 26s52 12 56 28-56 12-60 28 44 18 58 10"
        fill="none"
        stroke="#ffffff"
        strokeWidth="22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Fat torus / doughnut. */
export function Ring({
  className = "",
  tone = "light",
  ...props
}: ShapeProps & { tone?: "light" | "lime" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" {...props}>
      <defs>
        <linearGradient id={`ringFill-${tone}`} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor={tone === "lime" ? "#e4ff53" : "#ffffff"} />
          <stop offset="100%" stopColor={tone === "lime" ? "#8cb400" : "#e5e6e8"} />
        </linearGradient>
      </defs>
      <ellipse
        cx="60"
        cy="60"
        rx="42"
        ry="50"
        fill="none"
        stroke={`url(#ringFill-${tone})`}
        strokeWidth="26"
      />
    </svg>
  );
}

/** Soft-edged pyramid. */
export function Cone({
  className = "",
  tone = "light",
  ...props
}: ShapeProps & { tone?: "light" | "lime" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" {...props}>
      <defs>
        <linearGradient id={`coneFill-${tone}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={tone === "lime" ? "#e4ff53" : "#ffffff"} />
          <stop offset="100%" stopColor={tone === "lime" ? "#8cb400" : "#ced0d3"} />
        </linearGradient>
      </defs>
      <path
        d="M60 14 108 100a8 8 0 0 1-7 12H19a8 8 0 0 1-7-12Z"
        fill={`url(#coneFill-${tone})`}
      />
      <path d="M60 14 108 100a8 8 0 0 1-7 12H60Z" fill="#000" opacity="0.06" />
    </svg>
  );
}

/** Rounded lime cylinder peeking in from an edge. */
export function Cylinder({ className = "", ...props }: ShapeProps) {
  return (
    <svg viewBox="0 0 110 150" className={className} aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="cylFill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e4ff53" />
          <stop offset="70%" stopColor="#cbfc00" />
          <stop offset="100%" stopColor="#8cb400" />
        </linearGradient>
      </defs>
      <path d="M10 30a45 16 0 0 1 90 0v90a45 16 0 0 1-90 0Z" fill="url(#cylFill)" />
      <ellipse cx="55" cy="30" rx="45" ry="16" fill="#f1ff93" />
    </svg>
  );
}

/** Small cursor arrow, the collaborative-pointer motif. */
export function Cursor({ className = "", ...props }: ShapeProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" {...props}>
      <path
        d="M7 4l18 11-8 2-3 9Z"
        fill="#cbfc00"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
