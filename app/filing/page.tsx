import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionIndexHeader from "@/components/SectionIndexHeader";
import { navSections } from "@/lib/nav-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filing Services – ITR, TDS, ROC, POSH",
  description:
    "Expert filing services for Income Tax Returns, TDS, ROC annual returns, and POSH compliance across India.",
};

const section = navSections.find((s) => s.href === "/filing")!;

export default function FilingIndexPage() {
  return (
    <div>
      <SectionIndexHeader
        title="Filing Services"
        description="Accurate and timely filing of all statutory returns — income tax, TDS, ROC, and POSH — to keep your business fully compliant."
      />
      <p className="text-gray-600 leading-relaxed mb-8">
        Select a topic from the sidebar to view detailed information about each filing service.
      </p>
      <div className="space-y-6">
        {section.items.map((item) => (
          <div key={item.href} className="border-b border-gray-200 pb-6 last:border-0">
            <h2 className="font-bold text-[#112740] text-lg mb-2">{item.label}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Expert assistance for {item.label.toLowerCase()} with accurate reporting and timely submissions.
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
