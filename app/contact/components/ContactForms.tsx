import Reveal from "@/app/components/Reveal";
import HiringForm from "./HiringForm";
import OpportunityForm from "./OpportunityForm";

export default function ContactForms() {
  return (
    <section className="bg-background pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal direction="left">
            <HiringForm />
          </Reveal>
          <Reveal direction="right">
            <OpportunityForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
