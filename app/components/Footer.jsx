'use client';

import Link from 'next/link';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-purple-400/20 w-full relative overflow-hidden">
      {/* Background Company Name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-white/5 font-trajan text-8xl sm:text-9xl md:text-[12rem] lg:text-[15rem] xl:text-[18rem] tracking-wider select-none">
          ELVORA
        </span>
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 py-12">
        <div className="flex flex-col items-center justify-center gap-8">


          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center items-center gap-8 text-base font-medium">
            {[
              { href: '#about', label: 'About Us' },
              { href: '#services', label: 'Our Services' },
              { href: '#contact', label: 'Contact Us' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-purple-400 transition-all duration-300 hover:scale-110 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 items-center justify-center">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-secondary1 rounded-full transition-all duration-300 hover:scale-110 group"
              aria-label="Instagram"
            >
              <Instagram size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </Link>
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-secondary1 rounded-full transition-all duration-300 hover:scale-110 group"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-white/60 text-sm">
              © 2025 Elvora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}