import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factory License Registration",
  description: "Obtain a Factory License under the Factories Act, 1948 for your manufacturing unit. Expert support for plan approval and registration.",
};

export default function FactoryLicensePage() {
  return (
    <ServicePageTemplate
      title="Factory License"
      subtitle="Mandatory license for all manufacturing and industrial establishments"
      description="A Factory License is mandatory under the Factories Act, 1948 for any premises where manufacturing is carried out with 10 or more workers (with power) or 20+ workers (without power). The license is issued by the Chief Inspector of Factories of the respective state. ComplyBridge assists in plan approval, registration, and annual renewal of factory licenses across all Indian states."
      category="License / Approval"
      categoryHref="/license"
      price="₹4,999 onwards"
      govtFee="As per state schedule"
      timeframe="15–45 Working Days"
      keyBenefits={[
        "Legal authority to operate a manufacturing unit",
        "Compliance with Factories Act and safety standards",
        "Worker protection and safety regulations",
        "Avoid heavy fines and factory closure",
        "Required for industrial power connection",
        "Mandatory for export-oriented units",
        "Access to government manufacturing contracts",
        "Eligibility for MSME and production subsidies",
      ]}
      documents={[
        "Site plan and building plan of the factory",
        "List of machinery with horsepower details",
        "Details of manufacturing process",
        "Certificate of Incorporation / Partnership Deed",
        "PAN Card of the organization",
        "Electricity connection details",
        "NOC from local authority",
        "Ownership/lease deed of the premises",
        "List of workers with their details",
        "Safety measures and fire NOC",
      ]}
      process={[
        { title: "Site Plan Preparation", desc: "Prepare detailed site plan and building layout as per state factory regulations." },
        { title: "Plan Approval", desc: "Submit plans to the Inspector of Factories for approval before commencing construction." },
        { title: "Application Submission", desc: "File the factory registration application with all required documents." },
        { title: "Factory Inspection", desc: "Inspector of Factories inspects the premises for safety and compliance." },
        { title: "License Issuance", desc: "Receive the Factory License/Registration Certificate after successful inspection." },
        { title: "Annual Renewal", desc: "Renew the factory license annually before December 31st each year." },
      ]}
      faqs={[
        { question: "What is the threshold for factory registration?", answer: "Factories using power with 10+ workers and factories without power with 20+ workers must be registered under the Factories Act." },
        { question: "Is factory license state-specific?", answer: "Yes, factory licenses are issued by the respective State's Chief Inspector of Factories. Procedures and fees vary by state." },
        { question: "Can a factory operate without a license?", answer: "No. Operating a factory without a license is an offense under the Factories Act, 1948 and attracts imprisonment up to 2 years and/or fine up to ₹2 lakhs." },
        { question: "Is approval needed before construction of a factory?", answer: "Yes, prior approval from the Inspector of Factories is mandatory for the site, building plans, and machinery installation before commencing construction or starting operations." },
        { question: "What safety standards must be maintained?", answer: "Factories must comply with provisions related to cleanliness, ventilation, lighting, fire safety, working hours, leave, welfare facilities, and dangerous operations as per the Factories Act." },
      ]}
    />
  );
}
