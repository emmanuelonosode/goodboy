"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calculator, DollarSign, TrendingUp } from "lucide-react";

export function InvestmentCalculator() {
  const [amount, setAmount] = useState([1000]);
  const dailyRate = 0.015; // 1.5% daily
  const days = 30;

  const calculateProfit = (principal: number) => {
    const total = principal * Math.pow(1 + dailyRate, days);
    return {
      total: total.toFixed(2),
      profit: (total - principal).toFixed(2),
    };
  };

  const { total, profit } = calculateProfit(amount[0]);

  return (
    <section className="py-20 bg-midnight-blue relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-metallic-gold/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-metallic-gold/10 border border-metallic-gold/20 mb-6">
              <Calculator className="w-4 h-4 text-metallic-gold" />
              <span className="text-sm text-metallic-gold font-medium">ROI Calculator</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Calculate Your <br />
              <span className="text-metallic-gold">Potential Returns</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-lg">
              See how your investment can grow with our institutional-grade strategies. 
              Adjust the slider to estimate your monthly earnings.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Daily compounding interest",
                "Instant withdrawals anytime",
                "No hidden fees or lock-in periods"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-emerald-accent/20 flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 text-emerald-accent" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-rich-black/50 backdrop-blur-xl border-white/10 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white text-xl">Investment Simulator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Investment Amount</span>
                    <span className="text-white font-bold text-lg">${amount[0].toLocaleString()}</span>
                  </div>
                  <Slider
                    value={amount}
                    onValueChange={setAmount}
                    max={50000}
                    step={100}
                    min={100}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>$100</span>
                    <span>$50,000</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-slate-400 text-sm mb-1">Daily Profit</p>
                    <p className="text-emerald-accent font-bold text-xl">
                      +${(amount[0] * dailyRate).toFixed(2)}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-slate-400 text-sm mb-1">Monthly Profit</p>
                    <p className="text-metallic-gold font-bold text-xl">
                      +${profit}
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-metallic-gold/20 to-yellow-600/20 border border-metallic-gold/20 text-center">
                  <p className="text-slate-300 text-sm mb-2">Total Return after 30 Days</p>
                  <p className="text-4xl font-bold text-white mb-2">${Number(total).toLocaleString()}</p>
                  <Button className="w-full mt-4 bg-metallic-gold text-rich-black hover:bg-yellow-500 font-bold">
                    Start Earning Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
