'use client';

import { motion } from 'framer-motion';

const offerings = [
  {
    number: '01',
    title: 'Corporate Experiences',
    description:
      'From product launches to leadership retreats to end-of-year celebrations, we design with your audience in mind, delivering polished, engaging events that elevate your brand.',
  },
  {
    number: '02',
    title: 'Social Celebrations',
    description:
      'From stylish brunches to unforgettable birthday celebrations to celebration of life, we create moments that reflect your energy and vision.',
  },
  {
    number: '03',
    title: 'Creative Direction',
    description:
      'We craft visual worlds that communicate your message — from moodboards to set design and production consulting.',
  },
];

export default function OfferingsSection() {
  return (
    <section className="bg-white text-primary py-24 px-6 sm:px-10 lg:px-24 font-poppins overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-trajan uppercase text-secondary2 mb-4">
          Offerings
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
          It’s our joy to plan, design, and produce celebrations around the world.
          <br />
          Let’s create an unforgettable guest experience… Could your event be next?
        </p>
      </div>

      <div className="space-y-16">
        {offerings.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-16 items-start"
          >
            <div className="flex-shrink-0 text-secondary1 text-4xl font-bold font-trajan w-12">
              {item.number}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-trajan text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-base text-gray-700 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
