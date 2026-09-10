import Image from "next/image";
import logo from "@/public/images/logo.png";

const linkGroups = [
  {
    heading: "Company",
    links: ["About", "Sectors", "How We Work"],
  },
  {
    heading: "For Employers",
    links: ["Recruitment Solutions", "Hire Talent"],
  },
  {
    heading: "For Candidates",
    links: ["Current Openings", "Find Opportunities"],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Image src={logo} alt="Annur" className="h-8 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A people-focused recruitment agency connecting ambitious
              professionals with organizations ready to grow.
            </p>
            <a
              href="tel:+16102265045"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-brand-red"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
                <path
                  d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5V18a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6a2 2 0 0 1 1-2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              610 226 5045
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkGroups.map((group) => (
              <div key={group.heading}>
                <h4 className="text-sm font-semibold text-foreground">
                  {group.heading}
                </h4>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted transition-colors hover:text-brand-red"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} Annur. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <line x1="7.5" y1="10" x2="7.5" y2="16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="7.5" cy="7" r="0.9" fill="currentColor" />
                <path
                  d="M11.5 16.5V10M11.5 12.8c0-1.5 1-2.8 2.4-2.8s2.1 1 2.1 2.8v3.7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="m4 6.5 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
