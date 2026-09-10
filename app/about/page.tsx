import type { Metadata } from "next";
import AboutHero from "./components/AboutHero";
import WhoWeAre from "./components/WhoWeAre";
import MissionVision from "./components/MissionVision";
import WhyAnnur from "./components/WhyAnnur";
import OurValues from "./components/OurValues";
import AboutFinalCTA from "./components/AboutFinalCTA";

export const metadata: Metadata = {
  title: "About — Annur",
  description:
    "ANNUR is a people-focused recruitment agency built on understanding, honesty, and long-term partnership.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <WhyAnnur />
      <OurValues />
      <AboutFinalCTA />
    </main>
  );
}
