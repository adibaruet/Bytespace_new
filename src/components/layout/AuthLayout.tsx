import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";
import { CourseCard } from "@/components/cards/CourseCard";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Icon } from "@/components/ui/Icon";
import { CoilLight, Cone, Ring } from "@/components/decor/Shapes";
import { courses } from "@/data/courses";

const learnerAvatars = [
  "/images/avatars/a1.jpg",
  "/images/avatars/a2.jpg",
  "/images/avatars/a3.jpg",
  "/images/avatars/a4.jpg",
];

/**
 * Shared chrome for the Login and Signup screens: blue field with the course
 * card collage on the left, a tall white form card on the right. Both pages
 * pass only their own copy and form, so the two stay in sync by construction.
 */
export function AuthLayout({
  eyebrow,
  blurb,
  children,
}: {
  eyebrow: string;
  blurb: string;
  children: ReactNode;
}) {
  const [backCard, frontCard] = [courses[1], courses[2]];

  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-600">
      <div className="absolute inset-0 grid-overlay" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[110rem] gap-10 px-6 py-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pt-10 lg:pb-0">
        {/* Left: brand, copy and the decorative collage */}
        <div className="flex flex-col">
          <Logo wordmark={false} />

          <div className="mt-12 max-w-lg lg:mt-16">
            <h1 className="text-h-xs font-semibold text-white">{eyebrow}</h1>
            <p className="mt-4 text-body-l text-white/85">{blurb}</p>
          </div>

          <div className="relative mt-12 hidden min-h-[30rem] flex-1 lg:block" aria-hidden="true">
            <Ring tone="lime" className="absolute left-24 top-2 z-20 h-28 w-28" />
            <Cone tone="lime" className="absolute bottom-4 left-4 h-36 w-36 rotate-6" />
            <CoilLight className="absolute bottom-24 right-24 z-20 h-32 w-24 rotate-12" />

            <div className="absolute left-0 top-10 w-72 scale-95 opacity-70 grayscale">
              <CourseCard course={backCard} />
            </div>

            <div className="absolute left-36 top-0 w-[26rem]">
              <CourseCard course={frontCard} />
            </div>

            <div className="absolute bottom-0 left-48 z-20 w-64 rounded-2xl bg-lime-500 p-4">
              <p className="text-label-m font-semibold text-ink-950">Happy Students</p>
              <p className="mt-1 flex items-center gap-1 text-body-s text-ink-700">
                4.5 (240)
                <Icon name="star" className="h-3.5 w-3.5 text-brand-600" />
              </p>
              <div className="mt-3">
                <AvatarStack avatars={learnerAvatars} count="2K+" size={32} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: the form card */}
        <div className="flex items-stretch">
          <div className="w-full rounded-3xl bg-white p-8 sm:p-12 lg:rounded-b-none lg:p-16">{children}</div>
        </div>
      </div>
    </main>
  );
}
