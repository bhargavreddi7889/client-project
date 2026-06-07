"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";

const services = [
  "Company Registration",
  "LLP Registration",
  "NGO Registration",
  "GST Registration",
  "Trademark Registration",
  "MSME Registration",
  "Food License",
  "Drug License",
  "ITR Filing",
  "TDS Filing",
  "ROC Filing",
  "POSH Compliance",
  "Value Package",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const whatsappMessage = [
    "Hi ComplyBridge, I would like to enquire about your services.",
    form.name && `Name: ${form.name}`,
    form.phone && `Phone: ${form.phone}`,
    form.email && `Email: ${form.email}`,
    form.service && `Service: ${form.service}`,
    form.message && `Message: ${form.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
        <CheckCircle2 size={48} className="text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#112740] mb-2">Message Sent Successfully!</h3>
        <p className="text-gray-600 mb-6">Thank you for reaching out. Our team will contact you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-xl transition-colors">
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange} required
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
          <input
            type="email" name="email" value={form.email} onChange={handleChange} required
            placeholder="your@email.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange} required
            placeholder="+91 93103 96871"
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Interested In</label>
          <select
            name="service" value={form.service} onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Message *</label>
        <textarea
          name="message" value={form.message} onChange={handleChange} required rows={5}
          placeholder="Describe your requirement or question in detail..."
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
        />
      </div>
      {status === "error" && (
        <p className="text-red-600 text-sm mt-3 bg-red-50 border border-red-200 rounded-lg px-4 py-2">{errorMsg}</p>
      )}
      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
        >
          {status === "loading" ? (
            <><Loader2 size={16} className="animate-spin" /> Sending...</>
          ) : (
            <><Send size={16} /> Send Message</>
          )}
        </button>
        <WhatsAppLink message={whatsappMessage} className="px-8 py-3">
          Chat on WhatsApp
        </WhatsAppLink>
      </div>
    </form>
  );
}
