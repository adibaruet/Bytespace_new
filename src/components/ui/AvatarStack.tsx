import Image from "next/image";

/** Overlapping learner avatars with a lime counter bubble on the end. */
export function AvatarStack({
  avatars,
  count,
  size = 32,
}: {
  avatars: string[];
  count: string;
  size?: number;
}) {
  return (
    <div className="flex items-center">
      {avatars.map((src, i) => (
        <span
          key={src}
          className="relative overflow-hidden rounded-full ring-2 ring-white"
          style={{ width: size, height: size, marginLeft: i === 0 ? 0 : -size / 3 }}
        >
          <Image src={src} alt="" fill sizes={`${size}px`} className="object-cover" />
        </span>
      ))}
      <span
        className="flex items-center justify-center rounded-full bg-lime-500 text-label-xs font-medium text-ink-950 ring-2 ring-white"
        style={{ width: size, height: size, marginLeft: -size / 3 }}
      >
        {count}
      </span>
    </div>
  );
}
