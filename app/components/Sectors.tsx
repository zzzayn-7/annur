import Reveal from "./Reveal";

const sectors = [
  {
    title: "Technology & Digital",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="16" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Finance & Accounting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <line x1="5" y1="19" x2="5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="19" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="19" y1="19" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Engineering & Construction",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M14.5 6.5 17 4l3 3-2.5 2.5M14.5 6.5 5 16l-1 4 4-1 9.5-9.5M14.5 6.5l3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 20s-7-4.35-9.5-8.5C.9 8.3 2.4 5 5.6 5c1.9 0 3.3 1 4.4 2.4C11.1 6 12.5 5 14.4 5c3.2 0 4.7 3.3 3.1 6.5C15 15.65 12 20 12 20Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line x1="12" y1="8.5" x2="12" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9.7" y1="10.75" x2="14.3" y2="10.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Sales & Marketing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M3 10v4a1 1 0 0 0 1 1h2l6 4V5L6 9H4a1 1 0 0 0-1 1Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M16 9.5a3.5 3.5 0 0 1 0 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.5 7.5a6.5 6.5 0 0 1 0 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Operations & Administration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.5" />
        <line x1="9" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="15" x2="13" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Sectors() {
  return (
    <section className="bg-brand-orange py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Sectors We Support
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Talent Across Key Industries
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            We connect organizations with skilled professionals across
            diverse sectors and specialist functions.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {sectors.map((sector, i) => (
            <Reveal key={sector.title} delay={i * 80}>
              <div className="flex h-full flex-col items-center gap-4 rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange text-white">
                  {sector.icon}
                </div>
                <h3 className="text-sm font-semibold leading-snug text-brand-orange sm:text-base">
                  {sector.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
