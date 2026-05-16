import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSME Registration (Udyam Registration)",
  description: "Register your Micro, Small, or Medium Enterprise under Udyam Registration to access government schemes, subsidies, and priority sector lending.",
};

export default function MSMEPage() {
  return (
    <ServicePageTemplate
      title="MSME Registration"
      subtitle="Register as a Micro, Small, or Medium Enterprise and unlock government benefits"
      description="MSME (Micro, Small and Medium Enterprise) registration, now called Udyam Registration, is a government-mandated process that recognizes your business as an MSME. It is completely online, free of cost, and based on self-declaration. Registration opens doors to subsidized loans, priority sector lending, government tenders, and protection against delayed payments."
      category="License / Approval"
      categoryHref="/license"
      price="₹999 onwards"
      govtFee="NIL (Free)"
      timeframe="1–2 Working Days"
      keyBenefits={[
        "Access to priority sector lending at lower interest rates",
        "Collateral-free loans under CGTMSE scheme",
        "50% subsidy on patent registration fees",
        "Eligibility for government tenders reserved for MSMEs",
        "Protection from delayed payments under MSME Act",
        "1% interest subvention on fresh/incremental loans",
        "ISO certification cost reimbursement",
        "Reduced electricity tariffs in several states",
      ]}
      documents={[
        "Aadhar Card of proprietor/managing partner/director",
        "PAN Card of business entity",
        "Business name and type",
        "Bank account number and IFSC",
        "NIC code for main business activity",
        "Investment and turnover details",
        "GST Number (if applicable)",
      ]}
      process={[
        { title: "Visit Udyam Portal", desc: "Go to udyamregistration.gov.in – the official MSME registration portal." },
        { title: "Aadhar Verification", desc: "Enter Aadhar number and verify via OTP sent to the registered mobile." },
        { title: "Fill Business Details", desc: "Enter details like business name, type, PAN, bank details, and NIC code." },
        { title: "Submit Application", desc: "Submit the self-declaration form. No documents need to be uploaded." },
        { title: "Udyam Certificate", desc: "Receive the Udyam Registration Certificate with unique Udyam Registration Number (URN)." },
      ]}
      faqs={[
        { question: "Is MSME registration mandatory?", answer: "No, MSME registration is voluntary. However, it is highly recommended to access government benefits, schemes, and priority lending." },
        { question: "What are the turnover limits for MSME classification?", answer: "Micro: ≤₹5 crore turnover; Small: ₹5–50 crore; Medium: ₹50–250 crore turnover. Investment limits also apply." },
        { question: "Can a service sector business register as MSME?", answer: "Yes, both manufacturing and service sector businesses can register under Udyam." },
        { question: "Is there a fee for Udyam registration?", answer: "No, Udyam Registration is completely free on the official portal. Third-party charges are only for professional assistance." },
        { question: "Can I update my MSME certificate?", answer: "Yes, you can update your Udyam Registration certificate online with revised turnover and investment details." },
      ]}
    />
  );
}
