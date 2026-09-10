"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "For Employers", href: "/employers" },
  { label: "For Candidates", href: "/candidates" },
];

export default function Navbar({ current = "Home" }: { current?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-20 mx-auto max-w-7xl px-6 py-6 lg:px-8">
      <div className="flex items-center justify-between">
        <a href="/" onClick={() => setOpen(false)}>
          <Image src={logo} alt="Annur" className="h-8 w-auto sm:h-9" priority />
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.label === current
                  ? "font-semibold text-foreground"
                  : "transition-colors hover:text-foreground"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-silver-dark sm:inline-block"
          >
            Contact Us
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-6 top-full z-20 mt-2 flex flex-col gap-1 rounded-2xl border border-border bg-white p-3 shadow-lg md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-medium ${
                link.label === current
                  ? "bg-silver/40 font-semibold text-foreground"
                  : "text-muted hover:bg-silver/30 hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-xl border border-border px-4 py-3 text-center text-sm font-semibold text-foreground"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
