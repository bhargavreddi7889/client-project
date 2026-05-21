import SectionSidebarLayout from "@/components/SectionSidebarLayout";
import { getSectionByHref } from "@/lib/section-layout";

const section = getSectionByHref("/registration")!;

export default function RegistrationLayout({ children }: { children: React.ReactNode }) {
  return <SectionSidebarLayout section={section}>{children}</SectionSidebarLayout>;
}
