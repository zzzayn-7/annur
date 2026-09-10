import Reveal from "@/app/components/Reveal";

const fieldClass =
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-silver-dark focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20";
const labelClass = "text-sm font-medium text-foreground";

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="3" y1="13" x2="21" y2="13" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactForms() {
  return (
    <section className="bg-background pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="flex h-full flex-col rounded-3xl border border-border bg-white/70 p-8 sm:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange text-white">
                <BriefcaseIcon />
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
                Hiring Talent
              </h2>
              <p className="mt-2 text-sm text-muted">
                Tell us who you need, and we&rsquo;ll get back to you.
              </p>

              <form className="mt-6 flex flex-1 flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="employer-name" className={labelClass}>
                    Full name
                  </label>
                  <input id="employer-name" name="name" type="text" required className={fieldClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="employer-company" className={labelClass}>
                    Company name
                  </label>
                  <input id="employer-company" name="company" type="text" required className={fieldClass} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="employer-email" className={labelClass}>
                      Work email
                    </label>
                    <input id="employer-email" name="email" type="email" required className={fieldClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="employer-phone" className={labelClass}>
                      Phone number
                    </label>
                    <input id="employer-phone" name="phone" type="tel" className={fieldClass} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="employer-requirement" className={labelClass}>
                    Hiring requirement
                  </label>
                  <input id="employer-requirement" name="requirement" type="text" className={fieldClass} />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="employer-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="employer-message"
                    name="message"
                    rows={4}
                    className={`${fieldClass} flex-1`}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-auto rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-transform hover:scale-[1.02]"
                >
                  Submit Requirement
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="flex h-full flex-col rounded-3xl border border-border bg-white/70 p-8 sm:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-red text-white">
                <CompassIcon />
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
                Looking for Opportunities
              </h2>
              <p className="mt-2 text-sm text-muted">
                Share your details, and we&rsquo;ll help you find what&rsquo;s next.
              </p>

              <form className="mt-6 flex flex-1 flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="candidate-name" className={labelClass}>
                    Full name
                  </label>
                  <input id="candidate-name" name="name" type="text" required className={fieldClass} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="candidate-email" className={labelClass}>
                      Email address
                    </label>
                    <input id="candidate-email" name="email" type="email" required className={fieldClass} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="candidate-phone" className={labelClass}>
                      Phone number
                    </label>
                    <input id="candidate-phone" name="phone" type="tel" className={fieldClass} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="candidate-role" className={labelClass}>
                    Desired role
                  </label>
                  <input id="candidate-role" name="role" type="text" className={fieldClass} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="candidate-cv" className={labelClass}>
                    CV upload
                  </label>
                  <input
                    id="candidate-cv"
                    name="cv"
                    type="file"
                    className={`${fieldClass} file:mr-4 file:rounded-full file:border-0 file:bg-gradient-to-r file:from-brand-red file:to-brand-orange file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white`}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <label htmlFor="candidate-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="candidate-message"
                    name="message"
                    rows={4}
                    className={`${fieldClass} flex-1`}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-auto rounded-full bg-gradient-to-r from-brand-orange to-brand-red px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-transform hover:scale-[1.02]"
                >
                  Submit Profile
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
