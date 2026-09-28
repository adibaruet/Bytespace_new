import type { ReactNode } from "react";

/**
 * The 12-column grid from the style guide is 1200px of content with a 120px
 * margin either side at 1440px. That is what `max-w-page` encodes; the padding
 * steps down on smaller screens so nothing ever touches the edge.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-page px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
