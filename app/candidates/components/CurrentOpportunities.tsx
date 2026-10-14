"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import bgImage from "@/public/images/p4-s3-bg.png";

export type Job = {
  title: string;
  location: string;
  industry: string;
  type: string;
  level: string;
};

export const jobs: Job[] = [
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
  "w-full rounded-xl border border-silver bg-transparent px-4 py-2.5 text-sm text-foreground backdrop-blur-sm focus:border-dusk-sky focus:outline-none focus:ring-2 focus:ring-dusk-sky/30";

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

type CurrentOpportunitiesProps = {
  onApply?: (job: Job) => void;
  selectedJobTitle?: string;
};

export default function CurrentOpportunities({
  onApply,
  selectedJobTitle,
}: CurrentOpportunitiesProps) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [industry, setIndustry] = useState("All Industries");
  const [type, setType] = useState("All Types");
  const [level, setLevel] = useState("All Levels");

  const scrollerRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("button, a, select, input")) {
      return;
    }
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.down || !scrollerRef.current) return;
    scrollerRef.current.scrollLeft =
      drag.current.startScroll - (e.clientX - drag.current.startX);
  };
  const onPointerUp = () => {
    drag.current.down = false;
  };

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
    <section id="opportunities" className="relative w-full py-24">
      <div className="absolute inset-0 overflow-hidden">
        <Image src={bgImage} alt="" fill className="object-cover" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-grey">
            Current Opportunities
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dusk-ink sm:text-4xl">
            Find Your Next Role
          </h2>
        </div>

        <div className="mt-10 rounded-2xl border border-silver bg-transparent p-5 shadow-sm backdrop-blur-sm sm:p-6">
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search by keyword or job title"
            className={selectClass}
          />
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
          <p className="mt-10 text-center text-sm font-medium text-dusk-plum">
            No opportunities match your filters right now.
          </p>
        ) : (
          <div className="relative mt-10">
            <div
              ref={scrollerRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
              className="flex cursor-grab touch-pan-y gap-5 overflow-x-auto pb-2 select-none active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
            {filteredJobs.map((job) => {
              const isSelected = selectedJobTitle === job.title;
              return (
                <div
                  key={job.title}
                  className={`flex h-[300px] w-[190px] shrink-0 flex-col rounded-3xl border ${
                    isSelected
                      ? "border-dusk-plum shadow-md ring-2 ring-dusk-plum/30 bg-white/40"
                      : "border-silver bg-transparent"
                  } p-5 shadow-sm backdrop-blur-sm transition-all sm:h-[340px] sm:w-[230px]`}
                >
                  <h3 className="text-base font-bold leading-snug text-grey">
                    {job.title}
                  </h3>
                  <div className="mt-4 space-y-2 text-xs text-muted">
                    <div className="flex items-center gap-2">
                      <span className="text-dusk-sky-deep">
                        <PinIcon />
                      </span>
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-dusk-sky-deep">
                        <TagIcon />
                      </span>
                      {job.industry}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-dusk-sky-deep">
                        <BriefcaseIcon />
                      </span>
                      {job.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-dusk-sky-deep">
                        <LevelIcon />
                      </span>
                      {job.level}
                    </div>
                  </div>
                  <div className="mt-auto pt-6">
                    <button
                      type="button"
                      onClick={() => {
                        if (onApply) {
                          onApply(job);
                        } else {
                          const formEl = document.getElementById("cv-form");
                          if (formEl) {
                            formEl.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                      className={`inline-flex w-full items-center justify-center rounded-full ${
                        isSelected
                          ? "bg-gradient-to-r from-dusk-plum to-dusk-sky-deep scale-[1.02]"
                          : "bg-gradient-to-r from-dusk-rose to-dusk-plum hover:scale-[1.03]"
                      } px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-black/20 transition-all active:scale-[0.98] cursor-pointer`}
                    >
                      {isSelected ? "Selected ✓" : "Apply Now"}
                    </button>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
