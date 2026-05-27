'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 -z-20">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/assets/images/ev.jpg"
            alt="Elvora luxury celebration"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Layered overlays — depth + brand green */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-primary/25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-secondary1/10 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.3 }}
        />
      </div>

      {/* Subtle frame lines */}
      <motion.div
        className="absolute inset-x-6 sm:inset-x-10 top-28 bottom-10 pointer-events-none border border-white/10 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pb-28 sm:pb-32 pt-32 sm:pt-36"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <motion.div className="lg:col-span-8" variants={fadeUp}>
            <p className="font-poppins text-secondary2 text-[11px] sm:text-xs tracking-[0.35em] uppercase mb-6 sm:mb-8">
              Luxury Event Planning &amp; Production
            </p>

            <h1 className="font-trajan text-white leading-[0.95] tracking-tight">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-normal">
                Elevating Every
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] mt-1 sm:mt-2 text-secondary2">
                Occasion
              </span>
            </h1>

            <div className="mt-8 sm:mt-10 flex items-center gap-4">
              <span className="h-px w-12 sm:w-16 bg-secondary1 shrink-0" aria-hidden />
              <p className="font-poppins text-white/75 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
                We transform planning into an art form — curating celebrations
                that feel effortless, look exquisite, and linger in memory long
                after the last guest leaves.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-4 flex flex-col gap-8 lg:items-end lg:text-right"
            variants={fadeUp}
          >
            <div className="hidden lg:block space-y-1 font-poppins text-white/50 text-sm tracking-wide">
              <p>Weddings · Corporate · Social</p>
              <p className="text-secondary2/90">Lagos &amp; Beyond</p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-secondary1 hover:bg-secondary2 text-white font-poppins font-medium text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-black/20"
              >
                Book Your Event
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="#offerings"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-secondary2 text-white/90 hover:text-secondary2 font-poppins font-medium text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm bg-white/5"
              >
                View Offerings
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <Link
          href="#welcome"
          className="group flex flex-col items-center gap-2 text-white/50 hover:text-secondary2 transition-colors"
          aria-label="Scroll to explore"
        >
          <span className="font-poppins text-[10px] tracking-[0.3em] uppercase">
            Discover
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} className="group-hover:text-secondary2" />
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}
