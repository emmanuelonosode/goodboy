"use client";

import { useState } from "react";
import { Copy, Check, Bitcoin, Wallet, CreditCard } from "lucide-react";
import { toast } from "sonner";

const gateways = [
  { id: "btc", name: "Bitcoin", icon: Bitcoin, color: "text-orange-500", bg: "bg-orange-500/10" },
  { id: "eth", name: "Ethereum", icon: Wallet, color: "text-blue-500", bg: "bg-blue-500/10" },
  { id: "usdt", name: "USDT (TRC20)", icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

export default function DepositPage() {
  const [step, setStep] = useState(1);
  const [selectedGateway, setSelectedGateway] = useState<string | null>(null);
  const [amount, setAmount] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText("bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh");
    toast.success("Address copied to clipboard");
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Deposit Funds</h1>
        <p className="text-gray-400">Add funds to your wallet securely.</p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8 flex items-center justify-between">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                step >= s
                  ? "bg-metallic-gold text-black"
                  : "bg-white/10 text-gray-400"
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`mx-2 h-1 w-16 rounded-full transition-colors ${
                  step > s ? "bg-metallic-gold" : "bg-white/10"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white">Select Payment Method</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {gateways.map((gateway) => (
                <button
                  key={gateway.id}
                  onClick={() => setSelectedGateway(gateway.id)}
                  className={`flex flex-col items-center gap-3 rounded-xl border p-6 transition-all ${
                    selectedGateway === gateway.id
                      ? "border-metallic-gold bg-metallic-gold/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className={`rounded-full p-3 ${gateway.bg}`}>
                    <gateway.icon className={`h-8 w-8 ${gateway.color}`} />
                  </div>
                  <span className="font-medium text-white">{gateway.name}</span>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={!selectedGateway}
              className="w-full rounded-lg bg-gradient-to-r from-metallic-gold to-yellow-600 py-3 font-bold text-black transition-opacity disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-white">Enter Amount</h2>
            <div>
              <label className="mb-2 block text-sm text-gray-400">Amount (USD)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="1000"
                className="w-full rounded-lg border border-white/10 bg-black/20 p-4 text-xl text-white placeholder-gray-600 focus:border-metallic-gold focus:outline-none"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="w-full rounded-lg border border-white/10 py-3 font-medium text-white hover:bg-white/5"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!amount}
                className="w-full rounded-lg bg-gradient-to-r from-metallic-gold to-yellow-600 py-3 font-bold text-black transition-opacity disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 text-center">
            <h2 className="text-lg font-semibold text-white">Scan QR Code</h2>
            <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-xl bg-white p-4">
              {/* Placeholder for QR Code */}
              <div className="h-full w-full bg-black/10" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Send exactly ${amount} to:</p>
              <div className="flex items-center justify-center gap-2 rounded-lg bg-black/30 p-3">
                <code className="text-sm text-metallic-gold">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</code>
                <button
                  onClick={handleCopy}
                  className="rounded p-1 text-gray-400 hover:text-white"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                toast.success("Deposit request submitted!");
                setStep(1);
                setAmount("");
                setSelectedGateway(null);
              }}
              className="w-full rounded-lg bg-gradient-to-r from-metallic-gold to-yellow-600 py-3 font-bold text-black"
            >
              I have sent the payment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
