const fieldClass =
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-silver-dark focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20";
const labelClass = "text-sm font-medium text-foreground";

export default function SubmitCVForm() {
  return (
    <section id="cv-form" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-red">
            Get Started
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&rsquo;s Find What&rsquo;s Next
          </h2>
        </div>

        <form className="mt-12 rounded-3xl border border-border bg-white/70 p-8 sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className={labelClass}>
                Full name
              </label>
              <input id="fullName" name="fullName" type="text" required className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>
                Email address
              </label>
              <input id="email" name="email" type="email" required className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className={labelClass}>
                Phone number
              </label>
              <input id="phone" name="phone" type="tel" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="jobTitle" className={labelClass}>
                Current job title
              </label>
              <input id="jobTitle" name="jobTitle" type="text" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="industry" className={labelClass}>
                Preferred industry
              </label>
              <input id="industry" name="industry" type="text" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="desiredRole" className={labelClass}>
                Desired role
              </label>
              <input id="desiredRole" name="desiredRole" type="text" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="location" className={labelClass}>
                Preferred location
              </label>
              <input id="location" name="location" type="text" className={fieldClass} />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="cv" className={labelClass}>
                CV upload
              </label>
              <input
                id="cv"
                name="cv"
                type="file"
                required
                className={`${fieldClass} file:mr-4 file:rounded-full file:border-0 file:bg-gradient-to-r file:from-brand-red file:to-brand-orange file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white`}
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="additionalInfo" className={labelClass}>
                Additional information
              </label>
              <textarea id="additionalInfo" name="additionalInfo" rows={4} className={fieldClass} />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-transform hover:scale-[1.01] sm:w-auto"
          >
            Join Our Talent Network
          </button>
        </form>
      </div>
    </section>
  );
}
