import { ImageIcon, Handshake } from "lucide-react";

const industries = [
  "Automobile", "Manufacturing", "Logistics", "Technical",
  "IT & Technology", "FMCG", "Healthcare", "Finance",
];

export default function ClientsPage() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── Hero ── */}
      <section
        className="py-32 md:py-40 px-6 text-center"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="label-rule mb-6 max-w-xs mx-auto">
            <span className="label">Our Network</span>
          </div>
          <h1
            className="serif mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Our <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Clients</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 3rem" }}>
            Proud to serve some of the most prestigious organisations across India
            and internationally — trusted partners from over 50 countries.
          </p>

          {/* Inline stats */}
          <div className="flex flex-wrap gap-0 justify-center" style={{ border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden", maxWidth: 480, margin: "0 auto" }}>
            {[
              { value: "500+", label: "Corporate Clients" },
              { value: "50+", label: "Countries" },
              { value: "15+", label: "Industries" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="flex-1 py-8 text-center"
                style={{ borderRight: i < 2 ? "1px solid var(--border)" : "none", background: "var(--card)" }}
              >
                <div className="serif" style={{ fontSize: "2.5rem", fontWeight: 400, color: "var(--accent)", fontStyle: "italic", lineHeight: 1 }}>{s.value}</div>
                <div className="label mt-1" style={{ color: "var(--muted-foreground)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section
        className="py-16 px-6"
        style={{ background: "var(--muted)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="label-rule mb-8 max-w-xs mx-auto">
            <span className="label">Industries We Serve</span>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((ind) => (
              <span
                key={ind}
                className="label"
                style={{
                  padding: "8px 20px",
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 4,
                  color: "var(--muted-foreground)",
                  fontSize: "0.7rem",
                }}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Logo Grid ── */}
      <section className="py-28 px-6" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="label-rule mb-5 max-w-xs mx-auto">
              <span className="label">Business Partners</span>
            </div>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>
              Few of Our Business Partners
            </h2>
            <p className="mt-3" style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>
              Trusted by renowned brands across multiple sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px" style={{ background: "var(--border)", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2 py-10"
                style={{ background: "var(--card)", aspectRatio: "3/2" }}
              >
                <ImageIcon size={20} style={{ color: "var(--border-hover)" }} />
                <span style={{ fontSize: "0.7rem", color: "var(--border-hover)", letterSpacing: "0.06em" }}>Logo {i + 1}</span>
              </div>
            ))}
          </div>

          <div className="placeholder-block p-10 mt-6 text-center">
            <Handshake size={24} style={{ color: "var(--border-hover)" }} />
            <p className="serif mt-3" style={{ fontSize: "0.95rem", fontStyle: "italic", color: "var(--muted-foreground)" }}>
              Replace placeholders with actual client logos
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-28 px-6" style={{ background: "var(--muted)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="label-rule mb-5 max-w-xs mx-auto">
              <span className="label">Testimonials</span>
            </div>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>
              What Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="card p-8">
                {/* Decorative quote mark */}
                <div
                  className="serif mb-4"
                  style={{ fontSize: "4rem", lineHeight: 0.8, color: "var(--accent)", opacity: 0.2, fontStyle: "italic" }}
                  aria-hidden
                >
                  &ldquo;
                </div>
                {/* Body lines */}
                <div className="space-y-2 mb-8">
                  {[95, 80, 65].map((w, j) => (
                    <div key={j} style={{ height: 10, borderRadius: 3, background: "var(--muted)", width: `${w}%` }} />
                  ))}
                </div>
                <hr className="rule mb-5" />
                {/* Attribution */}
                <div className="flex items-center gap-3">
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--muted)", border: "2px dashed var(--border)", flexShrink: 0 }} />
                  <div>
                    <div style={{ height: 10, width: 80, borderRadius: 3, background: "var(--muted)", marginBottom: 5 }} />
                    <div style={{ height: 8, width: 56, borderRadius: 3, background: "var(--muted)" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="placeholder-block p-10 mt-8 text-center">
            <p className="serif" style={{ fontSize: "0.95rem", fontStyle: "italic", color: "var(--muted-foreground)" }}>
              Add real client testimonials — name, designation, and company
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
