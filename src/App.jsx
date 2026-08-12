  import Navbar from "./components/Navbar";
  import Hero from "./components/Hero";
  import About from "./components/About";
  import Skills from "./components/Skills";
  import Experience from "./components/Experience";
  import Projects from "./components/Projects";
  import TicTacToe from "./components/TicTacToe";
  import Education from "./components/Education";
  import Contact from "./components/Contact";
  import "./App.css";

  function App() {
    return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <TicTacToe />
        <Education />
        <Contact />
      </>
    );
  }

  export default App;