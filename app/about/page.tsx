"use client";

import About from "@/components/About";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-30 text-amber-50">
      <motion.div
        id="home"
        className="flex flex-col items-center text-center px-2"
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
            src="/profile.png" // ✅ put inside public/
            alt="Profile"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </motion.div>
      <About />
    </div>
  );
};

export default page;
