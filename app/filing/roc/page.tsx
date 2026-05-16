import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROC Filing – Annual Return and Financial Statements",
  description: "Expert ROC filing services for companies and LLPs. Annual return, financial statements, MGT-7, AOC-4, and event-based filings.",
};

export default function ROCFilingPage() {
  return (
    <ServicePageTemplate
      title="ROC Filing"
      subtitle="Annual compliance filings for Companies and LLPs with the Registrar of Companies"
      description="Every company and LLP registered under the Companies Act, 2013 or LLP Act, 2008 must file annual returns and financial statements with the Registrar of Companies (ROC). ROC filings include Form MGT-7 (Annual Return), Form AOC-4 (Financial Statements), and various event-based forms. Non-compliance leads to heavy penalties and disqualification of directors. ComplyBridge ensures timely, accurate ROC filings for all types of companies."
      category="Filing"
      categoryHref="/filing"
      price="₹3,499 onwards"
      govtFee="As per authorised capital"
      timeframe="5–10 Working Days"
      keyBenefits={[
        "Avoid director disqualification and company strike-off",
        "Maintain Active status on MCA portal",
        "Prevent late filing penalties (₹100/day per form)",
        "Complete ROC compliance management",
        "Event-based filings handled proactively",
        "XBRL filing for applicable companies",
        "Auditor appointment and reappointment forms",
        "Board resolution drafting support",
      ]}
      documents={[
        "Audited Financial Statements (Balance Sheet, P&L)",
        "Auditor's Report and Board Report",
        "Annual Return details (shareholding, directors)",
        "Certificate of Incorporation and MoA/AoA",
        "Minutes of AGM",
        "PAN and DSC of all directors",
        "Shareholders register with current holdings",
        "Form ADT-1 (Auditor Appointment)",
      ]}
      process={[
        { title: "Document Collection", desc: "Gather audited financials, board reports, and shareholders details for the financial year." },
        { title: "AGM Compliance", desc: "Ensure Annual General Meeting is held within 6 months from financial year end." },
        { title: "Financial Statement Filing", desc: "File Form AOC-4 with audited Balance Sheet and P&L within 30 days of AGM." },
        { title: "Annual Return Filing", desc: "File Form MGT-7 (Annual Return) within 60 days of AGM." },
        { title: "Other Event-Based Forms", desc: "File any additional forms for changes in directors, registered office, share capital, etc." },
        { title: "Compliance Calendar", desc: "Maintain an ongoing compliance calendar for all future ROC filings." },
      ]}
      faqs={[
        { question: "What is the due date for ROC filing?", answer: "Form AOC-4 must be filed within 30 days of AGM. Form MGT-7 must be filed within 60 days of AGM. AGM must be held within 6 months from close of financial year (September 30th for FY April–March)." },
        { question: "What is the penalty for late ROC filing?", answer: "Late filing attracts additional fees of ₹100 per day per form, with no cap. Prolonged non-filing can lead to director disqualification and company strike-off." },
        { question: "What is XBRL filing?", answer: "XBRL (eXtensible Business Reporting Language) filing is mandatory for listed companies and companies with paid-up capital ≥₹5 crore or turnover ≥₹100 crore." },
        { question: "What is Form MGT-7 and AOC-4?", answer: "MGT-7 is the Annual Return of the company. AOC-4 is used to file financial statements. Both are mandatory annual filings for every registered company." },
        { question: "Do LLPs have different ROC filing requirements?", answer: "Yes, LLPs file Form 11 (Annual Return) and Form 8 (Statement of Accounts) annually. The due dates and forms are different from companies." },
      ]}
    />
  );
}
