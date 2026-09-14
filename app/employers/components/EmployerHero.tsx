import Navbar from "@/app/components/Navbar";
import HeroImageBackground from "@/app/components/HeroImageBackground";

export default function EmployerHero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-[#07070a] lg:min-h-[620px]">
      <HeroImageBackground />
      <Navbar current="For Employers" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-10 pb-16 text-left lg:px-8 lg:pt-16 lg:pb-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-red to-brand-orange" />
          For Employers
        </span>

        <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Build the{" "}
          <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            Team That Moves You Forward
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-base text-white/70 sm:text-lg">
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
            className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60"
          >
            Submit a Vacancy
          </a>
        </div>
      </div>
    </section>
  );
}
