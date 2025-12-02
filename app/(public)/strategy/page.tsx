import { LiveTradeLog } from "@/components/strategy/LiveTradeLog";
import { BitcoinPulse } from "@/components/ui/BitcoinPulse";
import { TradingChartMini } from "@/components/ui/TradingChartMini";
import { Cpu, Network, Zap, ShieldCheck, Activity, BarChart3 } from "lucide-react";

export default function StrategyPage() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-metallic-gold/10 border border-metallic-gold/20 text-metallic-gold text-sm font-medium mb-6">
                <Activity className="w-4 h-4" />
                <span>Live Market Analysis Active</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Quantum AI <span className="text-metallic-gold">Arbitrage</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Our proprietary algorithmic trading engine scans 50+ exchanges in real-time to identify and exploit micro-price discrepancies, delivering consistent, risk-adjusted returns.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-white font-mono">BTC/USDT</span>
                </div>
                <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-white font-mono">ETH/USDT</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-metallic-gold/20 blur-[100px] rounded-full" />
              <BitcoinPulse />
            </div>
          </div>
        </div>
      </section>

      {/* Live Log Section */}
      <section className="py-12 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="text-metallic-gold" />
                Real-Time Execution
              </h2>
              <p className="text-gray-400 mb-8">
                Watch our bots in action. Every second, thousands of data points are analyzed to execute split-second trades with institutional-grade precision.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-lg bg-black/40 border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-metallic-gold/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <Zap className="h-8 w-8 text-metallic-gold mb-2 relative z-10" />
                  <div className="text-2xl font-bold text-white relative z-10">45ms</div>
                  <div className="text-sm text-gray-500 relative z-10">Latency</div>
                </div>
                <div className="p-4 rounded-lg bg-black/40 border border-white/10 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-emerald-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <ShieldCheck className="h-8 w-8 text-emerald-500 mb-2 relative z-10" />
                  <div className="text-2xl font-bold text-white relative z-10">99.9%</div>
                  <div className="text-sm text-gray-500 relative z-10">Uptime</div>
                </div>
              </div>

              {/* Mini Order Book Visualization */}
              <div className="p-4 rounded-lg bg-black/40 border border-white/10 font-mono text-xs">
                <div className="flex justify-between text-gray-500 mb-2">
                  <span>Price (USDT)</span>
                  <span>Amount (BTC)</span>
                  <span>Total</span>
                </div>
                {[...Array(5)].map((_, i) => (
                  <div key={`ask-${i}`} className="flex justify-between text-red-400/80 py-0.5 relative">
                    <div className="absolute inset-0 bg-red-500/5 w-[40%]" style={{ width: `${Math.random() * 100}%` }} />
                    <span className="relative z-10">64,{(250 + i * 10).toFixed(2)}</span>
                    <span className="relative z-10">{(Math.random() * 2).toFixed(4)}</span>
                    <span className="relative z-10">{(Math.random() * 50000).toFixed(2)}</span>
                  </div>
                ))}
                <div className="py-2 text-center text-lg font-bold text-white border-y border-white/10 my-2">
                  64,245.50 <span className="text-emerald-500 text-sm">↑</span>
                </div>
                {[...Array(5)].map((_, i) => (
                  <div key={`bid-${i}`} className="flex justify-between text-emerald-400/80 py-0.5 relative">
                    <div className="absolute inset-0 bg-emerald-500/5 w-[40%]" style={{ width: `${Math.random() * 100}%` }} />
                    <span className="relative z-10">64,{(240 - i * 10).toFixed(2)}</span>
                    <span className="relative z-10">{(Math.random() * 2).toFixed(4)}</span>
                    <span className="relative z-10">{(Math.random() * 50000).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-metallic-gold/5 rounded-xl blur-xl" />
              <LiveTradeLog />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">The Core Engine</h2>
            <p className="text-gray-400">Three pillars of our algorithmic dominance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: "Cross-Exchange Arbitrage",
                desc: "Simultaneously buying low and selling high across different liquidity pools to lock in risk-free profit.",
                chartColor: "#D4AF37"
              },
              {
                icon: Cpu,
                title: "Flash Loan Utilization",
                desc: "Leveraging uncollateralized capital to amplify trade volume without risking user funds.",
                chartColor: "#3B82F6"
              },
              {
                icon: Zap,
                title: "High-Frequency Scalping",
                desc: "Executing thousands of micro-trades per minute to capture small market movements.",
                chartColor: "#10B981"
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-metallic-gold/50 transition-all hover:-translate-y-1 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="h-12 w-12 rounded-lg bg-metallic-gold/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-metallic-gold" />
                  </div>
                  <div className="w-24">
                    <TradingChartMini color={item.chartColor} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-metallic-gold transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
