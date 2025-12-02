"use client";

import { useRouter } from "next/navigation";
import { mockPlans } from "@/lib/mock-data";
import { PlanCard } from "@/components/invest/PlanCard";
import { toast } from "sonner";

export default function PlansPage() {
  const router = useRouter();

  const handleSelectPlan = (planName: string) => {
    // Mock auth check
    const isLoggedIn = false; // Set to true to test logged in state

    if (isLoggedIn) {
      router.push("/dashboard/invest");
    } else {
      toast.error("Please login to invest");
      router.push("/login");
    }
  };

  return (
    <div className="container mx-auto px-4 pt-40 pb-20">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">Investment Plans</h1>
        <p className="mx-auto max-w-2xl text-gray-400">
          Choose from our range of high-yield investment packages designed to maximize your returns.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mockPlans.map((plan) => (
          <PlanCard
            key={plan.name}
            {...plan}
            isPopular={plan.name === "Gold"}
            onSelect={() => handleSelectPlan(plan.name)}
          />
        ))}
      </div>
    </div>
  );
}
