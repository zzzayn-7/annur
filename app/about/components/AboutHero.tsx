import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import bgImage from "@/public/images/p2-hero.png";

export default function AboutHero() {
  return (
    <section className="relative flex w-full flex-col bg-white py-16 lg:aspect-[2172/724] lg:py-0">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={bgImage} alt="" fill priority className="object-cover" aria-hidden />
        <div className="absolute inset-0 bg-black/20" aria-hidden />
      </div>

      <Navbar current="About" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-start px-6 pt-8 text-center lg:px-12 lg:pt-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-white">
          About Annur
        </span>
        <h1 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          People at the{" "}
          <span className="text-grey">
            Heart
            <br />
            of Progress
          </span>
        </h1>
      </div>
    </section>
  );
}
