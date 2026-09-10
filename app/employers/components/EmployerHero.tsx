import Navbar from "@/app/components/Navbar";
import HeroBackground from "@/app/components/HeroBackground";

export default function EmployerHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <HeroBackground />
      <Navbar current="For Employers" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-16 pb-24 text-center lg:pt-24 lg:pb-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-semibold text-muted backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-red to-brand-orange" />
          For Employers
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Build the{" "}
          <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            Team That Moves You Forward
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-muted sm:text-lg">
          Access carefully selected professionals who match your
          requirements, culture, and long-term direction.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#enquiry"
            className="rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-transform hover:scale-[1.03]"
          >
            Start Hiring
          </a>
          <a
            href="#enquiry"
            className="rounded-full border border-border bg-white/70 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-silver-dark"
          >
            Submit a Vacancy
          </a>
        </div>
      </div>
    </section>
  );
}
