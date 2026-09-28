/** ByteSpace wordmark: lime leaf-shaped "b" mark plus the name. */
export function Logo({
  tone = "light",
  wordmark = true,
}: {
  tone?: "light" | "dark";
  wordmark?: boolean;
}) {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <path
          d="M8 4h8a16 16 0 0 1 16 16v0a16 16 0 0 1-16 16H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Z"
          fill="#cbfc00"
        />
        <path d="M15 12v16l12-8-12-8Z" fill="#242528" />
      </svg>
      {wordmark ? (
        <span
          className={`font-heading text-h-xs font-semibold tracking-tight ${
            tone === "light" ? "text-white" : "text-ink-950"
          }`}
        >
          ByteSpace
        </span>
      ) : (
        <span className="sr-only">ByteSpace</span>
      )}
    </a>
  );
}
