// import {useState} from "react"
import eCommerce from "../assets/e-commerce.jpg";
import adviceGenerator from "../assets/advice-generator.jpg";
import tipCalc from "../assets/tip-calculator.jpg";
import codingBootCamp from "../assets/coding-bootcamp.jpg"



const projects = [
  {
    name: "E-commerce",
    src: eCommerce,
    live: `http://main-e-commerce.netlify.app`,
    github: `https://github.com/lilmubby/e-commerce-page`
  },
  {
    name: "Random Advice Generator",
    src: adviceGenerator,
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
    name: "Coding-bootCamp",
    src: codingBootCamp,
    live: `https://coding-main.netlify.app/`,
    github: `https://github.com/lilmubby/coding-bootcamp-testimal`
  }
];

function Projects(props) {
  
  return (
    <section id="project" className="p-6 grid gap-6 justify-center sm:grid-cols-2 md:row-span-2">
      {projects.map((project, index) => {
        return (
          <div key={index} className="rounded-lg bg-gray-200"  >
            <img src={project.src} alt={project.name} className="rounded-t-lg h-36  w-full" />
            <div className='pl-4'  >
              <h3 className="font-bold">{project.name}</h3>
              <a href={project.github} target="_blank" className="font-bold text-sm text-red-500" >
                Github <span className="font-bold text-base text-black">|| </span>
              </a>
              <a href={project.live} target="_blank" className="font-bold text-sm text-blue-700">
              Live</a>
            </div>
          </div>
        )
      })}
    </section>
  )
};

export default Projects;