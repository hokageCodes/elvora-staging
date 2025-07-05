'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ParallaxAboutSection() {
  return (
    <section className="relative min-h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('/assets/images/ev.jpg')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Column 1 - Copy */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug mb-6">
              We partner with you to create moments you’ll look back on and say, <span className="italic text-secondary2">“That was everything—and more”</span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Elvora is a premier event planning and production company that transforms every occasion into something exceptional. With thoughtful design, precise execution, and a flair for detail, we curate experiences that feel effortless but leave lasting impressions.
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-6">
              Whether it’s a corporate launch, a lifestyle celebration, or an intimate gathering, our approach is rooted in clarity, creativity, and intention.
            </p>

            <Link
              href="/offerings"
              className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-all"
            >
              View our offerings
            </Link>
          </div>

          {/* Column 2 - Pull Quote */}
          <div className="border-l-4 border-secondary2 pl-6 italic text-lg sm:text-xl font-light text-neutral-100">
            “No event should ever be the same because no two clients are the same — our approach to every celebration is this: 
            <br />
            <span className="block mt-4 font-medium not-italic text-white">Make it unique, Make it seamless, Make it elegant.”</span>
          </div>
        </div>
      </div>
    </section>
  );
}
