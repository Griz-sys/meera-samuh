import { Clock } from "lucide-react";

const milestones = [
  {
    year: "2008",
    category: "Foundation",
    title: "The Beginning",
    description: "Meera Samuh was founded with a clear purpose — to support expats and foreign nationals in navigating India's complex immigration and visa landscape. Starting with Visa facilitation and FRRO registration, the company quickly earned a reputation for reliability and transparency.",
    highlights: ["Visa & FRRO services launched", "First 10 corporate clients onboarded", "Operations established in New Delhi"],
  },
  {
    year: "2012",
    category: "Growth",
    title: "Building Reputation",
    description: "After four years of consistent service delivery, Meera Samuh had built a strong standing in the market. The team expanded its network of legal and government liaisons, reducing processing times and improving client outcomes across the board.",
    highlights: ["Expanded government network", "Served clients from 25+ countries", "Team doubled in size"],
  },
  {
    year: "2015",
    category: "Expansion",
    title: "Expatria is Born",
    description: "Responding to a surge in corporate demand, Meera Samuh launched Expatria — Mobility Redefined. This new vertical brought complete relocation services and fleet management under one roof, giving corporate clients a single point of contact for all mobility needs.",
    highlights: ["Relocation services launched", "Fleet management division added", "Expatria brand established"],
  },
  {
    year: "2018",
    category: "Expansion",
    title: "Fleet Division Formalised",
    description: "The fleet management arm of Expatria was formally structured as a dedicated division, with dedicated operations, vehicle partners, and a professional driver network to serve corporate clients across India.",
    highlights: ["Dedicated fleet operations team", "Pan-India vehicle network", "Corporate SLA framework introduced"],
  },
  {
    year: "2020",
    category: "New Vertical",
    title: "EMS — Business Redefined",
    description: "Meera Samuh launched Eminence Management Solutions (EMS). The new brand delivered manpower solutions across automotive, manufacturing, logistics, and technical sectors — quickly becoming a trusted partner for prestigious industry names.",
    highlights: ["Manpower division launched", "Automobile & manufacturing sector clients", "Logistics & technical staffing added"],
  },
];

export default function HistoryPage() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── Hero ── */}
      <section
        className="py-32 md:py-40 px-6 text-center"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="label-rule mb-6 max-w-xs mx-auto">
            <span className="label">Our Journey</span>
          </div>
          <h1
            className="serif mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Our <span style={{ fontStyle: "italic", color: "var(--accent)" }}>History</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
            From a single-service visa firm in 2008 to a multi-brand corporate
            solutions group — the story of how Meera Samuh grew.
          </p>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical spine */}
          <div
            className="absolute top-0 bottom-0 hidden md:block"
            style={{ left: 79, width: 1, background: "var(--border)" }}
          />

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-10 items-start">

                {/* Year column */}
                <div className="hidden md:flex flex-col items-center shrink-0" style={{ width: 80 }}>
                  <div
                    className="serif w-14 h-14 rounded-full flex items-center justify-center text-sm shrink-0 relative z-10"
                    style={{
                      background: "var(--card)",
                      border: "1px solid var(--accent)",
                      color: "var(--accent)",
                      fontStyle: "italic",
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {m.year}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${i < milestones.length - 1 ? "pb-16" : "pb-0"}`}>
                  <div className="card card-accent-top p-8">
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <div>
                        <span className="label mb-2" style={{ display: "block", color: "var(--muted-foreground)" }}>
                          {m.category}
                        </span>
                        <h3
                          className="serif"
                          style={{ fontSize: "1.4rem", fontWeight: 600, color: "var(--foreground)" }}
                        >
                          {m.title}
                        </h3>
                        <p className="md:hidden label mt-1" style={{ color: "var(--accent)" }}>{m.year}</p>
                      </div>
                    </div>

                    <hr className="rule mb-5" />

                    <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
                      {m.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {m.highlights.map((h) => (
                        <span
                          key={h}
                          className="label"
                          style={{
                            fontSize: "0.65rem",
                            padding: "5px 12px",
                            background: "var(--muted)",
                            border: "1px solid var(--border)",
                            borderRadius: 4,
                            color: "var(--muted-foreground)",
                            letterSpacing: "0.1em",
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Placeholder ── */}
      <section className="pb-32 px-6 max-w-4xl mx-auto">
        <div className="placeholder-block p-16 text-center">
          <Clock size={32} style={{ color: "var(--border-hover)", marginBottom: 12 }} />
          <p className="serif" style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", fontStyle: "italic" }}>
            More History Content
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--border-hover)", marginTop: 6 }}>
            Awards, media coverage, and additional milestones go here.
          </p>
        </div>
      </section>

    </div>
  );
}
