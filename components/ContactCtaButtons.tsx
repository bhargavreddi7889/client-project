import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import WhatsAppLink from "@/components/WhatsAppLink";

interface ContactCtaButtonsProps {
  message?: string;
  contactLabel?: string;
  phoneLabel?: string;
}

export default function ContactCtaButtons({
  message,
  contactLabel = "Contact Us",
  phoneLabel = `Call: ${PHONE_DISPLAY}`,
}: ContactCtaButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      <Link
        href="/contact"
        className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2"
      >
        {contactLabel} <ArrowRight size={16} />
      </Link>
      <a
        href={PHONE_TEL}
        className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2"
      >
        <Phone size={16} /> {phoneLabel}
      </a>
      <WhatsAppLink variant="outline-light" message={message} className="px-6 py-3">
        WhatsApp
      </WhatsAppLink>
    </div>
  );
}
