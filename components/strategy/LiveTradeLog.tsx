"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowRight, Hash } from "lucide-react";

const MOCK_LOGS = [
  { bot: "Bot-Alpha", action: "Arbitrage", pair: "BTC/USDT", exchange: "Binance > Kraken", profit: "+0.42%" },
  { bot: "Bot-Beta", action: "Flash Loan", pair: "ETH/DAI", exchange: "Uniswap > Sushi", profit: "+1.2%" },
  { bot: "Bot-Gamma", action: "Scalp", pair: "SOL/USDC", exchange: "Coinbase", profit: "+0.15%" },
  { bot: "Bot-Alpha", action: "Arbitrage", pair: "XRP/USDT", exchange: "KuCoin > Binance", profit: "+0.33%" },
  { bot: "Bot-Delta", action: "Liquidity", pair: "USDT/USDC", exchange: "Curve", profit: "+0.05%" },
];

export function LiveTradeLog() {
  const [logs, setLogs] = useState(MOCK_LOGS);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = MOCK_LOGS[Math.floor(Math.random() * MOCK_LOGS.length)];
      setLogs((prev) => [newLog, ...prev.slice(0, 6)]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-black/80 backdrop-blur-md font-mono text-sm overflow-hidden relative group">
      {/* Matrix/Code Background Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="flex justify-around text-[10px] leading-3 text-emerald-accent/50">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100 }}
              animate={{ y: "100%" }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <div key={j}>{Math.random() > 0.5 ? "1" : "0"}</div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 p-6">
        <div className="mb-4 flex items-center gap-2 text-metallic-gold border-b border-white/10 pb-4">
          <Terminal className="h-4 w-4" />
          <span className="font-bold tracking-wider">LIVE_EXECUTION_TERMINAL_V2.0</span>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs text-emerald-accent">SYSTEM_ONLINE</span>
            <span className="flex h-2 w-2 rounded-full bg-emerald-accent animate-pulse" />
          </div>
        </div>
        
        <div className="space-y-1 h-[300px] overflow-hidden relative">
          <div className="absolute inset-0 bg-black/20 pointer-events-none z-20" />
          <AnimatePresence mode="popLayout">
            {logs.map((log, i) => (
              <motion.div
                key={`${log.bot}-${i}-${Date.now()}`}
                initial={{ opacity: 0, x: -20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: "auto" }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                className="flex items-center gap-3 border-l-2 border-white/5 pl-3 py-2 text-xs md:text-sm hover:bg-white/5 transition-colors rounded-r"
              >
                <span className="text-blue-400 font-bold w-20">[{log.bot}]</span>
                <span className="text-white font-semibold w-20">{log.action}</span>
                <span className="text-gray-400 w-24">{log.pair}</span>
                <span className="flex items-center gap-1 text-gray-500 flex-1 truncate">
                  <Hash className="w-3 h-3" />
                  {log.exchange}
                </span>
                <span className="ml-auto font-bold text-emerald-accent bg-emerald-accent/10 px-2 py-0.5 rounded border border-emerald-accent/20">
                  {log.profit}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
