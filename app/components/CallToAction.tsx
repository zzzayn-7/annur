import Image from "next/image";
import bgImage from "@/public/images/p1s5-bg.png";

export default function CallToAction() {
  return (
    <section className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden py-24">
      <Image src={bgImage} alt="" fill priority className="object-cover" aria-hidden />
      <div className="absolute inset-0 bg-black/20" aria-hidden />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Opportunity Starts Here
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white sm:text-lg">
          Whether you&rsquo;re building a team or advancing your career, ANNUR
          makes the right connection possible.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-gradient-to-r from-dusk-rose to-dusk-plum px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-[1.03]"
          >
            I&rsquo;m Hiring
          </a>
          <a
            href="#"
            className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/70"
          >
            Find a Role
          </a>
        </div>
      </div>
    </section>
  );
}
