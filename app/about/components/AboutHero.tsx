import Navbar from "@/app/components/Navbar";
import HeroBackground from "@/app/components/HeroBackground";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <HeroBackground />
      <Navbar current="About" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-16 pb-24 text-center lg:pt-24 lg:pb-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-semibold text-muted backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-red to-brand-orange" />
          About Annur
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Connecting People,{" "}
          <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            Not Just Positions
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-muted sm:text-lg">
          ANNUR is a people-focused recruitment agency built on
          understanding, honesty, and long-term partnership.
        </p>
      </div>
    </section>
  );
}
