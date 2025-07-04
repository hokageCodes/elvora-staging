'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen md:h-[99vh] text-primary font-poppins overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/ev.jpg"
          alt="Elegant event setup"
          fill
          className="object-cover object-center opacity-70"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto">
        <h1 className="text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl xl:text-[6.5rem] font-trajan uppercase tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary2 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)] mb-6">
          Elevating Every<br className="hidden sm:block" />
          Occasion
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 font-light leading-relaxed max-w-md sm:max-w-xl md:max-w-2xl">
          Celebrations your guests will remember for years.
        </p>
      </div>

      {/* Bouncing Arrow CTA */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex justify-center z-20 px-4">
        <Link href="#contact" scroll={true} className="flex flex-col items-center group">
          <span className="text-xs sm:text-sm text-gray-700 group-hover:text-secondary1 transition">
            Take a Journey
          </span>
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-secondary1 animate-bounce group-hover:text-secondary2 transition" />
        </Link>
      </div>
    </section>
  );
}
