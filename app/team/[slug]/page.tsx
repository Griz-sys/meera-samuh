import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { teamMembers } from "@/lib/team-data";

export function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* Back link */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "8rem 2.5rem 0" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.06em",
            textTransform: "uppercase", color: "var(--muted-foreground)",
            textDecoration: "none", transition: "color 200ms ease-out",
          }}
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>
      </div>

      {/* Profile hero */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 2.5rem 5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "5rem", alignItems: "start" }}>

          {/* Left — photo */}
          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", aspectRatio: "3/4", background: "var(--muted)" }}>
            {/* Initials behind photo */}
            <div style={{
              position: "absolute", inset: 0, display: "flex", alignItems: "center",
              justifyContent: "center", zIndex: 0,
              background: "linear-gradient(135deg, #f5f0e8 0%, #ede8df 100%)",
            }}>
              <span className="serif" style={{ fontSize: "5rem", fontWeight: 400, color: "var(--accent)", fontStyle: "italic", opacity: 0.35 }}>
                {member.initials}
              </span>
            </div>
            <Image
              src={member.photo}
              alt={member.name}
              fill
              unoptimized
              style={{ objectFit: "cover", objectPosition: "center top", zIndex: 1 }}
            />
          </div>

          {/* Right — info */}
          <div style={{ paddingTop: "1rem" }}>
            <div className="label" style={{ marginBottom: "1rem" }}>{member.role}</div>
            <h1 className="serif" style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: "2rem" }}>
              {member.name}
            </h1>
            <hr className="rule" style={{ marginBottom: "2rem" }} />

            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
              {member.bio}
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.85, color: "var(--muted-foreground)", marginBottom: "3rem" }}>
              {member.extended}
            </p>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                padding: "13px 28px",
                background: "var(--accent)",
                color: "white",
                borderRadius: 8,
                fontSize: "0.875rem", fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "background 200ms ease-out",
              }}
            >
              View LinkedIn Profile <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: "1px solid var(--border)" }} />

      {/* Other team members */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "4rem 2.5rem 6rem" }}>
        <div className="label" style={{ marginBottom: "2.5rem" }}>Rest of the Team</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {teamMembers.filter((m) => m.slug !== slug).map((m) => (
            <Link
              key={m.slug}
              href={`/team/${m.slug}`}
              style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.5rem", border: "1px solid var(--border)", borderRadius: 12, background: "var(--card)", transition: "border-color 200ms ease-out" }}
            >
              <div style={{ position: "relative", width: 72, height: 72, borderRadius: "50%", overflow: "hidden", flexShrink: 0, background: "var(--muted)" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 0, background: "linear-gradient(135deg, #f5f0e8, #ede8df)" }}>
                  <span className="serif" style={{ fontSize: "1.3rem", color: "var(--accent)", fontStyle: "italic", opacity: 0.5 }}>{m.initials}</span>
                </div>
                <Image src={m.photo} alt={m.name} fill unoptimized style={{ objectFit: "cover", objectPosition: "center top", zIndex: 1 }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--foreground)", marginBottom: "0.2rem" }}>{m.name}</div>
                <div className="label" style={{ color: "var(--accent)", fontSize: "0.65rem" }}>{m.role}</div>
              </div>
              <ArrowLeft size={16} style={{ marginLeft: "auto", transform: "rotate(180deg)", color: "var(--muted-foreground)" }} />
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
