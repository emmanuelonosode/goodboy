"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const DATA = [
  { name: "Mon", btc: 42000, eth: 2200, sol: 98 },
  { name: "Tue", btc: 43500, eth: 2350, sol: 105 },
  { name: "Wed", btc: 42800, eth: 2280, sol: 102 },
  { name: "Thu", btc: 44200, eth: 2400, sol: 110 },
  { name: "Fri", btc: 45500, eth: 2550, sol: 118 },
  { name: "Sat", btc: 46000, eth: 2600, sol: 125 },
  { name: "Sun", btc: 47500, eth: 2750, sol: 135 },
];

export function MarketTrends() {
  return (
    <section className="py-24 bg-white/5 border-y border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Profit from <br />
              <span className="text-metallic-gold">Market Volatility</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Our advanced AI algorithms analyze market trends 24/7 to identify profitable entry and exit points. Whether the market goes up or down, our strategies are designed to generate consistent returns.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-black/40 border border-white/10">
                <div className="text-sm text-gray-500 mb-2">24h Volume</div>
                <div className="text-2xl font-bold text-white">$1.2B+</div>
              </div>
              <div className="p-6 rounded-xl bg-black/40 border border-white/10">
                <div className="text-sm text-gray-500 mb-2">Active Traders</div>
                <div className="text-2xl font-bold text-white">50k+</div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] w-full rounded-2xl bg-black/40 border border-white/10 p-4 backdrop-blur-sm"
          >
            <div className="mb-4 flex items-center justify-between px-4">
              <h3 className="font-bold text-white">Market Performance</h3>
              <div className="flex gap-4 text-sm">
                <span className="flex items-center gap-2 text-metallic-gold">
                  <span className="h-2 w-2 rounded-full bg-metallic-gold" /> BTC
                </span>
                <span className="flex items-center gap-2 text-emerald-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> ETH
                </span>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DATA}>
                <defs>
                  <linearGradient id="colorBtc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0f', borderColor: 'rgba(255,255,255,0.1)', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="btc" 
                  stroke="#D4AF37" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorBtc)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="eth" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorEth)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
