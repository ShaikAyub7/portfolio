"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-4 bg-gradient-to-b from-[#0f172a] to-[#020617] text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Let’s Connect 🚀
        </motion.h2>

        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Have a project in mind or just want to say hi? I’d love to hear from
          you!
        </p>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-12">
          {/* Email */}
          <motion.a
            href="mailto:skayub929@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 transition shadow-lg"
          >
            <FaEnvelope className="text-4xl text-blue-400 group-hover:scale-110 transition" />
            <span className="font-semibold">Email</span>
            <span className="text-sm text-gray-400">skayub929@gmail.com</span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/ShaikAyub7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 transition shadow-lg"
          >
            <FaGithub className="text-4xl group-hover:scale-110 transition" />
            <span className="font-semibold">GitHub</span>
            <span className="text-sm text-gray-400">ShaikAyub7</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/shaik-ayub7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 transition shadow-lg"
          >
            <FaLinkedin className="text-4xl text-blue-500 group-hover:scale-110 transition" />
            <span className="font-semibold">LinkedIn</span>
            <span className="text-sm text-gray-400">shaik-ayub7</span>
          </motion.a>
        </div>

        {/* 🔥 Form */}
        <motion.form
          className="flex flex-col gap-6 max-w-2xl mx-auto bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              required
              className="peer w-full p-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-blue-500"
            />
            <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-2 peer-valid:text-xs">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              required
              className="peer w-full p-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-blue-500"
            />
            <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-2 peer-valid:text-xs">
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              //   rows="4"
              required
              className="peer w-full p-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-blue-500"
            ></textarea>
            <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-2 peer-valid:text-xs">
              Your Message
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
          >
            Send Message 🚀
          </button>
        </motion.form>
      </div>
    </section>
  );
}
