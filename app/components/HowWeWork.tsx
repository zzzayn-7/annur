import Image from "next/image";
import Reveal from "./Reveal";
import sectionBg from "@/public/images/p1s4-bg.png";

const steps = [
  {
    title: "Understand",
    description:
      "We learn about the role, organization, goals, and ideal candidate profile.",
    offset: "lg:translate-y-32",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M4 5h16v10H8l-4 4V5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Identify",
    description:
      "We search, assess, and shortlist professionals with the right experience and potential.",
    offset: "lg:translate-y-14",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 13l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Connect",
    description:
      "We introduce carefully matched candidates and coordinate the selection process.",
    offset: "lg:-translate-y-6",
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
      "We remain involved through hiring, onboarding, and successful placement.",
    offset: "lg:-translate-y-24",
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

export default function HowWeWork() {
  return (
    <section className="relative w-full bg-gray-100 py-24 lg:py-40">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={sectionBg} alt="" fill className="object-cover" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-grey">
            Our Process
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dusk-ink sm:text-4xl">
            How We Work
          </h2>
        </div>

        <div className="relative mt-28 lg:mt-40 lg:pb-32">
          <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 120}
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
