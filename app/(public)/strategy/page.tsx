import { LiveTradeLog } from "@/components/strategy/LiveTradeLog";
import { Cpu, Network, Zap, ShieldCheck } from "lucide-react";

export default function StrategyPage() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum AI <span className="text-metallic-gold">Arbitrage</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Our proprietary algorithmic trading engine scans 50+ exchanges in real-time to identify and exploit micro-price discrepancies, delivering consistent, risk-adjusted returns.
            </p>
          </div>
        </div>
      </section>

      {/* Live Log Section */}
      <section className="py-12 bg-white/5 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Real-Time Execution</h2>
              <p className="text-gray-400 mb-8">
                Watch our bots in action. Every second, thousands of data points are analyzed to execute split-second trades with institutional-grade precision.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-black/40 border border-white/10">
                  <Zap className="h-8 w-8 text-metallic-gold mb-2" />
                  <div className="text-2xl font-bold text-white">45ms</div>
                  <div className="text-sm text-gray-500">Latency</div>
                </div>
                <div className="p-4 rounded-lg bg-black/40 border border-white/10">
                  <ShieldCheck className="h-8 w-8 text-emerald-500 mb-2" />
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm text-gray-500">Uptime</div>
                </div>
              </div>
            </div>
            <LiveTradeLog />
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
              },
              {
                icon: Cpu,
                title: "Flash Loan Utilization",
                desc: "Leveraging uncollateralized capital to amplify trade volume without risking user funds.",
              },
              {
                icon: Zap,
                title: "High-Frequency Scalping",
                desc: "Executing thousands of micro-trades per minute to capture small market movements.",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-metallic-gold/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-metallic-gold/10 flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-metallic-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
