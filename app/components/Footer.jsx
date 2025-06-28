import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 py-6 gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          {/* <Image
            src="/assets/images/elvora-stack.png"
            alt="Elvora Logo"
            width={48}
            height={48}
            className="object-contain"
          /> */}
          <h3 className='text-2xl text-secondary1'>ELVORA</h3>
        </div>

        {/* Center Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base font-medium text-white/80">
          {[
            { href: '/', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#services', label: 'Services' },
            { href: '#contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-secondary2 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-white text-lg">
          <Link
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary2 transition"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://wa.me/2340000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary2 transition"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </footer>
  );
}
