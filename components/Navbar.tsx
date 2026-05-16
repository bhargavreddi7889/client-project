"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { navSections, topLinks } from "@/lib/nav-data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveSection(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveSection(null), 150);
  };

  useEffect(() => {
    // Lock body scroll when mobile menu is open
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top info bar — hidden on mobile */}
      <div className="hidden sm:block bg-[#0d1f33] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-5">
            <a href="tel:9149023243" className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
              <Phone size={12} /> 9149023243
            </a>
            <a href="mailto:info@complybridge.in" className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
              <Mail size={12} /> info@complybridge.in
            </a>
          </div>
          <div className="flex items-center gap-4">
            {topLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-green-400 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between" style={{ height: "72px" }}>

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 py-2" onClick={() => setMobileOpen(false)}>
            <Image
              src="/logo.png"
              alt="ComplyBridge"
              width={150}
              height={44}
              className="w-auto object-contain"
              style={{ height: "44px" }}
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navSections.map((section) => (
              <div
                key={section.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(section.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeSection === section.label
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  {section.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${activeSection === section.label ? "rotate-180" : ""}`}
                  />
                </button>

                {activeSection === section.label && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-xl min-w-[220px] py-2 z-50"
                    onMouseEnter={() => handleMouseEnter(section.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveSection(null)}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
            >
              Free Consultation
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu — full-screen overlay */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-x-0 bottom-0 bg-white z-40 overflow-y-auto flex flex-col" style={{ top: "72px" }}>
            {/* Contact strip at top */}
            <div className="bg-[#112740] text-white px-4 py-3 flex items-center gap-4 text-sm sm:hidden">
              <a href="tel:9149023243" className="flex items-center gap-1.5">
                <Phone size={13} className="text-green-400" /> 9149023243
              </a>
              <a href="mailto:info@complybridge.in" className="flex items-center gap-1.5">
                <Mail size={13} className="text-green-400" /> info@complybridge.in
              </a>
            </div>

            {/* Nav sections */}
            <div className="flex-1">
              {navSections.map((section) => (
                <div key={section.label} className="border-b border-gray-100">
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-base font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === section.label ? null : section.label)
                    }
                  >
                    {section.label}
                    <ChevronDown
                      size={18}
                      className={`text-gray-400 transition-transform duration-200 ${
                        mobileExpanded === section.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpanded === section.label && (
                    <div className="bg-gray-50 border-t border-gray-100">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 px-7 py-3 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors border-b border-gray-100 last:border-0"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Quick links */}
              <div className="border-b border-gray-100">
                {topLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-5 py-3.5 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Sticky CTA at bottom */}
            <div className="p-4 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl text-base font-semibold transition-colors"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:9149023243"
                className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-600 hover:text-green-600 transition-colors"
              >
                <Phone size={15} className="text-green-500" /> Call: 9149023243
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
