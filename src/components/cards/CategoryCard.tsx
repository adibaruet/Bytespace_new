import type { Category } from "@/data/categories";
import { Icon } from "@/components/ui/Icon";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <a
      href="#courses"
      className="flex flex-col items-center gap-4 rounded-2xl border border-ink-100 bg-white px-4 py-7 transition-all hover:-translate-y-1 hover:border-lime-400 hover:shadow-[0_12px_28px_-14px_rgb(36_37_40/0.25)]"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime-500">
        <Icon name={category.icon} className="h-6 w-6 text-ink-950" />
      </span>
      <span className="text-label-m text-ink-950">{category.label}</span>
    </a>
  );
}
