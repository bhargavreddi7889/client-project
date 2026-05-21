"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import type { NavSection } from "@/lib/nav-data";

interface SectionSidebarLayoutProps {
  section: NavSection;
  children: React.ReactNode;
}

function sidebarLinkClass(active: boolean) {
  if (active) {
    return "flex items-center gap-2.5 w-full px-3 py-2.5 text-sm font-semibold leading-snug rounded-lg bg-green-600 text-white shadow-md shadow-green-900/20 transition-all";
  }
  return "flex items-center gap-2.5 w-full px-3 py-2.5 text-sm leading-snug rounded-lg text-[#1a3c5e] bg-white border border-gray-200 hover:bg-[#112740] hover:text-white hover:border-[#112740] transition-all";
}

export default function SectionSidebarLayout({ section, children }: SectionSidebarLayoutProps) {
  const pathname = usePathname();
  const [topicsOpen, setTopicsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === section.href) return pathname === section.href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const activeItem =
    section.items.find((item) => isActive(item.href))?.label ??
    (pathname === section.href ? "Overview" : section.label);

  return (
    <div className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10">
          <aside className="lg:w-[280px] shrink-0">
            <button
              type="button"
              onClick={() => setTopicsOpen((open) => !open)}
              className="lg:hidden flex w-full items-center justify-between gap-3 bg-[#f0f4f8] border border-gray-200 rounded-xl px-4 py-3.5 text-left shadow-sm"
              aria-expanded={topicsOpen}
              aria-controls="section-topics-nav"
            >
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wide text-gray-500">
                  {section.label}
                </span>
                <span className="block text-sm font-semibold text-[#112740] truncate">{activeItem}</span>
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-gray-500 transition-transform duration-200 ${
                  topicsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <nav
              id="section-topics-nav"
              className={`${topicsOpen ? "block" : "hidden"} lg:block mt-3 lg:mt-0 lg:sticky lg:top-24 xl:top-[100px] bg-[#f0f4f8] border border-gray-200 rounded-xl p-4 lg:p-5 shadow-sm`}
              aria-label={`${section.label} topics`}
            >
              <h2 className="hidden lg:block text-[#112740] font-bold text-sm uppercase tracking-wide mb-4 pb-3 border-b-2 border-green-600">
                {section.label}
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={section.href}
                    onClick={() => setTopicsOpen(false)}
                    className={sidebarLinkClass(isActive(section.href))}
                  >
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        isActive(section.href) ? "bg-white" : "bg-green-600"
                      }`}
                    />
                    Overview
                  </Link>
                </li>
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setTopicsOpen(false)}
                      className={sidebarLinkClass(isActive(item.href))}
                    >
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          isActive(item.href) ? "bg-white" : "bg-green-600"
                        }`}
                      />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="flex-1 min-w-0 overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}
