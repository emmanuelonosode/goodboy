"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Headphones, Lock, Globe, Award } from "lucide-react";

const FEATURES = [
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
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Our dedicated team is available round the clock to assist you with any queries."
  },
  {
    icon: Lock,
    title: "Fully Regulated",
    description: "We operate under strict regulatory compliance to ensure your peace of mind."
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
            We combine cutting-edge technology with traditional financial wisdom to deliver superior results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, translateY: -5 }}
              className="p-8 rounded-2xl bg-midnight-blue/40 border border-white/5 hover:border-metallic-gold/30 hover:bg-midnight-blue/60 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-metallic-gold/10 transition-colors">
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
