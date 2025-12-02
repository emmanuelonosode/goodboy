import { mockHistory } from "@/lib/mock-data";
import { ArrowUpRight, ArrowDownLeft, RefreshCw } from "lucide-react";

export function RecentActivity() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h3 className="mb-6 text-lg font-semibold text-white">Recent Activity</h3>
      <div className="space-y-4">
        {mockHistory.slice(0, 5).map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10"
          >
            <div className="flex items-center gap-4">
              <div
                className={`rounded-full p-2 ${
                  tx.type === "Deposit"
                    ? "bg-emerald-500/10 text-emerald-500"
                    : tx.type === "Withdrawal"
                    ? "bg-red-500/10 text-red-500"
                    : "bg-blue-500/10 text-blue-500"
                }`}
              >
                {tx.type === "Deposit" ? (
                  <ArrowDownLeft className="h-5 w-5" />
                ) : tx.type === "Withdrawal" ? (
                  <ArrowUpRight className="h-5 w-5" />
                ) : (
                  <RefreshCw className="h-5 w-5" />
                )}
              </div>
              <div>
                <p className="font-medium text-white">{tx.type}</p>
                <p className="text-xs text-gray-400">{tx.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`font-medium ${
                  tx.type === "Deposit" || tx.type === "Profit"
                    ? "text-emerald-400"
                    : "text-white"
                }`}
              >
                {tx.type === "Deposit" || tx.type === "Profit" ? "+" : "-"}$
                {tx.amount.toLocaleString()}
              </p>
              <p
                className={`text-xs ${
                  tx.status === "Completed"
                    ? "text-emerald-400"
                    : tx.status === "Pending"
                    ? "text-yellow-400"
                    : "text-blue-400"
                }`}
              >
                {tx.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
