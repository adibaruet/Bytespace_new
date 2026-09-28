import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { FloatingCard } from "@/components/cards/FloatingCard";
import { Coil } from "@/components/decor/Shapes";
import { creatorBenefits } from "@/data/categories";

const learnerAvatars = [
  "/images/avatars/a1.jpg",
  "/images/avatars/a2.jpg",
  "/images/avatars/a3.jpg",
  "/images/avatars/a4.jpg",
];

export function CreateManage() {
  return (
    <section id="creators" className="wash-lime pb-20 sm:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 flex min-h-[32rem] items-end justify-center lg:order-1">
            <Coil className="absolute right-6 top-20 h-36 w-24 rotate-6" aria-hidden="true" />

            <div className="absolute left-0 top-0 z-20 w-48 rounded-2xl bg-brand-600 p-4 text-white">
              <p className="text-body-xs opacity-80">Total Revenue</p>
              <p className="text-body-xs opacity-60">July 1-28</p>
              <p className="mt-2 text-h-xs font-semibold">$120.29</p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white/25">
                <div className="h-full w-3/5 rounded-full bg-lime-500" />
              </div>
            </div>

            <div className="absolute left-0 top-48 z-20 w-44 rounded-2xl bg-brand-600 p-4 text-white">
              <p className="text-body-xs opacity-80">Year to Date</p>
              <p className="text-body-xs opacity-60">2023</p>
              <p className="mt-2 text-h-xs font-semibold">$1,200.38</p>
              <span className="mt-3 inline-block rounded-full bg-lime-500 px-2 py-0.5 text-label-xs text-ink-950">
                +12$
              </span>
            </div>

            <FloatingCard className="absolute bottom-4 right-0 z-20 w-56">
              <p className="text-label-s font-semibold text-ink-950">Happy Students</p>
              <p className="mt-0.5 flex items-center gap-1 text-body-xs text-ink-400">
                4.5 (140)
                <Icon name="star" className="h-3 w-3 text-lime-600" />
              </p>
              <div className="mt-2">
                <AvatarStack avatars={learnerAvatars} count="2K+" size={28} />
              </div>
            </FloatingCard>

            <Image
              src="/images/people/create.png"
              alt="A ByteSpace creator managing their courses"
              width={981}
              height={1243}
              className="relative z-10 h-[26rem] w-auto -translate-x-4 object-contain object-bottom sm:h-[31rem]"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="max-w-lg text-h-s text-ink-950 sm:text-h-m">
              Create &amp; Manage Courses Easily.
            </h2>

            <p className="mt-6 max-w-md text-body-m text-ink-500">
              <span className="font-semibold text-ink-950">ByteSpace</span> supports
              individuals or entities in the creation, publication, and administration of
              educational courses.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {creatorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Icon name="check" className="h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-body-m text-ink-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
