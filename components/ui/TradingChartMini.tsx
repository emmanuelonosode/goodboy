"use client";

import { motion } from "framer-motion";

export function TradingChartMini({
  data,
  color = "#10B981",
}: {
  data?: number[];
  color?: string;
}) {
  // Generate path from data
  const generatePath = (dataPoints: number[]) => {
    if (!dataPoints || dataPoints.length === 0) return "";
    
    // Normalize data to fit 100x60
    const max = Math.max(...dataPoints);
    const min = Math.min(...dataPoints);
    const range = max - min;
    const widthStep = 100 / (dataPoints.length - 1);

    return dataPoints
      .map((val, i) => {
        const x = i * widthStep;
        // Invert y because SVG 0 is top
        const y = 60 - ((val - min) / (range || 1)) * 50 - 5; // 5px padding
        return `${i === 0 ? "M" : "L"} ${x},${y}`;
      })
      .join(" ");
  };

  const points = data && data.length > 0 
    ? generatePath(data)
    : "M 0,50 L 10,45 L 20,55 L 30,40 L 40,45 L 50,30 L 60,35 L 70,20 L 80,25 L 90,10 L 100,5";

  // For the area fill, we need to close the path
  const areaPoints = data && data.length > 0
    ? `${points} L 100,60 L 0,60 Z`
    : `${points} L 100,60 L 0,60 Z`; // Simplified regex replace fallback

  return (
    <div className="w-full h-16 opacity-50 overflow-hidden">
      <svg viewBox="0 0 100 60" className="w-full h-full" preserveAspectRatio="none">
        <motion.path
          d={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d={areaPoints}
          fill={`url(#gradient-${color.replace("#", "")})`}
          fillOpacity="0.2"
          stroke="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <defs>
          <linearGradient id={`gradient-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
