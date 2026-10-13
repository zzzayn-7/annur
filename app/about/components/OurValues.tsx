import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import bgImage from "@/public/images/p2-s3.png";

const values = [
  {
    title: "Integrity",
    description: "Acting honestly and responsibly in every interaction.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Understanding",
    description: "Listening carefully before recommending solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 5h16v10H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Commitment",
    description: "Remaining accountable throughout every recruitment journey.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Progress",
    description: "Helping people and organizations move confidently forward.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <line x1="12" y1="19" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="6,11 12,5 18,11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function OurValues() {
  return (
    <section className="relative w-full bg-silver py-24">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={bgImage} alt="" fill className="object-cover" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-grey">
            What We Stand For
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dusk-ink sm:text-4xl">
            Our Values
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/30 bg-white/10 p-6 text-center backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/20">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-dusk-sky-deep bg-transparent text-dusk-sky-deep">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-dusk-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dusk-plum">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
