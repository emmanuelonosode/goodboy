import { AffiliateCalculator } from "@/components/affiliate/AffiliateCalculator";
import { Button } from "@/components/ui/button";
import { Users, Share2, Wallet, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BitcoinPulse } from "@/components/ui/BitcoinPulse";

export default function AffiliatePage() {
  return (
    <div className="pt-40 pb-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-metallic-gold/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="text-center md:text-left max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Partner with the <br />
                <span className="text-metallic-gold">Market Leader</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto md:mx-0 mb-10">
                Join the EliteCore Affiliate Program and earn up to 11% commission across three levels. Build your wealth by empowering others.
              </p>
              <Link href="/signup">
                <Button size="lg" className="bg-metallic-gold text-rich-black hover:bg-yellow-500 font-bold px-8 h-14 text-lg">
                  Become a Partner
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-metallic-gold/20 blur-[80px] rounded-full" />
              <BitcoinPulse />
            </div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">3-Tier Commission Structure</h2>
            <p className="text-gray-400">Earn from your direct referrals and their network.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { level: "Level 1", rate: "7%", desc: "Direct Referrals", color: "text-metallic-gold", bg: "bg-metallic-gold/10" },
              { level: "Level 2", rate: "3%", desc: "Second Generation", color: "text-emerald-400", bg: "bg-emerald-500/10" },
              { level: "Level 3", rate: "1%", desc: "Third Generation", color: "text-blue-400", bg: "bg-blue-500/10" },
            ].map((tier, i) => (
              <div key={i} className="relative p-8 rounded-2xl border border-white/10 bg-black/40 text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className={`mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full ${tier.bg} ${tier.color} text-3xl font-bold`}>
                  {tier.rate}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.level}</h3>
                <p className="text-gray-400">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Calculate Your Potential</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Our program is designed for high-performance networkers. Use the calculator to estimate your monthly passive income based on your network's activity.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Share2, title: "Share Your Link", desc: "Get your unique referral link from your dashboard." },
                  { icon: Users, title: "Grow Your Network", desc: "Invite friends, family, and followers to invest." },
                  { icon: Wallet, title: "Earn Instantly", desc: "Commissions are credited to your wallet immediately." },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                      <step.icon className="h-6 w-6 text-metallic-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <AffiliateCalculator />
          </div>
        </div>
      </section>
    </div>
  );
}
