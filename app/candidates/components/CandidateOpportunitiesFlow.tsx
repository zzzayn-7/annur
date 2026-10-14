"use client";

import { useEffect, useState } from "react";
import CurrentOpportunities, { Job, jobs } from "./CurrentOpportunities";
import SubmitCVForm, { PrefillJobData } from "./SubmitCVForm";

export default function CandidateOpportunitiesFlow() {
  const [selectedJob, setSelectedJob] = useState<PrefillJobData | null>(null);

  // Check URL hash on initial load (e.g., #apply-Senior-Backend-Engineer or #cv-form)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (hash.startsWith("#apply-")) {
      const decodedTitle = decodeURIComponent(hash.replace("#apply-", "")).replace(/-/g, " ").toLowerCase();
      const matched = jobs.find(
        (j) => j.title.toLowerCase() === decodedTitle || j.title.toLowerCase().replace(/\s+/g, "-") === decodedTitle
      );
      if (matched) {
        setSelectedJob({
          title: matched.title,
          industry: matched.industry,
          location: matched.location,
          selectionId: Date.now(),
        });
      }
    }
  }, []);

  const handleApply = (job: Job) => {
    setSelectedJob({
      title: job.title,
      industry: job.industry,
      location: job.location,
      selectionId: Date.now(),
    });

    const formElement = document.getElementById("cv-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });

      // Focus first empty field (Full Name) after scroll starts
      setTimeout(() => {
        const nameInput = document.getElementById("fullName");
        if (nameInput) {
          nameInput.focus({ preventScroll: true });
        }
      }, 500);
    }
  };

  const handleClearJob = () => {
    setSelectedJob(null);
  };

  return (
    <>
      <CurrentOpportunities
        onApply={handleApply}
        selectedJobTitle={selectedJob?.title}
      />
      <SubmitCVForm
        selectedJob={selectedJob}
        onClearJob={handleClearJob}
      />
    </>
  );
}
