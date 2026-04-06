"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MdDownload } from "react-icons/md";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function HomePage() {
  const fullText = "I Am Shaik Ayub";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-[#0f172a] text-white">
      <motion.div
        id="home"
        className="flex flex-col items-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/profile pic.jpg"
            alt="Profile"
            width={110}
            height={110}
            className="rounded-full shadow-lg border-2 border-white/20"
          />
        </motion.div>

        <motion.h2
          className="mt-6 text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hi There!
        </motion.h2>

        <h1 className="text-3xl sm:text-4xl font-bold mt-2 flex items-center">
          <span className="text-white">{text}</span>
          {index < fullText.length && (
            <span className="ml-1 animate-blink font-extralight">|</span>
          )}{" "}
        </h1>

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
                staggerChildren: 0.8,
              },
            },
          }}
        >
          <motion.a
            href="https://github.com/ShaikAyub7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-gray-300 transition"
          >
            <FaSquareGithub className="text-4xl" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/shaik-ayub7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin className="text-4xl" />
          </motion.a>
        </motion.div>

        {/* Download CV */}
        <motion.a
          href="/resume.pdf"
          download
          className="mt-8 flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
          <MdDownload className="text-xl" />
        </motion.a>
      </motion.div>
    </div>
  );
}
