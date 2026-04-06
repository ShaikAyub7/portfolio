"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.img
      src="/arrow.png"
      alt="cursor"
      style={{ x, y }} // 🔥 no animation, direct position
      className="fixed w-8 h-8 pointer-events-none z-[999999999]"
    />
  );
}
