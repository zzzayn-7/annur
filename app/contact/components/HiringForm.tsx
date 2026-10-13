const fieldClass =
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-silver-dark focus:border-dusk-sky focus:outline-none focus:ring-2 focus:ring-dusk-sky/30";
const labelClass = "text-sm font-medium text-foreground";

export default function HiringForm() {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-white/70 p-8 sm:p-10">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Hiring Talent
      </h2>
      <p className="mt-2 text-sm text-muted">
        Tell us who you need, and we&rsquo;ll get back to you.
      </p>

      <form className="mt-6 flex flex-1 flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-hiring-name" className={labelClass}>
            Name
          </label>
          <input id="contact-hiring-name" name="name" type="text" required className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-hiring-company" className={labelClass}>
            Company
          </label>
          <input id="contact-hiring-company" name="company" type="text" required className={fieldClass} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-hiring-email" className={labelClass}>
              Work email
            </label>
            <input id="contact-hiring-email" name="email" type="email" required className={fieldClass} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-hiring-phone" className={labelClass}>
              Phone number
            </label>
            <input id="contact-hiring-phone" name="phone" type="tel" className={fieldClass} />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-hiring-position" className={labelClass}>
            Position being recruited
          </label>
          <input id="contact-hiring-position" name="position" type="text" required className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-hiring-employmentType" className={labelClass}>
            Employment type
          </label>
          <select
            id="contact-hiring-employmentType"
            name="employmentType"
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select type
            </option>
            <option>Permanent</option>
            <option>Contract</option>
            <option>Temporary</option>
            <option>Executive</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-hiring-location" className={labelClass}>
            Location
          </label>
          <input id="contact-hiring-location" name="location" type="text" className={fieldClass} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-hiring-jobDescription" className={labelClass}>
            Job description upload
          </label>
          <input
            id="contact-hiring-jobDescription"
            name="jobDescription"
            type="file"
            className={`${fieldClass} file:mr-4 file:rounded-full file:border file:border-grey file:bg-transparent file:px-4 file:py-2 file:text-xs file:font-semibold file:text-grey`}
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <label htmlFor="contact-hiring-requirements" className={labelClass}>
            Additional requirements
          </label>
          <textarea
            id="contact-hiring-requirements"
            name="requirements"
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
