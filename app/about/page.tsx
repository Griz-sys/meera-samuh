const values = [
  { title: "Customer Oriented", desc: "Every decision starts and ends with the client's best outcome." },
  { title: "Quality Assurance", desc: "Documented processes and consistent standards across all verticals." },
  { title: "Problem Solver", desc: "We navigate complexity so our clients don't have to." },
  { title: "Integrity", desc: "Transparent dealings built on honesty and accountability." },
  { title: "Transparency", desc: "Clear communication at every stage of the engagement." },
  { title: "Technology Driven", desc: "Modern tools powering efficient, scalable service delivery." },
];

const timeline = [
  { year: "2008", event: "Meera Samuh Founded", desc: "Established with a vision to support expats settling in India — starting with Visa and FRRO services." },
  { year: "2015", event: "Expatria Launched", desc: "Expanded into relocation and fleet management under 'Expatria – Mobility Redefined'." },
  { year: "2018", event: "Fleet Division Formalised", desc: "Fleet services integrated into Expatria, completing the full mobility offering for corporate clients." },
  { year: "2020", event: "EMS Established", desc: "Launched Eminence Management Solutions for manpower needs across automotive, manufacturing, and logistics." },
];

export default function AboutPage() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── Hero ── */}
      <section
        className="py-32 md:py-40 px-6 text-center"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="label-rule mb-6 max-w-xs mx-auto">
            <span className="label">Who We Are</span>
          </div>
          <h1
            className="serif mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            About <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Meera Samuh</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>
            A trusted name in global mobility and business solutions — serving expats,
            corporations, and industries across more than 50 countries since 2008.
          </p>
        </div>
      </section>

      {/* ── Story + Timeline ── */}
      <section className="py-32 px-6" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

          {/* Story */}
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

          {/* Timeline */}
          <div>
            <div className="label mb-5" style={{ display: "block" }}>Milestones</div>
            <div className="space-y-0">
              {timeline.map((t, i) => (
                <div key={t.year} className="flex gap-6">
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="serif w-12 h-12 rounded-full flex items-center justify-center text-sm shrink-0"
                      style={{
                        border: "1px solid var(--accent)",
                        color: "var(--accent)",
                        fontStyle: "italic",
                        fontWeight: 600,
                        background: "var(--card)",
                      }}
                    >
                      {t.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && (
                      <div style={{ width: 1, flex: 1, background: "var(--border)", margin: "6px 0" }} />
                    )}
                  </div>
                  <div className="pb-10">
                    <span className="label" style={{ color: "var(--accent)" }}>{t.year}</span>
                    <h4 className="serif mt-1 mb-1" style={{ fontSize: "1.05rem", fontWeight: 600 }}>{t.event}</h4>
                    <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
