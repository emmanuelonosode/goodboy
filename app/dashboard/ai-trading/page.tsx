"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Zap, Shield, Activity, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AITradingPage() {
  const [isTrading, setIsTrading] = useState(false);
  const [step, setStep] = useState(1);

  const handleStartTrading = () => {
    setIsTrading(true);
    // Simulate initialization steps
    setTimeout(() => setStep(2), 1500);
    setTimeout(() => setStep(3), 3000);
  };

  if (isTrading) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">AI Trading Dashboard</h1>
          <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-500 font-medium text-sm">Active & Trading</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Total Profit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-500">+$124.50</div>
              <p className="text-xs text-slate-500 mt-1">+2.4% today</p>
            </CardContent>
          </Card>
          <Card className="bg-black border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">Active Trades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">4</div>
              <p className="text-xs text-slate-500 mt-1">2 Long, 2 Short</p>
            </CardContent>
          </Card>
          <Card className="bg-black border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-400">AI Confidence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-metallic-gold">94%</div>
              <p className="text-xs text-slate-500 mt-1">High Probability</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-black border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Live Activity Log</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "10:42:15", action: "Opened Long BTC/USDT", profit: null },
                { time: "10:38:22", action: "Closed Short ETH/USDT", profit: "+$42.20" },
                { time: "10:15:00", action: "Analyzing Market Conditions", profit: null },
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-500 font-mono">{log.time}</span>
                    <span className="text-sm text-slate-300">{log.action}</span>
                  </div>
                  {log.profit && (
                    <span className="text-sm text-emerald-500 font-medium">{log.profit}</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-metallic-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Brain className="w-8 h-8 text-metallic-gold" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Configure AI Trader</h1>
        <p className="text-slate-400 text-lg">
          Set your parameters and let our institutional-grade AI handle the rest.
        </p>
      </div>

      <Card className="bg-black border-white/10">
        <CardContent className="p-8 space-y-8">
          <div className="space-y-4">
            <Label className="text-white">Investment Amount (USDT)</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">$</span>
              <Input 
                type="number" 
                placeholder="5000" 
                className="pl-8 bg-white/5 border-white/10 text-white focus:border-metallic-gold"
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-white">Risk Tolerance</Label>
            <div className="grid grid-cols-3 gap-4">
              {['Low', 'Medium', 'High'].map((level) => (
                <button
                  key={level}
                  className="px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-slate-300 hover:border-metallic-gold hover:text-metallic-gold transition-all focus:ring-2 focus:ring-metallic-gold focus:ring-offset-2 focus:ring-offset-black"
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-white">Trading Strategy</Label>
            <Select>
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="Select a strategy" />
              </SelectTrigger>
              <SelectContent className="bg-black border-white/10 text-white">
                <SelectItem value="conservative">Conservative (Stable Growth)</SelectItem>
                <SelectItem value="balanced">Balanced (Optimal Risk/Reward)</SelectItem>
                <SelectItem value="aggressive">Aggressive (Max Returns)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-4">
            <Button 
              size="lg" 
              className="w-full bg-metallic-gold text-rich-black hover:bg-white hover:text-black font-bold h-14 text-lg"
              onClick={handleStartTrading}
            >
              <Zap className="w-5 h-5 mr-2" />
              Activate AI Trader
            </Button>
            <p className="text-xs text-center text-slate-500 mt-4">
              By activating, you agree to the automated trading terms of service.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-3 gap-6 mt-12">
        <div className="text-center">
          <Shield className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
          <h3 className="text-white font-bold mb-1">Secure</h3>
          <p className="text-xs text-slate-500">Funds stay in your wallet</p>
        </div>
        <div className="text-center">
          <Activity className="w-8 h-8 text-blue-500 mx-auto mb-3" />
          <h3 className="text-white font-bold mb-1">24/7 Monitoring</h3>
          <p className="text-xs text-slate-500">Never miss an opportunity</p>
        </div>
        <div className="text-center">
          <CheckCircle2 className="w-8 h-8 text-metallic-gold mx-auto mb-3" />
          <h3 className="text-white font-bold mb-1">Proven</h3>
          <p className="text-xs text-slate-500">Backtested strategies</p>
        </div>
      </div>
    </div>
  );
}
