import PackagePageTemplate from "@/components/PackagePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "GST Return Package", description: "Monthly GST return filing package including GSTR-1, GSTR-3B, ITC reconciliation, and annual GSTR-9 at a flat monthly rate." };

export default function GSTReturnPackagePage() {
  return (
    <PackagePageTemplate
      title="GST Return Package"
      subtitle="Hassle-free monthly GST compliance for your business"
      description="Managing GST compliance every month can be time-consuming and error-prone. Our GST Return Package provides dedicated support for monthly GSTR-1 and GSTR-3B filings, quarterly reconciliations, input tax credit management, and annual GSTR-9 filing — all at a flat monthly rate with a dedicated GST compliance manager."
      price="₹2,499/month"
      originalPrice="₹4,500/month"
      whatsIncluded={["GSTR-1 Monthly Filing", "GSTR-3B Monthly Filing", "ITC Reconciliation", "GST Notice Handling", "Annual Return (GSTR-9)", "Dedicated GST Manager", "Tax Liability Advisory", "Compliance Reminders"]}
      includes={[
        { category: "Monthly Filing", items: ["GSTR-1 (Outward Supplies)", "GSTR-3B (Summary Return)", "ITC Reconciliation in 2B", "Tax Liability Computation", "Challan Payment Guidance"] },
        { category: "Annual Filing", items: ["GSTR-9 (Annual Return)", "GSTR-9C Reconciliation Statement", "FY Reconciliation Support", "Error Correction Advisory"] },
        { category: "Support", items: ["GST Notice Reply Support", "Department Query Response", "Dedicated Account Manager", "WhatsApp Support", "Monthly Compliance Report"] },
      ]}
      process={[
        { title: "Data Collection", desc: "Share your sales and purchase invoices by the 5th of each month." },
        { title: "GSTR-1 Preparation", desc: "Prepare and file GSTR-1 with outward supply details." },
        { title: "ITC Reconciliation", desc: "Reconcile GSTR-2B with your purchase register for accurate ITC claims." },
        { title: "GSTR-3B Filing", desc: "Compute tax liability and file GSTR-3B by the 20th of each month." },
        { title: "Notice Handling", desc: "Respond to any GST department queries or notices on your behalf." },
        { title: "Annual Filing", desc: "File GSTR-9 and GSTR-9C at financial year end." },
      ]}
      faqs={[
        { question: "What are the GST return due dates?", answer: "GSTR-1: 11th of next month (monthly). GSTR-3B: 20th of next month. Quarterly GSTR-1 for composition dealers: 13th of month after quarter." },
        { question: "What is the penalty for late GST filing?", answer: "Late fee: ₹50/day per return (₹25 CGST + ₹25 SGST). NIL returns late fee: ₹20/day. Maximum late fee capped at ₹10,000 per return." },
        { question: "Is GSTR-9C mandatory for all?", answer: "GSTR-9C (Reconciliation Statement) is mandatory for taxpayers with annual aggregate turnover exceeding ₹5 crore." },
        { question: "What documents should I share monthly?", answer: "Share your sales invoices, purchase invoices, credit notes, debit notes, and bank statement for accurate GST computation." },
        { question: "Can I switch to quarterly GST filing?", answer: "Taxpayers with turnover up to ₹5 crore can opt for quarterly GSTR-1 and GSTR-3B filing under the QRMP scheme." },
      ]}
    />
  );
}
