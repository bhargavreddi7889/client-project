import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POSH Annual Report Filing",
  description: "POSH compliance annual report filing for businesses under the Prevention of Sexual Harassment Act. Expert support across India.",
};

export default function POSHFilingPage() {
  return (
    <ServicePageTemplate
      title="POSH Filing"
      subtitle="Annual POSH compliance report filing under the Sexual Harassment of Women at Workplace Act"
      description="The Prevention, Prohibition and Redressal of Sexual Harassment of Women at Workplace Act, 2013 (POSH Act) mandates every employer with 10 or more employees to constitute an Internal Complaints Committee (ICC), conduct awareness programs, and file an Annual Report with the District Officer. Non-compliance attracts penalties up to ₹50,000. ComplyBridge ensures complete POSH compliance including ICC formation, policy drafting, training, and annual report filing."
      category="Filing"
      categoryHref="/filing"
      price="₹2,499 onwards"
      govtFee="NIL"
      timeframe="3–5 Working Days"
      keyBenefits={[
        "Avoid penalties under POSH Act (up to ₹50,000)",
        "Demonstrate commitment to safe workplace",
        "Protect company from reputational damage",
        "Mandatory for all 10+ employee organizations",
        "District Officer compliance adherence",
        "Employee confidence and trust building",
        "Reduced risk of workplace harassment complaints",
        "Mandatory for IT companies and MNCs",
      ]}
      documents={[
        "ICC Constitution Order/Notification",
        "Number of complaints received during the year",
        "Number of complaints disposed of",
        "Number of cases pending for more than 90 days",
        "Number of workshops and awareness programmes",
        "Nature of action taken on complaints",
        "Employer details and organization information",
        "District Officer contact details",
      ]}
      process={[
        { title: "ICC Formation Verification", desc: "Verify or assist in forming the Internal Complaints Committee with proper composition." },
        { title: "Annual Data Collection", desc: "Collect all required data — complaints received, disposed, pending, and programs conducted." },
        { title: "Annual Report Preparation", desc: "Prepare the POSH Annual Report as per the format prescribed under Rule 14." },
        { title: "Report Submission", desc: "Submit the Annual Report to the District Officer before December 31st each year." },
        { title: "Internal Filing", desc: "Maintain proper records of the filed report and ICC activities for audit purposes." },
        { title: "Next Year Planning", desc: "Plan mandatory awareness programs and ICC meetings for the upcoming year." },
      ]}
      faqs={[
        { question: "Who must comply with the POSH Act?", answer: "Every employer with 10 or more employees in India must comply with the POSH Act by constituting an ICC and filing annual reports." },
        { question: "What is the deadline for POSH Annual Report?", answer: "The POSH Annual Report must be submitted to the District Officer on or before December 31st each year." },
        { question: "What is the penalty for POSH non-compliance?", answer: "First offense: Penalty up to ₹50,000. Repeat offense: Doubled penalty, possible license cancellation, and de-registration." },
        { question: "Who is the external member of the ICC?", answer: "The ICC must include at least one external member from an NGO, association, or a person familiar with issues of sexual harassment." },
        { question: "Is POSH training mandatory?", answer: "Yes, employers must conduct orientation, awareness programs, and sensitization sessions for ICC members and employees regularly." },
      ]}
    />
  );
}
