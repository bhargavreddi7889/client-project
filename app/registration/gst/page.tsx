import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST Registration in India",
  description: "Get your GST registration done quickly and accurately. Expert support for GSTIN application, documents, and compliance.",
};

export default function GSTRegistrationPage() {
  return (
    <ServicePageTemplate
      title="GST Registration"
      subtitle="Get your GSTIN and stay compliant with India's unified tax system"
      description="GST (Goods and Services Tax) registration is mandatory for businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for services). It is also required for inter-state supply, e-commerce operators, and specific categories regardless of turnover. ComplyBridge ensures accurate GST registration with zero errors, avoiding future notices from the GST department."
      category="Registration / Conversion"
      categoryHref="/registration"
      price="₹1,499 onwards"
      govtFee="NIL"
      timeframe="3–7 Working Days"
      keyBenefits={[
        "Legal authority to collect GST from customers",
        "Input Tax Credit (ITC) on purchases",
        "Eligibility for interstate trade and e-commerce",
        "Avoid penalties for non-compliance",
        "Builds trust and credibility with B2B clients",
        "Composition Scheme option for small businesses",
        "GST portal access for return filing",
        "Required for business loans and tenders",
      ]}
      documents={[
        "PAN Card of business/proprietor",
        "Aadhar Card of proprietor/partners/directors",
        "Passport-size photograph",
        "Proof of principal place of business",
        "Bank account statement / cancelled cheque",
        "Partnership deed / Certificate of Incorporation",
        "Authorization letter / Board resolution",
        "Digital Signature (for companies and LLPs)",
      ]}
      process={[
        { title: "Eligibility Check", desc: "We assess your business type and turnover to determine GST registration category." },
        { title: "Document Collection", desc: "Submit the required documents as per your business structure." },
        { title: "Portal Application", desc: "File GST registration application on the GST Portal (gstin.gov.in)." },
        { title: "ARN Generation", desc: "Application Reference Number (ARN) is generated confirming successful submission." },
        { title: "Officer Verification", desc: "GST officer may request additional documents or physical verification." },
        { title: "GSTIN Certificate", desc: "Receive your GSTIN and GST Registration Certificate within 3–7 working days." },
      ]}
      faqs={[
        { question: "Who must register for GST?", answer: "Businesses with annual aggregate turnover exceeding ₹40 lakhs (goods) or ₹20 lakhs (services), and those involved in inter-state supply or e-commerce must register for GST." },
        { question: "Is GST registration free?", answer: "Yes, the government charges no fee for GST registration. Our fees cover professional service charges." },
        { question: "What is the Composition Scheme?", answer: "Small businesses with turnover up to ₹1.5 crore can opt for the Composition Scheme and pay GST at a flat rate with simplified compliance." },
        { question: "Can I have multiple GST registrations?", answer: "Yes, if you operate in multiple states or have distinct business verticals, you may need separate GST registrations for each." },
        { question: "What happens if I don't register for GST?", answer: "Operating without mandatory GST registration attracts a penalty of 10% of the tax amount (minimum ₹10,000) or 100% in case of deliberate evasion." },
      ]}
    />
  );
}
