'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'The event was beautiful and amazing. The coordination was fantastic. Every detail felt intentional, and the experience was completely stress-free. We look forward to working with you again.',
    author: 'W.N.',
  },
  {
    quote:
      'They just get it. From concept to execution, Elvora made our event unforgettable.',
    author: 'T.T.',
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white text-primary py-12 px-6 sm:px-10 lg:px-20 font-poppins">
      {/* Section Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-trajan uppercase text-secondary2"
        >
          Our Clients Say the Nicest Things
        </motion.h2>
      </div>

      {/* Testimonial Slider */}
      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="text-center px-4 sm:px-10"
          >
            <blockquote className="text-xl sm:text-2xl font-light text-gray-800 leading-relaxed">
              “{testimonials[index].quote}”
            </blockquote>
            <p className="mt-6 text-secondary1 text-sm sm:text-base uppercase tracking-widest font-medium">
              — {testimonials[index].author}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Nav Arrows */}
        <div className="flex justify-between items-center mt-12 max-w-xs mx-auto">
          <button
            onClick={prev}
            className="p-2 border border-gray-300 hover:border-black rounded-full transition-colors"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-2 border border-gray-300 hover:border-black rounded-full transition-colors"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
