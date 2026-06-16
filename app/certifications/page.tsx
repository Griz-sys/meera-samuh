import { Award, ShieldCheck, ImageIcon } from "lucide-react";

const certTypes = [
  { label: "ISO Certifications" },
  { label: "Government Approvals" },
  { label: "Industry Memberships" },
  { label: "Partner Accreditations" },
];

const trustPoints = [
  {
    title: "Government Registered",
    desc: "Fully registered and compliant with Indian government regulations for immigration, FRRO, and labour laws.",
  },
  {
    title: "Quality Assured",
    desc: "Our processes follow documented quality frameworks, ensuring consistent, repeatable outcomes for every client.",
  },
  {
    title: "Industry Recognised",
    desc: "Memberships and accreditations from recognised industry bodies reinforce our credibility and professional standards.",
  },
];

export default function CertificationsPage() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── Hero ── */}
      <section
        className="py-32 md:py-40 px-6 text-center"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="label-rule mb-6 max-w-xs mx-auto">
            <span className="label">Trust &amp; Compliance</span>
          </div>
          <h1
            className="serif mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Our <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Certifications</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
            Our certifications and accreditations reflect our commitment to quality,
            compliance, and delivering world-class service standards.
          </p>
        </div>
      </section>

      {/* ── Type Summary ── */}
      <section
        className="py-16 px-6"
        style={{ background: "var(--card)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "var(--border)", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
          {certTypes.map((c) => (
            <div key={c.label} className="py-10 px-6 text-center" style={{ background: "var(--card)" }}>
              <ShieldCheck size={20} className="mx-auto mb-3" style={{ color: "var(--accent)" }} />
              <p className="serif" style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--foreground)" }}>{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Certificate Gallery ── */}
      <section className="py-28 px-6" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="label-rule mb-5 max-w-xs mx-auto">
              <span className="label">Certificate Gallery</span>
            </div>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>
              Verified Credentials
            </h2>
            <p className="mt-3" style={{ fontSize: "0.9rem", color: "var(--muted-foreground)" }}>
              Demonstrating our quality and compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="card" style={{ aspectRatio: "3/4", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                {/* Image area */}
                <div
                  className="flex-1 flex flex-col items-center justify-center gap-2"
                  style={{ background: "var(--muted)", borderBottom: "1px solid var(--border)" }}
                >
                  <ImageIcon size={24} style={{ color: "var(--border-hover)" }} />
                  <span style={{ fontSize: "0.7rem", color: "var(--border-hover)", letterSpacing: "0.06em" }}>
                    Certificate
                  </span>
                </div>
                {/* Label area */}
                <div className="p-4">
                  <div style={{ height: 9, borderRadius: 3, background: "var(--muted)", width: "80%", marginBottom: 7 }} />
                  <div style={{ height: 7, borderRadius: 3, background: "var(--muted)", width: "50%" }} />
                </div>
              </div>
            ))}
          </div>

          <div className="placeholder-block p-12 mt-8 text-center">
            <Award size={24} style={{ color: "var(--border-hover)" }} />
            <p className="serif mt-3" style={{ fontSize: "0.95rem", fontStyle: "italic", color: "var(--muted-foreground)" }}>
              Upload certificate images to populate this gallery
            </p>
            <p style={{ fontSize: "0.8rem", color: "var(--border-hover)", marginTop: 6, maxWidth: 380 }}>
              ISO, government approvals, industry memberships, partner accreditations — each card shows the image, title, and issue date.
            </p>
          </div>
        </div>
      </section>

      {/* ── Trust Indicators ── */}
      <section className="py-28 px-6" style={{ background: "var(--muted)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="label-rule mb-5 max-w-xs mx-auto">
              <span className="label">Why It Matters</span>
            </div>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>
              Compliance You Can Count On
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trustPoints.map((item) => (
              <div key={item.title} className="card card-accent-top p-8">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center mb-5"
                  style={{ background: "rgba(184,134,11,0.08)", border: "1px solid rgba(184,134,11,0.2)" }}
                >
                  <ShieldCheck size={18} style={{ color: "var(--accent)" }} />
                </div>
                <h4 className="serif mb-3" style={{ fontSize: "1.1rem", fontWeight: 600 }}>{item.title}</h4>
                <hr className="rule mb-3" />
                <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--muted-foreground)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
