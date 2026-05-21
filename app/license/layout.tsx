import SectionSidebarLayout from "@/components/SectionSidebarLayout";
import { getSectionByHref } from "@/lib/section-layout";

const section = getSectionByHref("/license")!;

export default function LicenseLayout({ children }: { children: React.ReactNode }) {
  return <SectionSidebarLayout section={section}>{children}</SectionSidebarLayout>;
}
