import Image from "next/image";

const values = [
  { title: "Customer Oriented", desc: "Every decision starts and ends with the client's best outcome." },
  { title: "Quality Assurance", desc: "Documented processes and consistent standards across all verticals." },
  { title: "Problem Solver", desc: "We navigate complexity so our clients don't have to." },
  { title: "Integrity", desc: "Transparent dealings built on honesty and accountability." },
  { title: "Transparency", desc: "Clear communication at every stage of the engagement." },
  { title: "Technology Driven", desc: "Modern tools powering efficient, scalable service delivery." },
];

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

export default function JourneyPage() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          marginTop: "72px",
          marginLeft: "32px",
          marginRight: "32px",
          borderRadius: 20,
          overflow: "hidden",
          minHeight: "60vh",
          boxShadow: "0 25px 70px rgba(0,0,0,0.12)",
        }}
      >
        <Image
          src="/journey/hero.png"
          alt="Meera Samuh's journey across India"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,6,4,0.95) 0%, rgba(8,6,4,0.75) 35%, rgba(8,6,4,0.25) 70%, rgba(8,6,4,0.05) 100%)" }} />

        <div className="text-center px-6" style={{ position: "relative", zIndex: 2, minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "3.5rem 1.5rem" }}>
          <span style={{
            display: "inline-block", padding: "7px 18px", marginBottom: "1.5rem",
            background: "rgba(255,122,51,0.20)", border: "1px solid rgba(255,122,51,0.5)",
            borderRadius: 999, color: "#FF8A45", fontSize: "0.72rem", fontWeight: 700,
            letterSpacing: "0.13em", textTransform: "uppercase",
          }}>
            Who We Are
          </span>
          <h1
            className="serif mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "white", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Our <span style={{ fontStyle: "italic", color: "#FF8A45" }}>Journey</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.7, maxWidth: 460, margin: "0 auto", textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}>
            From a single-service visa firm in 2008 to a trusted, multi-brand corporate
            solutions group serving clients across more than 50 countries.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-32 px-6" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="label mb-5" style={{ display: "block" }}>Our Story</div>
            <h2
              className="serif mb-8"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400, lineHeight: 1.2 }}
            >
              Built on Purpose,<br />Grown by Trust
            </h2>
            <div className="space-y-5" style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--muted-foreground)" }}>
              <p>
                With a vision to support expats and foreigners around the world to settle in India,
                Meera Samuh was established in 2008 and has successfully catered to clients from
                more than 50 different countries.
              </p>
              <p>
                After working majorly in Visa and FRRO, due to the huge demand in the market, our
                face value and strong reputation led us to expand into Relocation and Fleet in 2015
                under <em style={{ color: "var(--foreground)", fontStyle: "italic" }}>Expatria – Mobility Redefined</em>.
              </p>
              <p>
                In 2020, we entered the Manpower sector under{" "}
                <em style={{ color: "var(--foreground)", fontStyle: "italic" }}>
                  EMS – Business Redefined (Eminence Management Solutions)
                </em>
                , successfully serving prestigious brands in automobile, manufacturing, logistics,
                and technical industries.
              </p>
            </div>
          </div>

          <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}>
            <Image
              src="/journey/story.png"
              alt="Meera Samuh's team at work in India"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="label-rule mb-5 max-w-xs mx-auto">
            <span className="label">Milestones</span>
          </div>
          <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>
            How We Got Here
          </h2>
        </div>

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

      {/* ── Presence Across India ── */}
      <section className="pb-32 px-6" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="label-rule mb-5 max-w-xs mx-auto">
              <span className="label">On the Ground</span>
            </div>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>
              Our Presence Across India
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "/journey/office.png", alt: "Meera Samuh's FRRO and visa documentation office in India", caption: "FRRO & Visa Services" },
              { src: "/journey/team.png", alt: "Meera Samuh's manpower and HR consulting team in India", caption: "Manpower & HR Consulting" },
              { src: "/journey/fleet.png", alt: "Meera Samuh's corporate fleet in India", caption: "Corporate Fleet Management" },
            ].map((img) => (
              <div key={img.src}>
                <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: 14, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
                  <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
                </div>
                <p className="label mt-4 text-center" style={{ color: "var(--muted-foreground)" }}>{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section
        className="py-32 px-6"
        style={{ background: "var(--muted)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="label-rule mb-5 max-w-xs mx-auto">
              <span className="label">Our Purpose</span>
            </div>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>
              Vision &amp; Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                label: "Our Vision",
                quote: "To become a Global Market Leader in providing end-to-end Global Mobility and HR Solutions.",
              },
              {
                label: "Our Mission",
                quote: "Helping corporates by providing innovative and flexible solutions. Creating a transparent and long-lasting relation with our business partners with adherence to moral values and work ethics.",
              },
            ].map((item) => (
              <div key={item.label} className="card card-accent-top p-10">
                <div className="label mb-6" style={{ display: "block" }}>{item.label}</div>
                {/* Decorative quote mark */}
                <div
                  className="serif mb-4"
                  style={{ fontSize: "5rem", lineHeight: 0.8, color: "var(--accent)", opacity: 0.25, fontStyle: "italic" }}
                  aria-hidden
                >
                  &ldquo;
                </div>
                <p
                  className="serif"
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    color: "var(--foreground)",
                    fontStyle: "italic",
                    fontWeight: 400,
                  }}
                >
                  {item.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="label-rule mb-5 max-w-xs mx-auto">
              <span className="label">Core Values</span>
            </div>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-8">
                <h4 className="serif mb-3" style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--foreground)" }}>
                  {v.title}
                </h4>
                <hr className="rule mb-3" />
                <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
