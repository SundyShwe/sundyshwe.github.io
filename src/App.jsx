import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

import { aboutme } from "./data/aboutme";

function App() {
  return (
    <>
      <Header about={aboutme} />
      <Main>
        <About about={aboutme} />
        <Skills />
        <Resume />
        <Projects />
        <Contact about={aboutme} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
