
const skill = [
  {
    name: `HTML5`,
    font: `fa-brands fa-html5`,
    text: `text-red-700`
  },
  {
    name: `CSS3`,
    font: `fa-brands fa-css3`,
    text: `text-blue-500`
  },
  {
    name: `SCSS`,
    font: `fa-brands fa-sass`,
    text: `text-red-300`
  },
  {
    name: `JavaScript`,
    font: `fa-brands fa-js`,
    text: `text-yellow-400`
  },
  {
    name: `React`,
    font: `fa-brands fa-react`,
    text: `text-blue-400`
  }
];

function Skills(props) {
  
  return (
    <section id="Skills" className="text-center p-4 row-start-2
    md:text-left md:px-6">
    <p className="text-base">Language(s) I speak:</p>
      {skill.map((x, index) => {
        return (<i  key={index} className={`${x.font} ${x.text} text-2xl p-2.5 `}></i>)
      })}
      <span className="text-black text-blue-400 text-xl" >TailwindCSS</span>
    </section>
  )
}

export default Skills;