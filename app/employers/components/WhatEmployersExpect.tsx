import Reveal from "@/app/components/Reveal";

const items = [
  {
    text: "Carefully selected candidate shortlists",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 18v-1a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16.5" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 12.2c2.2.3 3.5 1.7 3.5 3.8v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: "Role and requirement consultation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.5" />
        <line x1="9" y1="10" x2="15" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="14" x2="15" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: "Clear communication throughout the process",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 5h16v10H9l-5 4V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="9" cy="10" r="0.9" fill="currentColor" />
        <circle cx="12" cy="10" r="0.9" fill="currentColor" />
        <circle cx="15" cy="10" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    text: "Candidate screening and assessment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M7 3h10a1 1 0 0 1 1 1v16l-3-2-2.5 2-2.5-2-3 2V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="11" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12.7" y1="11.7" x2="15" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: "Interview coordination",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="4" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="3" x2="8" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="3" x2="16" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: "Continued support through placement",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M3 13l3-3 3 2.2 4.5-4.5L16 10l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 16.5l2.2 2.2 2.3-2.3 2.2 2.2 2.3-2.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhatEmployersExpect() {
  return (
    <section className="bg-silver/20 py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-grey">
            What You Get
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dusk-ink sm:text-4xl">
            What Employers Can Expect
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const lastCol2 = i % 2 === 1;
            const lastCol3 = i % 3 === 2;
            const lastRow2 = i >= 4;
            const lastRow3 = i >= 3;

            return (
              <Reveal
                key={item.text}
                delay={i * 80}
                className={[
                  "group flex flex-col items-center gap-4 p-8 text-center",
                  lastCol2 ? "sm:border-r-0" : "sm:border-r",
                  lastCol3 ? "lg:border-r-0" : "lg:border-r",
                  lastRow2 ? "sm:border-b-0" : "sm:border-b",
                  lastRow3 ? "lg:border-b-0" : "lg:border-b",
                  "border-dusk-plum/15",
                ].join(" ")}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dusk-sky-deep bg-transparent text-dusk-sky-deep transition-transform duration-300 ease-out group-hover:scale-110">
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-dusk-ink sm:text-base">
                  {item.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
