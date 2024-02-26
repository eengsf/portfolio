import About from "./components/About";
import Experience from "./components/Experience";
import Info from "./components/Info";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#1e1f26]">
      <Navbar />
      <Info />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
