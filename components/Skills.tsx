"use client";

import { skillList } from "@/data";

export default function Skills() {
  return (
    <section id="skill" className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-12">Skills</h1>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4">
          {skillList.map((skill, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition duration-300"
            >
              {/* Icon */}
              <img src={skill.icon} alt={skill.language} className="w-5 h-5" />

              {/* Name */}
              <span className="text-sm font-medium">{skill.language}</span>

              {/* Hover Dot */}
              <span className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
