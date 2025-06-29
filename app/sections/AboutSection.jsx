'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="bg-primary text-white font-poppins py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 md:mt-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-trajan uppercase text-secondary2">
            Welcome to Elvora
          </h2>

          <p className="text-white/90 text-lg leading-relaxed">
            We partner with you to create moments you’ll look back on and say, ‘That was everything—and more.
          </p>

          <p className="text-white/90 text-lg leading-relaxed">
            Elvora is a premier event planning and production company that transforms every occasion into something exceptional. With thoughtful design, precise execution, and a flair for detail, we curate experiences that feel effortless but leave lasting impressions.
          </p>

          <p className="text-white/90 text-lg leading-relaxed">
            Whether it’s a corporate launch, a lifestyle celebration, or an intimate gathering, our approach is rooted in clarity, creativity, and intention.
          </p>

          <Link
            href="#services"
            className="inline-block px-8 py-4 rounded-full bg-secondary1 text-white font-medium hover:bg-secondary2 transition-all duration-300"
          >
            View our offerings
          </Link>

          <div className="mt-10 space-y-4">
            <h3 className="text-xl font-trajan uppercase text-secondary2">Founder’s Note</h3>
            <blockquote className="text-white/60 italic border-l-4 border-secondary2 pl-4 text-base">
              No event should ever be the same because no two clients are the same - our approach to every celebration is this: <br />
              Make it unique, Make it seamless, Make it elegant
            </blockquote>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - Image or Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full aspect-[3/4] bg-white/10 rounded-xl flex items-center justify-center text-white/40 text-sm">
            {/* Optional placeholder; can replace with <Image /> */}
            Founder image goes here
          </div>
        </motion.div>
      </div>
    </section>
  );
}
