import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Corporate Services",
  description: "Additional corporate and legal services including due diligence, legal drafting, secretarial services, and more.",
};

const services = [
  { title: "Secretarial Audit", desc: "Mandatory secretarial audit for listed companies and certain public companies under Section 204." },
  { title: "Legal Due Diligence", desc: "Comprehensive legal and regulatory due diligence for M&A transactions and investments." },
  { title: "Contract Drafting & Review", desc: "Expert drafting and review of commercial contracts, agreements, and MoUs." },
  { title: "Startup Legal Package", desc: "All-inclusive legal setup for startups including incorporation, ESOP policy, and founders agreement." },
  { title: "DPIIT Startup Recognition", desc: "Obtain DPIIT startup recognition for tax benefits, self-certification, and government scheme access." },
  { title: "Virtual CFO Services", desc: "Outsourced CFO services for financial planning, MIS reports, and investor relations." },
];

export default function OtherServicesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-green-400">Home</Link>
            <span>/</span>
            <Link href="/other-services" className="hover:text-green-400">Other Services</Link>
            <span>/</span>
            <span className="text-white">Others</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Other Corporate Services</h1>
          <p className="text-gray-300 max-w-2xl">Beyond registration and compliance — comprehensive legal and advisory services for your business.</p>
        </div>
      </section>
      <section className="py-14 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map(({ title, desc }) => (
            <div key={title} className="border border-gray-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-md transition-all">
              <h2 className="font-bold text-[#112740] text-lg mb-2">{title}</h2>
              <p className="text-gray-500 text-sm mb-4">{desc}</p>
              <Link href="/contact" className="inline-flex items-center gap-1 text-green-600 text-sm font-medium hover:gap-2 transition-all">
                Enquire Now <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
        <div className="bg-[#112740] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Looking for a Custom Solution?</h2>
          <p className="text-gray-300 mb-6">Our team provides tailored legal and compliance solutions. Talk to an expert today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2">
              Contact Us <ArrowRight size={16} />
            </Link>
            <a href="tel:9149023243" className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2">
              <Phone size={16} /> 9149023243
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
