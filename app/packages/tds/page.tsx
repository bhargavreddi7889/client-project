import PackagePageTemplate from "@/components/PackagePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "TDS Package – Quarterly TDS Return Filing", description: "Quarterly TDS return filing package including TDS computation, challan payment, 24Q/26Q filing, and Form 16/16A issuance." };

export default function TDSPackagePage() {
  return (
    <PackagePageTemplate
      title="TDS Package"
      subtitle="Quarterly TDS compliance — from computation to certificate issuance"
      description="Our TDS Package provides end-to-end TDS compliance support for businesses and employers. We handle TDS computation, challan deposits, quarterly return filing (24Q/26Q), and issuance of Form 16 and Form 16A to all deductees — ensuring zero penalties and accurate TDS credit for your employees and vendors."
      price="₹1,999/quarter"
      originalPrice="₹3,500/quarter"
      whatsIncluded={["TDS Computation on Payments", "Challan Payment Advisory", "Form 24Q/26Q Preparation", "TDS Return Filing on TRACES", "Form 16 for Employees", "Form 16A for Vendors/Contractors", "TRACES Portal Support", "Notice Handling"]}
      includes={[
        { category: "Computation", items: ["TDS on Salaries (192)", "TDS on Contractor Payments (194C)", "TDS on Professional Fees (194J)", "TDS on Rent (194I)", "TDS on Commission (194H)"] },
        { category: "Return Filing", items: ["Form 24Q (Salary TDS)", "Form 26Q (Non-Salary TDS)", "Form 27Q (NRI Payments)", "FVU Validation", "TRACES Portal Filing"] },
        { category: "Certificates & Support", items: ["Form 16 Issuance", "Form 16A Issuance", "TRACES Registration", "Notice Reply Support", "Lower Deduction Certificate Guidance"] },
      ]}
      process={[
        { title: "Data Collection", desc: "Collect payment details, TDS rates, and deductee PAN information." },
        { title: "TDS Computation", desc: "Compute TDS on each payment category as per applicable rates." },
        { title: "Challan Payment", desc: "Guide on monthly TDS challan payment through OLTAS." },
        { title: "Return Preparation", desc: "Prepare quarterly TDS return using RPU software." },
        { title: "Return Filing", desc: "File validated return on TRACES/TIN portal." },
        { title: "Certificate Issuance", desc: "Generate and share Form 16/16A with all deductees." },
      ]}
      faqs={[
        { question: "What is TAN?", answer: "TAN (Tax Deduction Account Number) is a 10-digit alphanumeric number mandatory for every entity deducting or collecting tax at source." },
        { question: "When must TDS be deposited?", answer: "TDS deducted must be deposited by the 7th of the following month (except March, which is due by April 30th)." },
        { question: "What is the late filing fee?", answer: "₹200 per day under Section 234E, subject to a maximum of the TDS amount. Additionally, ₹10,000–₹1 lakh penalty under Section 271H." },
        { question: "How many deductees does this package cover?", answer: "This package covers up to 20 deductees per quarter. For larger payrolls, we offer custom pricing." },
        { question: "What if we receive a TDS notice?", answer: "TDS notice handling and department correspondence are included in the package at no extra cost for standard notices." },
      ]}
    />
  );
}
