import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Apex Vault AI Trading | Your Gateway to Automated Wealth",
    template: "%s | Apex Vault AI Trading",
  },
  description: "Experience the pinnacle regarding automated AI trading. Apex Vault AI Trading leverages institutional-grade algorithms to execute profitable trades 24/7. Your wealth, automated.",
  keywords: ["apex vault", "ai trading", "automated crypto trading", "wealth management", "passive income", "bitcoin investment", "ai arbitrage", "institutional trading"],
  authors: [{ name: "Apex Vault Team" }],
  creator: "Apex Vault AI Trading",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apexvault.com",
    title: "Apex Vault AI Trading | Institutional-Grade Automation",
    description: "Secure, transparent, and profitable. Let Apex Vault's AI manage your portfolio with precision.",
    siteName: "Apex Vault AI Trading",

  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Vault AI Trading",
    description: "Institutional-grade AI trading for everyone. Automate your wealth generation.",

    creator: "@apexvault",
  },
  metadataBase: new URL("https://elitecore.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-metallic-gold/30 selection:text-white relative`}>
        {/* Waves Background Pattern */}
        <div className="fixed inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'url(/waves.svg)', backgroundSize: 'cover', backgroundPosition: 'center bottom', backgroundRepeat: 'no-repeat' }} />
        <JsonLd />
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
