import React from 'react';
import { MessageCircle, Instagram, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-[#1F1F1F] text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Main Footer Section */}
        <div className="py-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Text Content (Left) */}
          <div className="text-center md:text-left space-y-4 max-w-md">
            <h3 className="text-3xl font-bold">Jobsta</h3>
            <p className="text-white/70">
              Connecting South African youth with opportunities, one WhatsApp message at a time.
            </p>
          </div>

          {/* Social Icons (Right) */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-3 rounded-lg bg-white/10 hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              <span>hello@jobsta.co.za</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4" />
              <span>Pretoria, South Africa</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 text-center space-y-2">
          <p className="text-sm text-white/60">
            © {currentYear} Jobsta
          </p>
          <p className="text-xs text-white/40">
            We respect your privacy.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;