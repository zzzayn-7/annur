import Image from "next/image";
import logo from "@/public/images/logo.png";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "For Employers", href: "/employers" },
  { label: "For Candidates", href: "/candidates" },
];

export default function Navbar({ current = "Home" }: { current?: string }) {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <a href="/">
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

      <a
        href="/contact"
        className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-silver-dark"
      >
        Contact Us
      </a>
    </nav>
  );
}
