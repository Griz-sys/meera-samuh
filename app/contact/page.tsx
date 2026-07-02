"use client";
import { MapPin, Mail, Phone, Send, Globe, Clock } from "lucide-react";
import { useState } from "react";

const contactDetails = [
  { icon: MapPin, label: "Address", value: "New Delhi, India" },
  { icon: Mail, label: "Email", value: "info@meerasamuh.com", href: "mailto:info@meerasamuh.com" },
  { icon: Phone, label: "Phone", value: "+91 — Contact Us", href: "tel:+91" },
  { icon: Globe, label: "Website", value: "www.meerasamuh.com" },
  { icon: Clock, label: "Business Hours", value: "Mon–Sat, 9:00 AM – 6:00 PM IST" },
];

const brandEnquiries = [
  { name: "Expatria", sub: "Relocation & Mobility", href: "https://expatria.in/" },
  { name: "EMS", sub: "Manpower & HR", href: "https://emsinfo.in/" },
  { name: "GMS Corporate Services", sub: "Corporate Solutions", href: "https://www.gmscorporateservices.com/" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── Form + Info ── */}
      <section className="pt-32 md:pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-16">

          {/* Left: info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="label mb-4" style={{ display: "block" }}>Contact Details</div>
              <h2 className="serif mb-3" style={{ fontSize: "1.6rem", fontWeight: 400, lineHeight: 1.2 }}>
                Let&apos;s Start a<br />Conversation
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--muted-foreground)", lineHeight: 1.75 }}>
                We typically respond within one business day. For urgent matters, please call directly.
              </p>
            </div>

            <hr className="rule" />

            <ul className="space-y-5">
              {contactDetails.map((item) => (
                <li key={item.label} className="flex gap-4 items-start">
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(184,134,11,0.08)", border: "1px solid rgba(184,134,11,0.18)" }}
                  >
                    <item.icon size={14} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <span className="label" style={{ display: "block", marginBottom: 3, color: "var(--muted-foreground)", fontSize: "0.6rem" }}>
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm transition-colors hover:text-[var(--accent)]"
                        style={{ color: "var(--foreground)" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm" style={{ color: "var(--foreground)" }}>{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <hr className="rule" />

            {/* Brand enquiries */}
            <div>
              <div className="label mb-4" style={{ display: "block" }}>Brand Enquiries</div>
              <div className="space-y-3">
                {brandEnquiries.map((b) => (
                  <div key={b.name} className="flex items-center justify-between">
                    <div>
                      <span className="serif font-semibold text-sm" style={{ color: "var(--foreground)", fontStyle: "italic" }}>{b.name}</span>
                      <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{b.sub}</p>
                    </div>
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label transition-colors hover:text-[var(--accent)]"
                      style={{
                        fontSize: "0.6rem",
                        padding: "5px 12px",
                        border: "1px solid var(--border)",
                        borderRadius: 4,
                        color: "var(--muted-foreground)",
                      }}
                    >
                      Email
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="card card-accent-top p-10">
              {sent ? (
                <div className="text-center py-12">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(184,134,11,0.1)", border: "1px solid var(--accent)" }}
                  >
                    <Send size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <h3 className="serif mb-3" style={{ fontSize: "1.8rem", fontWeight: 400, fontStyle: "italic" }}>
                    Message Sent
                  </h3>
                  <p style={{ color: "var(--muted-foreground)", lineHeight: 1.7 }}>
                    Thank you for reaching out. We&apos;ll get back to you within one business day.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ firstName: "", lastName: "", email: "", message: "" }); }}
                    className="btn-outline mt-8"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="label mb-2" style={{ display: "block" }}>Send Us a Message</div>
                  <hr className="rule mb-6" />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="label"
                        style={{ display: "block", marginBottom: 8, fontSize: "0.6rem", color: "var(--muted-foreground)" }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label
                        className="label"
                        style={{ display: "block", marginBottom: 8, fontSize: "0.6rem", color: "var(--muted-foreground)" }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Smith"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="label"
                      style={{ display: "block", marginBottom: 8, fontSize: "0.6rem", color: "var(--muted-foreground)" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label
                      className="label"
                      style={{ display: "block", marginBottom: 8, fontSize: "0.6rem", color: "var(--muted-foreground)" }}
                    >
                      Comment or Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <Send size={14} />
                    Send Message
                  </button>

                  <p className="label text-center" style={{ fontSize: "0.6rem", color: "var(--muted-foreground)" }}>
                    We will never share your information with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Map placeholder ── */}
      <section className="pb-28 px-6 max-w-5xl mx-auto">
        <div className="placeholder-block w-full" style={{ height: 240 }}>
          <MapPin size={24} style={{ color: "var(--border-hover)" }} />
          <p className="serif" style={{ fontSize: "1rem", fontStyle: "italic", color: "var(--muted-foreground)" }}>
            Map Embed
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--border-hover)" }}>
            Add a Google Maps embed here for office location.
          </p>
        </div>
      </section>

    </div>
  );
}
