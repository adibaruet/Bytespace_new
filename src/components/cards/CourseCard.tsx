import Image from "next/image";
import type { Course } from "@/data/courses";
import { Icon } from "@/components/ui/Icon";
import { AvatarStack } from "@/components/ui/AvatarStack";

const learnerAvatars = [
  "/images/avatars/a1.jpg",
  "/images/avatars/a2.jpg",
  "/images/avatars/a3.jpg",
  "/images/avatars/a4.jpg",
];

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex flex-col gap-4 rounded-3xl border border-ink-100 bg-white p-3 transition-shadow hover:shadow-[0_14px_38px_-14px_rgb(36_37_40/0.2)]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <ul className="absolute inset-x-3 bottom-3 flex flex-nowrap gap-1.5">
          {[`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`].map(
            (meta) => (
              <li
                key={meta}
                className="whitespace-nowrap rounded-full bg-white/80 px-2.5 py-1 text-[0.6875rem] leading-none text-ink-700 backdrop-blur-sm"
              >
                {meta}
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-2 pb-2">
        <div className="flex items-center justify-between gap-3">
          <h3 className="truncate text-h-xs font-semibold text-ink-950">{course.title}</h3>
          <span className="flex shrink-0 items-center gap-1 text-label-m text-ink-400">
            {course.rating}
            <Icon name="star" className="h-4.5 w-4.5 text-ink-200" />
          </span>
        </div>

        <p className="-mt-2 text-body-s text-ink-400">
          by <span className="text-brand-600">{course.author}</span>
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-3.5 py-2 text-label-s text-ink-700">
            <Icon name="level" className="h-4 w-4" />
            {course.level}
          </span>
          <AvatarStack avatars={learnerAvatars} count={course.students} size={30} />
        </div>

        <p className="flex items-baseline">
          <span className="text-h-xs font-semibold text-brand-600">${course.price}</span>
          <span className="text-body-s text-ink-400">/{course.priceUnit}</span>
        </p>
      </div>
    </article>
  );
}
