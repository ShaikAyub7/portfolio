"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

/* 🔥 Cursor Image */
const CursorImage = () => {
  return (
    <Image
      src="/arrow.png" // ✅ put inside public/
      alt="cursor"
      width={40}
      height={40}
      className="w-8 h-8"
    />
  );
};

export default function FinalCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState<ReactNode>(<CursorImage />);
  const [ripples, setRipples] = useState<any[]>([]);
  const [hover, setHover] = useState(false);

  /* 🎯 Mouse Move */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* 🔥 Smooth Follow */
  useEffect(() => {
    const follow = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.15,
        y: prev.y + (pos.y - prev.y) * 0.15,
      }));

      requestAnimationFrame(follow);
    };

    follow();
  }, [pos]);

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

  /* 🧠 Smart Hover Detection */
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
      {/* 🌟 Glow Aura */}
      <div
        className="fixed pointer-events-none z-[99999998] w-16 h-16 rounded-full blur-2xl bg-blue-500 opacity-30"
        style={{
          transform: `translate(${smoothPos.x - 32}px, ${smoothPos.y - 32}px)`,
        }}
      />

      {/* 🎯 Main Cursor */}
      <div
        className={`fixed pointer-events-none z-[9999099999] transition-all duration-150 ${
          hover
            ? "bg-black text-blue-400 border border-blue-500 px-3 py-1 rounded-md text-xs font-mono"
            : ""
        }`}
        style={{
          transform: `translate(${smoothPos.x}px, ${smoothPos.y}px) translate(-50%, -50%)`,
        }}
      >
        {label}
      </div>

      {/* 💥 Click Ripple */}
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
