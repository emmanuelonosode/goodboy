import { Hero } from "@/components/home/Hero";
import { LiveMarketTable } from "@/components/home/LiveMarketTable";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { InvestmentCalculator } from "@/components/home/InvestmentCalculator";
import { TrustIndicators } from "@/components/trust/TrustIndicators";
import { Testimonials } from "@/components/home/Testimonials";
import { LivePayouts } from "@/components/home/LivePayouts";
import { TrustedPartners } from "@/components/home/TrustedPartners";
import { HowItWorks } from "@/components/home/HowItWorks";
import { MarketTrends } from "@/components/home/MarketTrends";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-20">
      <Hero />
      <TrustedPartners />
      <HowItWorks />
      <MarketTrends />
      <LiveMarketTable />
      <FeatureGrid />
      <InvestmentCalculator />
      <Testimonials />
      <TrustIndicators />
      <LivePayouts />
    </div>
  );
}
