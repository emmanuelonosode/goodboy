"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const MOCK_PRICES = [
  { symbol: "BTC", price: "64,230.50", change: "+2.4%", up: true },
  { symbol: "ETH", price: "3,450.12", change: "+1.8%", up: true },
  { symbol: "SOL", price: "145.60", change: "-0.5%", up: false },
  { symbol: "BNB", price: "590.20", change: "+0.2%", up: true },
  { symbol: "XRP", price: "0.62", change: "-1.1%", up: false },
  { symbol: "ADA", price: "0.45", change: "+0.8%", up: true },
  { symbol: "DOT", price: "7.20", change: "-2.3%", up: false },
  { symbol: "BTC", price: "64,230.50", change: "+2.4%", up: true }, // Repeat for seamless loop
  { symbol: "ETH", price: "3,450.12", change: "+1.8%", up: true },
  { symbol: "SOL", price: "145.60", change: "-0.5%", up: false },
];

export function TickerTape() {
  return (
    <div className="w-full bg-rich-black border-b border-white/5 overflow-hidden py-2 z-50 relative">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...MOCK_PRICES, ...MOCK_PRICES].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm font-medium">
              <span className="text-slate-400">{item.symbol}</span>
              <span className="text-white">${item.price}</span>
              <span
                className={`flex items-center text-xs ${
                  item.up ? "text-emerald-accent" : "text-red-500"
                }`}
              >
                {item.up ? (
                  <TrendingUp className="w-3 h-3 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-1" />
                )}
                {item.change}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
