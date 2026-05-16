import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Tax Registration",
  description: "Register for Professional Tax (PT) as an employer or professional. State-specific expert support across India.",
};

export default function ProfessionalTaxPage() {
  return (
    <ServicePageTemplate
      title="Professional Tax Registration"
      subtitle="Mandatory state tax registration for employers and salaried professionals"
      description="Professional Tax (PT) is a state-level tax levied on income from employment, business, or profession. Employers are required to deduct professional tax from employees' salaries and remit it to the state government. Self-employed professionals like doctors, CAs, and lawyers must also register and pay PT. ComplyBridge handles PT registration and monthly/annual return filing across all applicable Indian states."
      category="License / Approval"
      categoryHref="/license"
      price="₹1,499 onwards"
      govtFee="As per state"
      timeframe="3–7 Working Days"
      keyBenefits={[
        "Avoid penalties for non-deduction of PT",
        "Legal compliance with state tax laws",
        "Mandatory for ESI and PF-registered businesses",
        "Required for labour law compliance",
        "Professional tax is deductible as business expense",
        "Certificate required for government tenders",
        "Avoid interest on delayed payments",
        "Complete compliance management support",
      ]}
      documents={[
        "PAN Card of the business/professional",
        "Certificate of Incorporation / Partnership Deed",
        "Address proof of business",
        "Aadhar Card of proprietor/director",
        "Employee list with salary details",
        "Bank account details",
        "Shop and Establishment Certificate",
        "GST Certificate (if applicable)",
      ]}
      process={[
        { title: "State Applicability Check", desc: "Verify if professional tax is applicable in your state (not all states levy PT)." },
        { title: "Employer Registration", desc: "Register as an employer on the state PT portal to obtain Employer Enrollment Certificate." },
        { title: "Employee Registration", desc: "Obtain Employee Enrollment Certificate for salaried employees." },
        { title: "Deduction from Salaries", desc: "Deduct professional tax from employees' salaries as per state slabs." },
        { title: "Monthly/Quarterly Remittance", desc: "Remit collected PT to the state government treasury within due dates." },
        { title: "Annual Return Filing", desc: "File annual professional tax return as required by the state government." },
      ]}
      faqs={[
        { question: "Which states levy professional tax in India?", answer: "States including Maharashtra, Karnataka, West Bengal, Andhra Pradesh, Telangana, Gujarat, Madhya Pradesh, Assam, Tamil Nadu, Kerala, and Meghalaya levy professional tax." },
        { question: "What is the maximum professional tax?", answer: "The maximum professional tax is ₹2,500 per annum as per the Constitution. The actual amount varies by state and income slab." },
        { question: "Who deducts professional tax?", answer: "Employers deduct PT from employees' salaries and remit it to the state government. Self-employed professionals pay it directly." },
        { question: "Is professional tax deductible from income tax?", answer: "Yes, professional tax paid is fully deductible from gross income for income tax calculation under Section 16(iii) of the Income Tax Act." },
        { question: "When must employers register for PT?", answer: "Employers must register within 30 days of becoming liable to deduct professional tax (i.e., after employing staff)." },
      ]}
    />
  );
}
