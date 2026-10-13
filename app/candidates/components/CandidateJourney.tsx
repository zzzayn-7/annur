import Image from "next/image";
import bgImage from "@/public/images/p4-s1-bg.png";

const steps = [
  {
    title: "Register",
    description: "Share your experience, goals, and career direction with us.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Get Matched",
    description: "We connect you with opportunities suited to your profile.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Meet Employers",
    description: "We coordinate interviews and support you at every stage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
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
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
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
    <section className="relative w-full py-24">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={bgImage} alt="" fill className="object-cover" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-grey">
            The Process
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dusk-ink sm:text-4xl">
            Your Journey with ANNUR
          </h2>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative h-[340px] w-[220px] shrink-0 overflow-hidden rounded-3xl border border-white/60 bg-white/50 text-center shadow-sm backdrop-blur-md transition-colors duration-500 ease-out sm:h-[380px] sm:w-[260px]"
            >
              <div className="relative z-10 flex h-full flex-col items-center p-6 sm:p-8">
                <span className="text-6xl font-light leading-none tracking-tight text-dusk-sky-deep/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full border border-dusk-sky-deep/40 bg-white text-dusk-sky-deep shadow-sm">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug text-dusk-ink">
                  {step.title}
                </h3>
                <p className="mt-0 max-h-0 overflow-hidden text-sm leading-relaxed text-dusk-plum opacity-0 transition-all duration-500 ease-out group-hover:mt-3 group-hover:max-h-32 group-hover:opacity-100">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
