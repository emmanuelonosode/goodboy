"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-white transition-colors hover:text-metallic-gold"
      >
        {title}
        <ChevronDown
          className={cn("h-5 w-5 text-gray-400 transition-transform duration-300", isOpen && "rotate-180")}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-gray-400 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-sm">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
