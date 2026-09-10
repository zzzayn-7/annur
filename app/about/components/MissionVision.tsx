import Reveal from "@/app/components/Reveal";

export default function MissionVision() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl md:grid-cols-2">
          <Reveal direction="left">
            <div className="flex h-full flex-col justify-center bg-silver p-10 sm:p-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground/60">
                Our Mission
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Clearer, More Personal Recruitment
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70 sm:text-base">
                To make recruitment clearer, more personal, and more
                effective by connecting the right people with opportunities
                where they can succeed.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="flex h-full flex-col justify-center bg-brand-orange p-10 sm:p-14">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Our Vision
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                A Trusted Recruitment Partner
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                To become a trusted recruitment partner for ambitious
                professionals and organizations building for the future.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
