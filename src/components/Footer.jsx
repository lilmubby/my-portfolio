import Contact from "./Contact"
function Footer(props) {
  return (
    <footer className="py-6" >
      <Contact />
      <p className="copyright text-center text-xl text-white">
        All Rights Reserved &copy; 2022
      </p>
    </footer>
  )
}

export default Footer;