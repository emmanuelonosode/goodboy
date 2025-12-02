import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "EliteCore | High-Yield Investment Platform",
    template: "%s | EliteCore",
  },
  description: "Institutional-grade crypto trading and investment platform. Join thousands of investors earning passive income with our advanced AI arbitrage strategies.",
  keywords: ["crypto investment", "high yield", "arbitrage trading", "passive income", "bitcoin", "ethereum"],
  authors: [{ name: "EliteCore Team" }],
  creator: "EliteCore",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elitecore.com",
    title: "EliteCore | High-Yield Investment Platform",
    description: "Institutional-grade crypto trading and investment platform.",
    siteName: "EliteCore",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "EliteCore Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EliteCore | High-Yield Investment Platform",
    description: "Institutional-grade crypto trading and investment platform.",
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
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-metallic-gold/30 selection:text-white`}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
