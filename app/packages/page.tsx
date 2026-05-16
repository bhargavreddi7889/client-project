import Link from "next/link";
import { CheckCircle2, Star, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Value Packages",
  description: "All-inclusive compliance packages for LLP, Company, NGO incorporation, ROC returns, GST, TDS, and ITR at the best prices.",
};

const packages = [
  { title: "LLP Incorporation Package", href: "/packages/llp-incorporation", price: "₹8,999", features: ["DPIN for 2 partners", "LLP Name Reservation", "LLP Agreement Drafting", "Certificate of Incorporation", "PAN & TAN", "Bank Account Assistance"], tag: null },
  { title: "Company Incorporation Package", href: "/packages/company-incorporation", price: "₹10,999", features: ["DSC for 2 directors", "DIN for 2 directors", "Name Reservation", "MoA & AoA Drafting", "SPICe+ Filing", "PAN, TAN & GST"], tag: null },
  { title: "NGO Incorporation Package", href: "/packages/ngo-incorporation", price: "₹12,999", features: ["Trust Deed / MoA Drafting", "Registration Filing", "PAN for NGO", "12A Application", "80G Application", "Bank Account Assistance"], tag: null },
  { title: "ROC Return Package", href: "/packages/roc-return", price: "₹5,999/year", features: ["Form MGT-7", "Form AOC-4", "Annual Return Filing", "Director KYC (DIR-3)", "Board Resolution Drafting", "AGM Compliance Support"], tag: null },
  { title: "GST Return Package", href: "/packages/gst-return", price: "₹2,499/month", features: ["GSTR-1 Filing", "GSTR-3B Filing", "Input Tax Credit Reconciliation", "GST Notice Handling", "Annual Return (GSTR-9)", "Dedicated GST Manager"], tag: null },
  { title: "Complete Value Package", href: "/packages/complete-value-package", price: "₹24,999/year", features: ["Company Incorporation", "GST Registration", "ITR Filing", "TDS Returns (4 quarters)", "ROC Annual Filing", "Unlimited Advisory"], tag: "★ Best Value" },
  { title: "TDS Package", href: "/packages/tds", price: "₹1,999/quarter", features: ["TDS Computation", "Challan Payment Support", "Quarterly Return Filing", "Form 16 / 16A Generation", "TRACES Compliance", "Notice Handling Support"], tag: null },
  { title: "ITR Package", href: "/packages/itr", price: "₹1,499/year", features: ["Income Computation", "Deduction Optimization", "ITR Form Selection", "E-filing on IT Portal", "Verification Assistance", "Refund Tracking"], tag: null },
];

export default function PackagesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Special Value Packages</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Comprehensive compliance bundles designed to give you maximum value at transparent pricing. No hidden fees.</p>
        </div>
      </section>
      <section className="py-14 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map(({ title, href, price, features, tag }) => (
            <div key={href} className={`relative border rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col ${tag ? "border-green-500 shadow-green-100 shadow-md" : "border-gray-200 hover:border-green-300"}`}>
              {tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star size={11} /> {tag}
                  </span>
                </div>
              )}
              <h2 className="font-bold text-[#112740] text-lg mb-2">{title}</h2>
              <div className="text-2xl font-bold text-green-600 mb-4">{price}</div>
              <ul className="space-y-2 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link href={href} className={`mt-6 w-full text-center py-2.5 rounded-xl font-semibold text-sm transition-colors inline-flex items-center justify-center gap-2 ${tag ? "bg-green-600 hover:bg-green-700 text-white" : "border-2 border-[#112740] text-[#112740] hover:bg-[#112740] hover:text-white"}`}>
                View Details <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
