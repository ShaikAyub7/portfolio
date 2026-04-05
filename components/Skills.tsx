"use client";

import { skillList } from "@/data";

export default function Skills() {
  return (
    <section id="skill" className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-10">Skills</h1>

        {/* Skills Grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillList.map((skill, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl justify-center hover:scale-105 transition"
            >
              <img
                src={skill.icon}
                alt={skill.language}
                className="w-6 h-6 object-cover"
              />
              <span className="text-sm sm:text-base font-medium">
                {skill.language}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
