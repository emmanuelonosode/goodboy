"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", profit: 120 },
  { name: "Tue", profit: 180 },
  { name: "Wed", profit: 150 },
  { name: "Thu", profit: 250 },
  { name: "Fri", profit: 210 },
  { name: "Sat", profit: 320 },
  { name: "Sun", profit: 290 },
];

export function ProfitChart() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h3 className="mb-6 text-lg font-semibold text-white">Profit History</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#9ca3af"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#fff" }}
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="#10b981"
              fillOpacity={1}
              fill="url(#colorProfit)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
