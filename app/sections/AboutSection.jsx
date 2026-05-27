'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FoundersNoteSection() {
  return (
    <section
      id="about"
      className="relative bg-primary text-white font-poppins overflow-hidden"
    >
      {/* Ambient watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden
      >
        <span className="font-trajan text-white/[0.03] text-[12rem] sm:text-[16rem] lg:text-[20rem] tracking-widest">
          ELVORA
        </span>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Founder portrait */}
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-28"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="text-secondary2 text-[11px] sm:text-xs tracking-[0.35em] uppercase mb-6 lg:hidden">
              From Our Founder
            </p>
            <div className="relative">
              <motion.div
                className="absolute -inset-3 sm:-inset-4 border border-secondary1/40 rounded-sm pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl shadow-black/30">
                <Image
                  src="/assets/images/director.jpg"
                  alt="Oreoluwa Ayanwale — Founder & Creative Director"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="mt-6 space-y-1 border-t border-white/10 pt-6">
              <p className="font-trajan text-secondary2 text-xl sm:text-2xl">
                Oreoluwa Ayanwale
              </p>
              <p className="text-white/60 text-sm tracking-wide">
                Founder &amp; Creative Director
              </p>
            </div>
          </motion.div>

          {/* Founder's note */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div
              className="hidden lg:block"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-secondary2 text-[11px] sm:text-xs tracking-[0.35em] uppercase mb-5">
                From Our Founder
              </p>
              <h2 className="font-trajan text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Founder&apos;s Note
              </h2>
            </motion.div>

            <motion.h2
              className="font-trajan text-3xl sm:text-4xl text-white leading-tight lg:hidden"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Founder&apos;s Note
            </motion.h2>

            <motion.div
              className="flex items-start gap-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span
                className="mt-2 h-px w-10 sm:w-14 bg-secondary1 shrink-0"
                aria-hidden
              />
              <motion.div
                className="space-y-6 text-white/80 text-base sm:text-lg leading-relaxed"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p>
                  Elvora was born from a quiet belief that the most unforgettable
                  moments in life are made in the details — the way a room feels
                  when you walk in, the hush before a toast, the joy that lingers
                  long after the last song.
                </p>
                <p>
                  I wanted to build more than a planning company. I wanted to
                  create a space where events are designed with intention,
                  executed with care, and filled with meaning — where every
                  element feels like a reflection of something true.
                </p>
                <p>
                  For me, it is never just about timelines or table settings. It
                  is about creating experiences where people feel seen,
                  celebrated, and surrounded by beauty. Whether it is a wedding,
                  a corporate gathering, or an intimate milestone, we approach
                  each one with the same heart as if it were our own.
                </p>
                <p>
                  Elvora is more than an event planning company; it is a luxury
                  experience curator. By blending strategic planning, creative
                  excellence, and meticulous execution, we proudly position
                  ourselves as the premier choice for high-end events in Nigeria
                  and beyond.
                </p>
                <p className="text-white/90">
                  Thank you for trusting us with your moments. We are honored to
                  shape them with care.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="pt-4 border-t border-white/10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-white/70 italic text-lg">Warmly,</p>
              <p className="font-trajan text-secondary2 text-xl mt-2 lg:hidden">
                Oreoluwa Ayanwale
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
