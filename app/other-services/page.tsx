import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { navSections } from "@/lib/nav-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Services – Independent Director, POSH Training",
  description: "Specialized compliance services including Independent Director appointment, POSH training, and other corporate governance solutions.",
};

const section = navSections.find((s) => s.href === "/other-services")!;

export default function OtherServicesIndexPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Other Services</h1>
          <p className="text-gray-300 max-w-2xl text-lg">Specialized corporate governance and workplace compliance services tailored to your business needs.</p>
        </div>
      </section>
      <section className="py-14 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.items.map((item) => (
            <Link key={item.href} href={item.href} className="group border border-gray-200 hover:border-green-400 hover:shadow-lg rounded-2xl p-6 transition-all">
              <h2 className="font-bold text-[#112740] text-lg mb-2 group-hover:text-green-600">{item.label}</h2>
              <p className="text-gray-500 text-sm mb-4">Expert assistance for {item.label.toLowerCase()} with complete documentation and compliance support.</p>
              <span className="inline-flex items-center gap-1 text-green-600 text-sm font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
