"use client";
import { useState } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0f1f3d] shadow-lg">
      {/* Top bar */}
      <div className="bg-[#091528] py-1.5 px-4 text-center text-sm text-white/80 hidden md:block">
        <span className="mr-4">⭐⭐⭐⭐⭐ Rated 5.0 · Bay Shore NY · Suffolk County</span>
        <span>Licensed &amp; Insured · Same-Day Service · Free Written Estimate</span>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-white font-black text-xl tracking-tight">Bay Shore</span>
          <span className="text-[#e8390e] font-bold text-sm tracking-wider uppercase">Garage Door</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-white/85 hover:text-white text-sm font-medium transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="hidden md:flex items-center gap-2 bg-[#e8390e] hover:bg-[#c62d0a] text-white font-bold px-5 py-2.5 rounded-md transition-colors text-sm whitespace-nowrap"
        >
          📞 {BUSINESS.phone}
        </a>

        {/* Mobile: phone + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-1.5 bg-[#e8390e] text-white font-bold px-3 py-2 rounded-md text-sm"
          >
            📞 Call Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-white p-2"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <nav className="md:hidden bg-[#091528] px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/85 hover:text-white py-2 border-b border-white/10 text-base font-medium"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="mt-2 flex items-center justify-center gap-2 bg-[#e8390e] text-white font-bold py-3 rounded-md"
          >
            📞 Call {BUSINESS.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
