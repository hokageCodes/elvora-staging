'use client';

import { motion } from 'framer-motion';

export default function WorkWithUsSection() {
  return (
    <section className="bg-white text-primary py-24 px-2 sm:px-10 lg:px-24 font-poppins" id='contact'>
      {/* Heading + Copy */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-trajan uppercase mb-4"
        >
          Work With Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="italic text-lg sm:text-xl text-gray-600"
        >
          “Let’s create something elegant. We’d love to hear from you.”
        </motion.p>
      </div>

      {/* Form */}
      <form className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Name*"
          required
          className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary col-span-2 sm:col-span-1"
        />
        <input
          type="email"
          placeholder="Email*"
          required
          className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary col-span-2 sm:col-span-1"
        />
        <input
          type="text"
          placeholder="Phone number"
          className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary col-span-2"
        />
        <select
          className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary col-span-2"
        >
          <option>Preferred contact method</option>
          <option>Email</option>
          <option>Phone number</option>
          <option>WhatsApp</option>
        </select>
        <input
          type="text"
          placeholder="Event type"
          className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary col-span-2 sm:col-span-1"
        />
        <input
          type="date"
          placeholder="Event date"
          className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary col-span-2 sm:col-span-1"
        />
        <input
          type="text"
          placeholder="Event Location"
          className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary col-span-2"
        />
        <textarea
          placeholder="Tell us about your event*"
          rows={5}
          required
          className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary col-span-2"
        />
        <button
          type="submit"
          className="bg-primary text-white py-3 px-6 rounded-md hover:bg-black transition-all col-span-2 w-full sm:w-auto mx-auto"
        >
          Submit
        </button>
      </form>

      {/* Instagram Grid Preview */}
      <div className="mt-24 max-w-6xl mx-auto">
        <h3 className="text-center text-xl font-medium mb-6 text-gray-700">
          Follow us on Instagram <span className="text-secondary1">@By.Elvora</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Replace with dynamic content if integrating IG API */}
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/assets/images/ev.jpg"
              alt="Instagram post"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/assets/images/venue.jpeg"
              alt="Instagram post"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/assets/images/ev.jpg"
              alt="Instagram post"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <section className="py-16 px-6 sm:px-10 lg:px-24 font-poppins text-primary">
  <div className="max-w-xl mx-auto text-center">
    <h3 className="text-2xl sm:text-3xl font-trajan text-secondary2 mb-4 uppercase">
      Stay In Touch
    </h3>
    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
      We’re always just a message or call away. Reach out with questions, ideas. We’d love to hear from you.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-700">
      <div className="flex items-center gap-2">
        <span className="text-xl">📞</span>
        <a
          href="tel:+2348149517738"
          className="hover:text-black transition-colors text-sm sm:text-base"
        >
          +234 814 951 7738
        </a>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl">📧</span>
        <a
          href="mailto:Elvoraevent@gmail.com"
          className="hover:text-black transition-colors text-sm sm:text-base"
        >
          Elvoraevent@gmail.com
        </a>
      </div>
    </div>
  </div>
</section>

    </section>
  );
}
