import Reveal from "@/app/components/Reveal";

const industries = [
  {
    title: "Technology & Digital",
    roles: ["Software Engineer", "DevOps Engineer", "Product Manager"],
  },
  {
    title: "Finance & Accounting",
    roles: ["Financial Analyst", "Accountant", "Financial Controller"],
  },
  {
    title: "Engineering & Construction",
    roles: ["Site Engineer", "Project Manager", "Quantity Surveyor"],
  },
  {
    title: "Healthcare",
    roles: ["Clinical Coordinator", "Healthcare Administrator", "Medical Support Specialist"],
  },
  {
    title: "Sales & Marketing",
    roles: ["Account Executive", "Marketing Manager", "Business Development Lead"],
  },
  {
    title: "Operations & Administration",
    roles: ["Operations Manager", "Executive Assistant", "Office Administrator"],
  },
];

export default function IndustriesRoles() {
  return (
    <section className="bg-brand-orange py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Where We Recruit
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Industries and Roles
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            A look at the sectors ANNUR covers and examples of the positions
            recruited within each one.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.title} delay={i * 80}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-brand-orange sm:text-lg">
                  {industry.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {industry.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
