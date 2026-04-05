import About from "@/components/About";
import Projects from "@/components/Card";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import { main } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0f172a] text-white">
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
