import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLP Registration in India",
  description: "Register your Limited Liability Partnership (LLP) in India with ease. Expert LLP incorporation service with end-to-end support.",
};

export default function LLPRegistrationPage() {
  return (
    <ServicePageTemplate
      title="LLP Registration"
      subtitle="Register your Limited Liability Partnership with flexible structure and limited liability"
      description="A Limited Liability Partnership (LLP) combines the flexibility of a partnership firm with the limited liability benefits of a company. It is ideal for professionals, consultants, and small businesses that want legal recognition without complex corporate compliances. Our team ensures smooth LLP registration with the Ministry of Corporate Affairs."
      category="Registration / Conversion"
      categoryHref="/registration"
      price="₹4,999 onwards"
      govtFee="Included"
      timeframe="10–15 Working Days"
      keyBenefits={[
        "Limited liability for all partners",
        "Flexible profit-sharing and management structure",
        "Lower compliance burden compared to a company",
        "Separate legal entity with perpetual existence",
        "No minimum capital requirement",
        "Partners protected from personal liability",
        "Ideal for professional firms (CA, lawyers, etc.)",
        "Lower registration and maintenance cost",
      ]}
      documents={[
        "PAN Card of all Partners",
        "Aadhar Card / Voter ID of Partners",
        "Passport-size photographs",
        "Proof of Registered Office",
        "No Objection Certificate from property owner",
        "Digital Signature Certificate (DSC)",
        "DPIN (Designated Partner Identification Number)",
        "LLP Agreement (drafted by our experts)",
        "Bank statement of Partners",
      ]}
      process={[
        { title: "Obtain DSC & DPIN", desc: "Designated Partners must obtain Digital Signature Certificates and Designated Partner Identification Numbers." },
        { title: "Name Reservation", desc: "Apply for LLP name reservation through RUN-LLP form on the MCA portal." },
        { title: "Draft LLP Agreement", desc: "Prepare the LLP Agreement defining roles, profit sharing, and management of the LLP." },
        { title: "File FiLLiP Form", desc: "Submit Form FiLLiP (Form for Incorporation of LLP) with all required documents to MCA." },
        { title: "Certificate of Incorporation", desc: "MCA issues the Certificate of Incorporation with LLPIN (LLP Identification Number)." },
        { title: "File LLP Agreement", desc: "File the finalized LLP Agreement in Form 3 within 30 days of incorporation." },
      ]}
      faqs={[
        { question: "What is the minimum number of partners required for LLP?", answer: "A minimum of 2 designated partners are required for LLP registration, with no maximum limit." },
        { question: "Can a company be a partner in an LLP?", answer: "Yes, a body corporate can be a partner in an LLP, but at least two individuals must be designated partners." },
        { question: "Is audit mandatory for LLP?", answer: "Audit is mandatory only if the LLP's annual turnover exceeds ₹40 lakhs or contribution exceeds ₹25 lakhs." },
        { question: "What is DPIN?", answer: "DPIN (Designated Partner Identification Number) is a unique identification number allotted to each designated partner of an LLP." },
        { question: "Can an LLP be converted to a company?", answer: "Yes, an LLP can be converted into a Private Limited Company under the Companies Act, 2013 following specified procedures." },
      ]}
    />
  );
}
