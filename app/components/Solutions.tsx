const solutions = [
  {
    title: "Permanent Recruitment",
    description:
      "Long-term talent carefully matched to each role and organization.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect
          x="3"
          y="8"
          width="18"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
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
        <line
          x1="15.5"
          y1="15.5"
          x2="21"
          y2="21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10.5 7.5v2.6l1.8 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
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
        <path
          d="M12 7.5V12l3 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Candidate Support",
    description:
      "Connecting skilled professionals with opportunities suited to their ambitions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M4 19v-1a4 4 0 0 1 4-4h1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="8.5" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M14 19v-1a3.5 3.5 0 0 1 2-3.16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="7.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function Solutions() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-100 via-gray-50 to-silver py-24">
      <svg
        className="absolute inset-x-0 bottom-0 h-64 w-full text-dusk-lavender/70"
        viewBox="0 0 1600 400"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,160 C300,80 500,240 800,180 C1100,120 1300,260 1600,180 L1600,400 L0,400 Z"
        />
        <path
          d="M0,160 C300,80 500,240 800,180 C1100,120 1300,260 1600,180"
          fill="none"
          stroke="white"
          strokeOpacity="0.4"
          strokeWidth="2"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-grey">
            What We Offer
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dusk-ink sm:text-4xl">
            Recruitment Solutions
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-2xl border border-dusk-plum/10 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-dusk-sky-deep bg-transparent text-dusk-sky-deep">
                {solution.icon}
              </div>
              <h3 className="mt-5 text-base font-bold text-dusk-ink">
                {solution.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-dusk-plum/80">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
