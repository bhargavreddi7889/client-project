import Link from "next/link";
import {
  Building2, Landmark, Heart, FileText, ShieldCheck, Star,
  ArrowRight, CheckCircle2, Phone, ClipboardList, Award,
  Users, TrendingUp, Clock, BadgeCheck, ChevronRight,
} from "lucide-react";
import { navSections } from "@/lib/nav-data";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import WhatsAppLink from "@/components/WhatsAppLink";

const services = [
  { icon: Building2, title: "Company Registration", desc: "Incorporate your Private Limited, OPC, or Public Ltd company seamlessly.", href: "/registration/company", color: "bg-blue-50 text-blue-700" },
  { icon: Landmark, title: "LLP Registration", desc: "Register your Limited Liability Partnership with complete legal support.", href: "/registration/llp", color: "bg-purple-50 text-purple-700" },
  { icon: Heart, title: "NGO Registration", desc: "Set up your Trust, Society, or Section 8 company for social impact.", href: "/registration/ngo", color: "bg-pink-50 text-pink-700" },
  { icon: FileText, title: "GST Registration", desc: "Get your GSTIN and stay compliant with GST laws effortlessly.", href: "/registration/gst", color: "bg-green-50 text-green-700" },
  { icon: ShieldCheck, title: "Trademark Registration", desc: "Protect your brand identity with trademark registration.", href: "/registration/trademark", color: "bg-orange-50 text-orange-700" },
  { icon: ClipboardList, title: "ITR Filing", desc: "File your Income Tax Returns accurately and on time.", href: "/filing/itr-filing", color: "bg-teal-50 text-teal-700" },
  { icon: Award, title: "MSME Registration", desc: "Access government benefits by registering as an MSME.", href: "/license/msme", color: "bg-yellow-50 text-yellow-700" },
  { icon: Star, title: "Complete Value Package", desc: "All-in-one compliance package at the best price.", href: "/packages/complete-value-package", color: "bg-red-50 text-red-700" },
];

const stats = [
  { value: "10,000+", label: "Happy Clients", icon: Users },
  { value: "98%", label: "Success Rate", icon: TrendingUp },
  { value: "24hr", label: "Turnaround Time", icon: Clock },
  { value: "15+", label: "Years Experience", icon: BadgeCheck },
];

const whyUs = [
  { title: "Expert Team", desc: "Our team of experienced CAs, CSs, and lawyers ensure accurate, timely compliance for your business." },
  { title: "Transparent Pricing", desc: "No hidden fees. Clear, upfront pricing on all our services with detailed breakdowns." },
  { title: "End-to-End Support", desc: "From documentation to government portal submission — we handle everything for you." },
  { title: "Pan-India Service", desc: "We serve clients across all Indian states with knowledge of local regulations." },
];

const process = [
  { step: "01", title: "Consult", desc: "Share your requirements with our expert team for a free consultation." },
  { step: "02", title: "Document", desc: "We guide you through the exact documents needed for your service." },
  { step: "03", title: "Process", desc: "Our team files applications and follows up with authorities on your behalf." },
  { step: "04", title: "Deliver", desc: "Receive your certificates, registrations, or filings directly." },
];

