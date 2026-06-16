"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/history", label: "Our History" },
  { href: "/team", label: "Meet the Team" },
  { href: "/clients", label: "Our Clients" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px]"
        style={{
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(16px)",
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
          border: "1px solid var(--border)",
        }}
      >
        <Link href="/" className="shrink-0">
          <Image
            src="/ms-logo-261x118.png"
            alt="Meera Samuh — Next Level of Excellence"
            width={120}
            height={54}
            priority
            style={{ height: 58, width: "auto", marginLeft: "-8px" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-primary hidden lg:inline-flex text-sm">
          Get in Touch
        </Link>

        <button
          className="lg:hidden p-2 -mr-2"
          style={{ color: "var(--foreground)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="lg:hidden px-6 pb-8 pt-4 flex flex-col gap-5 mt-2"
          style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(16px)",
            borderRadius: 24,
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            border: "1px solid var(--border)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link text-base ${pathname === l.href ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm text-center mt-2" onClick={() => setOpen(false)}>
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
