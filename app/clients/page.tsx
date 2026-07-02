"use client";

import { ImageIcon, Handshake } from "lucide-react";
import Image from "next/image";

const brands = [
  { name: "Vedanta", logo: "/logos/Screenshot 2026-06-29 162639.png" },
  { name: "Schlumberger", logo: "/logos/Screenshot 2026-06-29 162709.png" },
  { name: "Weatherford", logo: "/logos/Screenshot 2026-06-29 162726.png" },
  { name: "EXPRO", logo: "/logos/Screenshot 2026-06-29 162739.png" },
  { name: "DENSO", logo: "/logos/Screenshot 2026-06-29 162752.png" },
  { name: "Toyota", logo: "/logos/Screenshot 2026-07-01 172714.png" },
  { name: "Suzuki", logo: "/logos/Screenshot 2026-06-29 162838.png" },
  { name: "Toshiba", logo: "/logos/Screenshot 2026-06-29 162913.png" },
  { name: "Hitachi", logo: "/logos/Screenshot 2026-06-29 162927.png" },
  { name: "Mitsui & Co.", logo: "/logos/Screenshot 2026-06-29 162953.png" },
  { name: "Pilot", logo: "/logos/Screenshot 2026-06-29 163005.png" },
  { name: "FCC", logo: "/logos/Screenshot 2026-06-29 163021.png" },
  { name: "Olympus", logo: "/logos/Screenshot 2026-06-29 163039.png" },
  { name: "Konica Minolta", logo: "/logos/Screenshot 2026-06-29 163054.png" },
  { name: "JSW", logo: "/logos/Screenshot 2026-06-29 163110.png" },
  { name: "OILES", logo: "/logos/Screenshot 2026-06-29 163127.png" },
  { name: "Mitsubishi Corporation", logo: "/logos/Screenshot 2026-06-29 163138.png" },
  { name: "Fujifilm", logo: "/logos/Screenshot 2026-06-29 163155.png" },
  { name: "Sharp", logo: "/logos/Screenshot 2026-06-29 163208.png" },
  { name: "Terumo", logo: "/logos/Screenshot 2026-06-29 163223.png" },
  { name: "Vivo", logo: "/logos/Screenshot 2026-06-29 165711.png" },
  { name: "ZTE", logo: "/logos/Screenshot 2026-06-29 165729.png" },
  { name: "Miniso", logo: "/logos/Screenshot 2026-06-29 170639.png" },
  { name: "Nothing", logo: "/logos/Screenshot 2026-06-29 170758.png" },
  { name: "Orion", logo: "/logos/Screenshot 2026-06-29 170813.png" },
  { name: "Ceragem", logo: "/logos/Screenshot 2026-06-29 170833.png" },
  { name: "Samsung", logo: "/logos/Screenshot 2026-06-29 170904.png" },
  { name: "KITA", logo: "/logos/Screenshot 2026-06-29 171127.png" },
  { name: "Cameron", logo: "/logos/Screenshot 2026-06-29 171146.png" },
  { name: "Emaar", logo: "/logos/Screenshot 2026-06-29 171159.png" },
  { name: "JBM Group", logo: "/logos/Screenshot 2026-06-29 171221.png" },
  { name: "IndiGo", logo: "/logos/Screenshot 2026-06-29 171426.png" },
];

export default function ClientsPage() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      <div style={{ background: "linear-gradient(180deg, #FDEEDD 0%, #FDEEDD 35%, var(--muted) 70%, var(--muted) 100%)" }}>
        {/* ── Hero ── */}
        <section
          className="px-6 text-center"
          style={{ paddingTop: "8rem", paddingBottom: "3rem" }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="label-rule mb-6 max-w-xs mx-auto">
              <span className="label">Our Network</span>
            </div>
            <h1
              className="serif mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Our <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Business Partners</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>
              Proud to serve some of the most prestigious organisations across India and internationally,
              trusted partners from over 50 countries.
            </p>
          </div>
        </section>

        {/* ── Client Logo Grid ── */}
        <section className="px-4" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="hidden md:flex flex-col gap-3" style={{ overflow: "hidden" }}>
            {(() => {
              const rowSizes = [6, 7, 6, 7, 6];
              let start = 0;
              return rowSizes.map((size, ri) => {
                const row = brands.slice(start, start + size);
                start += size;
                return (
                  <div key={ri} className="flex gap-3" style={{ marginLeft: size === 6 ? 78 : 0 }}>
                    {row.map((brand, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center gap-2 py-6 relative shrink-0 transition-transform duration-200 hover:scale-110 hover:shadow-lg hover:z-10"
                        style={{ background: "#ffffff", width: 155, aspectRatio: "3/2", borderRadius: 10, boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}
                      >
                        <div style={{ position: "relative", width: "80%", height: "78%", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                );
              });
            })()}
          </div>

          {/* Mobile — simple grid, no offset */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:hidden">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2 py-10 relative transition-transform duration-200 hover:scale-110 hover:shadow-lg hover:z-10"
                style={{ background: "#ffffff", aspectRatio: "3/2", borderRadius: 10, boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}
              >
                <div style={{ position: "relative", width: "80%", height: "78%", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
        </div>
        </section>
      </div>

      {/* ── Stats ── */}
      <section className="px-6" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-0 justify-center" style={{ border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
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

    </div>
  );
}
