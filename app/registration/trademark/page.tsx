import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trademark Registration in India",
  description: "Protect your brand with trademark registration in India. Expert trademark search, filing, and registration support.",
};

export default function TrademarkRegistrationPage() {
  return (
    <ServicePageTemplate
      title="Trademark Registration"
      subtitle="Protect your brand name, logo, and identity with legal trademark protection"
      description="A trademark is a unique identifier — a name, logo, slogan, or symbol — that distinguishes your products or services from others. Registering your trademark provides exclusive legal rights, prevents competitors from using similar marks, and builds long-term brand equity. ComplyBridge offers complete trademark search, filing, and registration services across all 45 trademark classes."
      category="Registration / Conversion"
      categoryHref="/registration"
      price="₹2,999 onwards"
      govtFee="₹4,500 (Individuals) / ₹9,000 (Companies)"
      timeframe="18–24 Months (Full Registration)"
      keyBenefits={[
        "Exclusive legal rights over your brand identity",
        "Protection against imitation and infringement",
        "Use of ® symbol for registered trademark",
        "Basis for registering trademark internationally",
        "Legal remedy against counterfeiters",
        "Adds intangible asset value to your business",
        "Protection for 10 years (renewable)",
        "Priority over later applications for same mark",
      ]}
      documents={[
        "Name of the applicant (individual/company)",
        "PAN Card of applicant",
        "Aadhar Card of applicant",
        "Logo / Brand name in JPEG/PNG format",
        "Description of goods or services",
        "Class of goods/services (trademark class)",
        "MSME certificate (for reduced govt. fee)",
        "Power of Attorney (signed by applicant)",
      ]}
      process={[
        { title: "Trademark Search", desc: "Conduct a comprehensive search on the IP India database to check for similar existing marks." },
        { title: "Class Identification", desc: "Identify the correct trademark class(es) for your goods and services from 45 available classes." },
        { title: "Application Filing", desc: "File the trademark application online on the IP India portal with all required details." },
        { title: "TM Acknowledgement", desc: "Receive TM acknowledgement and application number confirming successful filing." },
        { title: "Examination", desc: "IP India examiner reviews the application and may raise objections within 30 days." },
        { title: "Publication & Registration", desc: "Mark is published in the Trademark Journal. If no opposition is received, trademark is registered." },
      ]}
      faqs={[
        { question: "How long does trademark registration take?", answer: "Full trademark registration takes 18–24 months. However, from the filing date, you get ™ protection and can use the mark legally." },
        { question: "What is the difference between ™ and ®?", answer: "™ indicates a trademark application is filed or mark is in use. ® indicates the trademark is officially registered with IP India." },
        { question: "Can I trademark a logo and name separately?", answer: "Yes, you can file separate trademark applications for your logo and wordmark, providing broader protection." },
        { question: "What happens if my trademark is opposed?", answer: "If opposed, both parties present their case to the Trademark Registry. Our team handles trademark opposition proceedings on your behalf." },
        { question: "How long is a registered trademark valid?", answer: "A registered trademark is valid for 10 years from the date of filing and can be renewed indefinitely for successive 10-year terms." },
      ]}
    />
  );
}
