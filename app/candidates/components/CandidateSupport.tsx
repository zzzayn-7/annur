import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import bgImage from "@/public/images/p4-s1-support-bg.png";

const items = [
  {
    title: "Career-Focused Matching",
    description: "Opportunities aligned with your skills and ambitions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Honest Communication",
    description: "Clear updates throughout the recruitment process.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M4 5h16v10H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Interview Coordination",
    description: "Guidance and support during each hiring stage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Confidential Representation",
    description: "Your information is handled professionally and carefully.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="5" y="10.5" width="14" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Continued Support",
    description: "Assistance from your first conversation through placement.",
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

export default function CandidateSupport() {
  return (
    <section className="relative w-full py-24">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={bgImage} alt="" fill className="object-cover" aria-hidden />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-8 lg:grid-cols-2 lg:items-center lg:px-12">
        <Reveal direction="left">
          <span className="text-xs font-semibold uppercase tracking-widest text-grey">
            For Candidates
          </span>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-dusk-ink sm:text-5xl">
            More Than a
            <br />
            Job Search
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-dusk-plum sm:text-lg">
            ANNUR takes the time to understand your experience, strengths,
            and career goals. We connect you with opportunities where you
            can contribute, develop, and build a meaningful future.
          </p>

          <a
            href="#opportunities"
            className="group mt-8 inline-flex items-center gap-3 text-base font-semibold text-dusk-ink"
          >
            <span className="relative pb-1">
              Explore Opportunities
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-grey" />
            </span>
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </a>
        </Reveal>

        <Reveal direction="right" className="lg:pl-12 xl:pl-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-dusk-ink sm:text-4xl">
            Support at Every Step
          </h2>

          <div className="relative mt-10 flex flex-col gap-10">
            <svg
              aria-hidden
              className="pointer-events-none absolute top-6 bottom-6 left-7 hidden w-10 sm:block"
              viewBox="0 0 40 600"
              preserveAspectRatio="none"
            >
              <path
                d="M20,0 C0,60 40,120 20,180 C0,240 40,300 20,360 C0,420 40,480 20,540 C0,570 40,590 20,600"
                fill="none"
                stroke="var(--dusk-sky-deep)"
                strokeOpacity="0.35"
                strokeWidth="2"
                strokeDasharray="2 8"
                strokeLinecap="round"
              />
            </svg>

            {items.map((item) => (
              <div key={item.title} className="relative flex items-start gap-5">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-dusk-sky-deep/30 bg-white text-dusk-sky-deep shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-dusk-ink sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-dusk-plum sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
