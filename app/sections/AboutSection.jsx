'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FoundersNoteSection() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center bg-no-repeat text-white font-poppins py-20 px-2 sm:px-10 lg:px-20"
      style={{ backgroundImage: 'url(/assets/images/parallax-bg.jpg)' }} // Replace with your actual background
    >
      <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* LEFT COLUMN - Founder's Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 md:mt-32"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-trajan uppercase text-secondary2">
            Founder's Note
          </h2>

          <div className="space-y-6 text-white/90 text-lg leading-relaxed text-justify">
            <p>
              Elvora was born from a quiet belief that the most unforgettable moments in life are made in the details - the way a room feels when you walk in, the hush before a toast, the joy that lingers long after the last song.
            </p>

            <p>
              I wanted to build more than a planning company. I wanted to create a space where events are designed with intention, executed with care, and filled with meaning where every element feels like a reflection of something true.
            </p>

            <p>
              For me, it is never just about timelines or table settings. It is about creating experiences where people feel seen, celebrated, and surrounded by beauty. Whether it is a wedding, a corporate gathering, or an intimate milestone, we approach each one with the same heart as if it were our own.
            </p>

            <p>
              Elvora is more than an event planning company; it is a luxury experience curator. By blending strategic planning, creative excellence, and meticulous execution, we proudly position ourselves as the premier choice for high-end events in Nigeria and beyond.
            </p>

            <p>
              Thank you for trusting us with your moments. We are honored to shape them with care.
            </p>
          </div>

          <div className="mt-12 space-y-2">
            <p className="text-white/90 text-lg italic">
              Warmly,
            </p>
            <p className="text-secondary2 text-xl font-semibold">
              Oreoluwa Ayanwale
            </p>
            <p className="text-white/70 text-base">
              Founder & Creative Director, Elvora
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - Founder Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:mt-24"
        >
          <Image
            src="/assets/images/director.jpg"
            alt="Oreoluwa Ayanwale - Founder & Creative Director"
            width={400}
            height={533}
            className="w-full aspect-[3/4] object-cover rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}