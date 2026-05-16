import PackagePageTemplate from "@/components/PackagePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "ROC Return Package", description: "Annual ROC compliance package for companies including MGT-7, AOC-4, Director KYC, AGM support, and all MCA filings." };

export default function ROCReturnPackagePage() {
  return (
    <PackagePageTemplate
      title="ROC Return Package"
      subtitle="Complete annual ROC compliance for your company"
      description="Our ROC Return Package ensures your company stays compliant with the Registrar of Companies through timely filing of all mandatory annual returns. We handle Form MGT-7, Form AOC-4, Director KYC (DIR-3), AGM compliance, and all event-based MCA filings — keeping your company's MCA status Active."
      price="₹5,999/year"
      originalPrice="₹10,000/year"
      whatsIncluded={["Form MGT-7 (Annual Return)", "Form AOC-4 (Financial Statements)", "Director KYC (DIR-3)", "Board Resolution Drafting", "AGM Compliance Support", "XBRL Filing (if applicable)", "MCA Status Monitoring", "Compliance Reminders"]}
      includes={[
        { category: "Annual Filings", items: ["Form MGT-7 Filing", "Form AOC-4 Filing", "Director KYC (DIR-3 KYC)", "Form ADT-1 (Auditor Appointment)"] },
        { category: "Meeting Compliance", items: ["AGM Date & Compliance Advisory", "Board Meeting Minutes", "Board Resolution Drafting", "Shareholder Meeting Support"] },
        { category: "Ongoing Support", items: ["MCA Portal Monitoring", "Compliance Calendar", "Penalty Avoidance Alerts", "Event-based Form Alerts", "Director DIN Status Check"] },
      ]}
      process={[
        { title: "Document Collection", desc: "Gather audited financials, board reports, and AGM minutes." },
        { title: "AGM Advisory", desc: "Guide on AGM scheduling and compliance requirements." },
        { title: "File AOC-4", desc: "File financial statements within 30 days of AGM." },
        { title: "File MGT-7", desc: "File Annual Return within 60 days of AGM." },
        { title: "Director KYC", desc: "Complete DIR-3 KYC for all directors before September 30." },
        { title: "Compliance Calendar", desc: "Maintain and share updated compliance calendar for next year." },
      ]}
      faqs={[
        { question: "What is the penalty for late ROC filing?", answer: "Late filing attracts ₹100 per day per form with no maximum cap. Continued non-compliance leads to director disqualification." },
        { question: "Does this cover LLP annual filing?", answer: "This package is for companies. LLP filings (Form 11 and Form 8) are covered under a separate LLP compliance package." },
        { question: "Is XBRL filing included?", answer: "XBRL filing is included for companies with paid-up capital ≥₹5 crore or turnover ≥₹100 crore. Others are covered by standard AOC-4." },
        { question: "What if there are changes in directors during the year?", answer: "Director appointment/resignation forms (DIR-12) are available as add-ons outside the standard package." },
        { question: "Do I need to provide audited financials?", answer: "Yes, audited financial statements from your CA/auditor are required for AOC-4 filing. We coordinate with your auditor if needed." },
      ]}
    />
  );
}
