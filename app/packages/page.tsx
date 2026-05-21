import Link from "next/link";
import { CheckCircle2, Star, ArrowRight } from "lucide-react";
import SectionIndexHeader from "@/components/SectionIndexHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Value Packages",
  description:
    "All-inclusive compliance packages for LLP, Company, NGO incorporation, ROC returns, GST, TDS, and ITR at the best prices.",
};

const packages = [
  {
    title: "LLP Incorporation Package",
    href: "/packages/llp-incorporation",
    price: "₹8,999",
    features: ["DPIN for 2 partners", "LLP Name Reservation", "LLP Agreement Drafting", "Certificate of Incorporation", "PAN & TAN", "Bank Account Assistance"],
    tag: null,
  },
  {
    title: "Company Incorporation Package",
    href: "/packages/company-incorporation",
    price: "₹10,999",
    features: ["DSC for 2 directors", "DIN for 2 directors", "Name Reservation", "MoA & AoA Drafting", "SPICe+ Filing", "PAN, TAN & GST"],
    tag: null,
  },
  {
    title: "NGO Incorporation Package",
    href: "/packages/ngo-incorporation",
    price: "₹12,999",
    features: ["Trust Deed / MoA Drafting", "Registration Filing", "PAN for NGO", "12A Application", "80G Application", "Bank Account Assistance"],
    tag: null,
  },
  {
    title: "ROC Return Package",
    href: "/packages/roc-return",
    price: "₹5,999/year",
    features: ["Form MGT-7", "Form AOC-4", "Annual Return Filing", "Director KYC (DIR-3)", "Board Resolution Drafting", "AGM Compliance Support"],
    tag: null,
  },
  {
    title: "GST Return Package",
    href: "/packages/gst-return",
    price: "₹2,499/month",
    features: ["GSTR-1 Filing", "GSTR-3B Filing", "Input Tax Credit Reconciliation", "GST Notice Handling", "Annual Return (GSTR-9)", "Dedicated GST Manager"],
    tag: null,
  },
  {
    title: "Complete Value Package",
    href: "/packages/complete-value-package",
    price: "₹24,999/year",
    features: ["Company Incorporation", "GST Registration", "ITR Filing", "TDS Returns (4 quarters)", "ROC Annual Filing", "Unlimited Advisory"],
    tag: "★ Best Value",
  },
  {
    title: "TDS Package",
    href: "/packages/tds",
    price: "₹1,999/quarter",
    features: ["TDS Computation", "Challan Payment Support", "Quarterly Return Filing", "Form 16 / 16A Generation", "TRACES Compliance", "Notice Handling Support"],
    tag: null,
  },
  {
    title: "ITR Package",
    href: "/packages/itr",
    price: "₹1,499/year",
    features: ["Income Computation", "Deduction Optimization", "ITR Form Selection", "E-filing on IT Portal", "Verification Assistance", "Refund Tracking"],
    tag: null,
  },
];

export default function PackagesPage() {
  return (
    <div>
      <SectionIndexHeader
        title="Special Value Packages"
        description="Comprehensive compliance bundles designed to give you maximum value at transparent pricing."
      />
      <p className="text-gray-600 leading-relaxed mb-8">
        Select a package from the sidebar or browse below.
      </p>
      <div className="space-y-8">
        {packages.map(({ title, href, price, features, tag }) => (
          <div
            key={href}
            className={`border rounded-lg p-5 ${tag ? "border-green-500 bg-green-50/30" : "border-gray-200"}`}
          >
            {tag && (
              <span className="inline-flex items-center gap-1 bg-green-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full mb-2">
                <Star size={11} /> {tag}
              </span>
            )}
            <h2 className="font-bold text-[#112740] text-lg mb-1">{title}</h2>
            <p className="text-green-600 font-bold text-xl mb-3">{price}</p>
            <ul className="space-y-1.5 mb-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Link
              href={href}
              className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold hover:gap-2 transition-all"
            >
              View details <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
