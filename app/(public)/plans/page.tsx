"use client";

import { useRouter } from "next/navigation";
import { mockPlans } from "@/lib/mock-data";
import { PlanCard } from "@/components/invest/PlanCard";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, ArrowRight, HelpCircle, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // Assuming you have shadcn accordion, or I can use basic divs

export default function PlansPage() {
  const router = useRouter();

  const handleSelectPlan = (planName: string) => {
    // Mock auth check - In real app, check your auth context
    const isLoggedIn = false; 

    if (isLoggedIn) {
      router.push(`/dashboard/invest?plan=${planName}`);
    } else {
      toast.error("Please create an account to start investing", {
        description: "It only takes 30 seconds to join.",
        action: {
            label: "Sign Up",
            onClick: () => router.push("/signup")
        }
      });
      router.push("/signup");
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* 1. Hero Section with Value Prop */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-metallic-gold/10 border border-metallic-gold/20 text-metallic-gold text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3 h-3" />
            <span>Automated Wealth Creation</span>
          </div>
          <h1 className="mb-6 text-4xl md:text-6xl font-bold text-white tracking-tight">
            Institutional-Grade Returns <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Made Accessible.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 leading-relaxed mb-8">
            Stop letting inflation eat your savings. Our AI-driven arbitrage engines work 24/7 
            to compound your capital with minimized risk and maximized efficiency.
          </p>
          
          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
            <div>
                <p className="text-3xl font-bold text-white mb-1">$42M+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Total Volume</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-white mb-1">12k+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Active Investors</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-white mb-1">~0.01s</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Execution Speed</p>
            </div>
            <div>
                <p className="text-3xl font-bold text-emerald-400 mb-1">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Uptime</p>
            </div>
          </div>
        </div>

        {/* 2. The Plans Grid */}
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24"
        >
          {mockPlans.map((plan) => (
            <motion.div key={plan.name} variants={item} className="relative group">
              {/* "Popular" Glow Effect */}
              {plan.name === "Gold" && (
                <div className="absolute -inset-1 bg-gradient-to-b from-metallic-gold to-transparent rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity" />
              )}
              
              <PlanCard
                {...plan}
                isPopular={plan.name === "Gold"}
                onSelect={() => handleSelectPlan(plan.name)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 3. "Why Invest" / Objection Handling */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
                <h2 className="text-3xl font-bold mb-6">Why smart money chooses <span className="text-metallic-gold">Apex Vault</span></h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                            <ShieldCheck className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Bank-Grade Security</h3>
                            <p className="text-gray-400 text-sm">Your assets are held in segregated cold storage wallets. We utilize MPC (Multi-Party Computation) to ensure zero single points of failure.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                            <Globe className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Global Liquidity Access</h3>
                            <p className="text-gray-400 text-sm">We aggregate liquidity from top-tier exchanges (Binance, Kraken, Coinbase) to find the absolute best entry prices for every trade.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* FAQ Mini-Section */}
            <div className="bg-white/5 rounded-2xl border border-white/10 p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <HelpCircle className="text-metallic-gold" /> Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white/5 p-4 text-gray-200">
                            <h4 className="font-medium">Can I withdraw my capital anytime?</h4>
                            <svg className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </summary>
                        <p className="mt-4 px-4 leading-relaxed text-gray-400 text-sm">
                            Yes. Capital lock-up periods depend on the plan selected, but profits are credited daily and can be withdrawn instantly to your external wallet.
                        </p>
                    </details>
                    
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-white/5 p-4 text-gray-200">
                            <h4 className="font-medium">How is the profit generated?</h4>
                            <svg className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </summary>
                        <p className="mt-4 px-4 leading-relaxed text-gray-400 text-sm">
                            We utilize high-frequency arbitrage trading. Our AI detects price differences for the same asset across different exchanges and executes simultaneous buy/sell orders to capture the profit margin.
                        </p>
                    </details>
                </div>
            </div>
        </div>

        {/* 4. Final CTA */}
        <div className="text-center bg-gradient-to-r from-metallic-gold/20 via-metallic-gold/5 to-transparent rounded-3xl p-12 border border-metallic-gold/20">
            <h2 className="text-3xl font-bold text-white mb-4">Don't let your capital sit idle.</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join the top 1% of investors leveraging AI to outperform the market. Start with as little as $100.</p>
            <button 
                onClick={() => router.push("/signup")}
                className="bg-metallic-gold hover:bg-yellow-500 text-black font-bold px-10 py-4 rounded-full text-lg transition-all transform hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-metallic-gold/20"
            >
                Get Started Now <ArrowRight className="w-5 h-5" />
            </button>
        </div>

      </div>
    </div>
  );
}