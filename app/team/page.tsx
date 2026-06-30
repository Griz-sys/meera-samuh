"use client";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const leaders = [
  {
    name: "Gaurav Manav",
    role: "Co-Founder & CEO",
    linkedin: "https://www.linkedin.com/in/gaurav-manav-meerasamuh/",
    photo: "/team-gaurav.jfif",
    initials: "GM",
    bio: "Visionary leader driving Meera Samuh's growth across global mobility, HR, and corporate services. With over 16 years of industry experience, Gaurav has built a group trusted by corporates and expats across 50+ countries.",
  },
  {
    name: "Arokia Manav",
    role: "Co-Founder & MD",
    linkedin: "https://www.linkedin.com/in/arokia-manav-552b45190/",
    photo: "/team-arokia.jfif",
    initials: "AM",
    bio: "Instrumental in shaping the strategic direction and operational backbone of Meera Samuh. Arokia brings deep expertise in business development and cross-border corporate solutions to every client engagement.",
  },
  {
    name: "Sushma Singh",
    role: "COO",
    linkedin: "https://www.linkedin.com/in/sushma-singh-83750b1a9/",
    photo: "/team-sushma.jfif",
    initials: "SS",
    bio: "The operational force behind Meera Samuh's seamless service delivery. Sushma oversees day-to-day operations across all three brands, ensuring every client experience meets the group's high standards of excellence.",
  },
];

const culture = [
  {
    title: "Collaborative",
    desc: "We work as one unit across both brands, sharing knowledge and resources to deliver seamless client experiences.",
  },
  {
    title: "Client-First",
    desc: "Every decision is guided by what delivers the most value to our clients — whether they are expats, employees, or corporations.",
  },
  {
    title: "Always Growing",
    desc: "From entering new verticals to upskilling our team, we are constantly pushing to be better at what we do.",
  },
];

export default function TeamPage() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── Hero ── */}
      <section
        className="px-6"
        style={{
          paddingTop: "10rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "3rem" }}>
          <div>
            <div className="label" style={{ marginBottom: "1rem" }}>The People Behind the Brand</div>
            <h1
              className="serif"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              Meet the{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Team</span>
            </h1>
          </div>
          <p style={{ maxWidth: 340, fontSize: "1rem", color: "var(--muted-foreground)", lineHeight: 1.8, flexShrink: 0 }}>
            Our strength lies in our people — experienced professionals dedicated to delivering excellence in global mobility, HR, and business solutions.
          </p>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 1.5rem" }}>
          <div className="label" style={{ marginBottom: "3rem" }}>Leadership</div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {leaders.map((p) => (
              <div
                key={p.name}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 300ms ease-out, border-color 300ms ease-out",
                }}
              >
                {/* Photo */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", background: "var(--muted)", overflow: "hidden" }}>
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    unoptimized
                    style={{ objectFit: "cover", objectPosition: "center top", zIndex: 1 }}
                  />
                  {/* Initials fallback — shown beneath image via z-index; if image loads it covers this */}
                  <div style={{
                    position: "absolute", inset: 0, display: "flex", alignItems: "center",
                    justifyContent: "center", zIndex: 0,
                    background: "linear-gradient(135deg, #f5f0e8 0%, #ede8df 100%)",
                  }}>
                    <span className="serif" style={{ fontSize: "3.5rem", fontWeight: 400, color: "var(--accent)", fontStyle: "italic", opacity: 0.5 }}>
                      {p.initials}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.75rem 2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "0.25rem" }}>
                    <span className="label" style={{ color: "var(--accent)", fontSize: "0.65rem" }}>{p.role}</span>
                  </div>
                  <h3 className="serif" style={{ fontSize: "1.4rem", fontWeight: 400, color: "var(--foreground)", marginBottom: "1rem", lineHeight: 1.2 }}>
                    {p.name}
                  </h3>
                  <hr className="rule" style={{ marginBottom: "1rem" }} />
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "var(--muted-foreground)", flex: 1 }}>
                    {p.bio}
                  </p>
                </div>

                {/* Footer */}
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "1.1rem 2rem",
                    borderTop: "1px solid var(--border)",
                    textDecoration: "none",
                    transition: "background 200ms ease-out",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--muted)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.04em" }}>
                    View on LinkedIn
                  </span>
                  <ExternalLink size={15} color="var(--accent)" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture ── */}
      <section
        className="px-6"
        style={{ background: "var(--muted)", borderTop: "1px solid var(--border)", padding: "5rem 1.5rem" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <div className="label" style={{ marginBottom: "0.6rem" }}>Life at Meera Samuh</div>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>
              Our Culture
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {culture.map((c, i) => (
              <div key={c.title} style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderTop: "3px solid var(--accent)",
                borderRadius: 12,
                padding: "2.25rem",
              }}>
                <div style={{
                  fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em",
                  color: "var(--accent)", fontFamily: "var(--font-ibm-plex-mono)",
                  textTransform: "uppercase", marginBottom: "1rem",
                }}>
                  0{i + 1}
                </div>
                <h4 className="serif" style={{ fontSize: "1.3rem", fontWeight: 400, fontStyle: "italic", color: "var(--foreground)", marginBottom: "1rem" }}>
                  {c.title}
                </h4>
                <hr className="rule" style={{ marginBottom: "1rem" }} />
                <p style={{ fontSize: "0.88rem", lineHeight: 1.8, color: "var(--muted-foreground)" }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
