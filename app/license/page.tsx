import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionIndexHeader from "@/components/SectionIndexHeader";
import { navSections } from "@/lib/nav-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "License & Approval Services",
  description:
    "Get all business licenses and approvals – MSME, Food License, Drug License, Shop & Establishment, PF/ESI, Factory License, and more.",
};

const section = navSections.find((s) => s.href === "/license")!;

export default function LicenseIndexPage() {
  return (
    <div>
      <SectionIndexHeader
        title="License & Approval"
        description="Obtain all required business licenses and government approvals with expert support and timely processing."
      />
      <p className="text-gray-600 leading-relaxed mb-8">
        Select a topic from the sidebar to view detailed information about each license type.
      </p>
      <div className="space-y-6">
        {section.items.map((item) => (
          <div key={item.href} className="border-b border-gray-200 pb-6 last:border-0">
            <h2 className="font-bold text-[#112740] text-lg mb-2">{item.label}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Complete assistance for {item.label.toLowerCase()} with expert guidance and documentation support.
            </p>
            <Link
              href={item.href}
              className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold hover:gap-2 transition-all"
            >
              Read more <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
