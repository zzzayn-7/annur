import Image from "next/image";
import Reveal from "./Reveal";
import sectionBg from "@/public/images/s2-bg.png";

export default function About() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-dusk-sky to-dusk-lavender lg:aspect-video">
      <Image
        src={sectionBg}
        alt=""
        fill
        priority
        className="object-cover"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-lg">
          <Reveal direction="left">
            <span className="block text-xs font-semibold uppercase tracking-widest text-grey">
              About Annur
            </span>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-dusk-ink sm:text-5xl">
              People first.
              <br />
              Possibilities forward.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-dusk-plum">
              Annur connects exceptional people with workplaces where they
              can thrive&mdash;creating thoughtful matches that strengthen
              teams and shape meaningful careers.
            </p>

            <a
              href="/about#who-we-are"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-dusk-ink"
            >
              <span className="relative pb-1">
                Who We Are
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
        </div>
      </div>
    </section>
  );
}
