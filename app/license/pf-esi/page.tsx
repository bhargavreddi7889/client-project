import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PF / ESI Registration",
  description: "Register for Provident Fund (EPF) and Employee State Insurance (ESI) for your employees. Expert compliance support across India.",
};

export default function PFESIPage() {
  return (
    <ServicePageTemplate
      title="PF / ESI Registration"
      subtitle="Mandatory employee welfare registrations for compliant businesses"
      description="Provident Fund (PF) registration under EPFO and Employee State Insurance (ESI) registration under ESIC are mandatory for businesses employing workers above the threshold limits. PF is required for establishments with 20+ employees; ESI for those with 10+ employees (in states with lower threshold). ComplyBridge handles registration, monthly return filing, and ongoing compliance for both."
      category="License / Approval"
      categoryHref="/license"
      price="₹2,499 onwards"
      govtFee="NIL"
      timeframe="3–7 Working Days"
      keyBenefits={[
        "Mandatory compliance for eligible employers",
        "Employee retirement savings and social security",
        "Medical benefits for employees under ESI",
        "Maternity benefits and disability coverage",
        "Avoid heavy penalties and legal action",
        "Eligibility for government contracts",
        "Build employer brand and retain talent",
        "EPFO UAN generation for all employees",
      ]}
      documents={[
        "PAN Card of the establishment",
        "Certificate of Incorporation / Partnership Deed",
        "GST Registration Certificate",
        "Bank account details of the establishment",
        "List of employees with salary details",
        "Date of commencement of business",
        "Address proof of the establishment",
        "Aadhar and PAN of proprietor/directors",
      ]}
      process={[
        { title: "Eligibility Assessment", desc: "Verify if your establishment meets the threshold (20+ employees for PF, 10+ for ESI)." },
        { title: "Document Collection", desc: "Gather establishment details, employee list, and banking information." },
        { title: "EPFO/ESIC Registration", desc: "File online registration on the EPFO Unified Portal and ESIC Portal." },
        { title: "Code Allotment", desc: "Receive PF Establishment Code and ESI Code Number." },
        { title: "UAN Generation", desc: "Generate Universal Account Numbers (UANs) for all eligible employees." },
        { title: "Monthly Compliance", desc: "File monthly ECR (Electronic Challan-cum-Return) for PF and ESI contributions." },
      ]}
      faqs={[
        { question: "When does PF registration become mandatory?", answer: "PF registration is mandatory when an establishment has 20 or more employees. Establishments with fewer employees can voluntarily register." },
        { question: "What is the PF contribution rate?", answer: "Both employer and employee contribute 12% of the employee's basic salary + DA to PF. The employer also contributes to EPS and EDLI." },
        { question: "When is ESI registration mandatory?", answer: "ESI registration is mandatory for establishments with 10 or more employees where employees earn ≤₹21,000/month." },
        { question: "What is the ESI contribution rate?", answer: "Employer contributes 3.25% and employee contributes 0.75% of monthly wages as ESI contribution." },
        { question: "Can I withdraw PF before retirement?", answer: "Yes, partial PF withdrawal is allowed for specific purposes like medical emergency, home purchase, education, and marriage after specified service periods." },
      ]}
    />
  );
}
