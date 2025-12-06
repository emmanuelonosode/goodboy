"use client";

import { AffiliateCalculator } from "@/components/affiliate/AffiliateCalculator";
import { Button } from "@/components/ui/button";
import { Users, Share2, Wallet, ArrowRight, Trophy, Zap, Globe, ShieldCheck, Copy } from "lucide-react";
import Link from "next/link";
import { BitcoinPulse } from "@/components/ui/BitcoinPulse";
import { motion } from "framer-motion";
import { toast } from "sonner";

// Mock Payout Data for Social Proof
const RECENT_PAYOUTS = [
    { user: "Alex_M", amount: "$1,240", time: "2m ago" },
    { user: "Sarah_K", amount: "$450", time: "5m ago" },
    { user: "CryptoKing", amount: "$3,890", time: "12m ago" },
    { user: "InvestPro", amount: "$890", time: "15m ago" },
];

export default function AffiliatePage() {

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://elitecoretrade.com/ref/YOUR_ID");
    toast.success("Referral link copied to clipboard!");
  };

  return (
    <div className="pt-32 pb-20 bg-[#050505] overflow-x-hidden">
      
      {/* 1. Hero Section with Social Proof Ticker */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-metallic-gold/10 via-transparent to-transparent opacity-50 blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-metallic-gold text-sm font-bold mb-6 hover:bg-white/10 transition-colors cursor-default">
                <Trophy className="w-4 h-4" /> <span>Highest Commission Rates in Industry</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Turn Your Network Into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-metallic-gold to-yellow-200">
                  Recurring Wealth
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Join 50,000+ partners earning passive income. Our 3-tier system pays you instantly for every investment made by your team.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="/signup" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-metallic-gold hover:bg-yellow-500 text-black font-bold h-14 px-8 text-lg rounded-full shadow-lg shadow-metallic-gold/20 hover:scale-105 transition-transform">
                    Start Earning Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
                <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={handleCopyLink}
                    className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white h-14 px-8 rounded-full"
                >
                    <Copy className="mr-2 w-4 h-4" /> Copy Demo Link
                </Button>
              </div>

              {/* Payout Ticker */}
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 text-xs text-gray-500 overflow-hidden">
                <span className="shrink-0 font-bold uppercase tracking-wider text-emerald-500">Live Payouts:</span>
                <div className="flex gap-6 animate-marquee whitespace-nowrap">
                    {RECENT_PAYOUTS.map((payout, i) => (
                        <span key={i} className="flex items-center gap-1">
                            <span className="text-white font-bold">{payout.user}</span> just earned <span className="text-metallic-gold font-bold">{payout.amount}</span>
                        </span>
                    ))}
                </div>
              </div>

            </motion.div>

            {/* Visual: Pulse + Stats Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-md lg:max-w-xl"
            >
              <div className="absolute inset-0 bg-metallic-gold/20 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative z-10 bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 shadow-2xl">
                 <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                    <div>
                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Total Paid to Partners</p>
                        <p className="text-4xl font-bold text-white font-mono">$4,842,910</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <Wallet className="w-6 h-6 text-emerald-400" />
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-metallic-gold flex items-center justify-center font-bold text-black">1</div>
                            <span className="font-bold text-white">Tier 1</span>
                        </div>
                        <span className="text-metallic-gold font-mono font-bold text-xl">7%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5 opacity-80">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white">2</div>
                            <span className="font-bold text-white">Tier 2</span>
                        </div>
                        <span className="text-emerald-400 font-mono font-bold text-xl">3%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5 opacity-60">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center font-bold text-gray-400">3</div>
                            <span className="font-bold text-white">Tier 3</span>
                        </div>
                        <span className="text-blue-400 font-mono font-bold text-xl">1%</span>
                    </div>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. "Why Partner" Grid */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for Top Performers</h2>
                <p className="text-gray-400">We provide the tools, tracking, and payouts you need to scale your affiliate business.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: Zap, title: "Instant Payouts", desc: "No monthly waiting periods. Withdraw your commissions the moment your referral invests." },
                    { icon: Globe, title: "Global Reach", desc: "Our platform accepts investors from 180+ countries with crypto payments." },
                    { icon: ShieldCheck, title: "Lifetime Cookies", desc: "Refer a user once, and earn commissions on every deposit they make forever." },
                ].map((feature, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-metallic-gold/30 transition-all group">
                        <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-metallic-gold/10 transition-colors">
                            <feature.icon className="w-7 h-7 text-white group-hover:text-metallic-gold transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 3. Calculator Section (The "Greed" Trigger) */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-emerald-900/10 blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-block px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                Profit Simulator
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Calculate Your Potential</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                See exactly how much you can earn. Most active partners earn between <span className="text-white font-bold">$2,500 - $15,000</span> per month just by sharing their link.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: Share2, title: "1. Share Your Link", desc: "Post on social media, blogs, or send directly to friends." },
                  { icon: Users, title: "2. They Invest", desc: "Your referrals choose a high-yield plan that suits them." },
                  { icon: Wallet, title: "3. You Get Paid", desc: "7% commission hits your wallet instantly. Repeat." },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-metallic-gold/50 transition-colors relative">
                      <step.icon className="h-6 w-6 text-gray-300 group-hover:text-metallic-gold transition-colors" />
                      {/* Connector Line */}
                      {i !== 2 && <div className="absolute bottom-[-32px] left-1/2 w-px h-8 bg-white/10 group-hover:bg-metallic-gold/30 transition-colors" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Calculator Component */}
            <div className="bg-[#0A0A0A] p-1 rounded-3xl border border-white/10 shadow-2xl">
                <AffiliateCalculator />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Final Banner CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="relative rounded-3xl overflow-hidden bg-metallic-gold p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-metallic-gold/10">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
            <div className="relative z-10 max-w-2xl text-black">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to build your empire?</h2>
                <p className="text-lg font-medium opacity-80">
                    Your referral link is waiting. Join the program today and get a $50 welcome bonus credited after your first 5 active referrals.
                </p>
            </div>
            <div className="relative z-10 shrink-0">
                <Link href="/signup">
                    <button className="bg-black text-white hover:bg-gray-900 font-bold text-lg px-10 py-4 rounded-full transition-all hover:scale-105 shadow-xl flex items-center gap-2">
                        Get My Link <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>
            </div>
        </div>
      </section>
      
    </div>
  );
}