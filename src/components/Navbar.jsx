function Navbar(props) {

  const links = ['Home', 'Skills', 'Projects', 'Contact'];
  const mobile = `absolute top-10 right-0 bg-gray-100
    w-2/5 `;
  const desktop = ` md:flex md:gap-2`;
  const always = `md:relative md:top-0 md:flex md:gap-2 md:bg-transparent`;

  return (
    <ul className={props.clicked? `${mobile} ${always}`: `hidden ${desktop} `}>
      {links.map((link, index) => {
        return (<li key={index} className="text-sm font-bold py-2">
          <a href={`#${link}`}>{link}</a>
        </li>)
      })}
    </ul>
  )
}
export default Navbar;