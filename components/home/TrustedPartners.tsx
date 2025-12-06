"use client";

import { motion } from "framer-motion";
import { useCryptoData } from "@/hooks/useCrypto";

const STATIC_LOGOS = [
  "Bitcoin", "Ethereum", "Binance", "Coinbase", "Kraken", "Gemini", "KuCoin", "Huobi", "OKX", "Bybit"
];

export function TrustedPartners() {
  const { data, loading } = useCryptoData();

  // Use real data if available, otherwise static fallback (text driven for fallback)
  const showRealData = !loading && data.length > 0;
  
  // Prepare list for ticker (duplicate for seamless loop)
  // If real data, take top 20
  const items = showRealData ? data.slice(0, 20) : STATIC_LOGOS;
  const tickerItems = [...items, ...items];

  return (
    <div className="w-full border-y border-white/5 bg-black/50 backdrop-blur-sm py-10 overflow-hidden relative z-20">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
          {showRealData ? "Live Market Prices & Partners" : "Integrated with Top Exchanges"}
        </p>
      </div>
      
      <div className="flex relative overflow-hidden">
        {/* Gradient masks for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <motion.div
          className="flex gap-16 items-center whitespace-nowrap px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {tickerItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group cursor-pointer">
              {showRealData ? (
                // Safe cast because we know it's CoinData type if showRealData is true
                // We use 'as any' to avoid complex type guarding in map, or just logic check
                 <>
                   <img 
                     src={(item as any).image} 
                     alt={(item as any).name} 
                     className="w-8 h-8 rounded-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
                   />
                   <div className="flex flex-col">
                     <span className="font-bold text-gray-400 group-hover:text-white transition-colors">{(item as any).symbol.toUpperCase()}</span>
                     <span className={`text-xs ${(item as any).price_change_percentage_24h >= 0 ? "text-emerald-500" : "text-red-500"}`}>
                        ${(item as any).current_price.toLocaleString()}
                     </span>
                   </div>
                 </>
              ) : (
                <span className="text-2xl font-bold text-gray-600 hover:text-white transition-colors">
                  {item as string}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
