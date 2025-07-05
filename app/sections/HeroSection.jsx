'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react'; // Optional: Replace with any arrow icon you prefer

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center sm:px-6 md:px-10 lg:px-6 font-poppins overflow-hidden relative">
      {/* Background Image - visible on all screens */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/ev.jpg"
          alt="Background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden pt-24 text-center">
        <h1 className="text-[3rem] leading-tight font-bold">
          Elevating Every
        </h1>
        <h1 className="text-[3.5rem] leading-tight font-semibold text-primary -mt-2">
          Occasion
        </h1>

        <p className="mt-6 text-gray-00 text-lg leading-relaxed px-2">
        We transform
        planning overwhelm into an unforgettable reflection of your story. For celebrations your guests will remember for years. 
        </p>

        {/* Hero Image Below Content */}
        <div className="mt-8 px-4">
          <Image
            src="/assets/images/ev.jpg"
            alt="Hero"
            width={600}
            height={400}
            className="w-full max-h-[300px] object-cover rounded-lg"
          />
        </div>

        {/* Bouncy Down Arrow */}
        <div className="mt-12 flex justify-center">
          <Link href="#contact" scroll={true}>
            <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
          </Link>
        </div>
      </div>

      {/* Desktop Layout (untouched except bg fix) */}
      <div className="hidden md:block">
        <div className="mb-16 md:mb-16 px-12">
          <h1 className="text-[4rem] lg:text-[4rem] xl:text-[6rem] font-bold leading-[200px] tracking-tight text-primary">
            Elevating Every
          </h1>
          <h1 className="text-[6rem] lg:text-[8rem] xl:text-[12rem] font-semibold leading-[0.9] tracking-tight -mt-8 text-primary">
            Occassion
          </h1>
        </div>

        <div className="flex items-center gap-12 px-12">
          {/* Scroll Button */}
          <Link
            href="#contact"
            className="w-32 h-32 flex items-center justify-center rounded-full bg-secondary1 text-white text-2xl font-medium hover:bg-neutral-800 transition-all duration-300 flex-shrink-0"
          >
            Scroll
          </Link>

          {/* Paragraph */}
          <div className="flex-1">
            <p className="text-gray-600 text-3xl leading-relaxed text-right max-w-lg ml-auto">
              For celebrations your guests will remember for years. We transform
              planning overwhelm into an unforgettable reflection of your story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
