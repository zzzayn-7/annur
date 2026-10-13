import Image from "next/image";
import Navbar from "./Navbar";
import heroImage from "@/public/images/hero.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-[640px] flex-col overflow-hidden bg-dusk-ink lg:min-h-[760px]">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />

      <Navbar current="Home" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-start px-6 pt-16 pb-10 text-center lg:pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Where Ambition Meets{" "}
          <span className="bg-gradient-to-r from-dusk-rose to-dusk-lavender bg-clip-text text-transparent">
            Opportunity.
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#"
            className="rounded-full bg-gradient-to-r from-dusk-rose to-dusk-plum px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-[1.03]"
          >
            Hire Talent
          </a>
          <a
            href="#"
            className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/70"
          >
            Find Jobs
          </a>
        </div>
      </div>
    </section>
  );
}
