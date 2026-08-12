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
import ApiExplorer from "./components/ApiExplorer";

  function App() {
    return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Projects />
<section id="playground" className="playground">

  <div className="playground-heading">
    <p className="section-label">FOR FUN</p>

    <h2>
      MEGHANA'S <span>PLAYGROUND</span>
    </h2>

    <p>
      Take a break from hiring me. Beat me instead. 😄
    </p>
  </div>

  <div className="playground-grid">
    <TicTacToe />
    <ApiExplorer />
  </div>

</section>
        <Education />
        <Contact />
      </>
    );
  }

  export default App;