function Navbar(props) {

  const links = ['Home', 'Skills', 'Projects', 'Contact']
  return (
    <ul className="flex gap-2">
      {links.map((link, index) => {
        return (<li key={index} className="">
          <a href={`#${link}`}>{link}</a>
        </li>)
      })}
    </ul>
  )
}
export default Navbar;