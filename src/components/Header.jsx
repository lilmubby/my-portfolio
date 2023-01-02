import NavBar from './Navbar';
// import avatar from "../assets/avatar.jpg"



function Header(props) {
  
  return (
    <header className='flex justify-around bg-gray-200 py-2 sticky top-0 z-30'>
      <a>
        {/* <img src={avatar} alt="avatar" /> */}
        <i className='fa-solid fa-code'></i>
        <span>DevMubby</span>
      </a>
      <NavBar />
    </header>
  )
}
export default Header;