import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input"; // Removed unused import
import { Facebook, Twitter, Instagram, Linkedin, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-midnight-blue border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-metallic-gold to-yellow-600 flex items-center justify-center text-rich-black font-bold shadow-lg shadow-metallic-gold/20">
                E
              </div>
              <span className="text-xl font-bold text-white">
                Elite<span className="text-metallic-gold">Core</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              The world's most trusted platform for high-yield crypto investments. 
              Secure, transparent, and built for institutional-grade performance.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-metallic-gold hover:text-rich-black transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our History", href: "/about/history" },
                { label: "Compliance", href: "/about/compliance" },
                { label: "Affiliate Program", href: "/affiliate" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-400 hover:text-metallic-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              {[
                { label: "FAQ", href: "/faq" },
                { label: "Investment Plans", href: "/plans" },
                { label: "Live Markets", href: "/markets" },
                { label: "Strategy", href: "/strategy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-400 hover:text-metallic-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-slate-400 mb-4">
              Subscribe to our newsletter for the latest market insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:border-metallic-gold w-full"
              />
              <Button className="bg-metallic-gold text-rich-black hover:bg-yellow-500">
                Join
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3 px-4 py-3 bg-white/5 rounded-lg border border-white/5">
              <ShieldCheck className="w-8 h-8 text-emerald-accent" />
              <div>
                <p className="text-xs text-slate-400">Registered in UK</p>
                <p className="text-sm font-semibold text-white">License #89210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 EliteCore Investments. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
