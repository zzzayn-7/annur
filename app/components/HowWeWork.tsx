import Reveal from "./Reveal";

const steps = [
  {
    title: "Understand",
    description:
      "We learn about the role, organization, goals, and ideal candidate profile.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M4 5h16v10H8l-4 4V5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Identify",
    description:
      "We search, assess, and shortlist professionals with the right experience and potential.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 13l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Connect",
    description:
      "We introduce carefully matched candidates and coordinate the selection process.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Support",
    description:
      "We remain involved through hiring, onboarding, and successful placement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
            Our Process
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How We Work
          </h2>
        </div>

        <div className="relative mt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-border sm:block"
          >
            <span className="absolute top-1/2 h-2 w-16 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-red to-brand-orange opacity-80 blur-[2px] animate-flow-x" />
            <span
              className="absolute top-1/2 h-2 w-10 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-orange to-brand-red opacity-60 blur-[2px] animate-flow-x"
              style={{ animationDelay: "1.6s" }}
            />
          </div>

          <div className="grid gap-12 sm:grid-cols-4 sm:gap-6">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 120}
                className="relative flex flex-col items-center text-center"
              >
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-8 top-16 h-[calc(100%+1rem)] w-px overflow-hidden bg-border sm:hidden"
                  >
                    <span
                      className="absolute left-1/2 h-10 w-2 -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-red to-brand-orange opacity-70 blur-[2px] animate-flow-y"
                      style={{ animationDelay: `${i * 0.5}s` }}
                    />
                  </div>
                )}

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-white text-brand-red shadow-sm">
                  {step.icon}
                  <span className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange text-[10px] font-bold text-white">
                    {`0${i + 1}`}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
