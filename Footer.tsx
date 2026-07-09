import Link from "next/link";
import React from "react";
import { SITE_NAME } from "./config";

const Footer = () => {
  return (
    <>


      <footer className="ft component" data-component-id="footer">
        <div className="ft__top-line"></div>

        <div className="ft__main">
          <div className="ft__brand">
            <div className="ft__brand-row">
              <img src="/logo.png" alt="Logo" className="ft__logo" />
              <span className="ft__name">{SITE_NAME}</span>
            </div>
            <p className="ft__tagline">
              {SITE_NAME} helps you unlock the full potential of your Discord server with premium boosts — fast, secure, and trusted worldwide.
            </p>
          </div>

          <div className="ft__cols">
            <div className="ft__col">
              <span className="ft__col-heading">Company</span>
              <ul className="ft__links">
                <li><Link href="/" className="ft__link">Home</Link></li>
                <li><Link href="/#products" className="ft__link">Products</Link></li>
                <li><Link href="/reviews" className="ft__link">Feedback</Link></li>
              </ul>
            </div>

            <div className="ft__col">
              <span className="ft__col-heading">Legal</span>
              <ul className="ft__links">
                <li><Link href="/terms" className="ft__link">Terms of Service</Link></li>
                <li><Link href="/privacy" className="ft__link">Privacy Policy</Link></li>
                <li><Link href="/terms" className="ft__link">Refund Policy</Link></li>
              </ul>
            </div>

            <div className="ft__col">
              <span className="ft__col-heading">Support</span>
              <ul className="ft__links">
                <li><a href="https://discord.gg/universeboosts" className="ft__link" target="_blank" rel="noreferrer">Discord</a></li>
                <li><a href="#" className="ft__link" target="_blank" rel="noreferrer">Telegram</a></li>
                <li><a href="#" className="ft__link" target="_blank" rel="noreferrer">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ft__bottom">
          <span className="ft__copy">© 2026 {SITE_NAME}. All rights reserved.</span>
          <div className="ft__payment-icons">
            <div className="ft__pay-badge" style={{ background: "#1a1f71" }}>
              <img src="https://i.imgur.com/WXzhM4c.png" height="18" alt="Payment" />
            </div>
            <div className="ft__pay-badge" style={{ background: "#252525" }}>
              <img src="https://i.imgur.com/O4wCGJS.png" height="18" alt="Payment" />
            </div>
            <div className="ft__pay-badge" style={{ background: "#003087" }}>
              <img src="https://i.imgur.com/OYvswh5.png" height="18" alt="Payment" />
            </div>
            <div className="ft__pay-badge" style={{ background: "#1a1a1a" }}>
              <img src="https://i.imgur.com/fQ4N1kR.png" height="18" alt="Payment" />
            </div>
            <div className="ft__pay-badge" style={{ background: "#1a1a1a" }}>
              <img src="https://i.imgur.com/auBDtnB.png" height="18" alt="Payment" />
            </div>
          </div>
        </div>

        <div className="ft__divider"></div>

        <div className="ft__disclaimer">
          <p>
            <strong>Disclaimer:</strong> This website is not affiliated with, authorized, maintained, sponsored, or endorsed by Discord Inc. (discord.com) or any of its affiliates. All trademarks and images belong to their respective owners.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;