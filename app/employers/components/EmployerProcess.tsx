import Reveal from "@/app/components/Reveal";

// Catmull-Rom -> cubic Bezier, so the drawn path passes exactly through every point.
function smoothPath(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";
  const d = [`M ${points[0].x},${points[0].y}`];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d.push(`C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`);
  }
  return d.join(" ");
}

// One point per column, at the same x-fraction (column center) and y-offset
// (shifted so the minimum is 0) used for each card's translate-y above —
// this is what makes the curve thread exactly through the 5 icon centers.
const FLOW_POINTS = [
  { x: 160, y: 0 },
  { x: 480, y: 56 },
  { x: 800, y: 100 },
  { x: 1120, y: 76 },
  { x: 1440, y: 162 },
];

const steps = [
  {
    title: "Understand",
    description:
      "We begin with an in-depth consultation to understand your culture, working style, team dynamics, and the specific requirements of the role.",
    offset: "lg:translate-y-[-100px]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 5h16v10H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Search",
    description:
      "We search actively and passively across our network and market channels to identify professionals who genuinely fit your criteria.",
    offset: "lg:translate-y-[-44px]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Assess",
    description:
      "Every shortlisted candidate is screened and assessed for skills, experience, and cultural alignment before being presented to you.",
    offset: "lg:translate-y-0",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 13l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Introduce",
    description:
      "We introduce a carefully curated shortlist and coordinate interviews, feedback, and next steps on your behalf.",
    offset: "lg:translate-y-[-24px]",
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
      "We stay involved through offer negotiation, onboarding, and beyond to make sure the placement is a lasting success.",
    offset: "lg:translate-y-[62px]",
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

export default function EmployerProcess() {
  return (
    <section className="relative w-full bg-gray-100 pt-16 pb-24 lg:pt-24 lg:pb-40">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="h-full w-full"
          viewBox="0 0 1600 800"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="employerProcessBand" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--dusk-rose)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="var(--dusk-sky)" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <path
            d="M0,120 C350,40 550,260 900,190 C1250,120 1350,320 1600,260 L1600,420 C1350,480 1250,280 900,350 C550,420 350,200 0,280 Z"
            fill="url(#employerProcessBand)"
          />
          <path
            d="M0,120 C350,40 550,260 900,190 C1250,120 1350,320 1600,260"
            fill="none"
            stroke="white"
            strokeOpacity="0.5"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-grey">
            Our Process
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dusk-ink sm:text-4xl">
            Our Recruitment Process
          </h2>
        </div>

        <div className="relative mt-28 lg:mt-40 lg:pb-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 hidden lg:block"
            style={{ top: -48, height: 220 }}
          >
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 1600 220"
              preserveAspectRatio="none"
            >
              <path
                d={smoothPath(FLOW_POINTS)}
                fill="none"
                stroke="var(--dusk-rose)"
                strokeOpacity="0.45"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              {FLOW_POINTS.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="4" fill="var(--dusk-rose)" fillOpacity="0.6" />
              ))}
            </svg>
          </div>

          <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 100}
                className={`${step.offset} relative`}
              >
                <div className="rounded-2xl border border-dusk-plum/10 bg-white/95 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-dusk-sky-deep bg-transparent text-dusk-sky-deep">
                    {step.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-dusk-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dusk-plum/80">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
