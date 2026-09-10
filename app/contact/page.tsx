import type { Metadata } from "next";
import ContactHero from "./components/ContactHero";
import ContactForms from "./components/ContactForms";

export const metadata: Metadata = {
  title: "Contact — Annur",
  description:
    "Whether you're hiring talent or looking for your next opportunity, get in touch with Annur.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ContactHero />
      <ContactForms />
    </main>
  );
}
