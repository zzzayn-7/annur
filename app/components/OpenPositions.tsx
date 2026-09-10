import Reveal from "./Reveal";

const jobs = [
  {
    title: "Senior Backend Engineer",
    location: "Remote",
    type: "Full-time",
    level: "Senior",
  },
  {
    title: "Product Designer",
    location: "New York, US",
    type: "Full-time",
    level: "Mid-level",
  },
  {
    title: "DevOps Lead",
    location: "Berlin, DE",
    type: "Contract",
    level: "Lead",
  },
  {
    title: "Data Analyst",
    location: "London, UK",
    type: "Full-time",
    level: "Mid-level",
  },
];

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
      <path
        d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.3-6.5 11-6.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
      <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LevelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
      <line x1="5" y1="19" x2="5" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="19" x2="19" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function OpenPositions() {
  return (
    <section className="bg-brand-orange py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Current Openings
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Opportunities Worth Exploring
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            Discover roles where your experience, ambition, and potential can
            move forward.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job, i) => (
            <Reveal key={job.title} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold leading-snug text-brand-orange">
                  {job.title}
                </h3>
                <div className="mt-5 space-y-2.5 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <PinIcon />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <LevelIcon />
                    {job.level}
                  </div>
                </div>
                <div className="mt-auto pt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-orange transition-colors hover:bg-brand-orange hover:text-white"
                  >
                    View Opportunity
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
