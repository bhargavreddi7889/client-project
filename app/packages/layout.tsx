import SectionSidebarLayout from "@/components/SectionSidebarLayout";
import { getSectionByHref } from "@/lib/section-layout";

const section = getSectionByHref("/packages")!;

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return <SectionSidebarLayout section={section}>{children}</SectionSidebarLayout>;
}
