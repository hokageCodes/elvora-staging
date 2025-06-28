'use client';

import Link from 'next/link';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-purple-400/20 w-full">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo Text */}
          <div className="flex items-center justify-center sm:justify-start">
            <span className="text-secondary1 font-trajan text-lg tracking-widest">
              ELVORA
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center items-center gap-5 text-sm font-medium">
            {[
              { href: '#about', label: 'About Us' },
              { href: '#services', label: 'Our Services' },
              { href: '#contact', label: 'Contact Us' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-purple-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3 items-center justify-center sm:justify-end">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-secondary1 rounded-full transition duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </Link>
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 hover:bg-secondary1 rounded-full transition duration-200 hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
