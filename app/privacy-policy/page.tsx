import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – ComplyBridge",
  description: "Read ComplyBridge's privacy policy to understand how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us when you:
    
• Fill out our contact or enquiry forms (name, email, phone number, and service interest)
• Use our services (business details, PAN, Aadhar, and other documents required for compliance services)
• Communicate with us via email, phone, or other channels
• Subscribe to our newsletter or blog

We may also collect certain information automatically when you visit our website, including your IP address, browser type, operating system, and pages visited, through standard web server logs and analytics tools.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Provide, maintain, and improve our compliance and legal services
• Process service requests and communicate with you about your requirements
• Send you important updates about your filings, deadlines, and compliance obligations
• Respond to your queries and provide customer support
• Send marketing communications (only with your consent)
• Comply with our legal obligations as a professional services firm
• Prevent fraud and ensure the security of our services`,
  },
  {
    title: "3. Information Sharing and Disclosure",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:

• With government portals and authorities (MCA, Income Tax Department, GST portal, etc.) as required to provide our services
• With our professional associates (CAs, CSs, lawyers) who assist in service delivery, bound by confidentiality agreements
• With technology service providers who assist our operations (email, cloud storage), under data processing agreements
• As required by law, court order, or legal process
• To protect the rights, property, or safety of ComplyBridge, our clients, or the public`,
  },
  {
    title: "4. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• SSL/TLS encryption for all data transmitted through our website
• Secure storage of documents with access controls
• Regular security assessments and updates
• Employee training on data privacy and confidentiality

However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.`,
  },
  {
    title: "5. Data Retention",
    content: `We retain your personal information for as long as necessary to:

• Provide our services to you
• Comply with legal, regulatory, and professional obligations (including income tax records, company records, etc., which must be retained for specified periods under Indian law)
• Resolve disputes and enforce our agreements

For clients, we typically retain records for 7 years from the date of service completion, in compliance with professional standards and legal requirements. For non-clients, contact information is retained for up to 2 years unless you request deletion.`,
  },
  {
    title: "6. Your Rights",
    content: `Subject to applicable law, you may have the following rights regarding your personal information:

• Access: Request a copy of personal information we hold about you
• Correction: Request correction of inaccurate or incomplete information
• Deletion: Request deletion of your personal information (subject to legal retention obligations)
• Withdrawal of Consent: Withdraw consent for marketing communications at any time
• Portability: Request transfer of your data in a structured format

To exercise these rights, please contact us at info@complybridge.in with the subject line "Privacy Request".`,
  },
  {
    title: "7. Cookies",
    content: `Our website uses cookies to enhance your browsing experience. Cookies are small text files placed on your device. We use:

• Essential cookies: Required for the website to function properly
• Analytics cookies: To understand how visitors use our website (Google Analytics)
• Preference cookies: To remember your settings and preferences

You can control cookies through your browser settings. Disabling cookies may affect certain features of our website.`,
  },
  {
    title: "8. Third-Party Links",
    content: `Our website may contain links to third-party websites, government portals (MCA, Income Tax, GST), or regulatory bodies. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.`,
  },
  {
    title: "9. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or services. We will notify you of material changes by:

• Posting the updated policy on our website with a revised "Last Updated" date
• Sending you an email notification (for significant changes affecting your rights)

Your continued use of our services after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Privacy Officer:

ComplyBridge
I-79 Basement, Lajpat Nagar-2, New Delhi – 110024, India
Email: info@complybridge.in
Phone: 9310396871

We will respond to your inquiry within 30 working days.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-300">Last Updated: May 15, 2026</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 text-base leading-relaxed mb-8 p-5 bg-green-50 border-l-4 border-green-500 rounded-r-xl">
              At ComplyBridge, we are committed to protecting your privacy and handling your personal information with the utmost care and professionalism. This Privacy Policy explains how we collect, use, share, and protect information when you use our services or visit our website at complybridge.in.
            </p>
            {sections.map(({ title, content }) => (
              <div key={title} className="mb-8">
                <h2 className="text-xl font-bold text-[#112740] mb-4">{title}</h2>
                <div className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">{content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
