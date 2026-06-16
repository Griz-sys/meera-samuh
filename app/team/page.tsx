import { Users, ImageIcon, Mail, Share2 } from "lucide-react";

const departments = ["Leadership", "Global Mobility", "HR & Manpower", "Operations", "Business Development"];

const culture = [
  { title: "Collaborative", desc: "We work as one unit across both brands, sharing knowledge and resources to deliver seamless client experiences." },
  { title: "Client-First", desc: "Every decision is guided by what delivers the most value to our clients — whether they are expats, employees, or corporations." },
  { title: "Always Growing", desc: "From entering new verticals to upskilling our team, we are constantly pushing to be better at what we do." },
];

export default function TeamPage() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── Hero ── */}
      <section
        className="py-32 md:py-40 px-6 text-center"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="label-rule mb-6 max-w-xs mx-auto">
            <span className="label">The People Behind the Brand</span>
          </div>
          <h1
            className="serif mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Meet the <span style={{ fontStyle: "italic", color: "var(--accent)" }}>Team</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--muted-foreground)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto" }}>
            Our strength lies in our people — experienced professionals dedicated to
            delivering excellence in global mobility, HR, and business solutions.
          </p>
        </div>
      </section>

      {/* ── Department Filter ── */}
      <section
        className="py-8 px-6"
        style={{ background: "var(--card)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {departments.map((d, i) => (
            <span
              key={d}
              className="label cursor-default"
              style={{
                padding: "7px 18px",
                background: i === 0 ? "var(--accent)" : "transparent",
                border: `1px solid ${i === 0 ? "var(--accent)" : "var(--border)"}`,
                borderRadius: 4,
                color: i === 0 ? "#fff" : "var(--muted-foreground)",
                fontSize: "0.65rem",
              }}
            >
              {d}
            </span>
          ))}
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="card p-6 text-center">
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center"
                style={{ background: "var(--muted)", border: "2px dashed var(--border)" }}
              >
                <ImageIcon size={20} style={{ color: "var(--border-hover)" }} />
              </div>
              {/* Name */}
              <div className="h-3.5 rounded mx-auto mb-2" style={{ background: "var(--muted)", width: "65%" }} />
              {/* Role */}
              <div className="h-2.5 rounded mx-auto mb-5" style={{ background: "var(--muted)", width: "45%" }} />
              {/* Social */}
              <div className="flex justify-center gap-2">
                {[Share2, Mail].map((Icon, j) => (
                  <div
                    key={j}
                    className="w-8 h-8 rounded flex items-center justify-center"
                    style={{ background: "var(--muted)", border: "1px dashed var(--border)" }}
                  >
                    <Icon size={12} style={{ color: "var(--border-hover)" }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Placeholder ── */}
      <section className="pb-16 px-6 max-w-5xl mx-auto">
        <div className="placeholder-block p-14 text-center">
          <Users size={28} style={{ color: "var(--border-hover)" }} />
          <p className="serif mt-3" style={{ fontSize: "1.05rem", fontStyle: "italic", color: "var(--muted-foreground)" }}>
            Team Profiles Coming Soon
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--border-hover)", marginTop: 6, maxWidth: 320 }}>
            Add team member names, photos, roles, and bios here. Supports up to 4 columns and department filtering.
          </p>
        </div>
      </section>

      {/* ── Culture ── */}
      <section
        className="py-28 px-6"
        style={{ background: "var(--muted)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="label-rule mb-5 max-w-xs mx-auto">
              <span className="label">Life at Meera Samuh</span>
            </div>
            <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 400 }}>
              Our Culture
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {culture.map((c) => (
              <div key={c.title} className="card card-accent-top p-8">
                <h4
                  className="serif mb-3"
                  style={{ fontSize: "1.25rem", fontWeight: 600, fontStyle: "italic", color: "var(--accent)" }}
                >
                  {c.title}
                </h4>
                <hr className="rule mb-4" />
                <p style={{ fontSize: "0.9rem", lineHeight: 1.75, color: "var(--muted-foreground)" }}>
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
