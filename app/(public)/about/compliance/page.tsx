import { Shield, FileText, CheckCircle, Lock } from "lucide-react";
import Link from "next/link";

export default function CompliancePage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Legal & Compliance</h1>
            <p className="text-gray-400">
              EliteCore operates under strict regulatory frameworks to ensure the safety and security of client funds.
            </p>
          </div>

          {/* Certificate Section */}
          <div className="mb-12 rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-metallic-gold" />
                  Certificate of Incorporation
                </h2>
                <p className="text-gray-400 mb-6">
                  EliteCore is a fully registered financial entity in the United Kingdom, adhering to the Companies Act 2006.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Company Number: <span className="text-white font-mono">12345678</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Date of Incorporation: <span className="text-white font-mono">12 June 2023</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    Jurisdiction: <span className="text-white font-mono">England & Wales</span>
                  </li>
                </ul>
                <Link href="#" className="text-metallic-gold hover:underline text-sm">
                  View Public Record &rarr;
                </Link>
              </div>
              <div className="w-full md:w-64 h-80 bg-white p-4 rounded shadow-lg rotate-1 transform hover:rotate-0 transition-transform duration-300">
                {/* Placeholder for Certificate Image */}
                <div className="h-full w-full border-4 border-double border-gray-200 p-4 flex flex-col items-center justify-center text-center">
                  <div className="h-16 w-16 rounded-full bg-gray-100 mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-gray-400" />
                  </div>
                  <div className="text-black font-serif font-bold text-lg mb-2">CERTIFICATE OF INCORPORATION</div>
                  <div className="text-gray-500 text-xs">OF A PRIVATE LIMITED COMPANY</div>
                  <div className="mt-auto text-xs text-gray-400">Companies House</div>
                </div>
              </div>
            </div>
          </div>

          {/* Insurance Badge */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <Shield className="h-8 w-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Assets Insured by BitGo</h3>
                <p className="text-sm text-gray-400">
                  Digital assets held in cold storage are covered by a $100M insurance policy against theft and loss.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <Lock className="h-8 w-8 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Bank-Grade Encryption</h3>
                <p className="text-sm text-gray-400">
                  All user data and transactions are secured with AES-256 encryption and TLS 1.3 protocols.
                </p>
              </div>
            </div>
          </div>

          {/* KYC/AML Disclaimer */}
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-bold text-white mb-4">KYC/AML Policy Statement</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              EliteCore is committed to the highest standards of Anti-Money Laundering (AML) and Know Your Customer (KYC) compliance. 
              To prevent financial crimes, we implement rigorous identity verification processes for all users. 
              We reserve the right to suspend any account suspected of illicit activity and report such activities to relevant authorities. 
              By using our platform, you agree to provide accurate and up-to-date personal information as required by international regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
