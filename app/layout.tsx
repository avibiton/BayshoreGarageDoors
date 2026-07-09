import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { BUSINESS } from "@/lib/config";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: `Bay Shore Garage Door — Same-Day Repair & Installation | Bay Shore NY`,
    template: `%s | Bay Shore Garage Door`,
  },
  description: `Same-day garage door repair, spring replacement, opener installation & new door service in Bay Shore NY 11706. Call ${BUSINESS.phone} — real technician answers 24/7. Free written estimate.`,
  keywords: ["garage door repair Bay Shore NY", "spring replacement Bay Shore", "garage door opener Bay Shore", "emergency garage door Suffolk County"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BUSINESS.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
