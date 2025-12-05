import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "EliteCore | AI Auto-Trading Platform - You Deposit, AI Trades",
    template: "%s | EliteCore",
  },
  description: "Experience the power of automated AI trading. Simply add funds and let our advanced AI algorithms execute profitable trades for you 24/7. Passive income made simple.",
  keywords: ["ai trading bot", "automated crypto trading", "auto trader", "passive income", "bitcoin investment", "ai arbitrage"],
  authors: [{ name: "EliteCore Team" }],
  creator: "EliteCore",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elitecore.com",
    title: "EliteCore | AI Auto-Trading Platform",
    description: "Simply add funds and let our AI trade for you. 24/7 automated profits.",
    siteName: "EliteCore",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "EliteCore AI Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EliteCore | AI Auto-Trading Platform",
    description: "Simply add funds and let our AI trade for you. 24/7 automated profits.",
    images: ["/opengraph-image.png"],
    creator: "@elitecore",
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
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
