export default function CandidateFinalCTA() {
  return (
    <section className="bg-background py-10">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand-orange bg-white px-8 py-8 text-center sm:px-12">
          <div
            aria-hidden
            className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-brand-orange/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-brand-red/10 blur-3xl"
          />

          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Your Experience Deserves the{" "}
              <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
                Right Opportunity
              </span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted sm:text-base">
              Share your profile with ANNUR and take the next step in your
              career.
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href="#cv-form"
                className="rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-transform hover:scale-[1.03]"
              >
                Submit Your CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
