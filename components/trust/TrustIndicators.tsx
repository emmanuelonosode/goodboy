"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const PAYOUTS = [
  { user: "Alex M.", amount: "$5,400", method: "Bitcoin", time: "2 mins ago" },
  { user: "Sarah K.", amount: "$12,350", method: "USDT", time: "5 mins ago" },
  { user: "David R.", amount: "$2,100", method: "Ethereum", time: "8 mins ago" },
  { user: "Jessica T.", amount: "$8,900", method: "Bank Transfer", time: "12 mins ago" },
  { user: "Michael B.", amount: "$15,000", method: "Bitcoin", time: "15 mins ago" },
  { user: "Emma W.", amount: "$3,200", method: "USDT", time: "18 mins ago" },
  { user: "James L.", amount: "$6,750", method: "Solana", time: "22 mins ago" },
  { user: "Olivia P.", amount: "$9,800", method: "Bitcoin", time: "25 mins ago" },
];

const TESTIMONIALS = [
  {
    name: "Jonathan Reeves",
    role: "Professional Trader",
    content: "EliteCore has completely transformed my portfolio. The returns are consistent, and the withdrawal speed is unmatched in the industry.",
    avatar: "JR"
  },
  {
    name: "Elena Rodriguez",
    role: "Business Owner",
    content: "I was skeptical at first, but the transparency and support team won me over. I've seen a 45% growth in just 3 months.",
    avatar: "ER"
  },
  {
    name: "Marcus Chen",
    role: "Crypto Enthusiast",
    content: "The platform is incredibly intuitive. I love the real-time analytics and the security features give me total peace of mind.",
    avatar: "MC"
  }
];

export function TrustIndicators() {
  return (
    <section className="py-20 bg-rich-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Live Payouts - Vertical Marquee */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-emerald-accent rounded-full" />
              Live Withdrawals
            </h3>
            <div className="relative h-[400px] overflow-hidden rounded-2xl bg-midnight-blue/30 border border-white/5 p-6">
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-midnight-blue/30 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-midnight-blue/30 to-transparent z-10" />
              
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 20,
                }}
                className="space-y-4"
              >
                {[...PAYOUTS, ...PAYOUTS].map((payout, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-accent/20 flex items-center justify-center text-emerald-accent font-bold text-xs">
                        {payout.user.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-medium">{payout.user}</p>
                        <p className="text-xs text-slate-500">{payout.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-accent font-bold">{payout.amount}</p>
                      <p className="text-xs text-slate-500">{payout.method}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Testimonials - Swipeable Stack (Simplified as Grid for now) */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-metallic-gold rounded-full" />
              Client Success Stories
            </h3>
            <div className="space-y-6">
              {TESTIMONIALS.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-midnight-blue/40 border-white/5 hover:border-metallic-gold/20 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-metallic-gold text-rich-black font-bold">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-white font-bold">{testimonial.name}</h4>
                            <span className="text-xs text-slate-500">• {testimonial.role}</span>
                          </div>
                          <div className="flex text-metallic-gold mb-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed italic relative">
                            <Quote className="w-8 h-8 text-white/5 absolute -top-4 -left-4 -z-10" />
                            "{testimonial.content}"
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
