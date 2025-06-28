'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Our Services' },
    { href: '#why', label: 'Why Elvora?' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <>
      <header className="bg-primary backdrop-blur-xl text-white fixed w-full z-50 border-b border-purple-400/20">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center h-full">
              <div className="relative h-[200px] w-[200px]">
                <Image
                  src="/assets/images/elvora-stack.png"
                  alt="Elvora Logo"
                  fill
                  className="object-contain -ml-12"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-medium text-white/80 hover:text-secondary2 transition duration-200"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#apply"
                className="bg-secondary1 text-white px-6 py-2.5 rounded-full font-medium hover:bg-secondary2 transition hover:scale-105 flex items-center gap-2"
              >
                Book An Event
                <ArrowUpRight size={16} />
              </Link>
            </nav>

            {/* Mobile Menu Toggle + CTA */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* <Link
                href="#apply"
                className="bg-secondary1 text-white px-5 py-2.5 rounded-full text-[15px] font-semibold leading-tight hover:bg-secondary2 transition hover:scale-105"
              >
                Book An Event
              </Link> */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-white/10 rounded-full transition"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-primary transition-all duration-500 ease-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-6">
          {/* Mobile Header */}
          <div className="flex justify-between items-center">
            <div className="relative h-16 w-16" />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col justify-center flex-1 space-y-8 mt-12">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl text-white/80 font-light tracking-tight hover:text-secondary2 transition"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#apply"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-3 bg-secondary1 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-secondary2 hover:scale-105 transition"
            >
              Book An Event
              <ArrowUpRight size={20} />
            </Link>
          </nav>

          <div className="pb-6 border-t border-purple-400/20 text-white/40 text-sm pt-4">
            © 2025 ELVORA. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
