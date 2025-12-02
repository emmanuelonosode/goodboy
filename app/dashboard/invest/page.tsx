"use client";

import { useState } from "react";
import { toast } from "sonner";
import { mockPlans, mockUser } from "@/lib/mock-data";
import { PlanCard } from "@/components/invest/PlanCard";
import { Wallet } from "lucide-react";

export default function InvestPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState("main");

  const handleInvest = async (planName: string) => {
    setLoading(planName);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(null);
    toast.success(`Successfully invested in ${planName} Plan!`);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Investment Plans</h1>
        <p className="text-gray-400">Choose a plan that suits your financial goals.</p>
      </div>

      <div className="flex items-center justify-end">
        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
          <Wallet className="h-5 w-5 text-metallic-gold" />
          <select
            value={selectedWallet}
            onChange={(e) => setSelectedWallet(e.target.value)}
            className="bg-transparent text-sm text-white focus:outline-none"
          >
            <option value="main" className="bg-gray-900">Main Wallet (${mockUser.balance.toLocaleString()})</option>
            <option value="interest" className="bg-gray-900">Interest Wallet ($0.00)</option>
          </select>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mockPlans.map((plan) => (
          <PlanCard
            key={plan.name}
            {...plan}
            isPopular={plan.name === "Gold"}
            buttonText={loading === plan.name ? "Processing..." : "Invest Now"}
            onSelect={() => handleInvest(plan.name)}
          />
        ))}
      </div>
    </div>
  );
}
