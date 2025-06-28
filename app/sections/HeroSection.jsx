'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen text-primary font-poppins overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/venue.jpeg"
          alt="Elegant event setup"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-trajan uppercase leading-tight tracking-tight text-primary mb-6">
          Plan Your Perfect <br className="hidden sm:block" />
          Event With <span className="text-secondary2">Elvora</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-light leading-relaxed max-w-3xl mb-10">
          From breathtaking weddings to unforgettable corporate galas, Elvora turns your vision into cherished memories.
        </p>

        <Link
          href="#contact"
          role="button"
          className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-secondary1 rounded-full hover:bg-secondary2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Let's Plan Together
        </Link>
      </div>
    </section>
  );
}
