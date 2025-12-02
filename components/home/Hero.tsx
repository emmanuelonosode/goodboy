"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Activity } from "lucide-react";
import Link from "next/link";
import { BitcoinPulse } from "@/components/ui/BitcoinPulse";
import { TradingChartMini } from "@/components/ui/TradingChartMini";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-metallic-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-accent animate-pulse" />
              <span className="text-sm text-slate-300 font-medium">Live Trading Platform 2.0</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Institutional-Grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-metallic-gold to-yellow-200">
                Trading for Everyone
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Experience the future of wealth management with our high-yield investment platform. 
              Bank-grade security, instant withdrawals, and 24/7 expert support.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/signup">
                <Button size="lg" className="bg-metallic-gold text-rich-black hover:bg-yellow-500 font-bold px-8 h-14 text-lg shadow-lg shadow-metallic-gold/20 w-full sm:w-auto">
                  Start Investing
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/markets">
                <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 h-14 text-lg w-full sm:w-auto">
                  <Globe className="mr-2 w-5 h-5" />
                  View Markets
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div 
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-metallic-gold/20 flex items-center justify-center">
                    <Activity className="text-metallic-gold w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Market Pulse</div>
                    <div className="text-xs text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Analysis
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-mono font-bold">BTC/USDT</div>
                  <div className="text-xs text-gray-400">Perpetual</div>
                </div>
              </div>
              
              <div className="h-40 mb-6 relative overflow-hidden rounded-lg bg-black/20 border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <BitcoinPulse />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24">
                  <TradingChartMini color="#D4AF37" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                  <div className="text-xs text-gray-400 mb-1">24h Volume</div>
                  <div className="text-lg font-bold text-white">$42.8B</div>
                </div>
                <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                  <div className="text-xs text-gray-400 mb-1">Open Interest</div>
                  <div className="text-lg font-bold text-white">$12.5B</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-metallic-gold/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl animate-pulse delay-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
