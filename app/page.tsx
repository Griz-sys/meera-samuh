import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import SoftAurora from "@/components/SoftAurora";

const stats = [
  { value: "16+", label: "Years of Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "3", label: "Business Verticals" },
  { value: "500+", label: "Corporate Clients" },
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
    logo: null,
    href: "https://www.gmscorporateservices.com/",
    description:
      "End-to-end corporate services covering compliance, secretarial, taxation, and business setup — helping organisations operate with confidence across India.",
  },
];

const services = [
  { title: "FRRO & Visa Services", desc: "End-to-end visa processing, FRRO registration, and immigration compliance for expats and foreign nationals." },
  { title: "Relocation Services", desc: "Complete relocation packages including home search, school search, settling-in support, and departure services." },
  { title: "Fleet Management", desc: "Dedicated fleet solutions under the Expatria brand — reliable, professional, and tailored for corporate needs." },
  { title: "Manpower Solutions", desc: "Talent acquisition and workforce management across automotive, manufacturing, logistics, and technical sectors." },
  { title: "Corporate Consulting", desc: "Flexible, innovative corporate support designed to help companies establish and grow their operations in India." },
];

export default function Home() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── Hero ─────────────────────────────────────── */}
      <section
        className="py-36 md:py-44 px-6 text-center"
        style={{ borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}
      >
        {/* Aurora background */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <SoftAurora
            speed={0.6}
            scale={1.5}
            brightness={1}
            color1="#f8d57e"
            color2="#e29733"
            noiseFrequency={2.5}
            noiseAmplitude={1}
            bandHeight={0.5}
            bandSpread={1}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1}
            enableMouseInteraction
            mouseInfluence={0.25}
          />
        </div>

        <div className="relative max-w-5xl mx-auto" style={{ zIndex: 1 }}>
          {/* Label */}
          <div className="label-rule mb-8 max-w-xs mx-auto">
            <span className="label">Since 2008 · 50+ Countries</span>
          </div>

          <h1
            className="serif mb-8"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--foreground)",
            }}
          >
            We Help You<br />
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>Grow Better</span>
          </h1>

          <p
            className="mx-auto mb-12"
            style={{
              maxWidth: 520,
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "var(--muted-foreground)",
            }}
          >
            End-to-end Global Mobility, HR, and Business Solutions for corporates
            and expats — delivered by a group trusted across more than 50 countries.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about" className="btn-primary">
              Discover Our Story <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <section style={{ background: "var(--card)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="py-12 px-6 text-center"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div
                  className="serif mb-2"
                  style={{
                    fontSize: "3rem",
                    fontWeight: 400,
                    color: "var(--accent)",
                    lineHeight: 1,
                    fontStyle: "italic",
                  }}
                >
                  {s.value}
                </div>
                <div className="label" style={{ color: "var(--muted-foreground)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Brands ───────────────────────────────── */}
      <section className="py-32 md:py-40 px-6" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="label-rule mb-5 max-w-xs mx-auto">
              <span className="label">Our Portfolio</span>
            </div>
            <h2 className="serif" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400 }}>
              Three Brands. One Vision.
            </h2>
            <p className="mt-4 mx-auto" style={{ maxWidth: 480, color: "var(--muted-foreground)" }}>
              Each brand is purpose-built to solve a distinct challenge — together
              they form a comprehensive corporate solutions group.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {brands.map((b, i) => (
              <a
                key={b.name}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-accent-top p-8 block"
                style={{ animationDelay: `${i * 100}ms`, textDecoration: "none" }}
              >
                {/* Logo or name */}
                <div className="mb-5 h-14 flex items-center">
                  {b.logo ? (
                    <Image
                      src={b.logo}
                      alt={b.name}
                      width={160}
                      height={56}
                      style={{ height: 48, width: "auto", objectFit: "contain", objectPosition: "left" }}
                    />
                  ) : (
                    <span className="serif font-semibold" style={{ fontSize: "1.15rem", color: "var(--foreground)" }}>
                      {b.name}
                    </span>
                  )}
                </div>
                <div className="label mb-3" style={{ color: "var(--muted-foreground)" }}>{b.year}</div>
                <p className="mb-4" style={{ fontSize: "0.8rem", color: "var(--accent)", letterSpacing: "0.06em", fontStyle: "italic" }}>
                  {b.tagline}
                </p>
                <hr className="rule mb-4" />
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>
                  {b.description}
                </p>
                <div className="mt-5 flex items-center gap-1" style={{ fontSize: "0.75rem", color: "var(--accent)" }}>
                  <span>Visit site</span>
                  <ExternalLink size={11} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────── */}
      <section
        className="py-32 md:py-40 px-6"
        style={{ background: "var(--muted)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="label-rule mb-5 max-w-xs mx-auto">
              <span className="label">What We Do</span>
            </div>
            <h2 className="serif" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 400 }}>
              Our Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card p-8">
                <h4
                  className="serif mb-3"
                  style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--foreground)" }}
                >
                  {s.title}
                </h4>
                <hr className="rule mb-3" />
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--muted-foreground)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-32 md:py-40 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="label-rule mb-8 max-w-xs mx-auto">
            <span className="label">Ready to Start?</span>
          </div>
          <h2
            className="serif mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, fontStyle: "italic" }}
          >
            Let&apos;s Work Together
          </h2>
          <p className="mb-10" style={{ color: "var(--muted-foreground)", maxWidth: 400, margin: "0 auto 2.5rem" }}>
            Whether you&apos;re an expat looking to settle in India or a corporate seeking
            scalable HR and mobility solutions — we&apos;re here to help.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  );
}
