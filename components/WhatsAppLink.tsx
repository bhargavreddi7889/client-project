import { clsx } from "clsx";
import { getWhatsAppUrl } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";

type WhatsAppVariant = "button" | "outline-light" | "link" | "link-light";

interface WhatsAppLinkProps {
  message?: string;
  variant?: WhatsAppVariant;
  className?: string;
  children?: React.ReactNode;
  iconSize?: number;
}

const variantClasses: Record<WhatsAppVariant, string> = {
  button:
    "inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-xl transition-colors",
  "outline-light":
    "inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors",
  link: "inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#20bd5a] font-medium transition-colors",
  "link-light": "inline-flex items-center gap-1.5 hover:text-green-400 transition-colors",
};

export default function WhatsAppLink({
  message,
  variant = "button",
  className,
  children,
  iconSize = 16,
}: WhatsAppLinkProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(variantClasses[variant], className)}
    >
      <WhatsAppIcon size={iconSize} />
      {children ?? "WhatsApp"}
    </a>
  );
}
