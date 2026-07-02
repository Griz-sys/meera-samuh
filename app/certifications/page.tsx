import Image from "next/image";
import { ShieldCheck } from "lucide-react";

const certificates = [
  { name: "EURA Full Member", category: "Partner Accreditation", logo: "/certificate/eura.png" },
  { name: "ISO 9001:2015", category: "Quality Management", logo: "/certificate/ISO-9001.webp" },
  { name: "ISO 27001:2013", category: "Information Security", logo: "/certificate/ISO-27001.webp" },
  { name: "ISO 14001:2015", category: "Environmental Management", logo: "/certificate/iso14001.png" },
  { name: "Certification Body Accreditation", category: "Government Approval", logo: "/certificate/registrar.png" },
  { name: "OTOAI Member", category: "Industry Membership", logo: "/certificate/OTOAI-300x218.webp" },
  { name: "IATO Member", category: "Industry Membership", logo: "/certificate/iato.png" },
  { name: "ETAA Member", category: "Industry Membership", logo: "/certificate/etaa.png" },
  { name: "Member of JCCI", category: "Industry Membership", logo: "/certificate/jcci.png" },
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
      <section className="pt-20 pb-10 md:pt-24 md:pb-12 px-6 text-center">
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

      {/* ── Certificate Gallery ── */}
      <section className="pt-4 pb-16 px-6" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto">

          {/* Desktop — staggered rows: 5 then 4, offset */}
          <div className="hidden md:flex flex-col gap-6">
            {(() => {
              const rowSizes = [5, 4];
              let start = 0;
              return rowSizes.map((size, ri) => {
                const row = certificates.slice(start, start + size);
                start += size;
                return (
                  <div key={ri} className="flex gap-6" style={{ marginLeft: ri % 2 === 1 ? 123 : 0 }}>
                    {row.map((c) => (
                      <div key={c.name} className="card shrink-0" style={{ width: 221, aspectRatio: "3/4", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                        {/* Image area */}
                        <div
                          className="flex-1 flex items-center justify-center p-3 relative"
                          style={{ background: "var(--muted)", borderBottom: "1px solid var(--border)" }}
                        >
                          <Image
                            src={c.logo}
                            alt={c.name}
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                        {/* Label area */}
                        <div className="px-4 pt-2 pb-4">
                          <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--foreground)", marginBottom: 4 }}>{c.name}</div>
                          <div className="label" style={{ fontSize: "0.65rem", color: "var(--accent)" }}>{c.category}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              });
            })()}
          </div>

          {/* Mobile — simple grid, no offset */}
          <div className="grid grid-cols-2 gap-6 md:hidden">
            {certificates.map((c) => (
              <div key={c.name} className="card" style={{ aspectRatio: "3/4", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                {/* Image area */}
                <div
                  className="flex-1 flex items-center justify-center p-3 relative"
                  style={{ background: "var(--muted)", borderBottom: "1px solid var(--border)" }}
                >
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                {/* Label area */}
                <div className="px-4 pt-2 pb-4">
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--foreground)", marginBottom: 4 }}>{c.name}</div>
                  <div className="label" style={{ fontSize: "0.65rem", color: "var(--accent)" }}>{c.category}</div>
                </div>
              </div>
            ))}
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
