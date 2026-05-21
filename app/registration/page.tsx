import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionIndexHeader from "@/components/SectionIndexHeader";
import { navSections } from "@/lib/nav-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration & Conversion Services",
  description:
    "Complete business registration services including Company, LLP, NGO, GST, and Trademark registration across India.",
};

const section = navSections.find((s) => s.href === "/registration")!;

export default function RegistrationIndexPage() {
  return (
    <div>
      <SectionIndexHeader
        title="Registration & Conversion"
        description="Start your business on the right legal footing. We provide comprehensive registration services for all types of business entities in India — from company and LLP incorporation to GST and trademark registration."
      />
      <p className="text-gray-600 leading-relaxed mb-8">
        Select a topic from the sidebar to view detailed information, or browse our services below.
      </p>
      <div className="space-y-6">
        {section.items.map((item) => (
          <div key={item.href} className="border-b border-gray-200 pb-6 last:border-0">
            <h2 className="font-bold text-[#112740] text-lg mb-2">{item.label}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Expert guidance for {item.label.toLowerCase()} with complete documentation support and end-to-end
              compliance assistance.
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