const testimonials = [
  { name: "Rahul Sharma", role: "Startup Founder", text: "ComplyBridge made our company registration process so smooth. Highly professional team!" },
  { name: "Priya Mehta", role: "E-commerce Business Owner", text: "Got our GST registration done in record time. Excellent service and very responsive." },
  { name: "Amit Verma", role: "NGO Director", text: "Their expertise in NGO registration helped us start our social work without delays." },
  { name: "Sneha Kapoor", role: "Restaurant Owner", text: "FSSAI license obtained hassle-free. The team was very professional throughout." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#112740] via-[#1a3c5e] to-[#1e4d72] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-green-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 text-green-400 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full mb-5">
                <CheckCircle2 size={14} /> India&apos;s Trusted Compliance Partner
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-5">
                Simplify Your
                <span className="text-green-400 block">Business Compliance</span>
                with Experts
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
                From company registration to tax filing — ComplyBridge provides end-to-end legal and compliance services to help your business thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-green-900/30">
                  Get Free Consultation <ArrowRight size={18} />
                </Link>
                <Link href="/packages/complete-value-package" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                  View Packages <ChevronRight size={18} />
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                {["No Hidden Fees", "Expert CAs & CSs", "Fast Processing"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={15} className="text-green-400" /> {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <h3 className="text-lg font-semibold mb-6 text-green-300">Quick Service Access</h3>
                <div className="grid grid-cols-2 gap-3">
                  {navSections.slice(0, 5).flatMap((s) => s.items.slice(0, 2)).slice(0, 8).map((item) => (
                    <Link key={item.href} href={item.href} className="bg-white/10 hover:bg-green-600/30 border border-white/10 rounded-lg px-3 py-2.5 text-xs font-medium text-gray-200 hover:text-white transition-all">
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-600/20 border border-green-500/30 rounded-xl">
                  <p className="text-sm text-green-300 font-medium mb-2">Need help choosing?</p>
                  <a href={PHONE_TEL} className="flex items-center gap-2 text-white font-semibold text-lg hover:text-green-300 transition-colors mb-2">
                    <Phone size={18} /> {PHONE_DISPLAY}
                  </a>
                  <WhatsAppLink variant="link-light" className="text-white font-semibold text-base hover:text-green-300">
                    Chat on WhatsApp
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-600 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center text-white">
              <Icon size={22} className="mx-auto mb-2 opacity-80" />
              <div className="text-2xl sm:text-3xl font-bold">{value}</div>
              <div className="text-xs sm:text-sm opacity-80 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#112740] mt-2">Popular Services</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Comprehensive compliance solutions tailored for startups, SMEs, and large enterprises across India.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, desc, href, color }) => (
              <Link key={href} href={href} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-200 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-[#112740] mb-2 group-hover:text-green-600 transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/registration" className="inline-flex items-center gap-2 border-2 border-[#112740] text-[#112740] hover:bg-[#112740] hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Why ComplyBridge</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#112740] mt-2 mb-6">Your Business Deserves the Best Compliance Partner</h2>
              <div className="space-y-5">
                {whyUs.map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#112740] mb-1">{title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 bg-[#112740] hover:bg-[#1a3c5e] text-white font-semibold px-6 py-3 rounded-xl transition-colors mt-8">
                About Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Registrations Done", value: "5,000+", bg: "bg-green-600" },
                { label: "Returns Filed", value: "20,000+", bg: "bg-[#1a3c5e]" },
                { label: "Licenses Obtained", value: "3,500+", bg: "bg-[#1a3c5e]" },
                { label: "Cities Served", value: "50+", bg: "bg-green-600" },
              ].map(({ label, value, bg }) => (
                <div key={label} className={`${bg} text-white rounded-2xl p-6 flex flex-col justify-between min-h-[120px]`}>
                  <span className="text-3xl font-bold">{value}</span>
                  <span className="text-sm opacity-80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#112740] mt-2">Simple 4-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }, i) => (
              <div key={step} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step}
                  </div>
                  <h3 className="font-bold text-[#112740] text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-gray-300 text-xl z-10">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Complete Service Suite</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#112740] mt-2">Everything Your Business Needs</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {navSections.map((section) => (
              <div key={section.href} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-300 hover:shadow-md transition-all">
                <h3 className="text-[#112740] font-bold text-lg mb-4 pb-3 border-b border-gray-100">{section.label}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors group">
                        <ChevronRight size={14} className="text-green-500 group-hover:translate-x-1 transition-transform" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={section.href} className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold mt-4 hover:gap-2 transition-all">
                  View all <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#112740] mt-2">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map(({ name, role, text }) => (
              <div key={name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-[#112740] text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-green-100 text-base sm:text-lg mb-8">Talk to our experts today and get a free consultation for your compliance needs.</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-bold px-6 sm:px-8 py-3 rounded-xl hover:bg-green-50 transition-colors shadow-lg">
              <Phone size={18} /> Call Now: {PHONE_DISPLAY}
            </a>
            <WhatsAppLink variant="button" className="px-6 sm:px-8 py-3 shadow-lg">
              WhatsApp Us
            </WhatsAppLink>
            <Link href="/packages/complete-value-package" className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white/40 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl hover:bg-white/30 transition-colors">
              View Packages <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
