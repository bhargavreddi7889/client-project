import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NGO Registration in India – Trust, Society, Section 8",
  description: "Register your NGO as a Trust, Society, or Section 8 Company in India. Complete NGO registration support with FCRA and 12A/80G guidance.",
};

export default function NGORegistrationPage() {
  return (
    <ServicePageTemplate
      title="NGO Registration"
      subtitle="Register your Trust, Society, or Section 8 Company for social impact"
      description="Non-Governmental Organizations (NGOs) can be registered in India as a Trust (under Trust Act), Society (under Societies Registration Act, 1860), or Section 8 Company (under Companies Act, 2013). Each has unique advantages. ComplyBridge helps you choose the right structure and complete all formalities including 12A and 80G registration for tax exemption and donor benefits."
      category="Registration / Conversion"
      categoryHref="/registration"
      price="₹7,999 onwards"
      govtFee="As applicable"
      timeframe="15–30 Working Days"
      keyBenefits={[
        "Tax exemption under Section 12A of Income Tax Act",
        "80G certification for donor tax deductions",
        "FCRA registration eligibility for foreign funding",
        "Government grants and scheme access",
        "Credibility for fundraising and CSR funds",
        "Legal recognition and separate identity",
        "Lower tax liability with proper structuring",
        "Access to CSR funding from corporates",
      ]}
      documents={[
        "PAN Card of all Trustees/Members/Directors",
        "Aadhar Card of all Trustees/Members",
        "Passport-size photographs",
        "Proof of Registered Office",
        "Trust Deed / MoA & Rules (for Society) / MoA & AoA (for Section 8)",
        "List of Governing Body members",
        "No Objection Certificate from property owner",
        "Activity plan and objectives of the NGO",
        "Bank account details of members",
      ]}
      process={[
        { title: "Choose Structure", desc: "Decide between Trust, Society, or Section 8 Company based on your objectives and state of operation." },
        { title: "Draft Documents", desc: "Prepare Trust Deed, MoA, Rules & Regulations, or Articles of Association as applicable." },
        { title: "Registration Filing", desc: "File with respective authority — Sub-Registrar (Trust/Society) or MCA (Section 8)." },
        { title: "Certificate of Registration", desc: "Receive the registration certificate from the competent authority." },
        { title: "12A & 80G Application", desc: "Apply for income tax exemption under 12A and 80G for tax benefits." },
        { title: "PAN, TAN & Bank Account", desc: "Obtain PAN, TAN for the NGO and open a dedicated bank account." },
      ]}
      faqs={[
        { question: "What is the difference between a Trust, Society, and Section 8 Company?", answer: "A Trust is managed by trustees under a Trust Deed. A Society requires 7+ members and is governed by Societies Act. A Section 8 Company is incorporated under MCA and offers highest credibility for CSR and FCRA funding." },
        { question: "Is 12A registration mandatory for NGOs?", answer: "12A registration is not mandatory but essential for claiming tax exemption on income. Without 12A, the NGO pays regular income tax." },
        { question: "What is 80G registration?", answer: "80G registration allows donors to claim tax deductions on their donations to your NGO, making it attractive for fundraising." },
        { question: "Can an NGO receive foreign donations?", answer: "Yes, after obtaining FCRA (Foreign Contribution Regulation Act) registration from the Ministry of Home Affairs." },
        { question: "How long does NGO registration take?", answer: "Society and Trust registration can take 15–20 days. Section 8 Company incorporation takes 20–30 working days." },
      ]}
    />
  );
}
