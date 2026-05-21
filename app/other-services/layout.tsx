import SectionSidebarLayout from "@/components/SectionSidebarLayout";
import { getSectionByHref } from "@/lib/section-layout";

const section = getSectionByHref("/other-services")!;

export default function OtherServicesLayout({ children }: { children: React.ReactNode }) {
  return <SectionSidebarLayout section={section}>{children}</SectionSidebarLayout>;
}
