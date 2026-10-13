import type { Metadata } from "next";
import CandidateHero from "./components/CandidateHero";
import CurrentOpportunities from "./components/CurrentOpportunities";
import CandidateSupport from "./components/CandidateSupport";
import CandidateJourney from "./components/CandidateJourney";
import SubmitCVForm from "./components/SubmitCVForm";

export const metadata: Metadata = {
  title: "For Candidates — Annur",
  description:
    "Connect with opportunities aligned with your experience, ambitions, and long-term career direction.",
};

export default function CandidatesPage() {
  return (
    <main className="flex-1">
      <CandidateHero />
      <CandidateJourney />
      <CandidateSupport />
      <CurrentOpportunities />
      <SubmitCVForm />
    </main>
  );
}
