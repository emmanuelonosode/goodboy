"use client";

import { UserPlus, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  {
    icon: UserPlus,
    title: "Create Account",
    desc: "Sign up in seconds. No complex paperwork required.",
  },
  {
    icon: Zap,
    title: "Activate AI",
    desc: "Select your strategy and risk level. Let the AI take over.",
  },
  {
    icon: TrendingUp,
    title: "Watch It Grow",
    desc: "Monitor your portfolio in real-time as our bots execute trades.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden bg-rich-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How It <span className="text-metallic-gold">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Automated wealth generation in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/10" />

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
                <div className="h-24 w-24 bg-black border-2 border-white/10 flex items-center justify-center relative z-10 group-hover:border-metallic-gold transition-colors duration-300 transform rotate-45 group-hover:rotate-0 transition-transform">
                  <step.icon className="h-10 w-10 text-metallic-gold transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
                <div className="absolute -top-4 -right-4 h-8 w-8 bg-metallic-gold text-black font-bold flex items-center justify-center z-20 text-sm">
                  {i + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 mt-4">{step.title}</h3>
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
