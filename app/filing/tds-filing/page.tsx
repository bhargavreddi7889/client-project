import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TDS Filing – TDS Return Filing Service",
  description: "Expert TDS return filing (Form 24Q, 26Q, 27Q) for businesses. Accurate TDS computation, challan payment, and quarterly return filing.",
};

export default function TDSFilingPage() {
  return (
    <ServicePageTemplate
      title="TDS Filing"
      subtitle="Accurate quarterly TDS return filing for businesses and employers"
      description="Tax Deducted at Source (TDS) is a mechanism where the payer deducts tax from payments made and remits it to the government. Businesses deducting TDS must file quarterly TDS returns (Form 24Q for salary, 26Q for non-salary, 27Q for NRI payments). Errors in TDS returns lead to notices and penalties. ComplyBridge ensures accurate TDS computation, timely challan deposits, and error-free return filing."
      category="Filing"
      categoryHref="/filing"
      price="₹1,499 onwards per quarter"
      govtFee="NIL"
      timeframe="2–4 Working Days"
      keyBenefits={[
        "Avoid penalties under Section 234E (₹200/day)",
        "Correct Form 26AS for deductees",
        "Timely TDS certificate issuance (Form 16/16A)",
        "Avoid Section 271C penalty for non-deduction",
        "Expert handling of lower deduction certificates",
        "Reconciliation with books of accounts",
        "TRACES portal compliance support",
        "TAN registration and renewal support",
      ]}
      documents={[
        "TAN (Tax Deduction Account Number)",
        "PAN of the deductor and all deductees",
        "Payment details (nature, amount, date)",
        "TDS challan payment receipts (BSR code, date)",
        "Salary details for Form 24Q",
        "Vendor/contractor payment details for 26Q",
        "NRI payment details for Form 27Q",
        "Books of accounts and ledger extracts",
      ]}
      process={[
        { title: "TDS Computation", desc: "Calculate TDS on all applicable payments as per the Income Tax Act rates." },
        { title: "Challan Payment", desc: "Deposit TDS to the government treasury within the due date via OLTAS." },
        { title: "Return Preparation", desc: "Prepare quarterly TDS return (Form 24Q/26Q/27Q) using NSDL RPU software." },
        { title: "Error Checking", desc: "Validate the TDS return file for errors using the NSDL File Validation Utility (FVU)." },
        { title: "Return Filing", desc: "File the validated TDS return on the TIN-NSDL or TRACES portal." },
        { title: "TDS Certificate Issuance", desc: "Generate and issue Form 16 (salary) and Form 16A (others) to deductees." },
      ]}
      faqs={[
        { question: "What are the TDS return due dates?", answer: "Quarter 1 (Apr–Jun): July 31; Quarter 2 (Jul–Sep): Oct 31; Quarter 3 (Oct–Dec): Jan 31; Quarter 4 (Jan–Mar): May 31." },
        { question: "What is the penalty for late TDS return filing?", answer: "Late filing fee of ₹200 per day under Section 234E, subject to a maximum of the TDS amount. Additionally, penalty under 271H can be ₹10,000 to ₹1 lakh." },
        { question: "What is TAN and is it mandatory?", answer: "TAN (Tax Deduction Account Number) is a 10-character alphanumeric code mandatory for every entity required to deduct or collect tax at source." },
        { question: "What is Form 16 and Form 16A?", answer: "Form 16 is the TDS certificate issued by employers to employees for salary TDS. Form 16A is issued for non-salary TDS like contract, professional fees, rent, etc." },
        { question: "Can TDS returns be revised?", answer: "Yes, TDS returns can be corrected by filing a correction statement on the TRACES portal." },
      ]}
    />
  );
}
