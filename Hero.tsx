"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { SITE_NAME } from "./config";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Basic setup for the canvas lightrays effect, keeping it simple
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Very simple light ray rendering loop
    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
      gradient.addColorStop(0, "rgba(255,79,191,0.15)");
      gradient.addColorStop(1, "rgba(255,79,191,0)");
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 - 200, canvas.height);
      ctx.lineTo(canvas.width / 2 + 200, canvas.height);
      ctx.lineTo(canvas.width / 2 + 500 + Math.sin(frame * 0.01) * 100, 0);
      ctx.lineTo(canvas.width / 2 - 500 - Math.cos(frame * 0.01) * 100, 0);
      ctx.fill();

      frame++;
      requestAnimationFrame(draw);
    };
    const animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      

      <section className="hero">
        <div className="hero__lightrays" id="heroLightRays">
          <canvas ref={canvasRef}></canvas>
        </div>
        <img className="hero__video" id="heroVideo" src="https://i.imgur.com/yAbvleE.png" alt="Background pattern" />
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <div className="hero__text">
            
            <div className="hero__badge" id="heroBadge">
              <div className="hero__badge-glass">
                <span className="hero__badge-icon">
                  <svg width="13" height="15" viewBox="0 0 13 15" fill="none">
                    <path d="M6.5 0.5L0.5 3V7.5C0.5 10.985 3.089 14.244 6.5 14.5C9.911 14.244 12.5 10.985 12.5 7.5V3L6.5 0.5Z" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.55)" strokeWidth="0.9" strokeLinejoin="round"></path>
                    <path d="M4 7.5L5.8 9.3L9 6" stroke="rgba(255,255,255,0.9)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <span className="hero__badge-text">Trusted by over <strong>1,000+</strong> customers</span>
              </div>
            </div>

            <h1 className="hero__title" id="heroTitle">
              Quality Discord Boosts at a Fraction of the Cost.
            </h1>
            
            <p className="hero__subtitle" id="heroSubtitle">
              At {SITE_NAME}, we provide the best services with high quality tools to satisfy all customers & resellers with fully automated delivery so you never have to wait.
            </p>

            <div className="hero__actions">
              <Link href="/#products" className="hero__btn hero__btn--shimmer">
                <span className="hero__btn-shimmer-bar"></span>
                Get Started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a href="https://discord.gg/universeboosts" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"></path>
                </svg>
                Join Discord
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Ticker / Marquee */}
      <div className="ticker">
        <div className="ticker__track">
          <span>{SITE_NAME}</span>
          <span>{SITE_NAME} — Your Wallet Friendly Source for Discord Boosting Solutions!</span>
          <span>{SITE_NAME} — Your Wallet Friendly Source for Discord Boosting Solutions!</span>
          <span>{SITE_NAME} — Your Wallet Friendly Source for Discord Boosting Solutions!</span>
          <span>{SITE_NAME} — Your Wallet Friendly Source for Discord Boosting Solutions!</span>
          <span>{SITE_NAME} — Your Wallet Friendly Source for Discord Boosting Solutions!</span>
        </div>
      </div>
    </>
  );
};

export default Hero;