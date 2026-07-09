"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SITE_NAME } from "./config";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      

      {/* Announcement Bar */}
      {isAnnouncementVisible && (
        <div className="announcement component text-white">
          <div className="ann-bg"></div>
          <span>Welcome to {SITE_NAME} — The #1 Source for Premium Discord Services!</span>
          <button className="ann-close" onClick={() => setIsAnnouncementVisible(false)} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}

      {/* Scrim */}
      <div className={`nb-scrim ${isDrawerOpen ? "is-visible" : ""}`} onClick={closeDrawer}></div>

      {/* Header Navigation */}
      <div className={`nb-shell is-island ${isScrolled ? "has-bg" : ""}`} style={{ top: isAnnouncementVisible ? "3rem" : "0" }}>
        <div className="nb-frame">
          <nav className="nb-inner">
            <div className="nb-col nb-col--left">
              <Link href="/" className="nb-brand">
                <img src="/logo.png" alt="Logo" />
                <span className="nb-brand__name">{SITE_NAME}</span>
              </Link>
            </div>

            <div className="nb-col nb-col--center">
              <ul className="nb-links">
                <li><Link href="/" className="nb-link">Home</Link></li>
                <li><Link href="/#products" className="nb-link">Products</Link></li>
                <li><Link href="/reviews" className="nb-link">Reviews</Link></li>
                <li><Link href="/terms" className="nb-link">Legal</Link></li>
              </ul>
            </div>

            <div className="nb-col nb-col--right">
              <div className="nb-actions">
                <button className="nb-auth-btn">Login</button>
                <button className={`nb-hamburger ${isDrawerOpen ? "is-open" : ""}`} onClick={toggleDrawer}>
                  <svg className="nb-icon-menu" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="4.75" width="14" height="1.5" rx="1" fill="currentColor"></rect>
                    <rect x="2" y="8.25" width="14" height="1.5" rx="1" fill="currentColor"></rect>
                    <rect x="2" y="11.75" width="14" height="1.5" rx="1" fill="currentColor"></rect>
                  </svg>
                  <svg className="nb-icon-close" viewBox="0 0 18 18" fill="none">
                    <polyline points="4,7 9,12 14,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`nb-drawer ${isDrawerOpen ? "is-open" : ""}`}>
        <div className="nb-drawer__panel">
          <ul className="nb-drawer__links">
            <li><Link href="/" onClick={closeDrawer}>Home</Link></li>
            <li><Link href="/#products" onClick={closeDrawer}>Products</Link></li>
            <li><Link href="/reviews" onClick={closeDrawer}>Reviews</Link></li>
            <li><Link href="/terms" onClick={closeDrawer}>Legal</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;