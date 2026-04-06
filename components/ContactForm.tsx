"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { postForm } from "@/utils/action";

const ContactForm = () => {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-2xl text-center sm:text-3xl font-bold mb-6">
        Contact Me
      </h1>

      <motion.form
        className="flex flex-col gap-6 max-w-2xl mx-auto bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="relative">
          <input
            type="text"
            name="name"
            required
            className="peer w-full p-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-blue-500"
          />
          <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-2 peer-valid:text-xs">
            Your Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            required
            className="peer w-full p-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-blue-500"
          />
          <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-2 peer-valid:text-xs">
            Your Email
          </label>
        </div>

        <div className="relative">
          <textarea
            name="description"
            required
            className="peer w-full p-3 bg-transparent border border-white/20 rounded-lg outline-none focus:border-blue-500"
          ></textarea>
          <label className="absolute left-3 top-3 text-gray-400 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-valid:-top-2 peer-valid:text-xs">
            Your Message
          </label>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
        >
          Send Message 🚀
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
