import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { navSections } from "@/lib/nav-data";

export default function Footer() {
  return (
    <footer className="bg-[#112740] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/logo.png" alt="ComplyBridge" width={160} height={48} className="h-12 w-auto object-contain brightness-0 invert mb-4" />
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              ComplyBridge helps businesses navigate complex compliance requirements with ease. Your trusted partner for all legal, tax, and regulatory needs.
            </p>
            <div className="flex gap-3 mt-2">
              {[
                { label: "Facebook", href: "#", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Twitter / X", href: "#", path: "M4 4l16 16M4 20L20 4" },
                { label: "LinkedIn", href: "#", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
                { label: "Instagram", href: "#", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" },
              ].map(({ label, href, path }) => (
                <a key={label} href={href} aria-label={label} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2">
              {navSections.slice(0, 4).map((section) => (
                <li key={section.href}>
                  <Link href={section.href} className="text-sm hover:text-green-400 transition-colors">
                    {section.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/packages" className="text-sm hover:text-green-400 transition-colors">
                  Value Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-green-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone size={15} className="text-green-400 mt-0.5 shrink-0" />
                <a href="tel:9149023243" className="hover:text-green-400 transition-colors">9149023243</a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail size={15} className="text-green-400 mt-0.5 shrink-0" />
                <a href="mailto:info@complybridge.in" className="hover:text-green-400 transition-colors break-all">
                  info@complybridge.in
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={15} className="text-green-400 mt-1 shrink-0" />
                <span>I-79 Basement, Lajpat Nagar-2,<br />New Delhi – 110024, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} ComplyBridge. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-green-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
