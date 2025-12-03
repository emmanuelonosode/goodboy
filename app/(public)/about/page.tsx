import { TrustIndicators } from "@/components/trust/TrustIndicators";
import { Shield, Users, Globe, Award } from "lucide-react";
import { BitcoinPulse } from "@/components/ui/BitcoinPulse";

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-20">
        <div className="absolute inset-0 bg-metallic-gold/10 opacity-50" />
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">About EliteCore</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            We are a premier digital asset investment firm dedicated to providing institutional-grade trading infrastructure to individual investors.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { label: "Active Users", value: "50K+", icon: Users },
              { label: "Countries Supported", value: "120+", icon: Globe },
              { label: "Total Volume", value: "$2B+", icon: Award },
              { label: "Secure Assets", value: "100%", icon: Shield },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-metallic-gold/10">
                  <stat.icon className="h-8 w-8 text-metallic-gold" />
                </div>
                <h3 className="mb-2 text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-white">Our Mission</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  At EliteCore, we believe that financial freedom should be accessible to everyone. Our mission is to democratize access to high-yield investment opportunities that were previously reserved for institutional clients.
                </p>
                <p>
                  We combine cutting-edge technology with deep market expertise to deliver a platform that is secure, transparent, and easy to use.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="absolute inset-0 bg-metallic-gold/20" />
              <div className="relative z-10 scale-150">
                <BitcoinPulse />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustIndicators />
    </div>
  );
}
