import React from 'react';
import './App.css'; // To link styles
import { Instagram, Mail } from "lucide-react";


// --- 5. Contact / Footer Component ---
const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container"> {/*a container for layout control */}
        
        {/* Left Section: App Name */}
        <div className="footer-left">
          CookMate
        </div>

        {/* Center Section: Copyright */}
        <div className="footer-center">
          <p className="copyright">© 2025 CookMate. All Rights Reserved.</p>
        </div>

        {/* Right Section: Social/Contact Icons */}
        <div className="footer-right">
          
          {/* Instagram Link  */}
          <a 
            href="https://www.instagram.com/cookmate_lk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link" // Add this class for styling
          >
            <div className="social-icon-wrapper">
              <Instagram size={20} /> 
            </div>
          </a>

          {/* Email Link  */}
          <a 
            href="mailto:cookmate.lk@gmail.com"
            className="social-link"
          >
            <div className="social-icon-wrapper">
              <Mail size={20} />
            </div>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;