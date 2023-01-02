import Contact from "./Contact"
function Footer(props) {
  return (
    <footer className="py-6" >
      <Contact />
      <p className="copyright text-center text-lg py-1 text-ash">
        All Rights Reserved &copy; 2022
      </p>
    </footer>
  )
}

export default Footer;