"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Activity, ShieldCheck, Zap, Users } from "lucide-react";
import Link from "next/link";
import { BitcoinPulse } from "@/components/ui/BitcoinPulse";
import { TradingChartMini } from "@/components/ui/TradingChartMini";
import { DottedWaveBackground } from "@/components/ui/DottedWaveBackground";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-rich-black min-h-screen flex items-center">
      {/* --- BACKGROUND EFFECTS --- */}
      <DottedWaveBackground />
      
      {/* Vignette Overlay to darken edges */}
      <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,#020205_100%)] opacity-80 z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* TEXT CONTENT */}
          <motion.div
            className="flex-1 text-center lg:text-left w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-none bg-emerald-accent/10 border-l-4 border-emerald-accent mb-6 sm:mb-8 mx-auto lg:mx-0">
              <span className="text-xs sm:text-sm text-emerald-accent font-bold uppercase tracking-wider">
                Live Trading Platform 2.0
              </span>
            </div>
            
            {/* Headline - Responsive Scaling */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Institutional-Grade <br className="hidden sm:block" />
              <span className="text-metallic-gold">
                AI-Powered Trading
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed font-light">
              Simply deposit funds and watch our AI execute profitable trades 24/7.
              <span className="text-white font-medium block sm:inline"> No experience needed. Your money works for you.</span>
            </p>
            
            {/* CTA Buttons - Stack on mobile, Row on Tablet+ */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 w-full sm:w-auto">
              <Link href="/signup" className="w-full sm:w-auto">
                <Button size="lg" className="bg-metallic-gold text-rich-black hover:bg-white hover:text-black font-bold h-12 sm:h-14 text-base sm:text-lg rounded-none w-full transition-all duration-300">
                  Start AI Trading
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Link href="/markets" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black h-12 sm:h-14 text-base sm:text-lg rounded-none w-full transition-all duration-300">
                  <Globe className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  View Markets
                </Button>
              </Link>
            </div>

            {/* Stats Grid - 1 Col mobile, 3 Col tablet+ */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-sm sm:max-w-none mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-accent" />
                  <span className="font-bold text-white text-xl">100%</span>
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Secure</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Zap className="w-5 h-5 text-metallic-gold" />
                  <span className="font-bold text-white text-xl">&lt;50ms</span>
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Latency</p>
              </div>
              {/* Force this to span 2 cols on very small screens if needed, or hide */}
              <div className="text-center lg:text-left col-span-2 sm:col-span-1">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="font-bold text-white text-xl">50k+</span>
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Users</p>
              </div>
            </div>
          </motion.div>

          {/* VISUAL SIDE (Chart Interface) */}
          <motion.div 
            className="flex-1 relative w-full max-w-[90vw] sm:max-w-lg lg:max-w-none mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 bg-black border border-white/20 p-4 sm:p-6 shadow-2xl">
              {/* Chart Header */}
              <div className="flex flex-row items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-metallic-gold flex items-center justify-center shrink-0">
                    <Activity className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white font-bold uppercase tracking-wider text-sm sm:text-base truncate">Market Pulse</div>
                    <div className="text-[10px] sm:text-xs text-emerald-accent flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-accent animate-pulse" />
                      LIVE_ANALYSIS
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-white font-mono font-bold text-base sm:text-xl">BTC/USDT</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 uppercase">Perpetual</div>
                </div>
              </div>
              
              {/* Chart Body */}
              <div className="h-40 sm:h-48 mb-6 relative overflow-hidden bg-rich-black border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <BitcoinPulse />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32">
                  <TradingChartMini color="#7c3aed" />
                </div>
              </div>

              {/* Chart Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/5 p-3 sm:p-4 border border-white/10">
                  <div className="text-[10px] sm:text-xs text-gray-400 mb-1 uppercase tracking-wider">24h Volume</div>
                  <div className="text-base sm:text-xl font-mono font-bold text-white">$42.8B</div>
                </div>
                <div className="bg-white/5 p-3 sm:p-4 border border-white/10">
                  <div className="text-[10px] sm:text-xs text-gray-400 mb-1 uppercase tracking-wider">Open Interest</div>
                  <div className="text-base sm:text-xl font-mono font-bold text-white">$12.5B</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Borders */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 border-t-2 border-r-2 border-metallic-gold opacity-50 hidden sm:block" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 border-b-2 border-l-2 border-emerald-accent opacity-50 hidden sm:block" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}