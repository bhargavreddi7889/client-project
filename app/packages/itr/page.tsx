import PackagePageTemplate from "@/components/PackagePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "ITR Package – Income Tax Return Filing", description: "Expert ITR filing package for individuals, professionals, and businesses with deduction optimization and refund tracking." };

export default function ITRPackagePage() {
  return (
    <PackagePageTemplate
      title="ITR Package"
      subtitle="Expert income tax return filing with maximum deduction optimization"
      description="Our ITR Package delivers accurate, expert-filed income tax returns for individuals, salaried employees, self-employed professionals, and businesses. Our CAs review your income from all sources, identify maximum eligible deductions, and ensure a zero-error filing with timely refund tracking — all at a flat annual rate."
      price="₹1,499/year"
      originalPrice="₹3,000/year"
      whatsIncluded={["Income Computation from All Sources", "Deduction Optimization (80C, 80D, etc.)", "ITR Form Selection", "E-Filing on IT Portal", "E-Verification Assistance", "Refund Status Tracking", "Form 26AS Reconciliation", "ITR-V Acknowledgement"]}
      includes={[
        { category: "Computation", items: ["Salary Income", "Business/Professional Income", "Capital Gains (Short & Long Term)", "House Property Income", "Other Sources"] },
        { category: "Deductions", items: ["Section 80C (ELSS, PPF, LIC, etc.)", "Section 80D (Health Insurance)", "Section 80G (Donations)", "HRA Exemption", "Home Loan Interest (24b)"] },
        { category: "Filing & Post-Filing", items: ["ITR Form Selection", "E-Filing on IT Portal", "Aadhar OTP Verification", "Refund Tracking", "26AS Reconciliation", "AIS Review"] },
      ]}
      process={[
        { title: "Document Collection", desc: "Share Form 16, bank statements, investment proofs, and other income details." },
        { title: "Income Analysis", desc: "Analyse all income sources and compute gross total income." },
        { title: "Deduction Optimization", desc: "Identify all eligible deductions to minimize tax liability." },
        { title: "ITR Preparation", desc: "Prepare the ITR using the correct form with all income and deductions." },
        { title: "Client Review", desc: "Share draft computation for your review and approval." },
        { title: "E-Filing & Verification", desc: "File ITR on Income Tax Portal and assist with e-verification." },
      ]}
      faqs={[
        { question: "What ITR forms are covered?", answer: "We file ITR-1, ITR-2, ITR-3, and ITR-4 under this package. Audit cases (ITR-3/5/6) may attract additional charges." },
        { question: "Is capital gains covered?", answer: "Yes, capital gains from stocks, mutual funds, property, and crypto are covered under this package." },
        { question: "What if I receive an income tax notice?", answer: "Response to basic income tax notices is included. Complex litigation and assessments may attract additional charges." },
        { question: "When should I file my ITR?", answer: "For individuals: July 31st. Belated return: December 31st. Early filing is recommended to get faster refunds." },
        { question: "Can I file for multiple years?", answer: "You can file current and one previous year's belated return. Returns for earlier years require commissioner approval and are handled at additional charges." },
      ]}
    />
  );
}
