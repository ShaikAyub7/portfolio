"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full py-16 px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">About Me</h1>

        {/* Paragraph */}
        <p className=" leading-7 sm:leading-8 text-sm sm:text-base">
          Hi, I’m Shaik Ayub, a passionate front-end developer dedicated to
          crafting seamless, user-friendly web experiences. With a keen eye for
          detail and a love for clean code, I specialize in turning ideas into
          visually stunning and functional interfaces. I thrive on solving
          challenges and building responsive, interactive websites that not only
          look great but also perform exceptionally well across all devices.
        </p>
      </motion.div>
    </section>
  );
}
