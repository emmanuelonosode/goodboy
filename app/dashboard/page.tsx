import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { ProfitChart } from "@/components/dashboard/ProfitChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back, here's what's happening with your portfolio.</p>
      </div>

      <StatsGrid />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProfitChart />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
