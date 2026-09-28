import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Coil, CoilLight, Cone } from "@/components/decor/Shapes";

export function CreatorCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-600 py-20 sm:py-24">
      <div className="absolute inset-0 grid-overlay" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Coil className="absolute -left-8 top-6 h-32 w-24 -rotate-12" />
        <Coil className="absolute left-10 bottom-0 h-28 w-20 rotate-[100deg]" />
        <CoilLight className="absolute right-24 top-4 hidden h-24 w-16 rotate-45 sm:block" />
        <Cone className="absolute right-8 bottom-8 hidden h-20 w-20 -rotate-12 sm:block" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h-s text-white sm:text-h-m">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-body-s text-white/80 sm:text-body-m">
            Experience the collaboration of numerous creators and an expanding selection of
            courses. Register now and become a part of a community comprising over 10,000
            local and international creators. Utilise our Course Editor, and showcase your
            expertise by publishing your finest course on the ByteSpace Course Library.
          </p>
          <Button as="a" href="/signup" size="lg" className="mt-8">
            Join as Creator
          </Button>
        </div>
      </Container>
    </section>
  );
}
