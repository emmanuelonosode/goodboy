"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-midnight-blue/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-metallic-gold flex items-center justify-center text-rich-black font-bold text-xl shadow-lg shadow-metallic-gold/20 group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            Apex <span className="text-metallic-gold">Vault</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Markets", href: "/markets" },
            { label: "Strategy", href: "/strategy" },
            { label: "Plans", href: "/plans" },
            { label: "Affiliate", href: "/affiliate" },
            { label: "About", href: "/about" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-white font-medium transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-metallic-gold transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-metallic-gold text-rich-black hover:bg-metallic-gold/90 font-semibold shadow-lg shadow-metallic-gold/20">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-midnight-blue/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {[
                { label: "Markets", href: "/markets" },
                { label: "Strategy", href: "/strategy" },
                { label: "Plans", href: "/plans" },
                { label: "Affiliate", href: "/affiliate" },
                { label: "About", href: "/about" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-slate-300 hover:text-metallic-gold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5">
                    Log In
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-metallic-gold text-rich-black hover:bg-metallic-gold/90">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
