import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "ComplyBridge – Compliance First", template: "%s | ComplyBridge" },
  description: "ComplyBridge provides expert compliance, legal registration, licensing, and tax filing services across India. Your trusted partner for GST, ITR, company registration, and more.",
  keywords: "company registration, GST registration, ITR filing, trademark, MSME, compliance, legal services, India",
  openGraph: {
    title: "ComplyBridge – Compliance First",
    description: "Expert compliance and legal services across India.",
    url: "https://complybridge.in",
    siteName: "ComplyBridge",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
