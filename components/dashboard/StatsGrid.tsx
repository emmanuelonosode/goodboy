import { Wallet, TrendingUp, PiggyBank, Users } from "lucide-react";
import { mockUser } from "@/lib/mock-data";

const stats = [
  {
    label: "Total Balance",
    value: `$${mockUser.balance.toLocaleString()}`,
    icon: Wallet,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    label: "Total Profit",
    value: `$${mockUser.totalProfit.toLocaleString()}`,
    icon: TrendingUp,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    label: "Active Deposits",
    value: mockUser.activeInvestments,
    icon: PiggyBank,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    label: "Referral Earnings",
    value: `$${mockUser.referralEarnings.toLocaleString()}`,
    icon: Users,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
];

export function StatsGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">{stat.label}</p>
              <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
            </div>
            <div className={`rounded-lg p-3 ${stat.bg}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
