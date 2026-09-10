import Navbar from "./Navbar";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <HeroBackground />
      <Navbar current="Home" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-16 pb-24 text-center lg:pt-24 lg:pb-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-semibold text-muted backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-red to-brand-orange" />
          Tech Recruitment, Simplified
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Hire{" "}
          <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            exceptional tech talent
          </span>{" "}
          faster than ever
        </h1>

        <p className="mt-6 max-w-2xl text-base text-muted sm:text-lg">
          Annur connects ambitious companies with vetted engineers, designers,
          and product talent — matched, interviewed, and ready to start in
          days, not months.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-transform hover:scale-[1.03]"
          >
            Hire Talent
          </a>
          <a
            href="#"
            className="rounded-full border border-border bg-white/70 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-silver-dark"
          >
            Find Jobs
          </a>
        </div>

        <div className="mt-16 grid w-full grid-cols-3 gap-6 border-t border-border pt-8">
          <div>
            <p className="text-2xl font-bold text-foreground sm:text-3xl">
              500+
            </p>
            <p className="mt-1 text-xs text-muted sm:text-sm">Placements Made</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground sm:text-3xl">
              300+
            </p>
            <p className="mt-1 text-xs text-muted sm:text-sm">Partner Companies</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground sm:text-3xl">
              14 Days
            </p>
            <p className="mt-1 text-xs text-muted sm:text-sm">Avg. Time-to-Hire</p>
          </div>
        </div>
      </div>
    </section>
  );
}
