import SectionSidebarLayout from "@/components/SectionSidebarLayout";
import { getSectionByHref } from "@/lib/section-layout";

const section = getSectionByHref("/filing")!;

export default function FilingLayout({ children }: { children: React.ReactNode }) {
  return <SectionSidebarLayout section={section}>{children}</SectionSidebarLayout>;
}
