"use client";

import { motion } from "framer-motion";

const LOGOS = [
  "Bitcoin", "Ethereum", "Binance", "Coinbase", "Kraken", "Gemini", "KuCoin", "Huobi", "OKX", "Bybit"
];

export function TrustedPartners() {
  return (
    <div className="w-full border-y border-white/5 bg-black/50 backdrop-blur-sm py-10 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
          Integrated with Top Exchanges & Wallets
        </p>
      </div>
      
      <div className="flex relative">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="text-2xl font-bold text-gray-600 hover:text-white transition-colors cursor-default">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
