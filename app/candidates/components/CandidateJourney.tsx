import Reveal from "@/app/components/Reveal";

const steps = [
  {
    title: "Register",
    description: "Share your experience, goals, and career direction with us.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Get Matched",
    description: "We connect you with opportunities suited to your profile.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Meet Employers",
    description: "We coordinate interviews and support you at every stage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="3" y1="13" x2="21" y2="13" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Secure Your Opportunity",
    description: "We stay involved through your offer and beyond.",
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

export default function CandidateJourney() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
            The Process
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Your Journey with ANNUR
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
