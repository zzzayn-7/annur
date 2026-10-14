import type { Metadata } from "next";
import CandidateHero from "./components/CandidateHero";
import CandidateJourney from "./components/CandidateJourney";
import CandidateSupport from "./components/CandidateSupport";
import CandidateOpportunitiesFlow from "./components/CandidateOpportunitiesFlow";

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
      <CandidateOpportunitiesFlow />
    </main>
  );
}
