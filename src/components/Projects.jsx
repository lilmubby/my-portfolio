import eCommerce from "../assets/e-commerce.jpg";
import adviveGenerator from "../assets/advice-generator.jpg";
import tipCalc from "../assets/tip-calculator.jpg";
import codingBootCamp from "../assets/coding-bootcamp.jpg"



const projects = [
  {
    name: "e-commerce",
    src: eCommerce,
    live: `http://main-e-commerce.netlify.app`,
    github: `https://github.com/lilmubby/e-commerce-page`
  },
  {
    name: "Advive Generator",
    src: adviveGenerator,
    live: `https://random-api-advice-generator.netlify.app/`,
    github: `https://github.com/lilmubby/advice-generator-app`
  },
  {
    name: "Tip Calculator",
    src: tipCalc,
    live: `https://lilmubby.github.io/tipCalculator/`,
    github: `https://github.com/lilmubby/tipCalculator`
  },
  {
    name: "coding-bootCamp",
    src: codingBootCamp,
    live: `https://coding-main.netlify.app/`,
    github: `https://github.com/lilmubby/coding-bootcamp-testimal`
  }
];

function Projects(props) {
  return (
    <section id="project" className="py-4 grid gap-5">
      {projects.map((project, index) => {
        return (
          <div key={index} className="relative" >
            <img src={project.src} alt={project.name} className=" h-48 w-4/6 z-20 block m-auto rounded-xl" />
            <div className="absolute bg-gray-50 hidden inset-0 z-0 h-48 w-4/6 m-auto rounded-xl text-center pt-20">
              <h3>{project.name}</h3>
              <a href={project.github} target="_blank" className="" >Github |</a>
              <a href={project.live} target="_blank"> Live</a>
            </div>
          </div>
        )
      })}
    </section>
  )
};

export default Projects;