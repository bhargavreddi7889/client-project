import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, Star } from "lucide-react";

interface PackagePageProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  originalPrice?: string;
  includes: { category: string; items: string[] }[];
  whatsIncluded: string[];
  process: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  isBest?: boolean;
}

export default function PackagePageTemplate({
  title, subtitle, description, price, originalPrice, includes,
  whatsIncluded, process, faqs, isBest,
}: PackagePageProps) {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-14">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-green-400">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-green-400">Value Packages</Link>
            <span>/</span>
            <span className="text-white">{title}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              {isBest && (
                <span className="inline-flex items-center gap-1.5 bg-yellow-500/20 border border-yellow-400/30 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  <Star size={12} /> Best Value Package
                </span>
              )}
              <h1 className="text-3xl lg:text-4xl font-bold mb-3">{title}</h1>
              <p className="text-green-300 text-lg mb-4">{subtitle}</p>
              <p className="text-gray-300 leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors">
                  Get This Package <ArrowRight size={16} />
                </Link>
                <a href="tel:9149023243" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors">
                  <Phone size={16} /> 9149023243
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-center mb-6">
                {originalPrice && (
                  <p className="text-gray-400 line-through text-sm mb-1">{originalPrice}</p>
                )}
                <p className="text-4xl font-bold text-green-400">{price}</p>
                <p className="text-gray-400 text-sm mt-1">All inclusive. No hidden charges.</p>
              </div>
              <ul className="space-y-2">
                {whatsIncluded.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle2 size={14} className="text-green-400 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-6 block w-full text-center bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-colors">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#112740] mb-8">What&apos;s Included in This Package</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map(({ category, items }) => (
              <div key={category} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-[#112740] text-sm uppercase tracking-wider mb-3 pb-2 border-b border-gray-100">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={13} className="text-green-500 mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#112740] mb-8">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map(({ title: stepTitle, desc }, i) => (
              <div key={stepTitle} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <div className="w-9 h-9 rounded-xl bg-green-600 text-white text-sm font-bold flex items-center justify-center mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-[#112740] mb-1">{stepTitle}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#112740] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="bg-white border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-[#112740] mb-2 text-sm">{question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Ready to Get Started with {title}?</h2>
          <p className="text-green-100 mb-6">Contact our team today and get this package activated within 24 hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors inline-flex items-center gap-2">
              Get This Package <ArrowRight size={16} />
            </Link>
            <a href="tel:9149023243" className="bg-white/20 border border-white/40 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/30 transition-colors inline-flex items-center gap-2">
              <Phone size={16} /> Call: 9149023243
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
