"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-metallic-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
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
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the future of wealth management with our high-yield investment platform. 
            Bank-grade security, instant withdrawals, and 24/7 expert support.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

        {/* Floating Stats or Visuals could go here */}
      </div>
    </section>
  );
}
