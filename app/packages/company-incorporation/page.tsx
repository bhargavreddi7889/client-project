import PackagePageTemplate from "@/components/PackagePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Company Incorporation Package", description: "Complete Private Limited Company incorporation package including DSC, DIN, name reservation, MoA, AoA, SPICe+ filing, PAN, TAN, and GST." };

export default function CompanyIncorporationPackagePage() {
  return (
    <PackagePageTemplate
      title="Company Incorporation Package"
      subtitle="Start your Private Limited Company with complete legal support"
      description="Our Company Incorporation Package is the complete solution for entrepreneurs looking to incorporate a Private Limited Company in India. We handle everything from DSC and DIN application to SPICe+ filing, drafting MoA and AoA, and obtaining your Certificate of Incorporation — with PAN, TAN, and GST registration included."
      price="₹10,999"
      originalPrice="₹18,000"
      whatsIncluded={["DSC for 2 Directors", "DIN for 2 Directors", "Name Reservation (RUN)", "MoA & AoA Drafting", "SPICe+ Form Filing", "Certificate of Incorporation", "PAN & TAN", "GST Registration"]}
      includes={[
        { category: "Pre-Incorporation", items: ["DSC for 2 Directors", "DIN for 2 Directors", "Company Name Search", "RUN Form Filing", "Name Reservation"] },
        { category: "Incorporation Filing", items: ["MoA Drafting", "AoA Drafting", "SPICe+ Form Preparation", "MCA Portal Filing", "Stamp Duty Guidance"] },
        { category: "Post-Incorporation", items: ["Certificate of Incorporation", "PAN Application", "TAN Application", "GST Registration", "Bank Account Guidance", "First Board Meeting"] },
      ]}
      process={[
        { title: "DSC & DIN", desc: "Obtain Digital Signature Certificates and Director Identification Numbers." },
        { title: "Name Reservation", desc: "File RUN application to reserve your company name." },
        { title: "Draft Documents", desc: "Prepare MoA and AoA defining company objectives and regulations." },
        { title: "SPICe+ Filing", desc: "File integrated SPICe+ form for incorporation, PAN, and TAN." },
        { title: "COI Issuance", desc: "Receive Certificate of Incorporation with CIN, PAN, and TAN." },
        { title: "Post-Incorporation Setup", desc: "GST registration, bank account, and first compliance assistance." },
      ]}
      faqs={[
        { question: "What type of company does this cover?", answer: "This package covers Private Limited Company incorporation. OPC incorporation is also available at a slightly different price." },
        { question: "Are government fees included?", answer: "Yes, standard government (MCA) fees are included in the package price." },
        { question: "Do I need a physical office address?", answer: "Yes, a registered office address is required. It can be residential or commercial premises with owner's NOC." },
        { question: "How many shareholders can a Pvt Ltd have?", answer: "A Private Limited Company can have 2 to 200 shareholders. The company can have up to 15 directors." },
        { question: "Is GST registration included?", answer: "Yes, one GST registration is included in this package at no extra charge." },
      ]}
    />
  );
}
