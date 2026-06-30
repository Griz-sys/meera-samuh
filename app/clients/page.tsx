"use client";

import { ImageIcon, Handshake } from "lucide-react";
import Image from "next/image";

const industries = [
  "Automobile", "Manufacturing", "Logistics", "Technical",
  "IT & Technology", "FMCG", "Healthcare", "Finance",
];

const brands = [
  { name: "Vedanta", logo: "/logos/Screenshot 2026-06-29 162639.png" },
  { name: "Schlumberger", logo: "/logos/Screenshot 2026-06-29 162709.png" },
  { name: "Weatherford", logo: "/logos/Screenshot 2026-06-29 162726.png" },
  { name: "EXPRO", logo: "/logos/Screenshot 2026-06-29 162739.png" },
  { name: "DENSO", logo: "/logos/Screenshot 2026-06-29 162752.png" },
  { name: "Toyota", logo: "/logos/Screenshot 2026-06-29 162838.png" },
  { name: "Suzuki", logo: "/logos/Screenshot 2026-06-29 162913.png" },
  { name: "Toshiba", logo: "/logos/Screenshot 2026-06-29 162927.png" },
  { name: "Hitachi", logo: "/logos/Screenshot 2026-06-29 162953.png" },
  { name: "Mitsubishi", logo: "/logos/Screenshot 2026-06-29 163005.png" },
  { name: "Pilot", logo: "/logos/Screenshot 2026-06-29 163021.png" },
  { name: "FCC", logo: "/logos/Screenshot 2026-06-29 163039.png" },
  { name: "Olympus", logo: "/logos/Screenshot 2026-06-29 163054.png" },
  { name: "Konica Minolta", logo: "/logos/Screenshot 2026-06-29 163110.png" },
  { name: "JSW", logo: "/logos/Screenshot 2026-06-29 163127.png" },
  { name: "ILES", logo: "/logos/Screenshot 2026-06-29 163138.png" },
  { name: "Mitsubishi Corporation", logo: "/logos/Screenshot 2026-06-29 163155.png" },
  { name: "Fujifilm", logo: "/logos/Screenshot 2026-06-29 163208.png" },
  { name: "Sharp", logo: "/logos/Screenshot 2026-06-29 163223.png" },
  { name: "Terumo", logo: "/logos/Screenshot 2026-06-29 165711.png" },
  { name: "Vivo", logo: "/logos/Screenshot 2026-06-29 165729.png" },
  { name: "ZTE", logo: "/logos/Screenshot 2026-06-29 170639.png" },
  { name: "Miniso", logo: "/logos/Screenshot 2026-06-29 170758.png" },
  { name: "Nothing", logo: "/logos/Screenshot 2026-06-29 170813.png" },
  { name: "Orion", logo: "/logos/Screenshot 2026-06-29 170833.png" },
  { name: "Ceragem", logo: "/logos/Screenshot 2026-06-29 170904.png" },
  { name: "Samsung", logo: "/logos/Screenshot 2026-06-29 171127.png" },
  { name: "KITA", logo: "/logos/Screenshot 2026-06-29 171146.png" },
  { name: "Cameron", logo: "/logos/Screenshot 2026-06-29 171159.png" },
  { name: "Emaar", logo: "/logos/Screenshot 2026-06-29 171221.png" },
  { name: "JBM", logo: "/logos/Screenshot 2026-06-29 171426.png" },
];

export default function ClientsPage() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── Hero ── */}
      <section
        className="px-6 text-center"
        style={{ borderBottom: "1px solid var(--border)", paddingTop: "8rem", paddingBottom: "3rem" }}
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
          <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
            Proud to serve some of the most prestigious organisations across India
            and internationally — trusted partners from over 50 countries.
          </p>
        </div>
      </section>

      {/* ── Client Logo Grid ── */}
      <section className="px-6" style={{ borderBottom: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px" style={{ background: "var(--border)", border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2 py-10 relative"
                style={{ background: "var(--card)", aspectRatio: "3/2" }}
              >
                <div style={{ position: "relative", width: "104%", height: "78%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    style={{ objectFit: "contain" }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div style={{ display: "none" }} className="fallback-logo flex items-center justify-center">
                    <ImageIcon size={20} style={{ color: "var(--border-hover)" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats below grid */}
          <div className="flex flex-wrap gap-0 justify-center mt-6" style={{ border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
            {[
              { value: "500+", label: "Corporate Clients" },
              { value: "50+",  label: "Countries" },
              { value: "15+",  label: "Industries" },
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
