import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

function Main() {

  return(
    <main className="md:grid md:grid-cols-2 " >
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
export default Main;