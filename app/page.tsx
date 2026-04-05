import About from "@/components/About";
import Projects from "@/components/Card";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-[#0f172a] text-white">
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
