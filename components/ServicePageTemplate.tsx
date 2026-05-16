import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, FileText, AlertCircle, HelpCircle } from "lucide-react";

interface Step {
  title: string;
  desc: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  keyBenefits: string[];
  documents: string[];
  process: Step[];
  faqs: FAQ[];
  price?: string;
  category: string;
  categoryHref: string;
  timeframe?: string;
  govtFee?: string;
}

export default function ServicePageTemplate({
  title, subtitle, description, keyBenefits, documents, process, faqs,
  price, category, categoryHref, timeframe, govtFee,
}: ServicePageProps) {
  return (
    <div className="bg-white">
      {/* Breadcrumb + Hero */}
      <section className="bg-gradient-to-br from-[#112740] to-[#1a3c5e] text-white py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-gray-400 mb-5">
            <Link href="/" className="hover:text-green-400 shrink-0">Home</Link>
            <span>/</span>
            <Link href={categoryHref} className="hover:text-green-400 shrink-0">{category}</Link>
            <span>/</span>
            <span className="text-white truncate max-w-[200px] sm:max-w-none">{title}</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <span className="inline-block bg-green-600/20 border border-green-500/30 text-green-400 text-xs font-medium px-3 py-1 rounded-full mb-4">
                {category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">{title}</h1>
              <p className="text-green-300 text-base sm:text-lg mb-4">{subtitle}</p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{description}</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors">
                  Get Started <ArrowRight size={16} />
                </Link>
                <a href="tel:9149023243" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors">
                  <Phone size={16} /> 9149023243
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="font-semibold text-green-300 mb-4 text-sm uppercase tracking-wider">Service Overview</h3>
              <div className="space-y-3">
                {price && (
                  <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                    <span className="text-gray-400">Starting Price</span>
                    <span className="text-white font-semibold">{price}</span>
                  </div>
                )}
                {govtFee && (
                  <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                    <span className="text-gray-400">Govt. Fee</span>
                    <span className="text-white font-semibold">{govtFee}</span>
                  </div>
                )}
                {timeframe && (
                  <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                    <span className="text-gray-400">Timeframe</span>
                    <span className="text-white font-semibold">{timeframe}</span>
                  </div>
                )}
                <div className="pt-2">
                  <p className="text-xs text-gray-400 mb-3">Key Benefits:</p>
                  <div className="space-y-1.5">
                    {keyBenefits.slice(0, 4).map((b) => (
                      <div key={b} className="flex items-center gap-2 text-sm text-gray-200">
                        <CheckCircle2 size={13} className="text-green-400 shrink-0" /> {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#112740] mb-8">Key Benefits of {title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <CheckCircle2 size={18} className="text-green-600 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <FileText size={20} className="text-green-600" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#112740]">Documents Required</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {documents.map((doc, i) => (
              <div key={doc} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                <span className="w-7 h-7 rounded-full bg-[#112740] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-700 text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <AlertCircle size={20} className="text-green-600" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#112740]">Registration Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map(({ title: stepTitle, desc }, i) => (
              <div key={stepTitle} className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white text-sm font-bold flex items-center justify-center mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-[#112740] mb-2">{stepTitle}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <HelpCircle size={20} className="text-green-600" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#112740]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                <h3 className="font-semibold text-[#112740] mb-2 text-sm">{question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#112740] to-[#1a3c5e] py-12 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">Ready to Get Your {title}?</h2>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">Our experts are ready to guide you through the entire process. Get a free consultation today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Contact Us <ArrowRight size={16} />
            </Link>
            <a href="tel:9149023243" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              <Phone size={16} /> Call: 9149023243
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
