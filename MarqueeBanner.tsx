"use client";

import React from "react";
import { SITE_NAME } from "./config";

const MarqueeBanner = () => {
  const text = `${SITE_NAME}: Your #1 Choice for Discord Services • Budget-Friendly • Instant Delivery • 24/7 Live Support`;

  return (
    <div className="relative z-20">
      <section
        className="w-full overflow-hidden relative"
        style={{
          background: "linear-gradient(to right, #7356c4, #c861ff, #7356c4)",
        }}
      >
        <div className="py-3">
          <div className="marquee-container">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="text-white font-semibold text-base whitespace-nowrap px-4 flex items-center"
              >
                {text}
                <img
                  src="/gem.png"
                  alt="gem"
                  className="gem-icon"
                  onError={(e) => {
                    e.currentTarget.src = "/PNG/star.png";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarqueeBanner;
