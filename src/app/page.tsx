import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { DiscoverPassion } from "@/components/sections/DiscoverPassion";
import { ExplorePaths } from "@/components/sections/ExplorePaths";
import { GrowthStats } from "@/components/sections/GrowthStats";
import { CreateManage } from "@/components/sections/CreateManage";
import { CreatorCTA } from "@/components/sections/CreatorCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <LogoStrip />
        <DiscoverPassion />
        <ExplorePaths />
        <GrowthStats />
        <CreateManage />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
