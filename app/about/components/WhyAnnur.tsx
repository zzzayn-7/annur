import Image from "next/image";
import Reveal from "@/app/components/Reveal";
import bgImage from "@/public/images/why-bg.png";

const points = [
  {
    title: "Quality Over Volume",
    description:
      "We focus on presenting carefully considered candidates — not simply longer shortlists.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 3l2.4 5 5.6.6-4.2 3.8 1.2 5.6L12 15l-5 3 1.2-5.6-4.2-3.8 5.6-.6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "People Before Placements",
    description:
      "Every employer and candidate is treated as a valued, long-term partner.",
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
    title: "Clear Communication",
    description:
      "We provide honest guidance and consistent communication throughout the process.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M4 5h16v10H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Long-Term Alignment",
    description:
      "We consider experience, ambition, workplace culture, and future potential.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function WhyAnnur() {
  return (
    <section className="relative w-full py-24">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={bgImage} alt="" fill className="object-cover" aria-hidden />
        <div className="absolute inset-0 bg-black/15" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-grey">
            Why Annur
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dusk-ink sm:text-4xl">
            What Sets Us Apart
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/20">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-dusk-sky-deep bg-transparent text-dusk-sky-deep">
                  {point.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-dusk-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dusk-plum">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
