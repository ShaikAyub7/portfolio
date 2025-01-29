import About from "./components/About.jsx";
import Home from "./components/Home-page.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

import { skillList } from "./data.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills skillList={skillList} />
      <Projects />
    </>
  );
}

export default App;
