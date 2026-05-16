import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Independent Director Appointment",
  description: "Expert guidance for Independent Director appointment, declaration, online databank registration, and compliance under the Companies Act, 2013.",
};

export default function IndependentDirectorPage() {
  return (
    <ServicePageTemplate
      title="Independent Director"
      subtitle="Appointment, compliance, and databank registration for Independent Directors"
      description="The Companies Act, 2013 mandates listed companies and certain classes of public companies to appoint Independent Directors (IDs). Independent Directors must be registered in the MCA databank, pass an online proficiency test, and file annual declarations. ComplyBridge assists companies in identifying suitable IDs, handling their appointment formalities, and ensuring ongoing compliance under Schedule IV and Section 149."
      category="Other Services"
      categoryHref="/other-services"
      price="₹4,999 onwards"
      govtFee="NIL"
      timeframe="7–15 Working Days"
      keyBenefits={[
        "Mandatory compliance for listed and specified public companies",
        "Strengthens corporate governance and board independence",
        "Enhanced investor and stakeholder confidence",
        "Access to expert guidance on MCA databank registration",
        "Avoid penalties for non-appointment under Companies Act",
        "ID proficiency test assistance and preparation",
        "Annual declaration and board meeting support",
        "Conflict of interest review and compliance check",
      ]}
      documents={[
        "PAN Card and DIN of the proposed Independent Director",
        "Educational and professional qualification certificates",
        "Experience details and industry background",
        "Declaration under Section 149(6) of Companies Act",
        "Non-disqualification declaration",
        "Board resolution for ID appointment",
        "Shareholder resolution (where required)",
        "Letter of appointment with terms",
      ]}
      process={[
        { title: "Eligibility Verification", desc: "Check eligibility criteria under Section 149 and ensure no disqualifications apply." },
        { title: "Databank Registration", desc: "Register the proposed ID on MCA's Independent Director Databank portal (iica.nic.in)." },
        { title: "Proficiency Test", desc: "The ID must pass the online proficiency test within 2 years of registration on the databank." },
        { title: "Board Appointment", desc: "Pass board resolution appointing the Independent Director for a tenure of up to 5 years." },
        { title: "Shareholder Approval", desc: "Obtain shareholder approval in general meeting for ID appointment." },
        { title: "ROC Filing", desc: "File Form DIR-12 with MCA to register the ID's appointment on the company's master data." },
      ]}
      faqs={[
        { question: "Which companies must appoint Independent Directors?", answer: "Listed companies (minimum 1/3 of board as IDs), public companies with paid-up capital ≥₹10 crore, turnover ≥₹100 crore, or outstanding loans/deposits ≥₹50 crore." },
        { question: "What is the MCA Independent Director Databank?", answer: "It is a mandatory registry maintained by IICA (Indian Institute of Corporate Affairs) where all Independent Directors must register. Registration and annual renewal are mandatory." },
        { question: "Is the proficiency test mandatory for all IDs?", answer: "Yes, all Independent Directors must pass the online proficiency test within 2 years of inclusion in the databank, except those with 10+ years of board experience." },
        { question: "What is the tenure of an Independent Director?", answer: "An Independent Director can serve for 2 consecutive terms of up to 5 years each, followed by a 3-year cooling-off period." },
        { question: "What is Schedule IV under the Companies Act?", answer: "Schedule IV (Code for Independent Directors) outlines the role, responsibilities, duties, and manner of appointment/reappointment of IDs." },
      ]}
    />
  );
}
