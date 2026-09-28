"use client";

type ChipProps = {
  label: string;
  active?: boolean;
  onSelect?: (label: string) => void;
};

/** The topic pills under "Discover Your Passion". */
export function Chip({ label, active = false, onSelect }: ChipProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(label)}
      aria-pressed={active}
      className={`cursor-pointer rounded-full px-4 py-2 text-label-s transition-colors ${
        active
          ? "bg-lime-500 text-ink-950"
          : "bg-ink-50 text-ink-700 hover:bg-ink-100"
      }`}
    >
      {label}
    </button>
  );
}
