"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type Values = {
  name: string;
  company: string;
  email: string;
  phone: string;
  requirement: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const initialValues: Values = {
  name: "",
  company: "",
  email: "",
  phone: "",
  requirement: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-silver-dark focus:outline-none focus:ring-2";
const okBorder = "border-border focus:border-brand-orange focus:ring-brand-orange/20";
const errorBorder = "border-brand-red focus:border-brand-red focus:ring-brand-red/20";
const labelClass = "text-sm font-medium text-foreground";
const errorTextClass = "text-xs font-medium text-brand-red";

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!values.company.trim()) errors.company = "Company name is required.";
  if (!values.email.trim()) {
    errors.email = "Work email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (values.phone.trim() && !/^[0-9+()\-\s]{7,}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.requirement.trim()) {
    errors.requirement = "Please describe the hiring requirement.";
  }
  return errors;
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="3" y1="13" x2="21" y2="13" stroke="currentColor" strokeWidth="1.5" />
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

export default function HiringForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof Values) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setErrors((err) => ({ ...err, [field]: undefined }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-white/70 p-8 sm:p-10">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange text-white">
        <BriefcaseIcon />
      </div>
      <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
        Hiring Talent
      </h2>

      {submitted ? (
        <div className="mt-6 flex flex-1 flex-col items-center justify-center rounded-2xl border border-border bg-white/80 p-8 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-orange text-white">
            <CheckCircleIcon />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-foreground">
            Thank you — request received
          </h3>
          <p className="mt-2 max-w-xs text-sm text-muted">
            We&rsquo;ve received your hiring requirement and will be in touch
            shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setValues(initialValues);
              setSubmitted(false);
            }}
            className="mt-6 text-sm font-semibold text-brand-orange hover:underline"
          >
            Submit another requirement
          </button>
        </div>
      ) : (
        <>
          <p className="mt-2 text-sm text-muted">
            Tell us who you need, and we&rsquo;ll get back to you.
          </p>

          <form noValidate onSubmit={handleSubmit} className="mt-6 flex flex-1 flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="employer-name" className={labelClass}>
                Full name
              </label>
              <input
                id="employer-name"
                type="text"
                value={values.name}
                onChange={handleChange("name")}
                aria-invalid={!!errors.name}
                className={`${fieldClass} ${errors.name ? errorBorder : okBorder}`}
              />
              {errors.name && <p className={errorTextClass}>{errors.name}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="employer-company" className={labelClass}>
                Company name
              </label>
              <input
                id="employer-company"
                type="text"
                value={values.company}
                onChange={handleChange("company")}
                aria-invalid={!!errors.company}
                className={`${fieldClass} ${errors.company ? errorBorder : okBorder}`}
              />
              {errors.company && <p className={errorTextClass}>{errors.company}</p>}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="employer-email" className={labelClass}>
                  Work email
                </label>
                <input
                  id="employer-email"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  aria-invalid={!!errors.email}
                  className={`${fieldClass} ${errors.email ? errorBorder : okBorder}`}
                />
                {errors.email && <p className={errorTextClass}>{errors.email}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="employer-phone" className={labelClass}>
                  Phone number
                </label>
                <input
                  id="employer-phone"
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
              <label htmlFor="employer-requirement" className={labelClass}>
                Hiring requirement
              </label>
              <input
                id="employer-requirement"
                type="text"
                value={values.requirement}
                onChange={handleChange("requirement")}
                aria-invalid={!!errors.requirement}
                className={`${fieldClass} ${errors.requirement ? errorBorder : okBorder}`}
              />
              {errors.requirement && <p className={errorTextClass}>{errors.requirement}</p>}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label htmlFor="employer-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="employer-message"
                rows={4}
                value={values.message}
                onChange={handleChange("message")}
                className={`${fieldClass} ${okBorder} flex-1`}
              />
            </div>

            <button
              type="submit"
              className="mt-auto rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/20 transition-transform hover:scale-[1.02]"
            >
              Submit Requirement
            </button>
          </form>
        </>
      )}
    </div>
  );
}
