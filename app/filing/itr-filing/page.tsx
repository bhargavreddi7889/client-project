import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITR Filing – Income Tax Return Filing",
  description: "File your Income Tax Return (ITR) accurately and on time. Expert ITR filing for individuals, businesses, companies, and LLPs.",
};

export default function ITRFilingPage() {
  return (
    <ServicePageTemplate
      title="ITR Filing"
      subtitle="Accurate and timely Income Tax Return filing for individuals and businesses"
      description="Filing your Income Tax Return (ITR) on time is not just a legal obligation but also helps you establish your income proof, claim refunds, and carry forward losses. ComplyBridge's team of expert CAs handles ITR filing for individuals (salaried, self-employed), firms, LLPs, and companies — ensuring maximum deductions and zero errors. We handle all ITR forms from ITR-1 to ITR-7."
      category="Filing"
      categoryHref="/filing"
      price="₹999 onwards"
      govtFee="NIL"
      timeframe="1–3 Working Days"
      keyBenefits={[
        "Claim all eligible deductions under 80C, 80D, 80G, etc.",
        "Get faster income tax refunds processed",
        "Establish income proof for loans and visas",
        "Carry forward business losses for future offset",
        "Avoid late filing fee under Section 234F",
        "Mandatory for foreign travel and higher-value transactions",
        "Compliance with TDS deducted by employers",
        "Access to Form 26AS reconciliation",
      ]}
      documents={[
        "PAN Card and Aadhar Card",
        "Form 16 (for salaried individuals)",
        "Bank statements for all accounts",
        "Investment proofs (ELSS, PPF, LIC, etc.)",
        "Rent receipts and home loan statements",
        "Capital gains statements (if applicable)",
        "Business P&L and Balance Sheet (for business income)",
        "Form 26AS and AIS (Annual Information Statement)",
        "Foreign income details (if applicable)",
      ]}
      process={[
        { title: "Income Assessment", desc: "Analyze all income sources — salary, business, capital gains, house property, and other sources." },
        { title: "Deduction Optimization", desc: "Identify all applicable deductions under Chapter VI-A to minimize tax liability." },
        { title: "ITR Form Selection", desc: "Select the correct ITR form based on income type and source (ITR-1 to ITR-7)." },
        { title: "Return Preparation", desc: "Accurately prepare the income tax return with all income, deductions, and tax computations." },
        { title: "Client Review", desc: "Share the return draft with the client for review and approval before filing." },
        { title: "E-filing & Verification", desc: "File the ITR on the Income Tax Portal and verify via Aadhar OTP or net banking." },
      ]}
      faqs={[
        { question: "Who must file an ITR?", answer: "ITR is mandatory for individuals with income exceeding ₹2.5 lakhs (₹3 lakhs for 60+ years), for companies and LLPs, and for those with foreign assets, foreign income, or who want to claim refunds." },
        { question: "What is the due date for ITR filing?", answer: "For individuals: July 31st. For businesses requiring audit: October 31st. For transfer pricing cases: November 30th. Belated returns can be filed until December 31st." },
        { question: "What is the penalty for late ITR filing?", answer: "A late filing fee of ₹5,000 (₹1,000 if income ≤₹5 lakhs) is charged under Section 234F for returns filed after the due date." },
        { question: "What is Form 26AS?", answer: "Form 26AS is your annual tax credit statement showing TDS deducted, advance tax paid, and other tax credits. It should be reconciled with your ITR." },
        { question: "Can I revise my filed ITR?", answer: "Yes, a revised return can be filed before December 31st of the assessment year or before completion of assessment, whichever is earlier." },
      ]}
    />
  );
}
