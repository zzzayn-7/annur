import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import bgImage from "@/public/images/p2-hero.png";

export default function ContactHero() {
  return (
    <section className="relative flex w-full flex-col bg-white py-16 lg:aspect-[2172/724] lg:py-0">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={bgImage} alt="" fill priority className="object-cover" aria-hidden />
        <div className="absolute inset-0 bg-black/20" aria-hidden />
      </div>

      <Navbar current="Contact" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-start px-6 pt-8 text-center lg:px-12 lg:pt-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-white">
          Contact Annur
        </span>
        <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Let&rsquo;s Start the <span className="text-grey">Conversation</span>
        </h1>

        <div className="mt-6 flex justify-center">
          <a
            href="tel:+16102265045"
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white/20 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/30"
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
      </div>
    </section>
  );
}
