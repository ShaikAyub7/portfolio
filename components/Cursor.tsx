"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* 🔥 Cursor Image */
const CursorImage = () => {
  return (
    <Image
      src="/arrow.png"
      alt="cursor"
      width={30}
      height={30}
      className="w-8 h-8"
    />
  );
};

export default function FinalCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });

  const [label, setLabel] = useState<ReactNode>(<CursorImage />);
  const [hover, setHover] = useState(false);
  const [ripples, setRipples] = useState<any[]>([]);

  /* 🎯 Mouse Move (no re-render) */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* 🔥 Smooth Animation (no state = no lag) */
  useEffect(() => {
    const animate = () => {
      smooth.current.x += (pos.current.x - smooth.current.x) * 0.15;
      smooth.current.y += (pos.current.y - smooth.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${
          smooth.current.x - 6
        }px, ${smooth.current.y - 6}px)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${
          smooth.current.x - 32
        }px, ${smooth.current.y - 32}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  /* 💥 Click Ripple */
  useEffect(() => {
    const click = (e: MouseEvent) => {
      const ripple = { x: e.clientX, y: e.clientY, id: Date.now() };
      setRipples((prev) => [...prev, ripple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 500);
    };

    window.addEventListener("click", click);
    return () => window.removeEventListener("click", click);
  }, []);

  /* 🧠 Smart Hover */
  useEffect(() => {
    const hoverHandler = (e: Event) => {
      const el = e.target as HTMLElement;

      if (el.closest("button")) {
        setLabel("⚡ click()");
        setHover(true);
      } else if (el.closest("a")) {
        setLabel("🔗 open()");
        setHover(true);
      } else if (el.closest("img")) {
        setLabel("🖼 preview()");
        setHover(true);
      } else if (el.closest("code, pre, .code-area")) {
        setLabel("</>");
        setHover(true);
      } else {
        setLabel(<CursorImage />);
        setHover(false);
      }
    };

    window.addEventListener("mouseover", hoverHandler);
    return () => window.removeEventListener("mouseover", hoverHandler);
  }, []);

  return (
    <>
      {/* 🌟 Glow */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[99999999999998] w-16 h-16 rounded-full blur-2xl bg-blue-500 opacity-30"
      />

      {/* 🎯 Cursor */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[999999999999] transition-all duration-150 ${
          hover
            ? "bg-black text-blue-400 border border-blue-500 px-3 py-1 rounded-md text-xs font-mono"
            : ""
        }`}
      >
        {label}
      </div>

      {/* 💥 Ripple */}
      {ripples.map((r) => (
        <div
          key={r.id}
          className="fixed w-12 h-12 border border-blue-400 rounded-full animate-ping pointer-events-none z-[9997]"
          style={{
            top: r.y - 24,
            left: r.x - 24,
          }}
        />
      ))}
    </>
  );
}
