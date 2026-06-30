"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        animation: "fadeDown 0.8s ease-out",
        background: transparent
          ? "linear-gradient(to bottom, rgba(226,151,51,0.30) 0%, rgba(226,151,51,0.08) 70%, transparent 100%)"
          : "rgba(250,250,248,0.94)",
        backdropFilter: transparent ? "none" : "blur(24px)",
        borderBottom: transparent ? "none" : "1px solid rgba(232,228,223,0.8)",
        transition: "background 300ms ease-out, border-color 300ms ease-out, backdrop-filter 300ms ease-out",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[72px]">
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
              style={{
                fontFamily: "var(--font-source-sans), system-ui, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 800,
                letterSpacing: "0.05em",
                textDecoration: "none",
                color: pathname === l.href ? "#E29733" : "#000000",
                transition: "color 200ms ease-out",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="btn-primary hidden lg:inline-flex text-sm"
          style={{}}
        >
          Get in Touch
        </Link>

        <button
          className="lg:hidden p-2 -mr-2"
          style={{ color: "#000000" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="lg:hidden mx-4 px-8 pb-8 pt-4 flex flex-col gap-5 rounded-3xl"
          style={{
            background: "rgba(250,250,248,0.96)",
            backdropFilter: "blur(32px)",
            border: "1px solid rgba(232,228,223,0.8)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
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
