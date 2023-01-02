import tailwind from "../assets/icon.png"
const skill = [
  {
    name: `HTML5`,
    font: `fa-brands fa-html5`
  },
  {
    name: `CSS3`,
    font: `fa-brands fa-css3">`
  },
  // {
  //   name: `Tailwind CSS`,
  //   font: ``
  // },
  {
    name: `SCSS`,
    font: `fa-brands fa-sass`
  },
  {
    name: `JavaScript`,
    font: `fa-brands fa-js`
  },
  {
    name: `React`,
    font: `fa-brands fa-react`
  },
  // {
  //   name: `Code`,
  //   font: `fa-solid fa-code`
  // }
];
function Skills(props) {
  
  return (
    <section id="Skills" className="text-center p-4">
    <p className="text-2xl">Language(s) I speak:</p>
      {skill.map((x, index) =>{
        return <i className={`${x.font} text-3xl p-2.5`} key={index}></i>
      })}
    <img src={tailwind} alt="tailwind" className="h-8 inline " />
    </section>
  )
}

export default Skills;