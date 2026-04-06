"use client";

import { projects } from "@/data";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-5 transition hover:bg-white/10"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 rounded-lg transition" />

              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-52 object-fit rounded-lg group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between w-full md:w-1/2">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.text}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-5">
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 transition"
                    >
                      Live
                      <LiaExternalLinkAltSolid size={14} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-white/20 hover:bg-white/10 transition"
                    >
                      <FaGithub size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
