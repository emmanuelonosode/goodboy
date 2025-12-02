"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";

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
      setLogs((prev) => [newLog, ...prev.slice(0, 4)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm font-mono text-sm">
      <div className="mb-4 flex items-center gap-2 text-metallic-gold">
        <Terminal className="h-4 w-4" />
        <span className="font-bold">LIVE_TRADE_EXECUTION_LOG</span>
        <span className="ml-auto flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      </div>
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {logs.map((log, i) => (
            <motion.div
              key={`${log.bot}-${i}-${Date.now()}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-3 border-l-2 border-white/10 pl-3 text-gray-400"
            >
              <span className="text-blue-400">[{log.bot}]</span>
              <span className="text-white">{log.action}</span>
              <span className="text-gray-500">{log.pair}</span>
              <span className="flex items-center gap-1 text-xs">
                {log.exchange}
              </span>
              <span className="ml-auto font-bold text-emerald-400">{log.profit}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
