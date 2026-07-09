"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import Products from "@/components/Products";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-transparent text-gray-200 overflow-x-hidden flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <Hero />
        
        <AboutUs />
        
        <Products />
        
        <ReviewsMarquee />
        
        <Faq />
        
        <Footer />
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
