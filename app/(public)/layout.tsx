import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TickerTape } from "@/components/layout/TickerTape";
import { CryptoBackground } from "@/components/layout/CryptoBackground";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <CryptoBackground />
      <TickerTape />
      <Navbar />
      <main className="flex-1 relative z-20">{children}</main>
      <Footer />
    </div>
  );
}
