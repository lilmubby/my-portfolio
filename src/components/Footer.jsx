import Contact from "./Contact"
function Footer(props) {
  return (
    <footer className="py-2 px-4 md:mt-10 bg-gray-100 md:w-full" >
      <Contact />
      <p className="copyright text-center text-base py-1 text-ash md:text-left">
        All Rights Reserved &copy; 2022
      </p>
    </footer>
  )
}

export default Footer;