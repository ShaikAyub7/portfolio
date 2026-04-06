"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { postForm } from "@/utils/action";
import ContactForm from "./ContactForm";

export default function Contact() {
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    await postForm(formData);
  };

  return (
    <section
      id="contact"
      className="w-full py-20 px-4 bg-gradient-to-b from-[#0f172a] to-[#020617] text-white"
    >
      <div className="max-w-5xl mx-auto text-center">
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

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-12">
          <motion.a
            href="mailto:skayub929@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 transition shadow-lg"
          >
            <FaEnvelope className="text-4xl text-blue-400 group-hover:scale-110 transition" />
            <span className="font-semibold">Email</span>
            <span className="text-sm text-gray-400">skayub929@gmail.com</span>
          </motion.a>

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
        <ContactForm />
      </div>
    </section>
  );
}
