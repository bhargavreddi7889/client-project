export interface NavItem {
  label: string;
  href: string;
}

export interface NavSection {
  label: string;
  href: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    label: "Registration / Conversion",
    href: "/registration",
    items: [
      { label: "Company Registration", href: "/registration/company" },
      { label: "LLP Registration", href: "/registration/llp" },
      { label: "NGO Registration", href: "/registration/ngo" },
      { label: "GST Registration", href: "/registration/gst" },
      { label: "Trademark Registration", href: "/registration/trademark" },
      { label: "Others", href: "/registration/others" },
    ],
  },
  {
    label: "License / Approval",
    href: "/license",
    items: [
      { label: "MSME Registration", href: "/license/msme" },
      { label: "Food License", href: "/license/food-license" },
      { label: "Drug License", href: "/license/drug-license" },
      { label: "Shop & Establishment", href: "/license/shop-establishment" },
      { label: "PF / ESI Registration", href: "/license/pf-esi" },
      { label: "Factory License", href: "/license/factory-license" },
      { label: "Professional Tax", href: "/license/professional-tax" },
      { label: "Others", href: "/license/others" },
    ],
  },
  {
    label: "Filing",
    href: "/filing",
    items: [
      { label: "ITR Filing", href: "/filing/itr-filing" },
      { label: "TDS Filing", href: "/filing/tds-filing" },
      { label: "ROC Filing", href: "/filing/roc" },
      { label: "POSH Filing", href: "/filing/posh-filing" },
      { label: "Others", href: "/filing/others" },
    ],
  },
  {
    label: "Other Services",
    href: "/other-services",
    items: [
      { label: "Independent Director", href: "/other-services/independent-director" },
      { label: "POSH Training", href: "/other-services/posh-training" },
      { label: "Others", href: "/other-services/others" },
    ],
  },
  {
    label: "Value Packages",
    href: "/packages",
    items: [
      { label: "LLP Incorporation Package", href: "/packages/llp-incorporation" },
      { label: "Company Incorporation Package", href: "/packages/company-incorporation" },
      { label: "NGO Incorporation Package", href: "/packages/ngo-incorporation" },
      { label: "ROC Return Package", href: "/packages/roc-return" },
      { label: "GST Return Package", href: "/packages/gst-return" },
      { label: "Complete Value Package ★ Best", href: "/packages/complete-value-package" },
      { label: "TDS Package", href: "/packages/tds" },
      { label: "ITR Package", href: "/packages/itr" },
    ],
  },
];

export const topLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

/** Shown in the main navbar (Blog is footer quick links only). */
export const navbarLinks = topLinks.filter((l) => l.href !== "/blog");
