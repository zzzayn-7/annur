import Navbar from "@/app/components/Navbar";
import HeroBackground from "@/app/components/HeroBackground";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <HeroBackground />
      <Navbar />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 pt-16 pb-16 text-center lg:pt-24 lg:pb-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-semibold text-muted backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-red to-brand-orange" />
          Contact Annur
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Let&rsquo;s Start the{" "}
          <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
            Conversation
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
          Whether you&rsquo;re hiring talent or looking for your next
          opportunity, tell us more and we&rsquo;ll be in touch.
        </p>
      </div>
    </section>
  );
}
