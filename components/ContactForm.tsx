"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 px-4">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-center mb-10">Contact</h1>

        <form className="relative flex flex-col gap-6 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
          <div className="absolute inset-0 rounded-2xl opacity-20  from-blue-500 to-purple-500 blur-2xl pointer-events-none" />

          <div className="relative">
            <input
              type="text"
              name="name"
              required
              className="peer w-full p-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
            <label
              className="absolute left-3 top-3 text-gray-400 text-sm transition-all 
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 
              peer-valid:-top-2 peer-valid:text-xs"
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              required
              className="peer w-full p-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
            <label
              className="absolute left-3 top-3 text-gray-400 text-sm transition-all 
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 
              peer-valid:-top-2 peer-valid:text-xs"
            >
              Your Email
            </label>
          </div>

          <div className="relative">
            <textarea
              name="description"
              rows={4}
              required
              className="peer w-full p-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
            />
            <label
              className="absolute left-3 top-3 text-gray-400 text-sm transition-all 
              peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 
              peer-valid:-top-2 peer-valid:text-xs"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="mt-2 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 font-medium hover:opacity-90 transition shadow-md"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
