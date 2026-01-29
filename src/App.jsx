import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


// let Navbar, Footer;

// try {
//   Navbar = require("./components/Navbar").default;
// } catch {}
// try {
//   Footer = require("./components/Footer").default;
// } catch {}

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      {Footer && <Footer />}
    </>
  );
}

export default App;