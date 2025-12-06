"use client";

import { useState } from "react";
import { Search, TrendingUp, ArrowUpRight, ArrowDownRight, Activity, Globe, Zap, Shield, BarChart3 } from "lucide-react";
import Link from "next/link";
import { TradingChartMini } from "@/components/ui/TradingChartMini";
import { BitcoinPulse } from "@/components/ui/BitcoinPulse";
import { useCryptoData } from "@/hooks/useCrypto";
import { motion } from "framer-motion";

export default function MarketsPage() {
  const { data, loading, error } = useCryptoData();
  const [search, setSearch] = useState("");

  const filteredData = data.filter(
    (asset) =>
      asset.name.toLowerCase().includes(search.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // Get top 3 trending assets (highest 24h change)
  const trendingAssets = [...data]
    .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
    .slice(0, 3);

  // Mock Global Stats (In a real app, fetch these)
  const globalStats = [
    { label: "Global Market Cap", value: "$2.45T", change: "+1.2%", positive: true },
    { label: "24h Volume", value: "$84.2B", change: "-5.4%", positive: false },
    { label: "BTC Dominance", value: "52.1%", change: "+0.1%", positive: true },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* 1. Header & Global Stats HUD */}
        <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-8 mb-12 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase">Live Market Data</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Market <span className="text-metallic-gold">Overview</span>
                </h1>
                <p className="text-gray-400 text-lg">
                    Access deep liquidity and institutional-grade execution on over 50+ digital assets. 
                    <span className="hidden sm:inline"> Zero fees on your first $10k traded.</span>
                </p>
            </div>

            {/* Global Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full xl:w-auto">
                {globalStats.map((stat, i) => (
                    <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-1">{stat.label}</p>
                        <div className="flex items-end gap-2">
                            <span className="text-xl font-bold font-mono">{stat.value}</span>
                            <span className={`text-xs font-medium mb-1 ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
             <div className="relative">
                 <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-metallic-gold"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                     <Activity className="w-6 h-6 text-metallic-gold/50" />
                 </div>
             </div>
             <p className="text-gray-500 mt-4 font-mono text-sm animate-pulse">ESTABLISHING_FEED...</p>
          </div>
        ) : error ? (
          <div className="p-12 text-center border border-red-500/20 bg-red-500/5 rounded-2xl">
            <h3 className="text-red-400 font-bold text-lg mb-2">Data Feed Interrupted</h3>
            <p className="text-gray-400 mb-6">{error}</p>
            <button 
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors font-medium"
            >
                Reconnect
            </button>
          </div>
        ) : (
          <>
            {/* 2. Trending Opportunities (The "Alpha") */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                 <h2 className="text-2xl font-bold flex items-center gap-2">
                    <TrendingUp className="text-metallic-gold w-6 h-6" /> 
                    Top Movers <span className="text-sm font-normal text-gray-500 ml-2">(24h)</span>
                 </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trendingAssets.map((asset, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={asset.id} 
                    className="relative overflow-hidden p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-metallic-gold/30 transition-all group"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <TrendingUp className="w-16 h-16 text-metallic-gold transform rotate-12" />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <img src={asset.image} alt={asset.name} className="w-12 h-12 rounded-full shadow-lg" />
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">{asset.name}</h3>
                                    <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                                        +{asset.price_change_percentage_24h.toFixed(2)}%
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Current Price</p>
                                <p className="text-2xl font-bold font-mono text-white">${asset.current_price.toLocaleString()}</p>
                            </div>
                            <Link href="/signup">
                                <button className="h-10 w-10 rounded-full bg-metallic-gold text-black flex items-center justify-center hover:scale-110 transition-transform">
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 3. Persuasive Banner (Mid-Page Conversion) */}
            <div className="mb-16 rounded-2xl bg-gradient-to-r from-metallic-gold/20 via-white/5 to-white/5 border border-metallic-gold/20 p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-20 hidden md:block">
                    <BitcoinPulse />
                </div>
                <div className="relative z-10 max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to trade with an edge?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center gap-2 text-gray-300">
                            <Zap className="w-4 h-4 text-metallic-gold" /> <span>&lt;50ms Latency execution</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                            <Shield className="w-4 h-4 text-metallic-gold" /> <span>100% Asset backing</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                            <BarChart3 className="w-4 h-4 text-metallic-gold" /> <span>Advanced charting tools</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                            <Globe className="w-4 h-4 text-metallic-gold" /> <span>Global liquidity access</span>
                        </div>
                    </div>
                    <Link href="/signup">
                        <button className="px-8 py-3 bg-metallic-gold hover:bg-yellow-500 text-black font-bold rounded-lg transition-colors flex items-center gap-2">
                            Create Free Account <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>
            </div>

            {/* 4. Deep Market Data Table */}
            <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <h2 className="text-2xl font-bold">Market Assets</h2>
                <div className="relative w-full sm:w-auto min-w-[300px]">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search Symbol (e.g. BTC)"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 text-sm text-white placeholder-gray-500 focus:border-metallic-gold/50 focus:bg-black focus:outline-none transition-all"
                    />
                </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.02] text-xs uppercase tracking-wider text-gray-500">
                      <th className="p-4 font-semibold w-12">#</th>
                      <th className="p-4 font-semibold">Asset Name</th>
                      <th className="p-4 font-semibold text-right">Price</th>
                      <th className="p-4 font-semibold text-right">24h Change</th>
                      <th className="p-4 font-semibold text-right hidden lg:table-cell">Market Cap</th>
                      <th className="p-4 font-semibold text-right hidden xl:table-cell">Volume (24h)</th>
                      <th className="p-4 font-semibold w-32 hidden md:table-cell">7d Trend</th>
                      <th className="p-4 font-semibold text-right">Trade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm">
                    {filteredData.map((asset, index) => (
                      <tr
                        key={asset.id}
                        className="group hover:bg-white/[0.03] transition-colors"
                      >
                        <td className="p-4 text-gray-600 font-mono">{index + 1}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img src={asset.image} alt={asset.name} className="w-8 h-8 rounded-full" />
                            <div>
                              <p className="font-bold text-white group-hover:text-metallic-gold transition-colors">{asset.name}</p>
                              <p className="text-xs text-gray-500 font-mono">{asset.symbol.toUpperCase()}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-right font-medium font-mono text-white">
                          ${asset.current_price.toLocaleString()}
                        </td>
                        <td className="p-4 text-right">
                          <span
                            className={`inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-mono text-xs font-medium ${
                              asset.price_change_percentage_24h >= 0
                                ? "bg-emerald-500/10 text-emerald-400"
                                : "bg-red-500/10 text-red-400"
                            }`}
                          >
                            {asset.price_change_percentage_24h >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                            {Math.abs(asset.price_change_percentage_24h).toFixed(2)}%
                          </span>
                        </td>
                        <td className="p-4 text-right text-gray-400 font-mono hidden lg:table-cell">
                          ${(asset.market_cap / 1_000_000_000).toFixed(2)}B
                        </td>
                        <td className="p-4 text-right text-gray-400 font-mono hidden xl:table-cell">
                           ${(asset.total_volume / 1_000_000).toFixed(2)}M
                        </td>
                        <td className="p-4 hidden md:table-cell opacity-50 group-hover:opacity-100 transition-opacity">
                          <div className="h-8 w-24 ml-auto">
                            <TradingChartMini 
                              data={asset.sparkline_in_7d.price}
                              color={asset.price_change_percentage_24h >= 0 ? "#10B981" : "#EF4444"} 
                            />
                          </div>
                        </td>
                        <td className="p-4 text-right">
                          <Link
                            href={`/trade/${asset.id}`}
                            className="inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-metallic-gold hover:text-black hover:border-metallic-gold focus:ring-2 focus:ring-metallic-gold/50"
                          >
                            Trade
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Empty State */}
              {filteredData.length === 0 && (
                <div className="py-20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-4">
                    <Search className="w-6 h-6 text-gray-500" />
                  </div>
                  <h3 className="text-white font-bold mb-1">No assets found</h3>
                  <p className="text-gray-500 text-sm">We couldn't find any assets matching "{search}"</p>
                  <button 
                    onClick={() => setSearch("")}
                    className="mt-4 text-metallic-gold hover:underline text-sm"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}