import Navbar from "@/app/components/Navbar";
import HeroImageBackground from "@/app/components/HeroImageBackground";

export default function ContactHero() {
  return (
    <section className="relative min-h-[440px] overflow-hidden bg-[#07070a] lg:min-h-[540px]">
      <HeroImageBackground />
      <Navbar />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-10 pb-14 text-left lg:px-8 lg:pt-16 lg:pb-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-red to-brand-orange" />
          Contact Annur
        </span>

        <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Let&rsquo;s Start the{" "}
          <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            Conversation
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-base text-white/70 sm:text-lg">
          Whether you&rsquo;re hiring talent or looking for your next
          opportunity, tell us more and we&rsquo;ll be in touch.
        </p>

        <a
          href="tel:+16102265045"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-brand-orange hover:text-brand-orange"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
            <path
              d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5V18a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6a2 2 0 0 1 1-2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          610 226 5045
        </a>
      </div>
    </section>
  );
}
