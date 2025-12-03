"use client";

import { useState } from "react";
import { toast } from "sonner";
import { mockUser } from "@/lib/mock-data";
import { Wallet, ShieldCheck, AlertCircle } from "lucide-react";

export default function WithdrawPage() {
  const [wallet, setWallet] = useState("");
  const [amount, setAmount] = useState("");
  const [twoFactor, setTwoFactor] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (Number(amount) > mockUser.balance) {
      toast.error("Insufficient balance");
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    
    toast.success("Withdrawal request submitted successfully");
    setAmount("");
    setTwoFactor("");
    setWallet("");
  };

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Withdraw Funds</h1>
        <p className="text-gray-400">Securely withdraw your earnings to your external wallet.</p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <div className="mb-6 flex items-center justify-between rounded-lg bg-emerald-500/10 p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-emerald-500/20 p-2">
              <Wallet className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Available Balance</p>
              <p className="text-lg font-bold text-white">${mockUser.balance.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-sm text-gray-400">Select Wallet Address</label>
            <input
              type="text"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              placeholder="Enter your wallet address"
              required
              className="w-full rounded-lg border border-white/10 bg-black/20 p-3 text-white placeholder-gray-600 focus:border-metallic-gold focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">Amount (USD)</label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                required
                min="10"
                className="w-full rounded-lg border border-white/10 bg-black/20 p-3 text-white placeholder-gray-600 focus:border-metallic-gold focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setAmount(mockUser.balance.toString())}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-metallic-gold hover:text-yellow-400"
              >
                MAX
              </button>
            </div>
            {Number(amount) > mockUser.balance && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="h-4 w-4" />
                <span>Insufficient balance</span>
              </div>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">2FA Code</label>
            <div className="relative">
              <ShieldCheck className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={twoFactor}
                onChange={(e) => setTwoFactor(e.target.value)}
                placeholder="Enter 6-digit code"
                required
                maxLength={6}
                className="w-full rounded-lg border border-white/10 bg-black/20 pl-10 p-3 text-white placeholder-gray-600 focus:border-metallic-gold focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || Number(amount) > mockUser.balance || !amount || !wallet || !twoFactor}
            className="w-full rounded-lg bg-metallic-gold py-3 font-bold text-black transition-opacity disabled:opacity-50"
          >
            {loading ? "Processing..." : "Withdraw Funds"}
          </button>
        </form>
      </div>
    </div>
  );
}
