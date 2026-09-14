import Navbar from "@/app/components/Navbar";
import HeroImageBackground from "@/app/components/HeroImageBackground";

export default function AboutHero() {
  return (
    <section className="relative min-h-[480px] overflow-hidden bg-[#07070a] lg:min-h-[580px]">
      <HeroImageBackground />
      <Navbar current="About" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-10 pb-16 text-left lg:px-8 lg:pt-16 lg:pb-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-red to-brand-orange" />
          About Annur
        </span>

        <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Connecting People,{" "}
          <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            Not Just Positions
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-base text-white/70 sm:text-lg">
          ANNUR is a people-focused recruitment agency built on
          understanding, honesty, and long-term partnership.
        </p>
      </div>
    </section>
  );
}
