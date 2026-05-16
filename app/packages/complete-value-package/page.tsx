import PackagePageTemplate from "@/components/PackagePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Value Package – Best",
  description: "All-in-one compliance package including company registration, GST, ITR, TDS, and ROC filings at the best price.",
};

export default function CompleteValuePackagePage() {
  return (
    <PackagePageTemplate
      title="Complete Value Package"
      subtitle="The most comprehensive compliance package for your growing business"
      description="Our flagship Complete Value Package is designed for startups and growing businesses that need comprehensive compliance support without the hassle of managing multiple vendors. From incorporation to annual filings — everything is covered in one transparent price with a dedicated account manager."
      price="₹24,999/year"
      originalPrice="₹45,000/year"
      isBest={true}
      whatsIncluded={[
        "Company/LLP Incorporation",
        "GST Registration",
        "ITR Filing (up to ₹50L income)",
        "TDS Returns (4 quarters)",
        "ROC Annual Filing (MGT-7 + AOC-4)",
        "Dedicated Account Manager",
        "Unlimited WhatsApp/Email Support",
        "Compliance Calendar & Reminders",
      ]}
      includes={[
        {
          category: "Incorporation",
          items: ["Company or LLP Registration", "PAN & TAN Application", "GST Registration", "Bank Account Assistance", "Digital Signature Certificate"],
        },
        {
          category: "Tax Filing",
          items: ["Income Tax Return Filing", "TDS Returns (4 quarters)", "Form 16 / 16A Generation", "26AS Reconciliation", "Advance Tax Advisory"],
        },
        {
          category: "ROC Compliance",
          items: ["Annual Return (MGT-7)", "Financial Statements (AOC-4)", "Director KYC (DIR-3)", "Board Resolution Drafting", "AGM Compliance"],
        },
        {
          category: "Advisory",
          items: ["Tax Planning Advisory", "Compliance Calendar", "Penalty Avoidance Alerts", "Startup Advisory Support", "Quarterly Review Calls"],
        },
        {
          category: "Add-on Support",
          items: ["Trademark Basic Search", "MSME Registration", "Priority Processing", "Dedicated Account Manager", "WhatsApp Support"],
        },
      ]}
      process={[
        { title: "Onboarding", desc: "Complete a simple onboarding form. We assign a dedicated account manager within 24 hours." },
        { title: "Document Collection", desc: "Your manager collects all required documents and information digitally." },
        { title: "Incorporation", desc: "Company/LLP incorporation and GST registration completed in 7–10 days." },
        { title: "Compliance Setup", desc: "We set up your compliance calendar and annual filing schedule." },
        { title: "Ongoing Filing", desc: "We handle all monthly, quarterly, and annual filings throughout the year." },
        { title: "Annual Review", desc: "Year-end review and package renewal discussion with updated advisory." },
      ]}
      faqs={[
        { question: "What if I already have a registered company?", answer: "If you already have an incorporated company, we skip the incorporation step and include additional services like trademark or FSSAI at no extra cost." },
        { question: "Is there a refund policy?", answer: "We offer a 100% refund within 7 days of purchase if we have not yet commenced any service. After commencement, proportionate refund based on work done." },
        { question: "Can I customize this package?", answer: "Yes, we offer add-ons like POSH compliance, payroll management, and more. Contact us for a customized quote." },
        { question: "How many users/directors are covered?", answer: "The package covers up to 2 directors for DSC and standard filings. Additional directors may attract nominal charges." },
        { question: "Is GST return filing included?", answer: "GST return filing (monthly GSTR-1 and GSTR-3B) is available as an add-on to this package at ₹2,499/month additional." },
      ]}
    />
  );
}
