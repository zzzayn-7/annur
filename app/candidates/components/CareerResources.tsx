import Reveal from "@/app/components/Reveal";

const resources = [
  {
    title: "CV Preparation",
    description: "Presenting your experience clearly and effectively.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Interview Guidance",
    description: "Preparing with confidence for every stage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Career Development",
    description: "Building skills and direction for long-term growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <line x1="4" y1="20" x2="4" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="20" x2="10" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="20" x2="16" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Workplace Insights",
    description: "Understanding culture, expectations, and dynamics.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Salary & Market Trends",
    description: "Staying informed on compensation and demand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <line x1="5" y1="19" x2="5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="19" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="19" y1="19" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function CareerResources() {
  return (
    <section className="bg-brand-orange py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Career Resources
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Guidance for Every Step
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            Helpful reading to support your search and your career, whenever
            you need it.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, i) => (
            <Reveal key={resource.title} delay={i * 80}>
              <a
                href="#"
                className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange text-white">
                  {resource.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-brand-orange">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {resource.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-foreground">
                  Read More
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
