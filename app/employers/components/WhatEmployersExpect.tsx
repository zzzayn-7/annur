import Reveal from "@/app/components/Reveal";

const items = [
  "Carefully selected candidate shortlists",
  "Role and requirement consultation",
  "Clear communication throughout the process",
  "Candidate screening and assessment",
  "Interview coordination",
  "Continued support through placement",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M5 13l4 4 10-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhatEmployersExpect() {
  return (
    <section className="bg-silver/20 py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
            What You Get
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Employers Can Expect
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 80}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-white/70 p-5">
                <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange text-white">
                  <CheckIcon />
                </div>
                <p className="text-sm font-medium text-foreground sm:text-base">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
