import About from "./components/About.jsx";
import Home from "./components/Home-page.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/projects.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
