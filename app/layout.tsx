import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import "./redesign.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { StartupVideoIntro } from "@/components/ui/StartupVideoIntro";
import { siteConfig } from "@/content/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalDomain),
  icons: { icon: "/images/galogo.png", apple: "/images/galogo.png" },
  title: {
    default: "Glorious Academy | Clear Learning. Confident Futures.",
    template: "%s | Glorious Academy",
  },
  description:
    "Structured competitive and board examination coaching for JEE Main & Advanced, NEET UG, MHT-CET, and Class 10 & 12 Boards at Chandrapur (Warora Naka) and Bhadrawati centres.",
  keywords: [
    "Glorious Academy",
    "JEE Coaching Chandrapur",
    "NEET Coaching Chandrapur",
    "MHT-CET Classes Bhadrawati",
    "Class 10 CBSE Coaching",
    "Class 12 State Board",
    "Prof Nitish Kumar",
    "Warora Naka Academy",
  ],
  authors: [{ name: siteConfig.brandName }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.canonicalDomain,
    title: "Glorious Academy — Clear Learning. Confident Futures.",
    description:
      "Structured competitive and board examination coaching for JEE Main & Advanced, NEET UG, MHT-CET, and Class 10 & 12 Boards at Chandrapur and Bhadrawati.",
    siteName: siteConfig.brandName,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#102d46",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#374151] antialiased">
        <StartupVideoIntro />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
