"use client";

import { useState } from "react";
import { Search, TrendingUp } from "lucide-react";
import { mockMarketData } from "@/lib/mock-data";
import Link from "next/link";
import { TradingChartMini } from "@/components/ui/TradingChartMini";
import { BitcoinPulse } from "@/components/ui/BitcoinPulse";

export default function MarketsPage() {
  const [search, setSearch] = useState("");

  const filteredData = mockMarketData.filter(
    (asset) =>
      asset.name.toLowerCase().includes(search.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 pt-40 pb-20">
      <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h1 className="mb-4 text-4xl font-bold text-white">Live Markets</h1>
          <p className="text-gray-400 max-w-lg">
            Track real-time prices, analyze market trends, and execute trades with institutional-grade precision.
          </p>
        </div>
        <div className="hidden md:block scale-75">
          <BitcoinPulse />
        </div>
      </div>

      <div className="mx-auto mb-8 max-w-md md:mx-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search assets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 text-white placeholder-gray-400 backdrop-blur-sm focus:border-metallic-gold focus:outline-none"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-sm text-gray-400">
                <th className="p-4 font-medium">Asset</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">24h Change</th>
                <th className="p-4 font-medium">Trend</th>
                <th className="p-4 font-medium">Volume</th>
                <th className="p-4 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((asset) => (
                <tr
                  key={asset.symbol}
                  className="border-b border-white/5 transition-colors hover:bg-white/5"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-metallic-gold/20 to-yellow-600/20 text-sm font-bold text-metallic-gold">
                        {asset.symbol[0]}
                      </div>
                      <div>
                        <p className="font-bold text-white">{asset.name}</p>
                        <p className="text-xs text-gray-400">{asset.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-medium text-white">
                    ${asset.price.toLocaleString()}
                  </td>
                  <td className="p-4">
                    <span
                      className={`rounded-lg px-2 py-1 text-sm font-medium ${
                        asset.change >= 0
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {asset.change >= 0 ? "+" : ""}
                      {asset.change}%
                    </span>
                  </td>
                  <td className="p-4 w-32">
                    <TradingChartMini color={asset.change >= 0 ? "#10B981" : "#EF4444"} />
                  </td>
                  <td className="p-4 text-gray-300">{asset.volume}</td>
                  <td className="p-4 text-right">
                    <Link
                      href="/signup"
                      className="rounded-lg border border-metallic-gold px-4 py-2 text-sm font-medium text-metallic-gold transition-colors hover:bg-metallic-gold hover:text-black"
                    >
                      Trade Now
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredData.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-gray-400">No assets found matching "{search}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
