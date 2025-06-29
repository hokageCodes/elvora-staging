'use client';

import { Lightbulb, Sparkles, CheckCircle } from 'lucide-react';

export default function RecipeSection() {
  return (
    <section className="bg-white py-24 px-6 sm:px-10 lg:px-20 text-primary font-poppins">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-trajan uppercase mb-4">
          Our Recipe
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-light mb-12">
          Backed by strong vendor relationships, extensive experience, and good old-fashioned know-how: we’ve mastered the art of fine entertaining.
        </p>

        {/* Quote Section */}
        <blockquote className="italic text-secondary1 text-lg sm:text-xl max-w-4xl mx-auto mb-16 border-l-4 border-secondary2 pl-6">
          Every project begins with a story. We start with visuals, textures, and atmosphere — building moodboards that serve as blueprints for emotion. Then we layer in detail, coordination, and experience design to bring it all to life.
        </blockquote>

        {/* Subheading */}
        <h3 className="text-xl uppercase tracking-wider text-primary mb-10 font-semibold">
          Here’s what we’ll take off your plate:
        </h3>

        {/* 3-Column Grid */}
        <div className="grid gap-12 md:grid-cols-3 text-left">
          {/* Envision */}
          <div className="space-y-5">
            <div className="w-14 h-14 bg-secondary2/10 text-secondary2 flex items-center justify-center rounded-md">
              <Lightbulb size={28} />
            </div>
            <h4 className="text-2xl font-semibold font-trajan">Envision</h4>
            <ul className="text-gray-700 text-sm leading-relaxed list-disc list-inside space-y-1">
              <li>Discover and recommend venues that align with your vision and vibe</li>
              <li>Curate a tailored team of trusted vendors, handling outreach and negotiations</li>
              <li>Map out clear, comprehensive timelines that keep every detail in sync</li>
              <li>Craft personalized food and beverage experiences with expert caterers, mixologists, and bakers</li>
              <li>Oversee all client-facing communication, from guest list management and RSVPs to etiquette advice and website coordination</li>
            </ul>
          </div>

          {/* Elevate */}
          <div className="space-y-5">
            <div className="w-14 h-14 bg-secondary2/10 text-secondary2 flex items-center justify-center rounded-md">
              <Sparkles size={28} />
            </div>
            <h4 className="text-2xl font-semibold font-trajan">Elevate</h4>
            <ul className="text-gray-700 text-sm leading-relaxed list-disc list-inside space-y-1">
              <li>Select refined stationers and calligraphers to set the tone through paper and print</li>
              <li>Create spatial layouts and floorplans that support comfort, flow, and energy</li>
              <li>Design mood-setting lighting, immersive sound, and dramatic staging to suit the setting</li>
              <li>Curate florals, luxury tabletop pieces, and lounge setups that bring softness and elegance</li>
              <li>Present detailed visual decks and storyboards so you can see your vision come to life</li>
            </ul>
          </div>

          {/* Execute */}
          <div className="space-y-5">
            <div className="w-14 h-14 bg-secondary2/10 text-secondary2 flex items-center justify-center rounded-md">
              <CheckCircle size={28} />
            </div>
            <h4 className="text-2xl font-semibold font-trajan">Execute</h4>
            <ul className="text-gray-700 text-sm leading-relaxed list-disc list-inside space-y-1">
              <li>Manage vendor relationships and workflows to ensure smooth operations</li>
              <li>Provide thoughtful guest support and concierge-style touchpoints throughout the experience</li>
              <li>Oversee every aspect of event day, from early setup to the final strike</li>
              <li>Execute the celebration with precision, flexibility, and calm, so you can focus on the moments that matter</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
