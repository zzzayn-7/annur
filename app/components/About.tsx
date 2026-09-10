const pillars = [
  {
    title: "Purposeful Matching",
    description:
      "We align talent with the role, culture, and long-term direction of each organization.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "A Human Approach",
    description:
      "We provide honest guidance, clear communication, and a respectful experience throughout the process.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 20s-7-4.35-9.5-8.5C.9 8.3 2.4 5 5.6 5c1.9 0 3.3 1 4.4 2.4C11.1 6 12.5 5 14.4 5c3.2 0 4.7 3.3 3.1 6.5C15 15.65 12 20 12 20Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Lasting Partnerships",
    description:
      "We build relationships designed to create value beyond a single placement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect
          x="3"
          y="9"
          width="8"
          height="6"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="13"
          y="9"
          width="8"
          height="6"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line x1="10" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
            About Annur
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recruitment Built Around People
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            ANNUR is a people-focused recruitment agency connecting ambitious
            professionals with organizations ready to grow. We look beyond
            job titles and résumés to understand the skills, goals, culture,
            and long-term potential behind every opportunity.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            For employers, this means carefully matched talent with the
            ability to contribute and grow. For candidates, it means
            meaningful opportunities aligned with their experience and
            ambitions. Every connection is approached with clarity,
            professionalism, and purpose.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border bg-white/60 p-6 transition-colors hover:border-silver-dark"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange text-white">
                {pillar.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
