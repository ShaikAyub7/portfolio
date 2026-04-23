"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Student",
    time: "2025 - Present",
    desc: "Building modern UI with React, Next.js & Tailwind.",
  },
  {
    title: "Full Stack Developer",
    company: "Projects",
    time: "2024 - 2025",
    desc: "Developed APIs, authentication & deployed apps.",
  },
  {
    title: "Learning Phase",
    company: "Self",
    time: "2023 - 2024",
    desc: "Focused on JS, React and real-world projects.",
  },
];

export default function ExperienceRoute() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-16">My Journey</h1>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/20 transform -translate-x-1/2" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`mb-16 flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-[45%]">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md">
                    <p className="text-sm text-gray-400 mb-1">{exp.time}</p>

                    <h2 className="text-lg font-semibold">{exp.title}</h2>

                    <p className="text-blue-400 text-sm mb-2">{exp.company}</p>

                    <p className="text-gray-400 text-sm">{exp.desc}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-black shadow-md" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
