"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Headphones, Lock, Globe, Award, Brain, Cpu } from "lucide-react";

const FEATURES = [
  {
    icon: Brain,
    title: "AI Precision Trading",
    description: "Our algorithms analyze millions of data points per second to execute profitable trades."
  },
  {
    icon: Cpu,
    title: "Automated Execution",
    description: "Zero manual intervention needed. The system trades 24/7 on your behalf."
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your funds are protected by military-grade encryption and cold storage protocols."
  },
  {
    icon: Zap,
    title: "Instant Withdrawals",
    description: "Access your profits instantly. No waiting periods, no hidden fees."
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Trade from anywhere in the world with our low-latency global infrastructure."
  },
  {
    icon: Award,
    title: "Best-in-Class Rates",
    description: "Enjoy industry-leading interest rates and low trading commissions."
  }
];

export function FeatureGrid() {
  return (
    <section className="py-20 bg-rich-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose EliteCore?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We combine cutting-edge AI technology with traditional financial wisdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="p-8 bg-black border border-white/10 hover:border-metallic-gold transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-metallic-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-metallic-gold/10 transition-colors rounded-none border border-white/5">
                <feature.icon className="w-7 h-7 text-metallic-gold" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
