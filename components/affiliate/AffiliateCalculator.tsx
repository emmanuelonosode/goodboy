"use client";

import { useState } from "react";
import { Calculator, DollarSign, Users } from "lucide-react";

export function AffiliateCalculator() {
  const [referrals, setReferrals] = useState(10);
  const [avgInvestment, setAvgInvestment] = useState(1000);

  const tier1Rate = 0.07;
  const tier2Rate = 0.03;
  const tier3Rate = 0.01;

  // Simplified calculation assumption: 
  // Direct referrals (Tier 1) = input referrals
  // Tier 2 referrals = Tier 1 * 3 (assumption)
  // Tier 3 referrals = Tier 2 * 3 (assumption)
  
  const tier1Earnings = referrals * avgInvestment * tier1Rate;
  const tier2Earnings = (referrals * 3) * avgInvestment * tier2Rate;
  const tier3Earnings = (referrals * 9) * avgInvestment * tier3Rate;
  
  const totalEarnings = tier1Earnings + tier2Earnings + tier3Earnings;

  return (
    <div className="rounded-2xl border border-white/10 bg-black/50 p-8 backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-metallic-gold/10">
          <Calculator className="h-5 w-5 text-metallic-gold" />
        </div>
        <h3 className="text-xl font-bold text-white">Commission Calculator</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 flex items-center justify-between text-sm text-gray-400">
            <span>Direct Referrals</span>
            <span className="font-mono text-white">{referrals}</span>
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value={referrals}
            onChange={(e) => setReferrals(parseInt(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-metallic-gold"
          />
        </div>

        <div>
          <label className="mb-2 flex items-center justify-between text-sm text-gray-400">
            <span>Avg. Investment ($)</span>
            <span className="font-mono text-white">${avgInvestment.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={avgInvestment}
            onChange={(e) => setAvgInvestment(parseInt(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-metallic-gold"
          />
        </div>

        <div className="rounded-xl bg-white/5 p-6">
          <div className="mb-2 text-center text-sm text-gray-400">Estimated Monthly Earnings</div>
          <div className="text-center text-4xl font-bold text-metallic-gold">
            ${totalEarnings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
          <div className="mt-4 flex justify-between border-t border-white/10 pt-4 text-xs text-gray-500">
            <span>Tier 1: ${tier1Earnings.toLocaleString()}</span>
            <span>Tier 2: ${tier2Earnings.toLocaleString()}</span>
            <span>Tier 3: ${tier3Earnings.toLocaleString()}</span>
          </div>
        </div>
        
        <p className="text-xs text-center text-gray-500 italic">
          *Projections based on a 1:3 network growth ratio. Actual results may vary.
        </p>
      </div>
    </div>
  );
}
