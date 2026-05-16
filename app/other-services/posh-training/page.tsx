import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POSH Training – Workplace Sexual Harassment Prevention",
  description: "Professional POSH training and awareness programs for employees and ICC members under the Sexual Harassment of Women at Workplace Act, 2013.",
};

export default function POSHTrainingPage() {
  return (
    <ServicePageTemplate
      title="POSH Training"
      subtitle="Mandatory workplace sensitivity training and ICC member education under the POSH Act"
      description="The POSH Act, 2013 mandates employers to organize regular awareness programs and sensitization sessions to prevent sexual harassment at the workplace. Effective POSH training creates a safe work environment, empowers employees to recognize and report harassment, and educates ICC members on handling complaints. ComplyBridge provides certified POSH training programs — online and offline — customized for your organization."
      category="Other Services"
      categoryHref="/other-services"
      price="₹9,999 onwards"
      govtFee="NIL"
      timeframe="Scheduled as per requirement"
      keyBenefits={[
        "Mandatory under Section 19 of the POSH Act",
        "Creates psychologically safe workplace",
        "Empowers employees to identify and report harassment",
        "Trains ICC members on complaint handling procedures",
        "Reduces organizational liability and reputational risk",
        "Customized for your industry and workforce",
        "Certified trainer-led sessions",
        "Available online, offline, and hybrid formats",
      ]}
      documents={[
        "Company details and employee count",
        "Existing POSH Policy document (if any)",
        "ICC constitution details",
        "Preferred training format (online/offline/hybrid)",
        "Preferred language for training",
        "Specific industry/workplace requirements",
        "Previous training records (if any)",
      ]}
      process={[
        { title: "Need Assessment", desc: "Understand your organizational structure, existing policies, and specific training needs." },
        { title: "Training Module Design", desc: "Customize the training content for your industry, culture, and employee demographics." },
        { title: "ICC Member Training", desc: "Conduct specialized training for ICC chairperson and members on complaint handling procedures." },
        { title: "Employee Awareness Session", desc: "Conduct interactive awareness sessions for all employees on POSH Act provisions and reporting mechanisms." },
        { title: "Certificate Issuance", desc: "Provide attendance certificates to all participants." },
        { title: "Training Report", desc: "Provide a comprehensive training completion report for your annual POSH filing." },
      ]}
      faqs={[
        { question: "How often should POSH training be conducted?", answer: "The POSH Act requires regular sensitization programs. Best practice is to conduct training annually for all employees and quarterly for ICC members." },
        { question: "Is online POSH training valid?", answer: "Yes, online POSH training is valid under the POSH Act, especially post-COVID guidelines. We provide interactive online sessions with certificates." },
        { question: "Who should attend POSH training?", answer: "All employees regardless of designation, temporary, contractual, and third-party workers, as well as all ICC members must participate in POSH training." },
        { question: "Can POSH training be conducted in regional languages?", answer: "Yes, ComplyBridge offers POSH training in Hindi, Tamil, Telugu, Kannada, Bengali, and other regional languages on request." },
        { question: "What topics are covered in POSH training?", answer: "Topics include: definition of sexual harassment, POSH Act provisions, ICC role and procedure, complaint filing process, dos and don'ts, case studies, and bystander intervention." },
      ]}
    />
  );
}
