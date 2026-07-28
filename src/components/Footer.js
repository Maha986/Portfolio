import React from "react";

function Footer() {
  return (
    <div className="footer-bar wrap">
      <span>&copy; {new Date().getFullYear()} Maha Javed</span>
      <span>Built with React &amp; Framer Motion</span>
    </div>
  );
}

export default Footer;
