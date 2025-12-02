"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";

const PAYOUTS = [
  { user: "CryptoKing99", amount: "$12,450.00", asset: "BTC" },
  { user: "Sarah_Invest", amount: "$5,200.50", asset: "USDT" },
  { user: "MoonWalker", amount: "$8,900.00", asset: "ETH" },
  { user: "HODLer_01", amount: "$3,150.25", asset: "SOL" },
  { user: "RichDad", amount: "$15,000.00", asset: "USDT" },
];

export function LivePayouts() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % PAYOUTS.length);
        setVisible(true);
      }, 500); // Wait for exit animation
    }, 8000); // Show every 8 seconds

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: -20 }}
          className="fixed bottom-8 left-8 z-50 flex items-center gap-4 rounded-xl border border-metallic-gold/20 bg-midnight-blue/90 p-4 shadow-2xl backdrop-blur-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
            <CheckCircle className="h-6 w-6 text-emerald-500" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">New Withdrawal Approved</p>
            <p className="text-xs text-gray-400">
              <span className="text-metallic-gold font-bold">{PAYOUTS[current].user}</span> just withdrew{" "}
              <span className="text-white font-mono">{PAYOUTS[current].amount}</span> via {PAYOUTS[current].asset}
            </p>
          </div>
          <button 
            onClick={() => setVisible(false)}
            className="absolute -top-2 -right-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white"
          >
            <X className="h-3 w-3" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
