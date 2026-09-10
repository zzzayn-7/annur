export default function CallToAction() {
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
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
              Your Next Move Starts Here
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Let&rsquo;s Make the{" "}
              <span className="bg-gradient-to-r from-brand-red to-brand-orange bg-clip-text text-transparent">
                Right Connection
              </span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted sm:text-base">
              Whether you are building a stronger team or searching for your
              next opportunity, ANNUR is ready to help you move forward.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-transform hover:scale-[1.03]"
              >
                Hire Talent
              </a>
              <a
                href="#"
                className="rounded-full border border-brand-orange px-7 py-3 text-sm font-semibold text-brand-orange transition-colors hover:bg-brand-orange/10"
              >
                Find Opportunities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
