export const PHONE_DISPLAY = "9310396871";
export const PHONE_TEL = "tel:9310396871";
export const WHATSAPP_NUMBER = "919310396871";
export const EMAIL = "info@complybridge.in";
export const EMAIL_MAILTO = "mailto:info@complybridge.in";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi ComplyBridge, I would like to enquire about your services.";

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
