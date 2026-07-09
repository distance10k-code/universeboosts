"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqData = [
  {
    id: "1",
    question: "How can I get in touch with support after I bought the product?",
    answer:
      "To get in touch with support after making a purchase, you can use the built-in ticketing system in our Discord server. Simply join our community and open a ticket.",
  },
  {
    id: "2",
    question: "What payment methods do you accept?",
    answer:
      "We support a wide range of payment methods, including credit cards and various cryptocurrencies to ensure a seamless checkout experience.",
  },
  {
    id: "3",
    question: "Is it safe to make payments?",
    answer:
      "Yes, we take security very seriously. We use advanced fraud prevention measures and secure, enterprise-grade payment gateways to protect all transactions.",
  },
  {
    id: "4",
    question: "How fast will my order be delivered?",
    answer:
      "Your order will typically be delivered automatically within 30 seconds after payment confirmation.",
  },
];

const Faq = () => {
  return (
    <div id="faq" className="relative py-32 px-4 overflow-hidden border-t border-white/5 bg-[#0f0f0f]">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4fbf]/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto relative flex flex-col items-center">
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="section-overline">✦ Knowledge Base</p>
          <div className="section-title">
            <h2>
              <span className="sparkles-wrap">
                Frequently Asked Questions.
                <span className="sp" style={{ left: "30.31px", top: "31.23px" }}>
                  <svg width="12" height="12" viewBox="0 0 21 21" fill="none"><path d="M9.82 0.84C10.05 0.21 10.94 0.21 11.17 0.84L11.86 2.72C12.4 4.19 12.39 6.39 13.5 7.5C14.6 8.6 16.8 8.59 18.27 9.13L20.15 9.82C20.78 10.05 20.78 10.94 20.15 11.17L18.27 11.86C16.8 12.4 14.6 12.39 13.5 13.5C12.39 14.6 12.4 16.8 11.86 18.27L11.17 20.15C10.94 20.78 10.05 20.78 9.82 20.15L9.13 18.27C8.59 16.8 8.6 14.6 7.5 13.5C6.39 12.39 4.19 12.4 2.72 11.86L0.84 11.17C0.21 10.94 0.21 10.05 0.84 9.82L2.72 9.13C4.19 8.59 6.39 8.6 7.5 7.5C8.6 6.39 8.59 4.19 9.13 2.72L9.82 0.84Z" fill="#e879f9" /></svg>
                </span>
                <span className="sp" style={{ left: "117.71px", top: "9.98px" }}>
                  <svg width="14" height="14" viewBox="0 0 21 21" fill="none"><path d="M9.82 0.84C10.05 0.21 10.94 0.21 11.17 0.84L11.86 2.72C12.4 4.19 12.39 6.39 13.5 7.5C14.6 8.6 16.8 8.59 18.27 9.13L20.15 9.82C20.78 10.05 20.78 10.94 20.15 11.17L18.27 11.86C16.8 12.4 14.6 12.39 13.5 13.5C12.39 14.6 12.4 16.8 11.86 18.27L11.17 20.15C10.94 20.78 10.05 20.78 9.82 20.15L9.13 18.27C8.59 16.8 8.6 14.6 7.5 13.5C6.39 12.39 4.19 12.4 2.72 11.86L0.84 11.17C0.21 10.94 0.21 10.05 0.84 9.82L2.72 9.13C4.19 8.59 6.39 8.6 7.5 7.5C8.6 6.39 8.59 4.19 9.13 2.72L9.82 0.84Z" fill="#ff4fbf" /></svg>
                </span>
                <span className="sp" style={{ left: "295.11px", top: "38.57px" }}>
                  <svg width="13" height="13" viewBox="0 0 21 21" fill="none"><path d="M9.82 0.84C10.05 0.21 10.94 0.21 11.17 0.84L11.86 2.72C12.4 4.19 12.39 6.39 13.5 7.5C14.6 8.6 16.8 8.59 18.27 9.13L20.15 9.82C20.78 10.05 20.78 10.94 20.15 11.17L18.27 11.86C16.8 12.4 14.6 12.39 13.5 13.5C12.39 14.6 12.4 16.8 11.86 18.27L11.17 20.15C10.94 20.78 10.05 20.78 9.82 20.15L9.13 18.27C8.59 16.8 8.6 14.6 7.5 13.5C6.39 12.39 4.19 12.4 2.72 11.86L0.84 11.17C0.21 10.94 0.21 10.05 0.84 9.82L2.72 9.13C4.19 8.59 6.39 8.6 7.5 7.5C8.6 6.39 8.59 4.19 9.13 2.72L9.82 0.84Z" fill="#ff4fbf" /></svg>
                </span>
              </span>
            </h2>
          </div>
          <div className="section-subtitle"><p>Everything you need to know about our premium assets, delivery systems, and billing process.</p></div>
        </div>

        {/* FAQ Accordion */}
        <div className="w-full bg-[#121212] border border-white/5 rounded-[24px] p-6 md:p-10 shadow-[0_10px_40px_rgba(255,79,191,0.05)] transition-all duration-300">
          <Accordion type="single" collapsible className="w-full">
            {FaqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-white/5 last:border-0 data-[state=open]:border-[#ff4fbf]/30 transition-colors duration-300"
              >
                <AccordionTrigger
                  className="text-lg md:text-xl text-white hover:text-[#ff4fbf] transition-colors py-6 font-semibold hover:no-underline [&[data-state=open]]:text-[#ff4fbf] text-left font-['Satoshi']"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-8 pt-2">
                  <div className="pl-4 border-l-2 border-[#ff4fbf]/50">
                    <p className="text-white/70 text-sm md:text-base leading-relaxed font-['Poppins']">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </div>
  );
};

export default Faq;
