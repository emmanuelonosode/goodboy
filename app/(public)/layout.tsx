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
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        <TickerTape />
        <Navbar />
      </div>
      <main className="flex-1 relative z-20">{children}</main>
      <Footer />
    </div>
  );
}
