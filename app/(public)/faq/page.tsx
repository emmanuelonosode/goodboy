"use client";

import { Accordion } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQ_CATEGORIES = [
  {
    category: "Deposits & Funding",
    items: [
      {
        title: "What is the minimum deposit amount?",
        content: "The minimum deposit to activate the Starter Plan is $50. For the Elite Plan, the minimum is $5,000. We support deposits in BTC, ETH, USDT (TRC20 & ERC20), and BNB.",
      },
      {
        title: "How long do deposits take to reflect?",
        content: "Crypto deposits are credited automatically after 3 network confirmations. This typically takes 10-30 minutes depending on blockchain congestion.",
      },
      {
        title: "Are there any deposit fees?",
        content: "EliteCore does not charge any fees for deposits. However, you may incur standard network gas fees from your wallet provider.",
      },
    ],
  },
  {
    category: "Withdrawals",
    items: [
      {
        title: "How fast are withdrawals processed?",
        content: "Withdrawals are processed instantly by our automated system. In rare cases requiring manual security review, it may take up to 24 hours.",
      },
      {
        title: "Is there a withdrawal limit?",
        content: "The minimum withdrawal amount is $10. There is no maximum limit for verified users.",
      },
      {
        title: "Can I withdraw my principal before the plan ends?",
        content: "Yes, you can request an early capital release after 14 days. A 15% fee applies to early principal withdrawals to cover administrative costs.",
      },
    ],
  },
  {
    category: "Security & Account",
    items: [
      {
        title: "Is my personal information safe?",
        content: "Absolutely. We use military-grade AES-256 encryption and do not share your data with third parties. Our platform is fully GDPR compliant.",
      },
      {
        title: "What happens if I lose my 2FA device?",
        content: "You can restore access using your backup recovery codes. If you lost those, please contact support with your KYC documents for manual reset.",
      },
    ],
  },
  {
    category: "Taxation & Legal",
    items: [
      {
        title: "Do I have to pay taxes on my profits?",
        content: "Tax laws vary by jurisdiction. EliteCore does not withhold taxes. It is your responsibility to report earnings to your local tax authority.",
      },
      {
        title: "Is EliteCore regulated?",
        content: "Yes, we are a registered entity in the UK and comply with international AML/KYC regulations.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400">
            Find answers to common questions about our platform, investment plans, and security.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {FAQ_CATEGORIES.map((cat, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-metallic-gold">
                {cat.category}
              </h2>
              <Accordion items={cat.items} />
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="max-w-2xl mx-auto mt-20 text-center rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-metallic-gold/10 mb-6">
            <HelpCircle className="h-8 w-8 text-metallic-gold" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-gray-400 mb-8">
            Our support team is available 24/7 to assist you with any inquiries or technical issues.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 font-bold px-8">
            <MessageCircle className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}
