import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drug License Registration",
  description: "Get your Drug License for retail pharmacy, wholesale, or manufacturing under the Drugs and Cosmetics Act. Expert support across India.",
};

export default function DrugLicensePage() {
  return (
    <ServicePageTemplate
      title="Drug License"
      subtitle="Mandatory license for retail, wholesale, or manufacturing of drugs and pharmaceuticals"
      description="A Drug License is mandatory for any entity involved in the manufacture, sale, distribution, or storage of drugs and pharmaceutical products in India, governed by the Drugs and Cosmetics Act, 1940. The Central Drugs Standard Control Organisation (CDSCO) and State Drug Authorities issue different types of licenses. ComplyBridge provides end-to-end support for obtaining the appropriate drug license for your business."
      category="License / Approval"
      categoryHref="/license"
      price="₹3,999 onwards"
      govtFee="As applicable per state"
      timeframe="15–45 Working Days"
      keyBenefits={[
        "Legal authority to sell, stock, and distribute drugs",
        "Compliance with Drugs and Cosmetics Act, 1940",
        "Avoid raids, penalties, and business closure",
        "Mandatory for opening a pharmacy or medical store",
        "Required for importing pharmaceutical products",
        "Access to wholesale drug distribution networks",
        "Eligibility for government pharmaceutical tenders",
        "Consumer confidence in product safety",
      ]}
      documents={[
        "Application Form 19 (retail) or Form 20 (wholesale)",
        "Proof of premises (ownership/rent deed)",
        "Layout plan of the premises",
        "Affidavit by the applicant",
        "Registered pharmacist certificate (for retail)",
        "Copy of qualification of the competent person",
        "List of drugs to be handled",
        "NOC from local authority",
        "PAN and Aadhar of applicant",
        "Refrigeration facility proof (if applicable)",
      ]}
      process={[
        { title: "License Type Identification", desc: "Determine the correct license type — retail pharmacy, wholesale, or manufacturing." },
        { title: "Premises Compliance", desc: "Ensure premises meet the required area, storage, and qualified pharmacist requirements." },
        { title: "Application Filing", desc: "Submit application forms with required documents to the State Drug Licensing Authority." },
        { title: "Premises Inspection", desc: "A drug inspector will inspect your premises for compliance with storage and safety standards." },
        { title: "License Issuance", desc: "Receive Drug License Certificate after successful inspection and verification." },
        { title: "Annual Renewal", desc: "Renew the drug license annually before expiry to maintain compliance." },
      ]}
      faqs={[
        { question: "What types of drug licenses are there?", answer: "Main types include: Form 20 (retail sale), Form 21 (wholesale of drugs), Form 25 (manufacture of drugs other than ASU), and Form 28 (restricted allopathic drugs). " },
        { question: "Is a registered pharmacist required?", answer: "Yes, a retail drug license requires the presence of a registered pharmacist during business hours." },
        { question: "What is the minimum area required for a pharmacy?", answer: "A minimum area of 10 sq. meters is required for retail drug stores; the requirement may vary by state." },
        { question: "Can I sell drugs online with a drug license?", answer: "Online sale of medicines requires additional compliance as per the Ministry of Health guidelines and state-specific rules." },
        { question: "What is the penalty for selling drugs without a license?", answer: "Selling drugs without a license is a criminal offense under the Drugs and Cosmetics Act, attracting imprisonment up to 3 years and/or a fine." },
      ]}
    />
  );
}
