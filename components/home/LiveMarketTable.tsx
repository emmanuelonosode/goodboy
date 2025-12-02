"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const MARKET_DATA = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$64,230.50",
    change: "+2.4%",
    data: [{v: 62000}, {v: 62500}, {v: 61800}, {v: 63000}, {v: 63500}, {v: 64230}],
    color: "#10B981"
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,450.12",
    change: "+1.8%",
    data: [{v: 3300}, {v: 3350}, {v: 3320}, {v: 3400}, {v: 3420}, {v: 3450}],
    color: "#10B981"
  },
  {
    id: 3,
    name: "Solana",
    symbol: "SOL",
    price: "$145.60",
    change: "-0.5%",
    data: [{v: 148}, {v: 147}, {v: 146}, {v: 145}, {v: 144}, {v: 145.6}],
    color: "#ef4444"
  },
  {
    id: 4,
    name: "Binance Coin",
    symbol: "BNB",
    price: "$590.20",
    change: "+0.2%",
    data: [{v: 580}, {v: 585}, {v: 582}, {v: 588}, {v: 590}, {v: 590.2}],
    color: "#10B981"
  },
  {
    id: 5,
    name: "Cardano",
    symbol: "ADA",
    price: "$0.45",
    change: "+0.8%",
    data: [{v: 0.42}, {v: 0.43}, {v: 0.42}, {v: 0.44}, {v: 0.44}, {v: 0.45}],
    color: "#10B981"
  },
];

export function LiveMarketTable() {
  return (
    <section className="py-20 bg-midnight-blue/30">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Live Markets</h2>
          <p className="text-slate-400">Real-time pricing for top assets</p>
        </div>

        <div className="bg-midnight-blue/40 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden shadow-xl">
          <Table>
            <TableHeader className="bg-white/5">
              <TableRow className="border-white/5 hover:bg-transparent">
                <TableHead className="text-slate-400">Asset</TableHead>
                <TableHead className="text-slate-400">Price</TableHead>
                <TableHead className="text-slate-400">24h Change</TableHead>
                <TableHead className="text-slate-400 hidden md:table-cell">Trend</TableHead>
                <TableHead className="text-right text-slate-400">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MARKET_DATA.map((asset) => (
                <TableRow key={asset.id} className="border-white/5 hover:bg-white/5 transition-colors group">
                  <TableCell className="font-medium text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                        {asset.symbol[0]}
                      </div>
                      <div>
                        <span className="block">{asset.name}</span>
                        <span className="text-xs text-slate-500 md:hidden">{asset.symbol}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{asset.price}</TableCell>
                  <TableCell className={asset.change.startsWith("+") ? "text-emerald-accent" : "text-red-500"}>
                    {asset.change}
                  </TableCell>
                  <TableCell className="hidden md:table-cell w-[150px]">
                    <div className="h-[40px] w-[120px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={asset.data}>
                          <Line 
                            type="monotone" 
                            dataKey="v" 
                            stroke={asset.color} 
                            strokeWidth={2} 
                            dot={false} 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" className="bg-transparent border border-metallic-gold text-metallic-gold hover:bg-metallic-gold hover:text-rich-black transition-all opacity-0 group-hover:opacity-100">
                      Trade
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
