import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Navbar } from "@/components/layout/Navbar";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { FloatingCard, ProgressCard } from "@/components/cards/FloatingCard";
import { Coil, CoilLight, Ring, Cone, Cylinder, Cursor } from "@/components/decor/Shapes";

const learnerAvatars = [
  "/images/avatars/a1.jpg",
  "/images/avatars/a2.jpg",
  "/images/avatars/a3.jpg",
  "/images/avatars/a4.jpg",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-600">
      <div className="absolute inset-0 grid-overlay" aria-hidden="true" />

      {/* Floating props. Hidden on small screens where they would crowd the copy. */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <Coil className="absolute -left-6 top-40 h-52 w-36 -rotate-12" />
        <Cylinder className="absolute -right-4 top-28 h-44 w-32 rotate-12" />
        <CoilLight className="absolute left-36 top-[22rem] h-28 w-20 rotate-[70deg] opacity-90" />
        <CoilLight className="absolute right-16 bottom-56 h-32 w-24 -rotate-12" />
        <Ring className="absolute left-8 bottom-32 h-32 w-32" />
        <Cone className="absolute right-40 top-[19rem] h-24 w-24 rotate-6" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <Container className="pb-0 pt-8 text-center sm:pt-12">
          <h1 className="mx-auto max-w-4xl text-h-m text-white sm:text-h-l">
            Get Access to Hundreds Courses Available
          </h1>

          <p className="mx-auto mt-6 max-w-5xl text-body-m text-white/85 sm:text-body-l">
            Unlock your creativity, gain valuable knowledge, and grow your business with our
            wide range of courses.
          </p>

          <form
            className="mx-auto mt-10 flex max-w-3xl items-center gap-4"
            aria-label="Search courses"
          >
            <div className="relative flex-1">
              <Icon
                name="search"
                className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-400"
              />
              <label htmlFor="hero-search" className="sr-only">
                Search for a course, topic or creator
              </label>
              <input
                id="hero-search"
                type="search"
                placeholder="Course, topic, creator"
                className="h-14 w-full rounded-full bg-white pl-13 pr-5 text-body-m text-ink-950 outline-none placeholder:text-ink-400"
              />
            </div>
            <Button type="submit" size="lg">
              Search
            </Button>
          </form>
        </Container>

        {/* Hero figure: person standing on the lime blob, cards floating around. */}
        <div className="relative mx-auto mt-12 flex h-[24rem] w-full max-w-5xl items-end justify-center sm:h-[30rem] lg:h-[34rem]">
          <div
            className="absolute bottom-0 left-1/2 h-[80%] w-[85%] -translate-x-1/2 rounded-t-full bg-lime-500 sm:w-[70%]"
            aria-hidden="true"
          />

          <FloatingCard className="absolute bottom-[45%] left-0 hidden w-48 sm:block lg:left-8">
            <p className="text-label-s font-semibold text-ink-950">UI/UX Design</p>
            <p className="mt-1 text-body-xs text-ink-400">200 Courses &middot; 1000+ Students</p>
          </FloatingCard>

          <div className="absolute bottom-[45%] right-0 hidden sm:block lg:right-4">
            <ProgressCard />
          </div>

          <FloatingCard className="absolute bottom-[18%] left-0 hidden w-56 sm:block lg:left-2">
            <p className="text-label-s font-semibold text-ink-950">Happy Students</p>
            <p className="mt-0.5 flex items-center gap-1 text-body-xs text-ink-400">
              4.6 (240)
              <Icon name="star" className="h-3 w-3 text-lime-600" />
            </p>
            <div className="mt-2">
              <AvatarStack avatars={learnerAvatars} count="2K+" size={30} />
            </div>
          </FloatingCard>

          <Cursor className="absolute right-[28%] top-[18%] hidden h-8 w-8 lg:block" />

          <Image
            src="/images/people/hero.png"
            alt="A student listening to a ByteSpace course"
            width={1100}
            height={1005}
            priority
            className="relative z-10 h-full w-auto object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
