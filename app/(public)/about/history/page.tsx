import { Calendar, TrendingUp, Users, Globe } from "lucide-react";

const TIMELINE = [
  {
    year: "2023",
    title: "The Inception",
    desc: "EliteCore was founded by a team of ex-Wall Street quant traders and blockchain engineers with a vision to democratize institutional-grade arbitrage.",
    icon: Calendar,
  },
  {
    year: "Q3 2023",
    title: "Algorithm Beta",
    desc: "Our proprietary AI trading engine, 'Nexus-7', went live in a closed beta, achieving a 98.5% win rate across 12 major exchanges.",
    icon: TrendingUp,
  },
  {
    year: "Q1 2024",
    title: "Global Expansion",
    desc: "Opened our platform to the public, reaching 10,000 active users within the first month and securing strategic partnerships with liquidity providers.",
    icon: Users,
  },
  {
    year: "Present",
    title: "Market Leadership",
    desc: "Managing over $50M in assets under management (AUM) with a community of 50,000+ investors from 120 countries.",
    icon: Globe,
  },
];

export default function HistoryPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Our Journey</h1>
            <p className="text-gray-400">From a basement prototype to a global financial powerhouse.</p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative pl-8 md:pl-0">
                {/* Dot */}
                <div className="absolute -left-[5px] md:-left-[41px] top-0 h-3 w-3 rounded-full bg-metallic-gold ring-4 ring-black" />
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-32 flex-shrink-0">
                    <span className="text-metallic-gold font-bold font-mono text-lg">{item.year}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-white/5">
                        <item.icon className="h-5 w-5 text-gray-300" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
