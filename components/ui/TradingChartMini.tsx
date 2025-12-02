"use client";

import { motion } from "framer-motion";

export function TradingChartMini({ color = "#10B981" }: { color?: string }) {
  // Generate random data points for the path
  const points = "0,50 10,45 20,55 30,40 40,45 50,30 60,35 70,20 80,25 90,10 100,5";

  return (
    <div className="w-full h-16 opacity-50 overflow-hidden">
      <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="none">
        <motion.path
          d={`M ${points}`}
          fill="none"
          stroke={color}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d={`M ${points} L 100,60 L 0,60 Z`}
          fill={`url(#gradient-${color})`}
          fillOpacity="0.2"
          stroke="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
