import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-5 rounded-3xl bg-white p-8">
      <span className="relative h-16 w-16 overflow-hidden rounded-full">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </span>

      <figcaption>
        <p className="text-h-xs font-semibold text-ink-950">{testimonial.name}</p>
        <p className="mt-1 text-body-m text-brand-600">{testimonial.role}</p>
      </figcaption>

      <blockquote className="text-body-m text-ink-700">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
    </figure>
  );
}
