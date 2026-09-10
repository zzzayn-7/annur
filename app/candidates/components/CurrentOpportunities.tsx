"use client";

import { useMemo, useState } from "react";

const jobs = [
  {
    title: "Senior Backend Engineer",
    location: "Remote",
    industry: "Technology & Digital",
    type: "Full-time",
    level: "Senior",
  },
  {
    title: "Product Designer",
    location: "New York, US",
    industry: "Technology & Digital",
    type: "Full-time",
    level: "Mid-level",
  },
  {
    title: "Financial Analyst",
    location: "London, UK",
    industry: "Finance & Accounting",
    type: "Full-time",
    level: "Mid-level",
  },
  {
    title: "Site Engineer",
    location: "Berlin, DE",
    industry: "Engineering & Construction",
    type: "Contract",
    level: "Senior",
  },
  {
    title: "Marketing Manager",
    location: "Remote",
    industry: "Sales & Marketing",
    type: "Full-time",
    level: "Mid-level",
  },
  {
    title: "Operations Coordinator",
    location: "New York, US",
    industry: "Operations & Administration",
    type: "Full-time",
    level: "Entry-level",
  },
];

const locations = ["All Locations", ...new Set(jobs.map((job) => job.location))];
const industries = ["All Industries", ...new Set(jobs.map((job) => job.industry))];
const types = ["All Types", ...new Set(jobs.map((job) => job.type))];
const levels = ["All Levels", ...new Set(jobs.map((job) => job.level))];

const selectClass =
  "w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
      <path d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.3-6.5 11-6.5 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
      <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LevelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
      <line x1="5" y1="19" x2="5" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="19" x2="19" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
      <path d="M20 12 12.5 19.5a2 2 0 0 1-2.8 0L4 13.8V4h9.8L20 10.2a2 2 0 0 1 0 2.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
    </svg>
  );
}

export default function CurrentOpportunities() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [industry, setIndustry] = useState("All Industries");
  const [type, setType] = useState("All Types");
  const [level, setLevel] = useState("All Levels");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesKeyword = job.title
        .toLowerCase()
        .includes(keyword.trim().toLowerCase());
      const matchesLocation = location === "All Locations" || job.location === location;
      const matchesIndustry = industry === "All Industries" || job.industry === industry;
      const matchesType = type === "All Types" || job.type === type;
      const matchesLevel = level === "All Levels" || job.level === level;
      return (
        matchesKeyword &&
        matchesLocation &&
        matchesIndustry &&
        matchesType &&
        matchesLevel
      );
    });
  }, [keyword, location, industry, type, level]);

  return (
    <section id="opportunities" className="bg-brand-orange py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Current Opportunities
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Find Your Next Role
          </h2>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search by keyword or job title"
            className={selectClass}
          />
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <select value={location} onChange={(e) => setLocation(e.target.value)} className={selectClass}>
              {locations.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <select value={industry} onChange={(e) => setIndustry(e.target.value)} className={selectClass}>
              {industries.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
              {types.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <select value={level} onChange={(e) => setLevel(e.target.value)} className={selectClass}>
              {levels.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {filteredJobs.length === 0 ? (
          <p className="mt-10 text-center text-sm font-medium text-white/90">
            No opportunities match your filters right now.
          </p>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <div key={job.title} className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold leading-snug text-brand-orange">
                  {job.title}
                </h3>
                <div className="mt-5 space-y-2.5 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <PinIcon />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <TagIcon />
                    {job.industry}
                  </div>
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <LevelIcon />
                    {job.level}
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-orange transition-colors hover:bg-brand-orange hover:text-white"
                  >
                    View Details
                  </a>
                  <a
                    href="#cv-form"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-red to-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-orange/20 transition-transform hover:scale-[1.03]"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
