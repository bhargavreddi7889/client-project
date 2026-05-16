import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Registration in India",
  description: "Register your Private Limited Company, OPC, or Public Limited Company in India with expert guidance. Fast, hassle-free company incorporation service.",
};

export default function CompanyRegistrationPage() {
  return (
    <ServicePageTemplate
      title="Company Registration"
      subtitle="Incorporate your business as a Private Limited, OPC, or Public Limited Company"
      description="Company registration in India is a streamlined process governed by the Companies Act, 2013. Whether you are a startup or an established business looking to formalize, incorporating a company gives you credibility, limited liability protection, and access to funding. Our experts handle the entire process end-to-end, from DIN/DSC to Certificate of Incorporation."
      category="Registration / Conversion"
      categoryHref="/registration"
      price="₹6,999 onwards"
      govtFee="Included"
      timeframe="7–10 Working Days"
      keyBenefits={[
        "Limited liability protection for shareholders",
        "Separate legal identity from promoters",
        "Easy access to bank loans and funding",
        "Perpetual existence — unaffected by ownership change",
        "Credibility with clients and vendors",
        "Tax benefits and deductions for companies",
        "Ability to raise equity capital from investors",
        "Protection of personal assets from business liabilities",
      ]}
      documents={[
        "PAN Card of all Directors",
        "Aadhar Card / Passport of Directors",
        "Passport-size photographs of Directors",
        "Proof of Registered Office (Utility Bill + NOC)",
        "Digital Signature Certificate (DSC)",
        "Director Identification Number (DIN)",
        "Memorandum of Association (MoA)",
        "Articles of Association (AoA)",
        "Board Resolution (for existing companies)",
        "Bank statement (last 2 months)",
      ]}
      process={[
        { title: "DIN & DSC Application", desc: "Obtain Director Identification Number and Digital Signature Certificate for all proposed directors." },
        { title: "Name Reservation", desc: "File RUN (Reserve Unique Name) application to reserve your company name on MCA portal." },
        { title: "Drafting MoA & AoA", desc: "Prepare the Memorandum and Articles of Association defining company's objectives and rules." },
        { title: "SPICe+ Form Filing", desc: "File the integrated form SPICe+ for company incorporation along with all required documents." },
        { title: "Certificate of Incorporation", desc: "Receive the Certificate of Incorporation (COI) from MCA with CIN, PAN, and TAN." },
        { title: "Bank Account Opening", desc: "Assist in opening a current bank account using the Certificate of Incorporation." },
      ]}
      faqs={[
        { question: "What is the minimum capital required to register a company?", answer: "There is no minimum paid-up capital requirement for a Private Limited Company in India as of the Companies Amendment Act." },
        { question: "How long does company registration take?", answer: "Typically 7–10 working days after submission of all documents, subject to MCA processing times." },
        { question: "Can an NRI or Foreign National be a director?", answer: "Yes, NRIs and foreign nationals can be directors, but at least one director must be a resident Indian." },
        { question: "What is the difference between Private Limited and OPC?", answer: "An OPC (One Person Company) has a single promoter-director, while a Private Limited Company requires a minimum of 2 directors and 2 shareholders." },
        { question: "Is GST registration mandatory after company registration?", answer: "GST registration is mandatory if your annual turnover exceeds ₹40 lakhs (₹20 lakhs for service providers)." },
      ]}
    />
  );
}
