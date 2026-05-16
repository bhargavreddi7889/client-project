import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FSSAI Food License Registration",
  description: "Get your FSSAI Food License (Basic, State, or Central) for your food business. Expert support for restaurants, manufacturers, traders, and importers.",
};

export default function FoodLicensePage() {
  return (
    <ServicePageTemplate
      title="Food License (FSSAI)"
      subtitle="Mandatory food safety license for all food businesses in India"
      description="FSSAI (Food Safety and Standards Authority of India) license is mandatory for all food business operators (FBOs) including restaurants, hotels, food manufacturers, traders, importers, and home-based food businesses. Based on your turnover and scale of operations, you may require Basic Registration, State License, or Central License. ComplyBridge handles the entire FSSAI licensing process for you."
      category="License / Approval"
      categoryHref="/license"
      price="₹1,999 onwards"
      govtFee="₹100–₹7,500 (as per category)"
      timeframe="7–30 Working Days"
      keyBenefits={[
        "Legal authority to manufacture, trade, or distribute food",
        "Consumer trust and brand credibility",
        "Avoid heavy penalties and business closure",
        "Mandatory for export of food products",
        "Eligibility for e-commerce food platforms",
        "Access to government food supply contracts",
        "14-digit FSSAI license number on packaging",
        "Annual renewal with compliance support",
      ]}
      documents={[
        "Photo ID proof of proprietor/partner/director",
        "Proof of business premises (rent agreement/ownership)",
        "List of food products to be manufactured/sold",
        "NOC from municipality / Panchayat",
        "Water test report (for manufacturing units)",
        "Layout plan of food premises",
        "Certificate of Incorporation (for companies)",
        "Partnership Deed (for partnership firms)",
      ]}
      process={[
        { title: "Category Identification", desc: "Determine the correct FSSAI category (Basic/State/Central) based on turnover and business type." },
        { title: "Document Preparation", desc: "Compile all required documents as per FSSAI checklist for your category." },
        { title: "Application Filing", desc: "File application on FoSCos portal (food.fssai.gov.in) with required details." },
        { title: "Inspection (if required)", desc: "Food safety officer may inspect premises for State and Central licenses." },
        { title: "License Issuance", desc: "Receive FSSAI Registration Certificate or License with 14-digit FBO number." },
        { title: "Display & Renewal", desc: "Display the license at business premises and renew annually before expiry." },
      ]}
      faqs={[
        { question: "What is the difference between FSSAI Basic, State, and Central License?", answer: "Basic: Turnover <₹12 lakhs. State License: Turnover ₹12 lakhs–₹20 crore. Central License: Turnover >₹20 crore or for importers, exporters, and manufacturers supplying to multiple states." },
        { question: "Is FSSAI registration mandatory for home-based food businesses?", answer: "Yes, even home-based food businesses operating food delivery or cloud kitchens require at least FSSAI Basic Registration." },
        { question: "What is the penalty for operating without FSSAI license?", answer: "Operating without FSSAI license attracts a fine of up to ₹5 lakhs and imprisonment up to 6 months." },
        { question: "How long is an FSSAI license valid?", answer: "FSSAI license/registration is valid for 1–5 years as chosen at the time of application and must be renewed before expiry." },
        { question: "Do restaurants and cloud kitchens need FSSAI?", answer: "Yes, all food service establishments including restaurants, hotels, cloud kitchens, dhabas, and canteens require FSSAI registration." },
      ]}
    />
  );
}
