import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactCtaButtons from "@/components/ContactCtaButtons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other License & Approval Services",
  description: "Additional business license and approval services including import-export code, trade license, fire NOC, pollution NOC, and more.",
};

const services = [
  { title: "Import Export Code (IEC)", desc: "Mandatory 10-digit code for businesses involved in importing or exporting goods and services from India." },
  { title: "Trade License", desc: "Local authority license required for operating a business within municipal limits." },
  { title: "Fire NOC", desc: "No Objection Certificate from the Fire Department required for buildings, factories, and commercial establishments." },
  { title: "Pollution Control NOC", desc: "Consent to Establish (CTE) and Consent to Operate (CTO) from State Pollution Control Board." },
  { title: "Building Plan Approval", desc: "Approval from municipal or development authority for construction plans." },
  { title: "Excise License", desc: "License for manufacture, sale, or storage of alcoholic beverages or excisable goods." },
  { title: "PCO License", desc: "Pest Control Operator license required for pest control service businesses." },
  { title: "Tourism License", desc: "License from Ministry of Tourism or state tourism board for travel agents and tour operators." },
];

export default function OtherLicensesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-green-400">Home</Link>
            <span>/</span>
            <Link href="/license" className="hover:text-green-400">License</Link>
            <span>/</span>
            <span className="text-white">Others</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Other License &amp; Approval Services</h1>
          <p className="text-gray-300 max-w-2xl">Comprehensive support for all additional business licenses and government approvals across India.</p>
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
          <h2 className="text-2xl font-bold mb-3">Need a Different License?</h2>
          <p className="text-gray-300 mb-6">Contact our compliance experts for any specialized license or government approval not listed above.</p>
          <ContactCtaButtons message="Hi ComplyBridge, I need help with a license or approval." />
        </div>
      </section>
    </div>
  );
}
