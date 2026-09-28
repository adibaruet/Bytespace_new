import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ProgressCard } from "@/components/cards/FloatingCard";
import { Coil } from "@/components/decor/Shapes";
import { growthStats } from "@/data/categories";

export function GrowthStats() {
  return (
    <section className="wash-lime py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="max-w-xl text-h-s text-ink-950 sm:text-h-m">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="mt-6 max-w-md text-body-m text-ink-500">
              Explore our curated selection of courses tailored to enhance your capabilities
              and accelerate your career journey. Whether you are looking to sharpen specific
              skills, gain industry expertise, or embark on a new career path entirely, we
              have the resources you need.
            </p>

            <dl className="mt-10 flex gap-12">
              {growthStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-h-s font-semibold text-brand-600">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-body-s text-ink-500">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative flex min-h-[28rem] items-end justify-center">
            <Coil
              className="absolute right-0 top-4 h-36 w-24 rotate-12"
              aria-hidden="true"
            />
            <div className="absolute left-0 top-2 hidden w-56 rounded-2xl bg-white p-3 shadow-[0_16px_40px_-18px_rgb(36_37_40/0.35)] sm:block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src="/images/courses/figma.jpg"
                  alt=""
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-label-m font-semibold text-ink-950">
                Learn Figma from Basic
              </p>
              <p className="text-body-xs text-brand-600">by purepearl studio</p>
              <p className="mt-2 text-label-m font-semibold text-brand-600">
                $25 <span className="text-body-xs font-normal text-ink-400">lifetime</span>
              </p>
            </div>

            <div className="absolute bottom-16 right-0 z-20">
              <ProgressCard />
            </div>

            <Image
              src="/images/people/growth.png"
              alt="A learner following a ByteSpace course"
              width={1100}
              height={1005}
              className="relative z-10 h-[23rem] w-auto translate-x-8 object-contain object-bottom sm:h-[27rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
