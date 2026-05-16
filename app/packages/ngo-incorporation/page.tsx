import PackagePageTemplate from "@/components/PackagePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "NGO Incorporation Package", description: "Complete NGO registration package including Trust, Society, or Section 8 Company registration with 12A and 80G application." };

export default function NGOIncorporationPackagePage() {
  return (
    <PackagePageTemplate
      title="NGO Incorporation Package"
      subtitle="Complete setup for your Trust, Society, or Section 8 Company"
      description="Our NGO Incorporation Package is a comprehensive solution for social entrepreneurs and philanthropists looking to establish a legal NGO. We handle the structure selection, document drafting, government registration, and post-incorporation compliances including 12A and 80G applications for tax exemption benefits."
      price="₹12,999"
      originalPrice="₹22,000"
      whatsIncluded={["Structure Selection (Trust/Society/Section 8)", "Trust Deed / MoA Drafting", "Registration Filing", "PAN for NGO", "12A Application", "80G Application", "Bank Account Assistance", "Compliance Guidance"]}
      includes={[
        { category: "NGO Setup", items: ["Legal Structure Consultation", "Trust Deed / MoA Drafting", "Object Clause Preparation", "Founding Member Documentation"] },
        { category: "Registration", items: ["Sub-Registrar Filing (Trust/Society)", "MCA Filing (Section 8)", "Government Fees Guidance", "Certificate of Registration"] },
        { category: "Tax Benefits", items: ["12A Registration Application", "80G Certification Application", "PAN Card for NGO", "FCRA Pre-Advisory", "Bank Account Assistance"] },
      ]}
      process={[
        { title: "Structure Selection", desc: "Choose between Trust, Society, or Section 8 Company based on your objectives." },
        { title: "Document Drafting", desc: "Draft Trust Deed, MoA, Rules & Regulations, or Articles of Association." },
        { title: "Registration Filing", desc: "File with Sub-Registrar or MCA based on chosen structure." },
        { title: "Certificate Receipt", desc: "Obtain registration certificate from competent authority." },
        { title: "12A & 80G Application", desc: "File applications for income tax exemption and donor deduction benefits." },
        { title: "Bank Account", desc: "Assist in opening NGO bank account with required documents." },
      ]}
      faqs={[
        { question: "Which NGO structure is best?", answer: "Section 8 Company is best for credibility, CSR funds, and FCRA. Trust is simplest to register. Society works well for member-based organizations. We advise based on your goals." },
        { question: "How long does 12A and 80G take?", answer: "The Income Tax department processes 12A and 80G applications within 1–3 months subject to officer review." },
        { question: "Can we receive foreign donations?", answer: "For foreign donations, FCRA registration is required separately after 3 years of NGO operation. We provide advisory support for FCRA." },
        { question: "Does the package include the government fees?", answer: "Government fees for Trust/Society vary by state (₹100–₹1,000). Section 8 Company fees are nominal. These are estimated separately based on your state." },
        { question: "What activities can the NGO carry out?", answer: "The NGO can carry out charitable, educational, health, environmental, social welfare, and religious activities as defined in its Trust Deed or MoA." },
      ]}
    />
  );
}
