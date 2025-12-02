"use client";

import { motion } from "framer-motion";

export function BitcoinPulse() {
  return (
    <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
      {/* Outer Glow Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-metallic-gold/30"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Core Bitcoin Logo */}
      <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-metallic-gold to-yellow-600 flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.4)]">
        <div className="absolute inset-1 rounded-full border-2 border-white/20" />
        <span className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">₿</span>
        
        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-50" />
      </div>
    </div>
  );
}
