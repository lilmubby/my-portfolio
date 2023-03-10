
const contactMe = [
  {
    name: `Github`,
    font: `fa-brands fa-github`,
    link: `https://github.com/lilmubby`,
    color: `text-black`
  },
  {
    name: `LinkedIn`,
    font: `fa-brands fa-linkedin`,
    link: `https://www.linkedin.com/in/mubarak-yahaya-3548271a5/`,
    color: `text-blue-900`
  },
  {
    name: `Twitter`,
    font: `fa-brands fa-twitter`,
    link: `https://twitter.com/mubbyszn`,
    color: `text-sky-500`
  },
  {
    name: `email`,
    font: `fa-solid fa-at`,
    link: `mailto:yahayamubarak447@gmail.com`,
    color: `text-black`
  },
  {
    name: `resume`,
    font: `fa-solid fa-file`,
    link: `https://docs.google.com/document/d/166b_YbSP42xVYQ9efzerKWfhbKNaF5-tmbIpHpK88Q0/`,
    color: `text-black`
  }
];


function Contact(props) {
  
  return (
    <section id="Contact" className="flex justify-center gap-3.5 md:justify-start" >
      {contactMe.map((contactArr, index) => {
        return <a href={contactArr.link} key={index} target="_blank" 
        className="text-xl " >
          <i className={`${contactArr.font} ${contactArr.color}`}></i>
        </a>
      })}
    </section>
  )
}

export default Contact;