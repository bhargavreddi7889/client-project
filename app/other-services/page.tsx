import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionIndexHeader from "@/components/SectionIndexHeader";
import { navSections } from "@/lib/nav-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Services",
  description: "Independent Director appointment, POSH training, and other specialized compliance services.",
};

const section = navSections.find((s) => s.href === "/other-services")!;

export default function OtherServicesIndexPage() {
  return (
    <div>
      <SectionIndexHeader
        title="Other Services"
        description="Specialized compliance services beyond standard registration and filing — including Independent Director support and POSH training programs."
      />
      <p className="text-gray-600 leading-relaxed mb-8">
        Select a topic from the sidebar to view detailed information.
      </p>
      <div className="space-y-6">
        {section.items.map((item) => (
          <div key={item.href} className="border-b border-gray-200 pb-6 last:border-0">
            <h2 className="font-bold text-[#112740] text-lg mb-2">{item.label}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Professional support for {item.label.toLowerCase()} tailored to your organization&apos;s needs.
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
