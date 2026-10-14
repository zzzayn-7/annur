"use client";

import { useEffect, useState } from "react";

const fieldClass =
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-silver-dark focus:border-dusk-sky focus:outline-none focus:ring-2 focus:ring-dusk-sky/30 transition-all duration-300";
const labelClass = "text-sm font-medium text-foreground";

export type PrefillJobData = {
  title: string;
  industry: string;
  location: string;
  selectionId?: number;
};

type SubmitCVFormProps = {
  selectedJob?: PrefillJobData | null;
  onClearJob?: () => void;
};

export default function SubmitCVForm({
  selectedJob,
  onClearJob,
}: SubmitCVFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobTitle: "",
    industry: "",
    desiredRole: "",
    location: "",
    additionalInfo: "",
  });

  const [highlightAutoFilled, setHighlightAutoFilled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selected job data into form fields whenever a role is selected
  useEffect(() => {
    if (selectedJob) {
      setFormData((prev) => ({
        ...prev,
        industry: selectedJob.industry || "",
        desiredRole: selectedJob.title || "",
        location: selectedJob.location || "",
      }));

      // Trigger subtle pulse highlight on auto-filled fields
      setHighlightAutoFilled(true);
      const timer = setTimeout(() => setHighlightAutoFilled(false), 2200);
      return () => clearTimeout(timer);
    }
  }, [selectedJob]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const autoFillHighlightClass = highlightAutoFilled
    ? "border-dusk-plum ring-2 ring-dusk-plum/30 bg-dusk-plum/5"
    : "";

  return (
    <section id="cv-form" className="bg-background py-24 scroll-mt-6">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-grey">
            Get Started
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&rsquo;s Find What&rsquo;s Next
          </h2>
          <p className="mt-2 text-sm text-muted">
            Submit your details below to get connected with tailored opportunities.
          </p>
        </div>

        {isSubmitted ? (
          <div className="mt-12 rounded-3xl border border-silver bg-white/80 p-8 text-center sm:p-12 shadow-sm backdrop-blur-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-dusk-rose/20 text-dusk-plum">
              <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="mt-4 text-2xl font-bold text-foreground">Application Received!</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              Thank you for applying for{" "}
              <strong className="text-foreground">{formData.desiredRole || "this opportunity"}</strong>. Our recruitment team will review your profile and reach out soon.
            </p>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  jobTitle: "",
                  industry: "",
                  desiredRole: "",
                  location: "",
                  additionalInfo: "",
                });
                onClearJob?.();
              }}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-dusk-rose to-dusk-plum px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-[1.02] cursor-pointer"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 rounded-3xl border border-border bg-white/70 p-8 sm:p-10 shadow-sm"
          >
            {selectedJob && (
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-dusk-plum/20 bg-dusk-plum/5 p-4 text-sm backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-dusk-rose to-dusk-plum text-white shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-dusk-ink">
                      Applying for: <span className="text-dusk-plum">{selectedJob.title}</span>
                    </p>
                    <p className="text-xs text-muted">
                      Pre-filled: {selectedJob.industry} • {selectedJob.location}
                    </p>
                  </div>
                </div>
                {onClearJob && (
                  <button
                    type="button"
                    onClick={() => {
                      onClearJob();
                      setFormData((prev) => ({
                        ...prev,
                        industry: "",
                        desiredRole: "",
                        location: "",
                      }));
                    }}
                    className="rounded-full border border-silver bg-white px-3 py-1 text-xs font-medium text-grey transition hover:border-dusk-plum hover:text-dusk-plum cursor-pointer"
                  >
                    Clear selection
                  </button>
                )}
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName" className={labelClass}>
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Alex Johnson"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClass}>
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className={labelClass}>
                  Phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="jobTitle" className={labelClass}>
                  Current job title
                </label>
                <input
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineer"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="industry" className={labelClass}>
                    Preferred industry
                  </label>
                  {highlightAutoFilled && (
                    <span className="text-[11px] font-semibold text-dusk-plum animate-pulse">
                      Auto-filled
                    </span>
                  )}
                </div>
                <input
                  id="industry"
                  name="industry"
                  type="text"
                  value={formData.industry}
                  onChange={handleChange}
                  placeholder="e.g. Technology & Digital"
                  className={`${fieldClass} ${autoFillHighlightClass}`}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="desiredRole" className={labelClass}>
                    Desired role
                  </label>
                  {highlightAutoFilled && (
                    <span className="text-[11px] font-semibold text-dusk-plum animate-pulse">
                      Auto-filled
                    </span>
                  )}
                </div>
                <input
                  id="desiredRole"
                  name="desiredRole"
                  type="text"
                  value={formData.desiredRole}
                  onChange={handleChange}
                  placeholder="e.g. Senior Backend Engineer"
                  className={`${fieldClass} ${autoFillHighlightClass}`}
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="location" className={labelClass}>
                    Preferred location
                  </label>
                  {highlightAutoFilled && (
                    <span className="text-[11px] font-semibold text-dusk-plum animate-pulse">
                      Auto-filled
                    </span>
                  )}
                </div>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Remote or London, UK"
                  className={`${fieldClass} ${autoFillHighlightClass}`}
                />
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
                  className={`${fieldClass} file:mr-4 file:rounded-full file:border file:border-grey file:bg-transparent file:px-4 file:py-2 file:text-xs file:font-semibold file:text-grey`}
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="additionalInfo" className={labelClass}>
                  Additional information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Tell us more about your career goals, salary expectations, or availability..."
                  className={fieldClass}
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-gradient-to-r from-dusk-rose to-dusk-plum px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-[1.01] sm:w-auto cursor-pointer"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
