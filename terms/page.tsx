import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { SITE_NAME } from "@/components/config";

export default function TOS() {
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
              Terms of Service
            </h1>
          </div>

          <div className="space-y-12 text-gray-300 leading-relaxed text-base font-medium">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider text-[#ff4fbf] flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ff4fbf]/10 border border-[#ff4fbf]/30 flex items-center justify-center text-sm font-black text-[#ff4fbf]">1</span>
                General Terms
              </h2>
              <div className="space-y-4 text-gray-400 pl-11">
                <p>
                  <strong className="text-white">1.0.</strong> Please note that this website is in no way affiliated with, authorized, maintained, sponsored or endorsed by Discord Inc. (discord.com) or any of its affiliates or subsidiaries. If you have an inquiry, please get in contact directly with us before taking any action, we are fully willing to collaborate. We usually reply within 48-hours.
                </p>
                <p>
                  <strong className="text-white">1.1.</strong> As a retailer of digital products, we reserve a right to sell under the guidance of these terms of service. By using our services you automatically agree to these terms and policies. Breaking any rules or terms might result in a ban/blacklist from the support server and refusal to further provide our services.
                </p>
                <p>
                  <strong className="text-white">1.2.</strong> This User Agreement (&quot;Agreement&quot;), the {SITE_NAME} Privacy Policy, and all policies posted on our websites set out the terms and conditions on which we offer you access to and use of our sites, services, applications and tools (collectively &quot;Services&quot;). This Agreement is entered into between you as the user of our services (&quot;User&quot;) and {SITE_NAME}. All policies and the Privacy Policy are incorporated into this User Agreement. You agree to comply with all of the above when accessing and using our services.
                </p>
                <p>
                  <strong className="text-white">1.3. Acceptance of the Agreement.</strong> By accessing or using the service, you hereby agree to accept the terms and conditions set forth in this Agreement as a User. You shall be bound by the terms and conditions of this Agreement with respect to your access or use of this server and any further modification, addition or change to this service. If you do not accept all of the terms and conditions of this Agreement, please do not use these services.
                </p>
                <p>
                  <strong className="text-white">1.4. Amendments.</strong> We may amend this Agreement and/or server policies at any time, with or without notice to you, by posting the amended and restated Agreement or policy on the server. The amended and restated Agreement and/or policy shall be effective immediately upon posting.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider text-[#ff4fbf] flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ff4fbf]/10 border border-[#ff4fbf]/30 flex items-center justify-center text-sm font-black text-[#ff4fbf]">2</span>
                Return Policy
              </h2>
              <div className="pl-11 space-y-4">
                <p className="text-gray-300">
                  Every product is bound by our warranty policy explained below. Returns are not accepted. This store is under a strict no refund policy. If the product is faulty a replacement may be possible.
                </p>
                <div className="space-y-4 text-gray-400">
                  <p>
                    <strong className="text-white">2.1. The product is eligible for a replacement if one of the following occurs:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 marker:text-[#ff4fbf]">
                    <li>(a) The product does not meet the description under which it is being sold.</li>
                    <li>(b) The product does not last its full warranty period.</li>
                  </ul>
                  <p className="mt-6">
                    <strong className="text-white">2.2. The product is NOT eligible for a replacement if:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-3 marker:text-[#ff4fbf]">
                    <li>(a) The product has exceeded its warranty period.</li>
                    <li>(b) The boosted server was lost under buyer&apos;s ownership.</li>
                    <li>(c) Contacting any kind of support on the websites we advertise on or leaving any kind of negative feedback is considered that a support case has been solved and closed without a satisfactory result and no additional support may be provided, furthermore a blacklist from our store may be issued.</li>
                    <li>(d) Chargebacks are considered a violation of our Terms of Service and you may lose access to one or more products purchased on our website. Additionally a complete blacklist from the purchase website and Discord will be issued and your private information may be used for fraudulent chargebacks investigations.</li>
                    <li>(e) Any kind of threats will not be tolerated and might result in a ban and/or blacklist.</li>
                  </ul>
                  <div className="p-4 rounded-xl bg-[#ff4fbf]/5 border border-[#ff4fbf]/20 mt-6">
                    <p className="text-white font-bold text-sm">
                      Please note all orders can take up to 24-48 hours to be fully delivered. Your boosts cannot be transferred/revoked once delivered. If your server administrator or bot kicks the boosting accounts from the server, we can not compensate.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider text-[#ff4fbf] flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ff4fbf]/10 border border-[#ff4fbf]/30 flex items-center justify-center text-sm font-black text-[#ff4fbf]">3</span>
                Products and Services
              </h2>
              <div className="space-y-3 text-gray-400 pl-11">
                <p>
                  <strong className="text-white">3.1.</strong> The description and price of any product is subject to change at anytime without notice. We reserve the right to discontinue any product at any time.
                </p>
                <p>
                  <strong className="text-white">3.2.</strong> Any offer for any product can change or be removed at anytime without giving any notice. If an ongoing order is in place, the buyer will be warned and given notice.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider text-[#ff4fbf] flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ff4fbf]/10 border border-[#ff4fbf]/30 flex items-center justify-center text-sm font-black text-[#ff4fbf]">4</span>
                Rules
              </h2>
              <div className="pl-11 space-y-6">
                <p className="text-gray-300">
                  You are obligated to follow these rules under any circumstances. Violation of these rules might result in a ban.
                </p>
                <div className="space-y-4 text-gray-400">
                  <div>
                    <p className="font-bold text-white mb-3 text-lg">Chat Rules</p>
                    <ul className="list-decimal pl-6 space-y-2 marker:text-[#ff4fbf] font-medium">
                      <li>No advertising</li>
                      <li>No spamming</li>
                      <li>Do not use words such as &quot;Token&quot;, &quot;Cheater&quot;, &quot;Cheating&quot;, &quot;Hack&quot;, &quot;Hacker&quot;, &quot;Carding&quot;, &quot;Cracking&quot;, &quot;Cracked&quot;, &quot;Cracker&quot;, etc.</li>
                      <li>Act accordingly (no excessive swearing, hate, etc.)</li>
                      <li>We ({SITE_NAME} staff) can remove any chat message or links without giving any reason for deletion.</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <p className="font-bold text-white mb-3 text-lg">Ticket Rules</p>
                    <ul className="list-decimal pl-6 space-y-2 marker:text-[#ff4fbf] font-medium">
                      <li>Do not spam, every message is being read when possible.</li>
                      <li>No swearing.</li>
                      <li>If you are trying to solve a problem with your order please try to explain your issue in a calm and orderly manner.</li>
                      <li>Every ticket will be replied to within 7 days of the customer&apos;s last message. We are not bound to solve the ticket within any set timeframe. Please note that we always try to solve every support ticket as soon as possible.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider text-[#ff4fbf] flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#ff4fbf]/10 border border-[#ff4fbf]/30 flex items-center justify-center text-sm font-black text-[#ff4fbf]">5</span>
                Third-Party Rules
              </h2>
              <div className="pl-11">
                <p className="text-gray-400">
                  <strong className="text-white">5.1.</strong> Certain third-party content, products or services are available via our selling platforms. We are not responsible for anything that happens within these third-party sites. These sites are not our products and are not affiliated with us. Thus, us trusting and vouching for the sites still does not mean that we will take any responsibility for what happens.
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
