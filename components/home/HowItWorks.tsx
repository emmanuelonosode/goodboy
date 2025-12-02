"use client";

import { UserPlus, TrendingUp, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  {
    icon: UserPlus,
    title: "Register Account",
    desc: "Sign up in seconds. No complex paperwork required.",
  },
  {
    icon: Wallet,
    title: "Deposit Funds",
    desc: "Choose from multiple payment methods including Crypto & Fiat.",
  },
  {
    icon: TrendingUp,
    title: "Start Earning",
    desc: "Watch your portfolio grow with our automated trading bots.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How It <span className="text-metallic-gold">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get started with EliteCore in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-metallic-gold/30 to-transparent" />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="relative mb-8">
                <div className="h-24 w-24 rounded-full bg-black border border-metallic-gold/20 flex items-center justify-center relative z-10 group-hover:border-metallic-gold transition-colors duration-300 shadow-[0_0_30px_-10px_rgba(212,175,55,0.3)]">
                  <step.icon className="h-10 w-10 text-metallic-gold" />
                </div>
                <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-metallic-gold text-black font-bold flex items-center justify-center z-20">
                  {i + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
