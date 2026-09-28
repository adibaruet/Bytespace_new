import type { ReactNode } from "react";

/**
 * The small white cards that hover over the hero and feature imagery
 * ("UI/UX Design", "Learning Progress 55%", "Happy Students").
 */
export function FloatingCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl bg-white p-3 shadow-[0_10px_30px_-10px_rgb(36_37_40/0.35)] ${className}`}
    >
      {children}
    </div>
  );
}

export function ProgressCard({ value = 55 }: { value?: number }) {
  return (
    <FloatingCard className="w-48 p-4">
      <p className="text-body-s text-ink-400">Learning Progress</p>
      <p className="text-h-s font-semibold text-ink-950">{value}%</p>
      <div className="mt-2 h-1.5 w-full rounded-full bg-ink-100">
        <div
          className="h-full rounded-full bg-lime-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </FloatingCard>
  );
}
