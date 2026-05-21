import { navSections } from "@/lib/nav-data";
import type { NavSection } from "@/lib/nav-data";

export function getSectionByHref(href: string): NavSection | undefined {
  return navSections.find((s) => s.href === href);
}

export function getSectionForPathname(pathname: string): NavSection | undefined {
  return navSections.find(
    (s) => pathname === s.href || pathname.startsWith(`${s.href}/`)
  );
}
