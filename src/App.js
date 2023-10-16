import About from "./components/about/About";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Introduction from "./components/introduction/Introduction";
import NavBar from "./components/navBar/NavBar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Introduction />
      <About />
      <Projects />
      <Skills />
      <Education />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
