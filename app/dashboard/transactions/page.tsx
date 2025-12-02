import { mockHistory } from "@/lib/mock-data";
import { ArrowUpRight, ArrowDownLeft, RefreshCw, Search, Filter } from "lucide-react";

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Transaction History</h1>
          <p className="text-gray-400">View all your deposits, withdrawals, and earnings.</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search ID..."
              className="h-10 rounded-lg border border-white/10 bg-white/5 pl-10 text-sm text-white placeholder-gray-400 focus:border-metallic-gold focus:outline-none"
            />
          </div>
          <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-gray-400">
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Transaction ID</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockHistory.map((tx) => (
                <tr
                  key={tx.id}
                  className="border-b border-white/5 transition-colors hover:bg-white/5"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
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
                          <ArrowDownLeft className="h-4 w-4" />
                        ) : tx.type === "Withdrawal" ? (
                          <ArrowUpRight className="h-4 w-4" />
                        ) : (
                          <RefreshCw className="h-4 w-4" />
                        )}
                      </div>
                      <span className="font-medium text-white">{tx.type}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">{tx.id}</td>
                  <td className="p-4">
                    <span
                      className={`font-medium ${
                        tx.type === "Deposit" || tx.type === "Profit"
                          ? "text-emerald-400"
                          : "text-white"
                      }`}
                    >
                      {tx.type === "Deposit" || tx.type === "Profit" ? "+" : "-"}$
                      {tx.amount.toLocaleString()}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400">{tx.date}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        tx.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : tx.status === "Pending"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-blue-500/10 text-blue-400"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {mockHistory.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-gray-400">No transactions found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
