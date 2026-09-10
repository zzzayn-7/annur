import Reveal from "@/app/components/Reveal";

const solutions = [
  {
    title: "Permanent Recruitment",
    description:
      "Long-term talent carefully matched to each role and organization.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="3" y1="13" x2="21" y2="13" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Executive Search",
    description:
      "Focused recruitment for leadership and specialist positions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Contract Staffing",
    description:
      "Flexible professionals for temporary and project-based requirements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Specialist Recruitment",
    description:
      "Niche expertise sourced for highly specific technical or functional roles.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 3l4.5 5-4.5 13-4.5-13L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="4" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Talent Mapping",
    description:
      "Ongoing market insight to identify and track future hiring needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M9 4v15l-6 2V6l6-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 4l6 2v15l-6-2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15 6l6-2v15l-6 2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Volume Hiring",
    description:
      "Structured, scalable recruitment for high-volume hiring campaigns.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <line x1="4" y1="20" x2="4" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="20" x2="10" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="20" x2="16" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function EmployerSolutions() {
  return (
    <section className="bg-brand-orange py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Recruitment Solutions
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <Reveal key={solution.title} delay={i * 80}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange text-white">
                  {solution.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-brand-orange">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {solution.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
