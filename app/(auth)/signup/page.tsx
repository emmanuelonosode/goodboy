"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    toast.success("Account created successfully!");
    router.push("/dashboard");
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <div className="mb-8 text-center">
        <Link href="/" className="mb-6 inline-block">
          <div className="flex items-center justify-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-metallic-gold to-yellow-600" />
            <span className="text-xl font-bold text-white">EliteCore</span>
          </div>
        </Link>
        <h1 className="text-2xl font-bold text-white">Create Account</h1>
        <p className="text-gray-400">Join thousands of investors today</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="mb-2 block text-sm text-gray-400">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="John Doe"
              required
              className="w-full rounded-lg border border-white/10 bg-black/20 py-3 pl-10 text-white placeholder-gray-600 focus:border-metallic-gold focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="name@example.com"
              required
              className="w-full rounded-lg border border-white/10 bg-black/20 py-3 pl-10 text-white placeholder-gray-600 focus:border-metallic-gold focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-white/10 bg-black/20 py-3 pl-10 text-white placeholder-gray-600 focus:border-metallic-gold focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-start gap-2 text-sm text-gray-400">
          <input type="checkbox" required className="mt-1 rounded border-white/10 bg-black/20" />
          <span>
            I agree to the{" "}
            <Link href="#" className="text-metallic-gold hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-metallic-gold hover:underline">
              Privacy Policy
            </Link>
          </span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-metallic-gold to-yellow-600 py-3 font-bold text-black transition-opacity disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Create Account"}
          {!loading && <ArrowRight className="h-5 w-5" />}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-metallic-gold hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}
