import { Container } from "@/components/ui/Container";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="wash-lime py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16">
          <h2 className="max-w-md text-h-s text-ink-950 sm:text-h-m">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-body-m text-ink-700 sm:text-body-l">
            At ByteSpace, our vibrant community of learners and creators is at the heart of
            what we do. Hear directly from those who have experienced the transformative
            journey of learning and creating on our platform. Explore testimonials that
            reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
