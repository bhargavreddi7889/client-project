import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop and Establishment Registration",
  description: "Register your shop or commercial establishment under the Shops and Establishments Act. State-wise expert support across India.",
};

export default function ShopEstablishmentPage() {
  return (
    <ServicePageTemplate
      title="Shop & Establishment Registration"
      subtitle="Mandatory registration for all shops and commercial establishments in India"
      description="Every shop, commercial establishment, hotel, restaurant, eating house, or place of entertainment must be registered under the state-specific Shops and Establishments Act. This registration governs working hours, employee rights, holidays, and leave policies. It is also required as a primary identity proof for your business for opening bank accounts and applying for other licenses."
      category="License / Approval"
      categoryHref="/license"
      price="₹1,499 onwards"
      govtFee="As per state (₹125–₹12,000)"
      timeframe="3–10 Working Days"
      keyBenefits={[
        "Legal recognition for your shop or establishment",
        "Required for opening current bank account",
        "Basis for other license applications",
        "Regulates working hours and employee rights",
        "Protects against arbitrary closure by authorities",
        "Required for GST registration as address proof",
        "Mandatory for hiring employees",
        "Compliance with state labour laws",
      ]}
      documents={[
        "Name of establishment and owner",
        "Address proof of business premises",
        "Owner's PAN Card and Aadhar Card",
        "Category of establishment",
        "Number of employees",
        "Working hours and weekly off details",
        "Certificate of Incorporation (if company)",
        "Rent agreement or ownership proof",
      ]}
      process={[
        { title: "State Act Identification", desc: "Identify the applicable state Shops & Establishments Act for your business location." },
        { title: "Document Preparation", desc: "Gather all required documents including address proof and owner identity." },
        { title: "Online/Offline Application", desc: "File application through the state labour department portal or physically at the office." },
        { title: "Inspector Verification", desc: "Labour inspector may verify the premises in certain states." },
        { title: "Registration Certificate", desc: "Receive Shop and Establishment Registration Certificate valid for 1–5 years." },
        { title: "Display & Renewal", desc: "Display the certificate at the establishment and renew before expiry." },
      ]}
      faqs={[
        { question: "Is Shop and Establishment registration mandatory?", answer: "Yes, it is mandatory for all shops, offices, commercial establishments, restaurants, and hotels within 30 days of commencing business." },
        { question: "Is it the same across all states?", answer: "No, each state has its own Shops and Establishments Act with different fees and procedures. Delhi, Maharashtra, Karnataka, etc. have separate acts." },
        { question: "Do home-based businesses need this registration?", answer: "Generally, no. Home-based businesses not open to the public may not require Shop & Establishment registration, but it is advisable to verify with your state authorities." },
        { question: "What documents can be verified using this certificate?", answer: "Shop & Establishment certificate is accepted as address proof for bank accounts, trade licenses, and other government registrations." },
        { question: "What is the penalty for not registering?", answer: "Operating without registration can attract fines ranging from ₹100 to ₹2,000 depending on the state, along with prosecution." },
      ]}
    />
  );
}
