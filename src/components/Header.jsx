import { useState } from 'react';
import NavBar from './Navbar';
// import avatar from "../assets/avatar.jpg"
import menu from "../assets/icon-menu.svg"



function Header(props) {
  const [click, setClick] = useState(false);

  function clickHandler() {
    setClick((prev) => !prev);
    console.log(click)
  }
  return (
    <header className='flex justify-between bg-gray-700 py-2 sticky top-0 z-30 px-10'>
      <a>
        {/* <img src={avatar} alt="avatar" /> */}
        <i className='fa-solid fa-code text-red-500'></i>
        <span className='font-bold' > Mubby.js </span>
        <i className='fa-solid fa-code text-blue-700'></i>
      </a>
      <NavBar clicked={click} />
      <button onClick={clickHandler} className='md:hidden' >
        <img src={menu} alt='menu' className='' />
      </button>
    </header>
  )
}
export default Header;