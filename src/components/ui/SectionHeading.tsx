import type { ReactNode } from "react";

const widths = {
  md: "max-w-2xl",
  lg: "max-w-3xl",
  xl: "max-w-5xl",
} as const;

/**
 * Centred heading + supporting paragraph used by four different sections.
 * `width` controls how early the copy wraps, which is what keeps
 * "Explore Diverse Learning Paths at Bytespace" on a single line.
 */
export function SectionHeading({
  title,
  description,
  width = "lg",
  className = "",
}: {
  title: ReactNode;
  description?: ReactNode;
  width?: keyof typeof widths;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex flex-col items-center gap-5 text-center ${widths[width]} ${className}`}
    >
      <h2 className="text-h-s text-ink-950 sm:text-h-m">{title}</h2>
      {description ? (
        <p className="max-w-3xl text-body-m text-ink-400 sm:text-body-l">{description}</p>
      ) : null}
    </div>
  );
}
