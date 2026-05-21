import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactCtaButtons from "@/components/ContactCtaButtons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Filing Services",
  description: "Additional statutory filing services including GST returns, PF/ESI returns, professional tax returns, and more.",
};

const services = [
  { title: "GST Return Filing", desc: "Monthly and quarterly GST return filing (GSTR-1, GSTR-3B, GSTR-9) with reconciliation support." },
  { title: "Professional Tax Return", desc: "Monthly/annual professional tax return filing for employers across applicable states." },
  { title: "PF/ESI Return Filing", desc: "Monthly ECR filing for EPFO and ESIC contribution returns with challan generation." },
  { title: "DIR-3 KYC Filing", desc: "Annual Director KYC (DIR-3 KYC) filing to maintain active DIN status." },
  { title: "Form INC-20A", desc: "Declaration of commencement of business for newly incorporated companies." },
  { title: "Compounding of Offences", desc: "Assistance with compounding of ROC, FEMA, and RBI offences to regularize non-compliance." },
  { title: "FEMA Filings", desc: "Foreign Exchange Management Act compliance filings including FC-GPR, FC-TRS, and ODI forms." },
];

export default function OtherFilingPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-green-400">Home</Link>
            <span>/</span>
            <Link href="/filing" className="hover:text-green-400">Filing</Link>
            <span>/</span>
            <span className="text-white">Others</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Other Filing Services</h1>
          <p className="text-gray-300 max-w-2xl">Comprehensive statutory filing support beyond standard income tax and ROC returns.</p>
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
          <h2 className="text-2xl font-bold mb-3">Need a Specific Filing Service?</h2>
          <p className="text-gray-300 mb-6">Our compliance experts handle all statutory returns and filings. Contact us for customized assistance.</p>
          <ContactCtaButtons message="Hi ComplyBridge, I need help with a filing service." />
        </div>
      </section>
    </div>
  );
}
