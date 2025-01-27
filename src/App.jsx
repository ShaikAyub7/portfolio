import About from "./components/About.jsx";
import Home from "./components/Home-page.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/projects.jsx";
import Skills from "./components/Skills.jsx";

import { skillList } from "./data.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills skillList={skillList} />
    </>
  );
}

export default App;
