"use client";

import { projects } from "@/data";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

export default function Projects() {
  return (
    <section className="w-full py-16 px-4" id="projects">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          My Projects
        </h2>

        <div className=" flex flex-col gap-5 md:flex-col  sm:flex-row ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="block lg:flex md:flex group items-center justify-around  bg-white/10 backdrop-blur-md border text-white border-white/20 rounded-2xl overflow-hidden transition duration-300 hover:scale-105   z-9999999999999999  p-6"
            >
              <div className="overflow-hidden lg:w-2xl md:w-xl  w-full">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-52 object-contain rounded group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5 flex flex-col gap-3 w-full lg:w-lg">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>

                <p className="text-sm text-white">{project.text}</p>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm  px-4 py-2 rounded-lg bg-blue-900 hover:bg-gray-600 transition"
                  >
                    Live
                    <LiaExternalLinkAltSolid size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm  px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
