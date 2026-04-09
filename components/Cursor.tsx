"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <style>{`* { cursor: none; }`}</style>

      <motion.img
        src="/arrow.png"
        alt="cursor"
        style={{ x, y }}
        className="fixed w-8 h-8 pointer-events-none z-[999999999]"
      />
    </>
  );
}
