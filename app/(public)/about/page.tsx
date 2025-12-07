"use client";

import { TrustIndicators } from "@/components/trust/TrustIndicators";
import { Shield, Users, Globe, Award, Cpu, Zap, BarChart3, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import { BitcoinPulse } from "@/components/ui/BitcoinPulse";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="bg-[#050505] min-h-screen text-white">
      
      {/* 1. Authority Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-32">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-metallic-gold/20 via-black to-black opacity-60" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-metallic-gold text-xs font-bold uppercase tracking-wider mb-6">
              <Shield className="w-3 h-3" /> Since 2018
            </div>
            <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
              Architects of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-metallic-gold to-yellow-200">
                Digital Wealth
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-400 leading-relaxed mb-10">
              Apex Vault AI Trading isn't just a trading platform. We are a technology powerhouse fusing 
              <span className="text-white font-semibold"> institutional-grade AI </span> 
              with deep liquidity markets to generate consistent, passive returns for our partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                    <Button size="lg" className="bg-metallic-gold hover:bg-yellow-500 text-black font-bold h-14 px-8 rounded-full">
                        Start Your Journey
                    </Button>
                </Link>
                <Link href="#technology">
                    <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 rounded-full">
                        Our Technology
                    </Button>
                </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Institutional Stats (The "Scale") */}
      <section className="py-12 border-y border-white/10 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Total Assets Managed", value: "$2.4B+", icon: BarChart3, color: "text-emerald-400" },
              { label: "Active Investors", value: "50,000+", icon: Users, color: "text-blue-400" },
              { label: "Payouts Processed", value: "$850M+", icon: Award, color: "text-metallic-gold" },
              { label: "Server Uptime", value: "99.99%", icon: Zap, color: "text-purple-400" },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                    <stat.icon className={`w-5 h-5 ${stat.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">{stat.value}</h3>
                </div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Core Technology (The "Secret Sauce") */}
      <section id="technology" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
                 {/* Visual Representation of AI */}
                 <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-black/50 aspect-square flex items-center justify-center shadow-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-metallic-gold/20 to-transparent opacity-50" />
                    <div className="scale-150 opacity-80">
                        <BitcoinPulse />
                    </div>
                    {/* Floating Cards */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }} 
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-10 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-mono text-emerald-400">ARBITRAGE_FOUND</span>
                        </div>
                        <p className="text-white font-bold mt-1 text-lg">+1.24% Profit</p>
                    </motion.div>
                 </div>
                 {/* Decorative Elements */}
                 <div className="absolute -bottom-10 -left-10 w-full h-full border border-metallic-gold/20 rounded-2xl -z-10" />
            </div>

            <div>
                <div className="inline-block px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
                    Proprietary Algorithm
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    We don't guess the market. <br />
                    <span className="text-metallic-gold">We solve it.</span>
                </h2>
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                            <Cpu className="w-6 h-6 text-metallic-gold" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Neural Network Analysis</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Our "Core-V4" engine processes 50,000+ data points per second—including social sentiment, on-chain volume, and exchange depth—to predict price movements before they happen.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                            <Zap className="w-6 h-6 text-metallic-gold" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Micro-Second Execution</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Speed is profit. Our servers are co-located with major exchanges in Tokyo, London, and New York to ensure zero latency execution on arbitrage opportunities.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                            <Lock className="w-6 h-6 text-metallic-gold" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Risk-Zero Protocols</h3>
                            <p className="text-gray-400 leading-relaxed">
                                We utilize a delta-neutral strategy. By simultaneously opening long and short positions, we neutralize market volatility and capture pure spread profit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Grid */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">The Apex Standard</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Built by Wall Street veterans for the modern digital investor.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Registered & Regulated", desc: "Fully compliant with international financial regulations, ensuring your capital is legally protected." },
                    { title: "Segregated Funds", desc: "Client capital is held in cold storage wallets separate from company operational funds." },
                    { title: "24/7 Expert Support", desc: "Direct access to senior trading analysts, not just support bots." },
                    { title: "Daily Compounding", desc: "Profits are credited every 24 hours, allowing your wealth to snowball automatically." },
                    { title: "Transparency First", desc: "View real-time trading logs and verifiable blockchain proof of reserves." },
                    { title: "No Hidden Fees", desc: "Zero deposit fees. Zero withdrawal fees. We only make money when you do." },
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-metallic-gold/20 hover:bg-white/[0.04] transition-all">
                        <CheckCircle2 className="w-8 h-8 text-metallic-gold mb-6 opacity-80" />
                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-metallic-gold/5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to trade at the <span className="text-metallic-gold">Institutional Level?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Join 50,000+ investors who have switched to Apex Vault for superior returns and peace of mind.
            </p>
            <Link href="/signup">
                <Button size="lg" className="bg-metallic-gold hover:bg-yellow-500 text-black font-bold h-16 px-12 rounded-full text-lg shadow-2xl shadow-metallic-gold/20 transform hover:-translate-y-1 transition-transform">
                    Create Free Account
                </Button>
            </Link>
            <p className="mt-6 text-sm text-gray-500">
                No credit card required • Instant verification • Start with $100
            </p>
        </div>
      </section>

      <TrustIndicators />
    </div>
  );
}