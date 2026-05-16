import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – ComplyBridge",
  description: "Get in touch with ComplyBridge for a free consultation. Call, email, or visit our office in Lajpat Nagar, New Delhi.",
};

const contactDetails = [
  { icon: Phone, label: "Phone", value: "9149023243", href: "tel:9149023243" },
  { icon: Mail, label: "Email", value: "info@complybridge.in", href: "mailto:info@complybridge.in" },
  { icon: MapPin, label: "Address", value: "I-79 Basement, Lajpat Nagar-2, New Delhi – 110024", href: "#" },
  { icon: Clock, label: "Business Hours", value: "Mon – Sat: 10:00 AM – 7:00 PM", href: "#" },
];

export default function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
          <p className="text-gray-300 max-w-xl mx-auto">Have a compliance question? Need a free consultation? Our expert team is ready to help you navigate any legal or regulatory challenge.</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold text-[#112740] mb-6">Contact Information</h2>
              <div className="space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{label}</p>
                      {href !== "#" ? (
                        <a href={href} className="text-[#112740] font-medium hover:text-green-600 transition-colors text-sm">{value}</a>
                      ) : (
                        <p className="text-[#112740] font-medium text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-5">
                <h3 className="font-bold text-[#112740] mb-2">Free Consultation</h3>
                <p className="text-gray-600 text-sm mb-3">Not sure which service you need? Talk to our experts for a free 30-minute consultation.</p>
                <a href="tel:9149023243" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors">
                  <Phone size={14} /> Call Now
                </a>
              </div>

              <div className="mt-5 rounded-2xl overflow-hidden h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4!2d77.235!3d28.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLajpat+Nagar+2+New+Delhi!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="ComplyBridge Office"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[#112740] mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
