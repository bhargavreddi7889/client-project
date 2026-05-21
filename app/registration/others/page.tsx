import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactCtaButtons from "@/components/ContactCtaButtons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other Registration Services",
  description: "Additional business registration and conversion services including proprietorship, partnership, and entity conversion.",
};

const services = [
  { title: "Proprietorship Registration", desc: "Register your sole proprietorship business with Udyam, GST, and other mandatory registrations." },
  { title: "Partnership Firm Registration", desc: "Register a traditional partnership firm under the Indian Partnership Act, 1932." },
  { title: "Company to LLP Conversion", desc: "Convert your existing Private Limited Company into an LLP for simplified compliance." },
  { title: "Partnership to LLP Conversion", desc: "Convert your partnership firm into an LLP for limited liability benefits." },
  { title: "OPC to Private Limited Conversion", desc: "Scale your One Person Company into a Private Limited Company as your business grows." },
  { title: "Nidhi Company Registration", desc: "Register a Nidhi Company to promote savings among members and provide loans." },
  { title: "Producer Company Registration", desc: "Register a Producer Company for farmers and agricultural cooperatives." },
  { title: "NBFC Registration", desc: "Register a Non-Banking Financial Company (NBFC) with RBI authorization." },
];

export default function OtherRegistrationsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-green-400">Home</Link>
            <span>/</span>
            <Link href="/registration" className="hover:text-green-400">Registration</Link>
            <span>/</span>
            <span className="text-white">Others</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">Other Registration Services</h1>
          <p className="text-gray-300 max-w-2xl">Specialized registration and conversion services for unique business requirements across India.</p>
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
          <h2 className="text-2xl font-bold mb-3">Don&apos;t see what you&apos;re looking for?</h2>
          <p className="text-gray-300 mb-6">Contact our experts for any specialized registration or conversion service not listed above.</p>
          <ContactCtaButtons message="Hi ComplyBridge, I need help with registration services." />
        </div>
      </section>
    </div>
  );
}
