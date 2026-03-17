import logo from "@/assets/Logo.png";
import { Instagram, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "IoT Device", href: "#iot-device" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-foreground text-background py-12 px-4">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="inline-flex items-center gap-2 font-display font-bold text-2xl mb-3">
            <img src={logo} alt="CookMate logo" className="h-10 w-auto" />
            <span>CookMate</span>
          </h3>
          <p className="text-sm opacity-70">Your AI-powered cooking assistant for perfect meals,<br /> every time.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>cookmate.lk</li>
            <li>cookmate.lk@gmail.com</li>
            <li className="flex gap-4 pt-2">
              <a
                href="https://lnkd.in/gBVpkwSG"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-background/30 hover:opacity-100"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/cookmate_lk?utm_source=qr&igsh=MzVrcXo4eXF1N202"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-background/30 hover:opacity-100"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/20 pt-6 text-center text-sm opacity-60">
        © 2025 - {new Date().getFullYear()} CookMate. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
