import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { SITE_NAME } from "@/components/config";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-transparent text-gray-200 overflow-x-hidden flex flex-col pt-32">
      <Header />

      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 py-16 min-h-[65vh] w-full">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4fbf]/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <div className="bg-black/40 backdrop-blur-xl border border-white/5 rounded-[3rem] p-8 md:p-16 shadow-[0_10px_50px_rgba(255,79,191,0.05)]">

          <div className="text-center mb-16 flex flex-col items-center">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-[#ff4fbf]/30 bg-[#ff4fbf]/10 mb-6 backdrop-blur-md">
              <span className="text-[#ff4fbf] text-xs font-black tracking-widest uppercase shadow-sm">
                Legal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase drop-shadow-md">
              Privacy Policy
            </h1>
          </div>

          <div className="space-y-12 text-gray-300 leading-relaxed text-base font-medium">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider text-[#ff4fbf] flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ff4fbf]/10 border border-[#ff4fbf]/30 flex items-center justify-center text-sm font-black text-[#ff4fbf]">1</span>
                Overview & Commitment
              </h2>
              <div className="pl-11">
                <p>
                  At <strong className="text-white">{SITE_NAME}</strong>, we value your trust and are committed to protecting your privacy. This Privacy Policy details the types of information we collect, how we use it, and the security protocols in place to keep your data safe.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider text-[#ff4fbf] flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ff4fbf]/10 border border-[#ff4fbf]/30 flex items-center justify-center text-sm font-black text-[#ff4fbf]">2</span>
                Information Collection
              </h2>
              <div className="pl-11 space-y-4">
                <p>
                  To provide our automated fulfillment services, we collect only the necessary details to execute transactions:
                </p>
                <ul className="list-disc pl-6 space-y-2 marker:text-[#ff4fbf] text-gray-400 font-medium">
                  <li>Discord ID and server invite links for delivery.</li>
                  <li>Email address for delivery notifications, account updates, and customer support.</li>
                  <li>Transaction records and payment references (handled securely by our checkout processors). We do not collect or store full credit card details.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider text-[#ff4fbf] flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ff4fbf]/10 border border-[#ff4fbf]/30 flex items-center justify-center text-sm font-black text-[#ff4fbf]">3</span>
                Information Usage
              </h2>
              <div className="pl-11">
                <p>
                  Your information is used strictly to fulfill your orders, provide reliable customer support, and prevent fraudulent activity. We will never sell, lease, or distribute your personal information to third parties.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider text-[#ff4fbf] flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ff4fbf]/10 border border-[#ff4fbf]/30 flex items-center justify-center text-sm font-black text-[#ff4fbf]">4</span>
                Data Security Protocols
              </h2>
              <div className="pl-11">
                <p>
                  We employ industry-standard encryption and security measures to guard against unauthorized access, alteration, or disclosure of your personal data.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider text-[#ff4fbf] flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ff4fbf]/10 border border-[#ff4fbf]/30 flex items-center justify-center text-sm font-black text-[#ff4fbf]">5</span>
                Policy Changes & Acceptance
              </h2>
              <div className="pl-11">
                <p>
                  By using <strong className="text-white">{SITE_NAME}</strong>, you indicate your consent to this Privacy Policy. We reserve the right to modify these guidelines, and continued use signifies acceptance of updated terms.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export const dynamic = "force-dynamic";
