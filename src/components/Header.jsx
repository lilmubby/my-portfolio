import NavBar from './Navbar';
// import avatar from "../assets/avatar.jpg"



function Header(props) {
  
  return (
    <header className='flex justify-between bg-gray-200 py-2 sticky top-0 z-30 px-5'>
      <a>
        {/* <img src={avatar} alt="avatar" /> */}
        <i className='fa-solid fa-code text-red-500'></i>
        <span> DevMubby </span>
        <i className='fa-solid fa-code text-blue-700'></i>
      </a>
      <NavBar />
    </header>
  )
}
export default Header;