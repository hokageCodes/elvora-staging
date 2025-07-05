'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'BTL Nigeria Launch',
    category: 'Corporate Experiences',
    description:
      'A high-impact corporate experience featuring expert panels, immersive branding, and a tech-meets-luxury ambience.',
      image: '/assets/images/btl.jpg',
  },
  {
    title: 'Skintisfaction: Skinovation Event',
    category: 'Creative Direction',
    description:
      'An exclusive session where cutting-edge aesthetics meet creative storytelling for skincare creators and body sculpting experts.',
      image: '/assets/images/btl.jpg',
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-white text-primary py-12 px-2 sm:px-10 lg:px-20 font-poppins">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-trajan uppercase text-primary mb-4"
        >
          Signature Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl text-gray-700 font-light"
        >
          A snapshot of events that reflect our creative direction and production precision.
        </motion.p>
      </div>

      {/* Scrollable on Mobile, Grid on Desktop */}
      <div className="grid sm:grid-cols-2 gap-12 overflow-x-auto sm:overflow-visible scrollbar-hide snap-x snap-mandatory sm:snap-none">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="min-w-[85%] sm:min-w-0 snap-start bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
          >
            <div className="relative h-60 sm:h-72 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="p-3">
              <p className="text-xs uppercase text-secondary1 tracking-widest mb-2 font-semibold">
                {project.category}
              </p>
              <h3 className="text-2xl font-trajan mb-3 text-primary">{project.title}</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
