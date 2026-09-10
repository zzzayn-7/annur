import Reveal from "./Reveal";

export default function Perspectives() {
  return (
    <section className="bg-silver/20 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
            Who We Serve
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One Purpose.{" "}
            <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
              Two Perspectives.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal direction="left">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-red/10 sm:p-10">
              <div
                aria-hidden
                className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-red/10 blur-3xl transition-transform duration-500 group-hover:scale-125"
              />
              <div className="relative flex h-full flex-col">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                    <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="3" y1="13" x2="21" y2="13" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground sm:text-2xl">
                  For Employers
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  Build stronger teams with carefully selected professionals
                  who match your requirements, culture, and long-term
                  direction.
                </p>
                <div className="mt-auto pt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/20 transition-transform duration-300 group-hover:scale-[1.03]"
                  >
                    Find Talent
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-orange/10 sm:p-10">
              <div
                aria-hidden
                className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand-orange/10 blur-3xl transition-transform duration-500 group-hover:scale-125"
              />
              <div className="relative flex h-full flex-col">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-red text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground sm:text-2xl">
                  For Candidates
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  Discover meaningful opportunities aligned with your
                  experience, ambitions, and future career goals.
                </p>
                <div className="mt-auto pt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-orange to-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-transform duration-300 group-hover:scale-[1.03]"
                  >
                    Explore Opportunities
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
