import PackagePageTemplate from "@/components/PackagePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLP Incorporation Package",
  description: "Complete LLP incorporation package including DPIN, name reservation, LLP agreement, certificate of incorporation, PAN, and TAN.",
};

export default function LLPIncorporationPackagePage() {
  return (
    <PackagePageTemplate
      title="LLP Incorporation Package"
      subtitle="Everything you need to incorporate your LLP from scratch"
      description="Our LLP Incorporation Package covers every step of the LLP registration process — from DPIN and DSC application to drafting the LLP Agreement and obtaining the Certificate of Incorporation. You get a fully registered LLP with PAN, TAN, and bank account opening assistance, all at a transparent flat fee."
      price="₹8,999"
      originalPrice="₹14,000"
      whatsIncluded={[
        "DSC for 2 designated partners",
        "DPIN for 2 designated partners",
        "LLP Name Reservation (RUN-LLP)",
        "LLP Agreement Drafting",
        "FiLLiP Form Filing",
        "Certificate of Incorporation",
        "PAN & TAN for LLP",
        "Bank Account Opening Guidance",
      ]}
      includes={[
        { category: "Pre-Incorporation", items: ["DSC for 2 Partners", "DPIN Application", "LLP Name Search & Reservation", "Legal Name Availability Check"] },
        { category: "Incorporation Filing", items: ["FiLLiP Form Filing", "LLP Agreement Drafting", "MCA Portal Submission", "Stamp Duty Assistance"] },
        { category: "Post-Incorporation", items: ["Certificate of Incorporation", "PAN Card Application", "TAN Application", "Bank Account Assistance", "GST Registration Guidance"] },
      ]}
      process={[
        { title: "DSC & DPIN", desc: "Obtain Digital Signature Certificates and DPIN for designated partners." },
        { title: "Name Search", desc: "Search and reserve the preferred LLP name on MCA portal." },
        { title: "Draft Agreement", desc: "Draft comprehensive LLP Agreement covering profit sharing, management, and exit provisions." },
        { title: "File FiLLiP", desc: "File Form FiLLiP with all documents on the MCA portal." },
        { title: "Certificate", desc: "Receive Certificate of Incorporation with LLPIN." },
        { title: "Post-Incorporation", desc: "Assist with PAN, TAN, bank account, and GST registration." },
      ]}
      faqs={[
        { question: "What is included in the LLP Agreement?", answer: "The LLP Agreement includes profit sharing ratio, designated partner responsibilities, capital contribution, decision-making process, admission/retirement of partners, and dispute resolution clauses." },
        { question: "Can I change the LLP name after incorporation?", answer: "Yes, you can change the LLP name after incorporation by filing Form 5 with MCA after obtaining partner consent and following the required procedure." },
        { question: "Is a registered office required for LLP?", answer: "Yes, a registered office address is mandatory. It can be a residential address or commercial premises with proper NOC from the owner." },
        { question: "What happens if we need more than 2 partners?", answer: "The package covers 2 designated partners. Additional partners can be added at nominal extra charges." },
        { question: "How quickly will the LLP be incorporated?", answer: "Typically 10–15 working days from document submission, subject to MCA processing time." },
      ]}
    />
  );
}
