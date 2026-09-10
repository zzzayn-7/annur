"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type Values = {
  name: string;
  email: string;
  phone: string;
  role: string;
  message: string;
};

type Errors = Partial<Record<keyof Values | "cv", string>>;

const initialValues: Values = {
  name: "",
  email: "",
  phone: "",
  role: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-silver-dark focus:outline-none focus:ring-2";
const okBorder = "border-border focus:border-brand-orange focus:ring-brand-orange/20";
const errorBorder = "border-brand-red focus:border-brand-red focus:ring-brand-red/20";
const labelClass = "text-sm font-medium text-foreground";
const errorTextClass = "text-xs font-medium text-brand-red";

function validate(values: Values, cvName: string): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (values.phone.trim() && !/^[0-9+()\-\s]{7,}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.role.trim()) errors.role = "Desired role is required.";
  if (!cvName) errors.cv = "Please upload your CV.";
  return errors;
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function OpportunityForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [cvName, setCvName] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof Values) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setErrors((err) => ({ ...err, [field]: undefined }));
    };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    setCvName(e.target.files?.[0]?.name ?? "");
    setErrors((err) => ({ ...err, cv: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values, cvName);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-white/70 p-8 sm:p-10">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-red text-white">
        <CompassIcon />
      </div>
      <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
        Looking for Opportunities
      </h2>

      {submitted ? (
        <div className="mt-6 flex flex-1 flex-col items-center justify-center rounded-2xl border border-border bg-white/80 p-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-red text-white">
            <CheckCircleIcon />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-foreground">
            Thank you — profile received
          </h3>
          <p className="mt-2 max-w-xs text-sm text-muted">
            We&rsquo;ve received your profile and will reach out about
            suitable opportunities.
          </p>
          <button
            type="button"
            onClick={() => {
              setValues(initialValues);
              setCvName("");
              setSubmitted(false);
            }}
            className="mt-6 text-sm font-semibold text-brand-orange hover:underline"
          >
            Submit another profile
          </button>
        </div>
      ) : (
        <>
          <p className="mt-2 text-sm text-muted">
            Share your details, and we&rsquo;ll help you find what&rsquo;s
            next.
          </p>

          <form noValidate onSubmit={handleSubmit} className="mt-6 flex flex-1 flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="candidate-name" className={labelClass}>
                Full name
              </label>
              <input
                id="candidate-name"
                type="text"
                value={values.name}
                onChange={handleChange("name")}
                aria-invalid={!!errors.name}
                className={`${fieldClass} ${errors.name ? errorBorder : okBorder}`}
              />
              {errors.name && <p className={errorTextClass}>{errors.name}</p>}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="candidate-email" className={labelClass}>
                  Email address
                </label>
                <input
                  id="candidate-email"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  aria-invalid={!!errors.email}
                  className={`${fieldClass} ${errors.email ? errorBorder : okBorder}`}
                />
                {errors.email && <p className={errorTextClass}>{errors.email}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="candidate-phone" className={labelClass}>
                  Phone number
                </label>
                <input
                  id="candidate-phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange("phone")}
                  aria-invalid={!!errors.phone}
                  className={`${fieldClass} ${errors.phone ? errorBorder : okBorder}`}
                />
                {errors.phone && <p className={errorTextClass}>{errors.phone}</p>}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="candidate-role" className={labelClass}>
                Desired role
              </label>
              <input
                id="candidate-role"
                type="text"
                value={values.role}
                onChange={handleChange("role")}
                aria-invalid={!!errors.role}
                className={`${fieldClass} ${errors.role ? errorBorder : okBorder}`}
              />
              {errors.role && <p className={errorTextClass}>{errors.role}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="candidate-cv" className={labelClass}>
                CV upload
              </label>
              <input
                id="candidate-cv"
                type="file"
                onChange={handleFile}
                aria-invalid={!!errors.cv}
                className={`${fieldClass} ${errors.cv ? errorBorder : okBorder} file:mr-4 file:rounded-full file:border-0 file:bg-gradient-to-r file:from-brand-red file:to-brand-orange file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white`}
              />
              {errors.cv && <p className={errorTextClass}>{errors.cv}</p>}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="candidate-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="candidate-message"
                rows={4}
                value={values.message}
                onChange={handleChange("message")}
                className={`${fieldClass} ${okBorder} flex-1`}
              />
            </div>

            <button
              type="submit"
              className="mt-auto rounded-full bg-gradient-to-r from-brand-orange to-brand-red px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-transform hover:scale-[1.02]"
            >
              Submit Profile
            </button>
          </form>
        </>
      )}
    </div>
  );
}
