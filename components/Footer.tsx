import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--muted)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <Image
                src="/ms-logo-261x118.png"
                alt="Meera Samuh — Next Level of Excellence"
                width={261}
                height={118}
                style={{ width: 160, height: "auto" }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "var(--muted-foreground)" }}>
              A group of companies providing end-to-end Global Mobility, HR Solutions, and Business Consulting services since 2008. Trusted across more than 50 countries.
            </p>
            {/* Brands */}
            <div className="flex flex-col gap-3">
              {[
                { name: "Expatria", sub: "Mobility Redefined", href: "https://expatria.in/" },
                { name: "EMS", sub: "Business Redefined", href: "https://emsinfo.in/" },
                { name: "GMS Corporate Services", sub: "Corporate Solutions", href: "https://www.gmscorporateservices.com/" },
              ].map((b) => (
                <a key={b.name} href={b.href} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-2" style={{ textDecoration: "none" }}>
                  <span className="serif font-semibold text-sm" style={{ color: "var(--accent)" }}>{b.name}</span>
                  <span className="rule flex-1" style={{ maxWidth: 32, display: "inline-block", verticalAlign: "middle", position: "relative", top: -1 }} />
                  <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>{b.sub}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4
              className="label mb-6"
              style={{ color: "var(--foreground)", letterSpacing: "0.12em" }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/journey", label: "Our Journey" },
                { href: "/team", label: "Meet the Team" },
                { href: "/clients", label: "Our Business Partners" },
                { href: "/certifications", label: "Certifications" },
                { href: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 lg:col-start-10">
            <h4 className="label mb-6" style={{ color: "var(--foreground)", letterSpacing: "0.12em" }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={14} className="mt-[3px] shrink-0" style={{ color: "var(--accent)" }} />
                <span className="text-sm" style={{ color: "var(--muted-foreground)" }}>New Delhi, India</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={14} className="shrink-0" style={{ color: "var(--accent)" }} />
                <a
                  href="tel:+91"
                  className="text-sm transition-colors hover:text-[var(--accent)]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  +91 — Contact Us
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={14} className="shrink-0" style={{ color: "var(--accent)" }} />
                <a
                  href="mailto:info@meerasamuh.com"
                  className="text-sm transition-colors hover:text-[var(--accent)]"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  info@meerasamuh.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom rule + copyright */}
        <hr className="rule mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "var(--muted-foreground)", letterSpacing: "0.04em" }}>
            © {new Date().getFullYear()} Meera Samuh Group. All rights reserved.
          </p>
          <p className="label" style={{ fontSize: "0.65rem", color: "var(--muted-foreground)", letterSpacing: "0.1em" }}>
            Next Level of Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
