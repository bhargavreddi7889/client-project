"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navSections, navbarLinks } from "@/lib/nav-data";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import WhatsAppLink from "@/components/WhatsAppLink";

/** Logo box height (width follows 420:126 aspect ratio) */
const LOGO_BOX = "h-11 w-[148px] sm:h-14 sm:w-[186px] lg:h-20 lg:w-[266px] xl:h-[84px] xl:w-[280px]";
const NAVBAR_HEIGHT = "h-16 sm:h-[72px] lg:h-[96px] xl:h-[100px]";

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

  const isTopLinkActive = (href: string) => pathname === href;

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full sticky top-0 z-50">
      <nav className="bg-white shadow-md border-b border-gray-100">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 ${NAVBAR_HEIGHT}`}
        >
          <Link
            href="/"
            className="relative z-10 shrink-0 flex items-center max-w-[calc(100%-3.5rem)] sm:max-w-none"
            onClick={closeMobileMenu}
          >
            <span className={`relative block shrink-0 ${LOGO_BOX}`}>
              <Image
                src="/logo.png"
                alt="ComplyBridge"
                fill
                sizes="(max-width: 640px) 148px, (max-width: 1024px) 186px, 280px"
                className="object-contain object-left"
                priority
              />
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 min-w-0 flex-1 justify-end relative z-20">
            {navSections.map((section) => (
              <Link
                key={section.label}
                href={section.href}
                className={`relative z-20 px-2 xl:px-2.5 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  isSectionActive(section.href)
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                {section.label}
              </Link>
            ))}
            <span className="w-px h-6 bg-gray-200 mx-1 shrink-0" aria-hidden />
            {navbarLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative z-20 px-2.5 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  isTopLinkActive(l.href)
                    ? "text-green-600 bg-green-50"
                    : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0 relative z-20">
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
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 bottom-0 bg-white z-40 overflow-y-auto flex flex-col top-16 sm:top-[72px]">
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
                {navbarLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeMobileMenu}
                    className={`block px-4 sm:px-5 py-3.5 text-sm font-medium transition-colors border-b border-gray-100 last:border-0 ${
                      isTopLinkActive(l.href)
                        ? "text-green-600 bg-green-50"
                        : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                    }`}
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
