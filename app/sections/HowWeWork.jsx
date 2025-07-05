'use client';

import { motion } from 'framer-motion';
import { Eye, Sparkles, ClipboardCheck } from 'lucide-react'; // Swap for your icons

const phases = [
  {
    title: 'ENVISION',
    icon: <Eye className="w-10 h-10 text-primary" />,
    description:
      'Every unforgettable event starts with a story — yours. We take the time to understand your vision, ask the right questions, and dream alongside you. From there, we build the foundation of your event with intention, clarity, and creativity.',
    bullets: [
      'Discover and recommend venues that align with your vision and vibe',
      'Curate a tailored team of trusted vendors, handling outreach and negotiations',
      'Map out clear, comprehensive timelines that keep every detail in sync',
      'Craft personalized food and beverage experiences with expert caterers, mixologists, and bakers',
      'Oversee all client-facing communication from guest list management and RSVPs to etiquette advice and website coordination',
    ],
  },
  {
    title: 'ELEVATE',
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    description:
      'Design is where the magic takes form. With a keen eye and an instinct for harmony, we translate your vision into elevated design moments, every element curated to feel cohesive, intentional, and uniquely yours.',
    bullets: [
      'Select refined stationers to set the tone through paper and print',
      'Create spatial layouts and floor plans that support comfort, flow, and energy',
      'Design mood-setting lighting, immersive sound, and dramatic staging to suit the setting',
      'Curate florals, luxury tabletop pieces, and lounge setups that bring softness and elegance',
      'Present detailed visual decks and storyboards so you can see your vision come to life',
    ],
  },
  {
    title: 'EXECUTE',
    icon: <ClipboardCheck className="w-10 h-10 text-primary" />,
    description:
      'When the big day arrives, we are your quiet confidence behind the scenes - anticipating needs, managing logistics, and ensuring everything goes according to plan. You just show up and enjoy it all.',
    bullets: [
      'Manage vendor relationships and workflows to ensure smooth operations',
      'Provide thoughtful guest support and concierge-style touch points throughout the experience',
      'Oversee every aspect of event day — from early setup to the final strike',
      'Execute the celebration with precision, flexibility, and calm, so you can focus on the moments that matter',
    ],
  },
];

export default function RecipeSection() {
  return (
    <section className="bg-[#fefefe] py-24 px-2 sm:px-10 lg:px-24 font-poppins text-primary" id='about'>
      {/* Intro Copy */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-trajan uppercase text-secondary2 mb-6"
        >
          Our Recipe
        </motion.h2>
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="italic text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          “Every event begins with a story. We start with visuals, textures, and emotion, building moodboards that serve as blueprints for experience. Then we layer in detail, coordination, and creative strategy to bring it all to life.”
        </motion.blockquote>
      </div>

      {/* 3-Column Grid */}
      <div className="grid lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
        {phases.map((phase, index) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-neutral-200"
          >
            <div className="flex items-center gap-4 mb-4">
              {phase.icon}
              <h3 className="text-xl sm:text-2xl font-trajan tracking-wide">
                {phase.title}
              </h3>
            </div>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              {phase.description}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
              {phase.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
