import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions – ComplyBridge",
  description: "Read ComplyBridge's terms and conditions governing the use of our compliance and legal services.",
};

const sections = [
  { title: "1. Acceptance of Terms", content: `By accessing our website at complybridge.in or using any of our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. These terms apply to all users, visitors, and clients of ComplyBridge.` },
  { title: "2. Services", content: `ComplyBridge provides professional compliance, legal registration, licensing, and tax filing services in India. Our services include but are not limited to company registration, GST registration, trademark registration, ITR filing, TDS filing, ROC compliance, and various business licenses.\n\nWe act as professional consultants and facilitators. Government portals, departments, and authorities have sole discretion over the approval and processing of applications. ComplyBridge does not guarantee specific timelines or outcomes that depend on government decisions.` },
  { title: "3. Client Obligations", content: `As a client, you agree to:\n\n• Provide accurate, complete, and truthful information and documents\n• Inform us promptly of any changes in your information or circumstances\n• Review and approve all documents and applications before submission\n• Cooperate with our team in a timely manner\n• Pay agreed fees within the stipulated timeframe\n• Not use our services for any unlawful, fraudulent, or unauthorized purposes\n\nYou are solely responsible for the accuracy of information provided. ComplyBridge is not liable for errors arising from incorrect or incomplete information provided by clients.` },
  { title: "4. Fees and Payment", content: `Our fees are clearly stated at the time of engagement. Unless otherwise agreed:\n\n• All fees are in Indian Rupees (INR) and inclusive of applicable taxes\n• Government fees, statutory fees, and out-of-pocket expenses are charged separately at actuals\n• Payment is typically required in advance or as per the agreed milestone schedule\n• No refund is payable once work has commenced unless we fail to deliver the agreed service\n• Late payment may result in suspension of services` },
  { title: "5. Confidentiality", content: `We maintain strict confidentiality of all client information and documents. Our team members are bound by professional confidentiality obligations. We will not disclose your information to third parties except as required for service delivery or as mandated by law.\n\nYou also agree to maintain confidentiality of our proprietary processes, templates, and internal tools.` },
  { title: "6. Intellectual Property", content: `All content on this website — including text, graphics, logos, templates, and software — is the property of ComplyBridge and protected by Indian copyright laws. You may not reproduce, distribute, or create derivative works without our prior written consent.\n\nDocuments drafted by ComplyBridge for your specific use (e.g., MoA, Trust Deed, LLP Agreement) are for your exclusive use upon payment of fees.` },
  { title: "7. Limitation of Liability", content: `ComplyBridge's liability for any claim arising from our services shall be limited to the fees paid by you for the specific service giving rise to the claim.\n\nWe are not liable for:\n• Delays caused by government processing times or portal downtime\n• Rejection of applications by regulatory authorities\n• Losses arising from client's failure to provide accurate information\n• Force majeure events including government policy changes\n• Indirect, consequential, or punitive damages\n\nNothing in these terms excludes liability for fraud, death, or personal injury caused by our negligence.` },
  { title: "8. Dispute Resolution", content: `Any disputes arising from the use of our services shall be resolved through:\n\n1. Good faith negotiation between the parties\n2. If unresolved within 30 days, mediation by a mutually agreed mediator\n3. If mediation fails, arbitration under the Arbitration and Conciliation Act, 1996, seated in New Delhi\n\nThese terms are governed by the laws of India. Courts in New Delhi shall have exclusive jurisdiction.` },
  { title: "9. Modifications", content: `ComplyBridge reserves the right to modify these Terms and Conditions at any time. We will notify existing clients of material changes. Continued use of our services after such notification constitutes acceptance of the revised terms.` },
  { title: "10. Contact", content: `For any questions about these Terms and Conditions:\n\nComplyBridge\nI-79 Basement, Lajpat Nagar-2, New Delhi – 110024\nEmail: info@complybridge.in\nPhone: 9310396871` },
];

export default function TermsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Terms &amp; Conditions</h1>
          <p className="text-gray-300">Last Updated: May 15, 2026</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 text-base leading-relaxed mb-8 p-5 bg-blue-50 border-l-4 border-[#112740] rounded-r-xl">
            Please read these Terms and Conditions carefully before using ComplyBridge services. These terms constitute a legally binding agreement between you and ComplyBridge.
          </p>
          {sections.map(({ title, content }) => (
            <div key={title} className="mb-8">
              <h2 className="text-xl font-bold text-[#112740] mb-4">{title}</h2>
              <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">{content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
