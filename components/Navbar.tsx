"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { navSections, topLinks } from "@/lib/nav-data";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import WhatsAppLink from "@/components/WhatsAppLink";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null);

  const isMobileMenuOpen = mobileMenuPath !== null && mobileMenuPath === pathname;

  const toggleMobileMenu = () => {
    setMobileMenuPath(isMobileMenuOpen ? null : pathname);
  };

  const closeMobileMenu = () => setMobileMenuPath(null);

  const isSectionActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="hidden sm:block bg-[#0d1f33] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 lg:gap-5 min-w-0">
            <a href={PHONE_TEL} className="flex items-center gap-1.5 hover:text-green-400 transition-colors shrink-0">
              <Phone size={12} /> {PHONE_DISPLAY}
            </a>
            <WhatsAppLink variant="link-light" className="text-xs shrink-0" iconSize={14}>
              WhatsApp
            </WhatsAppLink>
            <a
              href="mailto:info@complybridge.in"
              className="flex items-center gap-1.5 hover:text-green-400 transition-colors truncate"
            >
              <Mail size={12} className="shrink-0" />
              <span className="truncate">info@complybridge.in</span>
            </a>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            {topLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-green-400 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[64px] sm:h-[72px]">
          <Link href="/" className="flex items-center shrink-0 py-2" onClick={closeMobileMenu}>
            <span className="relative block h-9 w-[120px] sm:h-11 sm:w-[150px]">
              <Image
                src="/logo.png"
                alt="ComplyBridge"
                fill
                sizes="(max-width: 640px) 120px, 150px"
                className="object-contain object-left"
                priority
              />
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navSections.map((section) => (
              <Link
                key={section.label}
                href={section.href}
                className={`px-2.5 xl:px-3 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  isSectionActive(section.href)
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                {section.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-colors shadow-sm"
            >
              Free Consultation
            </Link>
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 bottom-0 bg-white z-40 overflow-y-auto flex flex-col top-[64px] sm:top-[72px]">
            <div className="bg-[#112740] text-white px-4 py-3 flex flex-col gap-2 text-sm sm:hidden">
              <a href={PHONE_TEL} className="flex items-center gap-1.5">
                <Phone size={13} className="text-green-400 shrink-0" /> {PHONE_DISPLAY}
              </a>
              <WhatsAppLink variant="link-light" className="text-sm" iconSize={14}>
                Chat on WhatsApp
              </WhatsAppLink>
              <a href="mailto:info@complybridge.in" className="flex items-center gap-1.5 break-all">
                <Mail size={13} className="text-green-400 shrink-0" /> info@complybridge.in
              </a>
            </div>

            <div className="flex-1 pb-2">
              {navSections.map((section) => (
                <Link
                  key={section.label}
                  href={section.href}
                  onClick={closeMobileMenu}
                  className={`block px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base font-semibold border-b border-gray-100 transition-colors ${
                    isSectionActive(section.href)
                      ? "text-green-600 bg-green-50"
                      : "text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {section.label}
                </Link>
              ))}

              <div className="border-b border-gray-100">
                {topLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeMobileMenu}
                    className="block px-4 sm:px-5 py-3.5 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] safe-area-pb">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl text-base font-semibold transition-colors"
              >
                Get Free Consultation
              </Link>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-3">
                <a
                  href={PHONE_TEL}
                  className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                >
                  <Phone size={15} className="text-green-500" /> Call: {PHONE_DISPLAY}
                </a>
                <WhatsAppLink variant="link" className="text-sm">
                  WhatsApp
                </WhatsAppLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
