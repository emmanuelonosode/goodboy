"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Michael R.",
    role: "Platinum Investor",
    content: "I was skeptical at first, but EliteCore has consistently delivered on their promises. The automated arbitrage strategies are truly game-changing.",
    image: "/avatars/user1.jpg",
  },
  {
    name: "Jennifer Wu",
    role: "Crypto Enthusiast",
    content: "The transparency is what sets them apart. I can see the live trade logs and the withdrawals are instant. Highly recommended!",
    image: "/avatars/user2.jpg",
  },
  {
    name: "David K.",
    role: "Institutional Partner",
    content: "A robust platform with enterprise-grade security. We've moved a significant portion of our portfolio to EliteCore's managed accounts.",
    image: "/avatars/user3.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-metallic-gold">Thousands</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join a global community of investors who are building wealth with our advanced algorithmic trading platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <Quote className="absolute top-8 right-8 h-8 w-8 text-metallic-gold/20" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 text-metallic-gold fill-metallic-gold" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-800 border border-white/10" />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-metallic-gold">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
