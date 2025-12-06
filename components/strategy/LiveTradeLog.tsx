"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ArrowRight, Hash, Activity, Globe, Zap, Server } from "lucide-react";

// Expanded mock data to look more impressive and varied
const MOCK_LOGS = [
  { bot: "AI-Alpha", action: "Arbitrage", pair: "BTC/USDT", exchange: "Binance > Kraken", profit: "+0.42%", latency: "12ms" },
  { bot: "AI-Beta", action: "Flash Loan", pair: "ETH/DAI", exchange: "Uniswap > Sushi", profit: "+1.24%", latency: "45ms" },
  { bot: "AI-Gamma", action: "Scalp", pair: "SOL/USDC", exchange: "Coinbase Pro", profit: "+0.15%", latency: "8ms" },
  { bot: "AI-Delta", action: "Liquidity", pair: "USDT/USDC", exchange: "Curve Finance", profit: "+0.05%", latency: "110ms" },
  { bot: "AI-Alpha", action: "Arbitrage", pair: "XRP/USDT", exchange: "KuCoin > Bybit", profit: "+0.33%", latency: "22ms" },
  { bot: "AI-Omega", action: "MEV", pair: "WETH/USDT", exchange: "Mempool", profit: "+2.10%", latency: "2ms" },
];

export function LiveTradeLog() {
  const [logs, setLogs] = useState(MOCK_LOGS);
  const [nodeCount, setNodeCount] = useState(142);
  const [networkLatency, setNetworkLatency] = useState(24);

  // Simulate live data feed and network stats
  useEffect(() => {
    const tradeInterval = setInterval(() => {
      const newLog = MOCK_LOGS[Math.floor(Math.random() * MOCK_LOGS.length)];
      // Add slight variance to profit for realism
      const variance = (Math.random() * 0.1 - 0.05).toFixed(2);
      const realisticLog = { 
        ...newLog, 
        profit: `+${(parseFloat(newLog.profit) + parseFloat(variance)).toFixed(2)}%`,
        latency: `${Math.floor(Math.random() * 50 + 5)}ms`
      };
      
      setLogs((prev) => [realisticLog, ...prev.slice(0, 6)]);
      setNetworkLatency(Math.floor(Math.random() * 10 + 20));
    }, 1200);

    return () => clearInterval(tradeInterval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl border border-white/10 bg-[#050505]/90 backdrop-blur-xl font-mono text-sm overflow-hidden relative shadow-2xl shadow-emerald-900/10">
      
      {/* 1. Matrix/Code Background Effect */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none overflow-hidden select-none">
        <div className="flex justify-around text-[10px] leading-3 text-emerald-accent">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: "100%", opacity: [0, 1, 0] }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
              className="flex flex-col items-center"
            >
              {Array.from({ length: 15 }).map((_, j) => (
                <div key={j} className="my-1">{Math.random() > 0.5 ? "1" : "0"}</div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. Scanner Line Effect (The "Search" Visual) */}
      <motion.div 
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent z-0"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* 3. Terminal Content */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-3 text-metallic-gold">
            <div className="p-1.5 bg-metallic-gold/10 rounded border border-metallic-gold/20">
                <Terminal className="h-4 w-4" />
            </div>
            <div>
                <span className="font-bold tracking-wider block text-xs sm:text-sm">APEX_AI_ENGINE_V4</span>
                <span className="text-[10px] text-gray-400 font-normal">Real-Time Execution Log</span>
            </div>
          </div>
          
          {/* Live Network Stats */}
          <div className="flex items-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-blue-400" />
                <span className="hidden sm:inline">Active Nodes:</span>
                <span className="text-white font-mono">{nodeCount}</span>
            </div>
            <div className="flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-yellow-400" />
                <span className="hidden sm:inline">Network Latency:</span>
                <span className="text-emerald-400 font-mono">{networkLatency}ms</span>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <span className="text-emerald-400 font-bold tracking-wide">LIVE</span>
            </div>
          </div>
        </div>

        {/* Trade Log List */}
        <div className="p-2 sm:p-4 min-h-[320px]">
           {/* Table Headers (Desktop Only) */}
           <div className="hidden sm:grid grid-cols-12 gap-4 px-3 py-2 text-xs text-gray-500 uppercase tracking-wider mb-2 font-semibold">
                <div className="col-span-2">AI Agent</div>
                <div className="col-span-2">Strategy</div>
                <div className="col-span-2">Pair</div>
                <div className="col-span-4">Route Path</div>
                <div className="col-span-2 text-right">Net Profit</div>
           </div>

           <div className="space-y-1 overflow-hidden relative">
            <AnimatePresence mode="popLayout" initial={false}>
                {logs.map((log, i) => {
                    const isHighProfit = parseFloat(log.profit) > 1.0;
                    return (
                        <motion.div
                            layout
                            key={`${log.bot}-${i}-${Date.now()}`} // Unique key for every new item
                            initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.95, filter: "blur(2px)" }}
                            transition={{ duration: 0.3 }}
                            className={`
                                group relative grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center 
                                p-3 sm:py-2.5 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/5 transition-all
                                ${i === 0 ? "bg-white/[0.03]" : ""}
                            `}
                        >
                            {/* Mobile Layout: Flex Row for Header info */}
                            <div className="col-span-1 sm:col-span-2 flex items-center justify-between sm:justify-start gap-2">
                                <div className="flex items-center gap-2">
                                    <Server className="w-3 h-3 text-blue-500/70" />
                                    <span className="text-blue-300 font-bold text-xs sm:text-sm">{log.bot}</span>
                                </div>
                                {/* Mobile-only timestamp or small latency */}
                                <span className="sm:hidden text-[10px] text-gray-600 font-mono">{log.latency}</span>
                            </div>

                            {/* Strategy Badge */}
                            <div className="col-span-1 sm:col-span-2 flex items-center gap-2">
                                <Activity className="w-3 h-3 text-gray-500 hidden sm:block" />
                                <span className="text-gray-300 text-xs sm:text-sm font-medium bg-white/5 px-2 py-0.5 rounded sm:bg-transparent sm:p-0">
                                    {log.action}
                                </span>
                            </div>

                            {/* Asset Pair */}
                            <div className="col-span-1 sm:col-span-2 text-xs sm:text-sm text-gray-400 font-mono">
                                {log.pair}
                            </div>

                            {/* Exchange Route */}
                            <div className="col-span-1 sm:col-span-4 flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm min-w-0">
                                <Hash className="w-3 h-3 shrink-0 opacity-50" />
                                <span className="truncate text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {log.exchange}
                                </span>
                            </div>

                            {/* Profit Badge (Always visible & highlighted) */}
                            <div className="col-span-1 sm:col-span-2 flex items-center justify-between sm:justify-end mt-1 sm:mt-0">
                                <span className="sm:hidden text-xs text-gray-600 uppercase">Realized PnL:</span>
                                <div className={`
                                    relative flex items-center gap-1.5 px-2.5 py-1 rounded font-bold text-xs sm:text-sm tracking-tight border
                                    ${isHighProfit 
                                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]" 
                                        : "bg-emerald-900/10 text-emerald-500 border-emerald-500/10"}
                                `}>
                                    {log.profit}
                                    {isHighProfit && (
                                        <span className="absolute -right-1 -top-1 flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
           </div>
        </div>
        
        {/* Footer Status Bar */}
        <div className="mt-auto border-t border-white/5 bg-black/20 p-2 text-[10px] text-gray-600 flex justify-between px-4">
            <span className="font-mono">ENCRYPTED_CONNECTION_ESTABLISHED_TLS_1.3</span>
            <div className="flex gap-4">
                <span>CPU: 12%</span>
                <span>MEM: 442MB</span>
            </div>
        </div>
      </div>
    </div>
  );
}