"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CryptoBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Floating Bitcoin Symbols */}
      {/* Floating Crypto Symbols */}
      {[...Array(8)].map((_, i) => {
        const symbols = ["₿", "Ξ", "SOL", "₮", "BNB", "ADA", "DOGE", "DOT"];
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        
        return (
          <motion.div
            key={`crypto-${i}`}
            className="absolute text-metallic-gold/20 font-bold text-6xl md:text-8xl select-none font-mono"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              rotate: Math.random() * 360,
              scale: 0.5 + Math.random() * 0.5,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -100],
              rotate: [null, Math.random() * 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {symbol}
          </motion.div>
        );
      })}

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-metallic-gold/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
    </div>
  );
}
