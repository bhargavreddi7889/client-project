import Link from "next/link";
import { CheckCircle2, Award, Target, Heart, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, EMAIL_MAILTO } from "@/lib/contact";
import WhatsAppLink from "@/components/WhatsAppLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – ComplyBridge",
  description: "Learn about ComplyBridge – India's trusted compliance partner. Our mission, vision, team, and commitment to making compliance easy for businesses.",
};

const values = [
  { icon: Target, title: "Our Mission", desc: "To simplify compliance for every Indian business — making legal, tax, and regulatory processes accessible, affordable, and stress-free." },
  { icon: Award, title: "Our Vision", desc: "To be India's most trusted compliance partner, empowering businesses of all sizes to grow without the burden of regulatory complexities." },
  { icon: Heart, title: "Our Values", desc: "Integrity, transparency, client-first approach, and continuous learning drive everything we do at ComplyBridge." },
];

const milestones = [
  { year: "2009", event: "ComplyBridge founded in New Delhi" },
  { year: "2012", event: "Expanded to 10+ cities across India" },
  { year: "2016", event: "Crossed 1,000+ registered clients" },
  { year: "2018", event: "Launched digital compliance platform" },
  { year: "2021", event: "5,000+ clients milestone achieved" },
  { year: "2024", event: "10,000+ clients across all Indian states" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block bg-green-600/20 border border-green-500/30 text-green-400 text-xs font-medium px-3 py-1 rounded-full mb-4">
                About ComplyBridge
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">India&apos;s Trusted Compliance Partner Since 2009</h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                ComplyBridge was founded with a single purpose — to make compliance simple, affordable, and stress-free for every Indian business. From a small startup in New Delhi to serving 10,000+ clients across India, we&apos;ve stayed true to our founding mission.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Happy Clients", value: "10,000+" },
                { label: "Years of Experience", value: "15+" },
                { label: "Services Offered", value: "40+" },
                { label: "Cities Served", value: "50+" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center">
                  <div className="text-3xl font-bold text-green-400">{value}</div>
                  <div className="text-sm text-gray-300 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#112740]">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-green-600" />
                </div>
                <h3 className="font-bold text-[#112740] text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl font-bold text-[#112740] mt-2 mb-6">Built on Trust, Grown on Expertise</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>ComplyBridge was established in 2009 by a team of experienced Chartered Accountants, Company Secretaries, and Lawyers who recognized a critical gap in the Indian market — small and medium businesses struggled enormously with compliance without affordable expert help.</p>
                <p>We started by offering company registration and basic tax filing services from a small office in Lajpat Nagar, New Delhi. Our transparent pricing and personalized service quickly built a loyal client base.</p>
                <p>Over the years, we expanded our service portfolio to cover the entire compliance lifecycle of a business — from inception to ongoing regulatory compliance. Today, we serve clients across all Indian states and have a team of 50+ professionals dedicated to your compliance needs.</p>
              </div>
              <div className="flex flex-col gap-3 mt-6">
                {["Transparent pricing with no hidden fees", "Dedicated account manager for every client", "100% digital and paperless service delivery", "Expert CAs, CSs, and lawyers on your team"].map((p) => (
                  <div key={p} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0" /> {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-[#112740] text-lg mb-4">Our Journey</h3>
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-4 items-start">
                  <div className="w-16 h-8 rounded-lg bg-green-100 text-green-700 font-bold text-sm flex items-center justify-center shrink-0">{year}</div>
                  <div className="flex-1 bg-gray-50 rounded-lg px-4 py-2 text-sm text-gray-700 border border-gray-100">{event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Address */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#112740] mb-6">Visit Our Office</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-green-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#112740]">Registered Office</p>
                    <p className="text-gray-600 text-sm">I-79 Basement, Lajpat Nagar-2,<br />New Delhi – 110024, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-green-600 shrink-0" />
                  <a href={PHONE_TEL} className="text-gray-700 hover:text-green-600 font-medium">
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-green-600 shrink-0" />
                  <a href={EMAIL_MAILTO} className="text-gray-700 hover:text-green-600">
                    {EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <WhatsAppLink variant="link" className="text-base">
                    Chat on WhatsApp
                  </WhatsAppLink>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#112740] hover:bg-[#1a3c5e] text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                  Send us a Message <ArrowRight size={16} />
                </Link>
                <WhatsAppLink variant="button" className="px-6 py-3">
                  WhatsApp
                </WhatsAppLink>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4!2d77.235!3d28.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLajpat+Nagar+2+New+Delhi!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="ComplyBridge Office Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
