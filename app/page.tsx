import About from "@/components/About";
import Projects from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-[#0f172a] text-white">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      }
    >
      <main className="bg-[#0f172a] text-white">
        <HomePage />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <ContactForm />
        <Footer />
      </main>
    </Suspense>
  );
}
