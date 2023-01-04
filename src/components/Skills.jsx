import tailwind from "../assets/icon.png"
const skill = [
  {
    name: `HTML5`,
    font: `fa-brands fa-html5`,
    hover: `text-red-700`
  },
  {
    name: `CSS3`,
    font: `fa-brands fa-css3`,
    hover: `text-blue-700`
  },
  {
    name: `SCSS`,
    font: `fa-brands fa-sass`,
    hover: `text-red-300`
  },
  {
    name: `JavaScript`,
    font: `fa-brands fa-js`,
    hover: `text-yellow-300`
  },
  {
    name: `React`,
    font: `fa-brands fa-react`,
    hover: `text-blue-400`
  }
];

function Skills(props) {
  
  return (
    <section id="Skills" className="text-center p-4 row-start-2
    md:text-left md:px-6">
    <p className="text-base">Language(s) I speak:</p>
      {skill.map((x, index) =>{
        return <i className={`${x.font} text-2xl p-2.5
        hover:${x.hover}`} key={index}></i>
      })}
    <img src={tailwind} alt="tailwind" className="h-8 inline " />
    </section>
  )
}

export default Skills;