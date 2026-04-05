"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MdDownload } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-[#0f172a] text-white">
      <motion.div
        id="home"
        className="flex flex-col items-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/profile pic.jpg" // ✅ put inside public/
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="mt-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hi There!
        </motion.h2>

        <motion.h1
          className="text-3xl font-bold mt-2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          I&apos;m Shaik Ayub
        </motion.h1>

        {/* Social Links */}
        <motion.div
          className="flex gap-6 mt-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.a
            href="https://github.com/ShaikAyub7"
            target="_blank"
            whileHover={{ scale: 1.2 }}
          >
            <FaSquareGithub className="text-4xl" />
            <i className="fa-brands fa-github text-2xl"> </i>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/shaik-ayub7"
            target="_blank"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin className="text-4xl" />
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </motion.a>
        </motion.div>

        {/* Download CV */}
        <motion.a
          href="/resume.pdf" // ✅ put in public/
          download
          className="mt-6 px-6 py-3 bg-blue-600 rounded-full font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <h4 className="flex items-center gap-1">
            Download CV <MdDownload className="text-xl" />
          </h4>
        </motion.a>
      </motion.div>
    </div>
  );
}
