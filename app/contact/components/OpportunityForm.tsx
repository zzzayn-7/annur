const fieldClass =
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-silver-dark focus:border-dusk-sky focus:outline-none focus:ring-2 focus:ring-dusk-sky/30";
const labelClass = "text-sm font-medium text-foreground";

export default function OpportunityForm() {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-white/70 p-8 sm:p-10">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Looking for Opportunities
      </h2>
      <p className="mt-2 text-sm text-muted">
        Share your details, and we&rsquo;ll help you find what&rsquo;s next.
      </p>

      <form className="mt-6 flex flex-1 flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-opportunity-fullName" className={labelClass}>
            Full name
          </label>
          <input
            id="contact-opportunity-fullName"
            name="fullName"
            type="text"
            required
            className={fieldClass}
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-opportunity-email" className={labelClass}>
              Email address
            </label>
            <input
              id="contact-opportunity-email"
              name="email"
              type="email"
              required
              className={fieldClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-opportunity-phone" className={labelClass}>
              Phone number
            </label>
            <input id="contact-opportunity-phone" name="phone" type="tel" className={fieldClass} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-opportunity-jobTitle" className={labelClass}>
            Current job title
          </label>
          <input id="contact-opportunity-jobTitle" name="jobTitle" type="text" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-opportunity-industry" className={labelClass}>
            Preferred industry
          </label>
          <input id="contact-opportunity-industry" name="industry" type="text" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-opportunity-desiredRole" className={labelClass}>
            Desired role
          </label>
          <input
            id="contact-opportunity-desiredRole"
            name="desiredRole"
            type="text"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-opportunity-location" className={labelClass}>
            Preferred location
          </label>
          <input id="contact-opportunity-location" name="location" type="text" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-opportunity-cv" className={labelClass}>
            CV upload
          </label>
          <input
            id="contact-opportunity-cv"
            name="cv"
            type="file"
            required
            className={`${fieldClass} file:mr-4 file:rounded-full file:border file:border-grey file:bg-transparent file:px-4 file:py-2 file:text-xs file:font-semibold file:text-grey`}
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="contact-opportunity-additionalInfo" className={labelClass}>
            Additional information
          </label>
          <textarea
            id="contact-opportunity-additionalInfo"
            name="additionalInfo"
            rows={4}
            className={`${fieldClass} flex-1`}
          />
        </div>

        <button
          type="submit"
          className="mt-auto rounded-full bg-gradient-to-r from-dusk-rose to-dusk-plum px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-[1.02]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
