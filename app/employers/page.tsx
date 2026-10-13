import type { Metadata } from "next";
import EmployerHero from "./components/EmployerHero";
import EmployerSolutions from "./components/EmployerSolutions";
import WhatEmployersExpect from "./components/WhatEmployersExpect";
import EmployerProcess from "./components/EmployerProcess";
import EnquiryForm from "./components/EnquiryForm";

export const metadata: Metadata = {
  title: "For Employers — Annur",
  description:
    "Access carefully selected professionals who match your requirements, culture, and long-term direction.",
};

export default function EmployersPage() {
  return (
    <main className="flex-1">
      <EmployerHero />
      <EmployerSolutions />
      <WhatEmployersExpect />
      <EmployerProcess />
      <EnquiryForm />
    </main>
  );
}
