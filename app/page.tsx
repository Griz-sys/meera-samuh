"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { teamMembers } from "@/lib/team-data";

const stats = [
  { value: "16+", label: "Years of Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "500+",label: "Corporate Clients" },
];

const brands = [
  {
    name: "Expatria",
    tagline: "Mobility Redefined",
    year: "Est. 2015",
    logo: "/expatria.png",
    href: "https://expatria.in/",
    description:
      "Comprehensive relocation and fleet management services for expats and foreign nationals settling in India. From visa facilitation to FRRO compliance and beyond.",
  },
  {
    name: "EMS",
    tagline: "Business Redefined",
    year: "Est. 2020",
    logo: "/ems.png",
    href: "https://emsinfo.in/",
    description:
      "Eminence Management Solutions — manpower and HR services for automobile, manufacturing, logistics, technical, and various other industries.",
  },
  {
    name: "GMS Corporate Services",
    tagline: "Corporate Solutions",
    year: "Est. 2023",
    logo: "/GMS-logo.svg",
    href: "https://www.gmscorporateservices.com/",
    description:
      "End-to-end corporate services covering compliance, secretarial, taxation, and business setup — helping organisations operate with confidence across India.",
  },
];

const services = [
  { title: "FRRO & Visa Services",  desc: "End-to-end visa processing, FRRO registration, and immigration compliance for expats and foreign nationals.", image: "/visa.png" },
  { title: "Relocation Services",   desc: "Complete relocation packages including home search, school search, settling-in support, and departure services.", image: "/relocation.png" },
  { title: "Fleet Management",      desc: "Dedicated fleet solutions under the Expatria brand — reliable, professional, and tailored for corporate needs.", image: "/fleet.png" },
  { title: "Manpower Solutions",    desc: "Talent acquisition and workforce management across automotive, manufacturing, logistics, and technical sectors.", image: "/manpower.png" },
  { title: "Corporate Consulting",  desc: "Flexible, innovative corporate support designed to help companies establish and grow their operations in India.", image: "/corporate consulting.png" },
];

const tickerItems = [
  "FRRO & Visa Services",
  "Relocation Services",
  "Fleet Management",
  "Manpower Solutions",
  "Corporate Consulting",
];

export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── Hero ─────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          marginTop: "72px",
          marginLeft: "32px",
          marginRight: "32px",
          marginBottom: "0",
          borderRadius: 20,
          overflow: "hidden",
          minHeight: "85vh",
          boxShadow: "0 25px 70px rgba(0,0,0,0.12)",
        }}
      >
        <video
          autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        >
          <source src="/A_cinematic_second_seamless.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.18) 100%)", zIndex: 1 }} />

        <div
          style={{
            position: "absolute", inset: 0, zIndex: 2,
            display: "flex", alignItems: "flex-start", justifyContent: "space-between",
            padding: "3.5rem 4.5rem", gap: "2rem",
          }}
        >
          {/* Left — badge + heading */}
          <div style={{ animation: "slideInLeft 0.9s ease-out" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <span style={{
                display: "inline-block", padding: "7px 18px",
                background: "rgba(255,122,51,0.20)", border: "1px solid rgba(255,122,51,0.5)",
                borderRadius: 999, color: "#FF8A45", fontSize: "0.72rem", fontWeight: 700,
                letterSpacing: "0.13em", textTransform: "uppercase",
              }}>
                Since 2008 · 50+ Countries
              </span>
            </div>
            <h1 className="serif" style={{
              fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 700, lineHeight: 1.05,
              letterSpacing: "-0.02em", color: "white", textShadow: "0 2px 20px rgba(0,0,0,0.4)", maxWidth: 520,
              marginBottom: "2.5rem",
            }}>
              We Help You<br />Grow Better
            </h1>

            {/* Stats */}
            <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="serif" style={{ fontSize: "2rem", fontWeight: 700, color: "white", lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginTop: "0.3rem" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — description + CTA */}
          <div style={{ maxWidth: 320, flexShrink: 0, animation: "slideInRight 0.9s ease-out", marginTop: "auto" }}>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.88)", marginBottom: "2rem" }}>
              End-to-end Global Mobility, HR, and Business Solutions for corporates and expats — delivered by a group trusted across more than 50 countries.
            </p>
            <Link
              href="/journey"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "13px 28px", background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.35)", borderRadius: 8,
                color: "white", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none",
                backdropFilter: "blur(8px)", transition: "background 200ms ease-out",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.25)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.15)"; }}
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Brands ───────────────────────────────── */}
      <section style={{ background: "var(--background)", borderBottom: "1px solid var(--border)" }}>
        {/* Section header */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 2.5rem 3rem" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}>
            <div>
              <div className="label" style={{ marginBottom: "0.6rem" }}>Our Portfolio</div>
              <h2 className="serif" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.1 }}>
                Three Brands.<br />One Vision.
              </h2>
            </div>
            <p style={{ maxWidth: 320, color: "var(--muted-foreground)", fontSize: "0.92rem", lineHeight: 1.8, textAlign: "right" }}>
              Each brand is purpose-built to solve a distinct challenge — together they form a comprehensive corporate solutions group.
            </p>
          </div>
        </div>

        {/* Brand cards */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2.5rem 5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {brands.map((b, i) => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                overflow: "hidden",
                transition: "box-shadow 300ms ease-out, border-color 300ms ease-out",
              }}
            >
              {/* Top accent strip */}
              <div style={{ height: 3, background: "var(--accent)", opacity: 0.85 }} />

              {/* Logo area */}
              <div style={{
                padding: "2.5rem 2.5rem 2rem",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <div style={{ height: 52, display: "flex", alignItems: "center" }}>
                  {b.logo ? (
                    <Image src={b.logo} alt={b.name} width={160} height={52}
                      style={{ height: 48, width: "auto", objectFit: "contain", objectPosition: "left" }}
                    />
                  ) : (
                    <span className="serif" style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--foreground)" }}>{b.name}</span>
                  )}
                </div>
                <span style={{
                  fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em",
                  color: "var(--muted-foreground)", fontFamily: "var(--font-ibm-plex-mono)",
                  textTransform: "uppercase",
                }}>{b.year}</span>
              </div>

              {/* Body */}
              <div style={{ padding: "2rem 2.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <p className="serif" style={{
                  fontSize: "1.25rem", fontWeight: 400, fontStyle: "italic",
                  color: "var(--accent)", marginBottom: "1.25rem", lineHeight: 1.3,
                }}>
                  "{b.tagline}"
                </p>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "var(--muted-foreground)", flex: 1 }}>
                  {b.description}
                </p>
              </div>

              {/* Footer */}
              <div style={{
                padding: "1.25rem 2.5rem",
                borderTop: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.03em" }}>
                  Visit site
                </span>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "var(--muted)", display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 200ms ease-out",
                }}>
                  <ExternalLink size={13} color="var(--accent)" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Our Services ─────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(180deg, #FFF6EC 0%, #FDECD9 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "5rem 2.5rem" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2rem" }}>
            <div>
              <div className="label" style={{ marginBottom: "0.4rem" }}>What We Do</div>
              <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>Our Services</h2>
            </div>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "var(--accent)", fontWeight: 700, fontSize: "0.875rem", textDecoration: "none", letterSpacing: "0.02em" }}>
              Get in touch <ArrowRight size={14} />
            </Link>
          </div>

          {/* Image card grid — 3 top + 2 bottom */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 14 }}>
            {services.map((s, idx) => (
              <div
                key={s.title}
                className="group"
                style={{
                  position: "relative",
                  height: idx < 3 ? 460 : 400,
                  borderRadius: 14,
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "#111",
                  gridColumn: idx < 3 ? "span 2" : "span 3",
                }}
              >
                <Image
                  src={s.image} alt={s.title} fill
                  style={{ objectFit: "cover", transition: "transform 600ms ease-out", opacity: 0.82 }}
                  className="group-hover:scale-105"
                />
                {/* Gradient — tall enough for title + desc */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 45%, transparent 100%)" }} />
                {/* Text */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem 1.75rem" }}>
                  <div style={{ color: "var(--accent)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    Service
                  </div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.3, marginBottom: "0.75rem" }}>
                    {s.title}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 340 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ───────────────────────────────── */}
      <section style={{ borderBottom: "1px solid var(--border)", background: "var(--card)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "5rem 2.5rem" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem" }}>
            <div>
              <div className="label" style={{ marginBottom: "0.4rem" }}>The People Behind the Brand</div>
              <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>Leadership</h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {teamMembers.map((m) => (
              <Link
                key={m.slug}
                href={`/team/${m.slug}`}
                className="group"
                style={{ textDecoration: "none", display: "block", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden", background: "var(--background)", transition: "box-shadow 300ms ease-out, border-color 300ms ease-out" }}
              >
                {/* Photo */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", background: "var(--muted)", overflow: "hidden" }}>
                  {/* Initials behind photo */}
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 0, background: "linear-gradient(135deg, #f5f0e8, #ede8df)" }}>
                    <span className="serif" style={{ fontSize: "3.5rem", fontWeight: 400, color: "var(--accent)", fontStyle: "italic", opacity: 0.4 }}>{m.initials}</span>
                  </div>
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    unoptimized
                    style={{ objectFit: "cover", objectPosition: "center top", transition: "transform 500ms ease-out", zIndex: 1 }}
                    className="group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div style={{ padding: "1.25rem 1.5rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--foreground)", marginBottom: "0.2rem" }}>{m.name}</div>
                    <div className="label" style={{ color: "var(--accent)", fontSize: "0.65rem" }}>{m.role}</div>
                  </div>
                  <ArrowRight size={16} style={{ color: "var(--muted-foreground)", flexShrink: 0 }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        className="py-14 md:py-16 px-6 text-center"
        style={{
          background: "#B8591E",
          ["--foreground" as string]: "#ffffff",
          ["--muted-foreground" as string]: "rgba(255,255,255,0.75)",
          ["--accent" as string]: "#ffffff",
          ["--border" as string]: "rgba(255,255,255,0.15)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="label-rule mb-8 max-w-xs mx-auto">
            <span className="label">Ready to Start?</span>
          </div>
          <h2 className="serif mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, fontStyle: "italic" }}>
            Let&apos;s Work Together
          </h2>
          <p style={{ color: "var(--muted-foreground)", maxWidth: 400, margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
            Whether you&apos;re an expat looking to settle in India or a corporate seeking scalable HR and mobility solutions — we&apos;re here to help.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ background: "#ffffff", color: "#B8591E" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#FFE9D2"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff"; }}
          >
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  );
}
