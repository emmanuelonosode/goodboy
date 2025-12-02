"use client";

import { Button } from "@/components/ui/button";
import { Check, Bitcoin } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface PlanCardProps {
  name: string;
  roi: string;
  minDeposit: string;
  maxDeposit: string;
  duration: string;
  features: string[];
  recommended?: boolean;
  isPopular?: boolean; // For backward compatibility
  onSelect?: () => void;
  buttonText?: string;
}

export function PlanCard({
  name,
  roi,
  minDeposit,
  maxDeposit,
  duration,
  features,
  recommended = false,
  isPopular = false,
  onSelect,
  buttonText = "Choose Plan",
}: PlanCardProps) {
  const router = useRouter();
  const isRecommended = recommended || isPopular;

  const handleSelect = () => {
    if (onSelect) {
      onSelect();
      return;
    }

    // Default behavior for public pages
    const isLoggedIn = false; // Mock state
    if (!isLoggedIn) {
      toast.error("Please login to invest");
      router.push("/login");
    } else {
      router.push("/dashboard/invest");
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative flex flex-col rounded-2xl border p-8 transition-colors ${
        isRecommended
          ? "border-metallic-gold bg-metallic-gold/10"
          : "border-white/10 bg-white/5 hover:border-metallic-gold/50"
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-metallic-gold px-4 py-1 text-xs font-bold text-black shadow-lg shadow-metallic-gold/20">
          RECOMMENDED
        </div>
      )}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-white">{name}</h3>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">{roi}</span>
            <span className="text-sm text-gray-400">ROI</span>
          </div>
        </div>
        <div className={`rounded-full p-3 ${isRecommended ? "bg-metallic-gold text-black" : "bg-white/10 text-white"}`}>
          <Bitcoin className={`h-6 w-6 ${isRecommended ? "animate-pulse" : ""}`} />
        </div>
      </div>

      <div className="mb-6 space-y-2 border-b border-white/10 pb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Min Deposit</span>
          <span className="font-medium text-white">{minDeposit}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Max Deposit</span>
          <span className="font-medium text-white">{maxDeposit}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Duration</span>
          <span className="font-medium text-white">{duration}</span>
        </div>
      </div>

      <ul className="mb-8 flex-1 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
            <Check className="h-4 w-4 text-emerald-500" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        onClick={handleSelect}
        className={`w-full font-bold ${
          isRecommended
            ? "bg-metallic-gold text-black hover:bg-yellow-500"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        {buttonText}
      </Button>
    </motion.div>
  );
}
