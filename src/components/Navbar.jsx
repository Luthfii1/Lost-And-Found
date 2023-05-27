import React, {useState} from 'react'
import {MdOutlineMenuOpen, MdOutlineCloseFullscreen} from 'react-icons/md'
// import logo from assets/logo2.jpg
import logo from '../assets/logo_ui.svg'

const Navbar = () => {
    // state for menu toggle button 
    const [showMenu, setShowMenu] = useState(false)
    // function to toggle menu, called when menu button is clicked 
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

  return (
    <div className=' text-white bg-black'>
        <div className='max-w-[1240px] flex px-4 items-center justify-between h-20 mx-auto'>

            {/* For Logo */}
            <div className='flex items-center'>
                <img className='h-12 w-12' src={logo} alt='logo' />
            </div>
            
            {/* For Search Bar */}
            {/* <div className='flex px-4 items-center justify-between'>
                <input className='p-2 mr-5 rounded-md text-black' type='text' placeholder='Search' />
                <button className='p-2 rounded-md'>Search</button>
            </div> */}
            

            <ul className='md:flex hidden'>
                <li className='p-4 hover:bg-yellow hover:text-black rounded-md'>Profile</li>
                <li className='p-4 hover:bg-yellow hover:text-black rounded-md'>Settings</li>
                <li className='p-4 hover:bg-yellow hover:text-black rounded-md'>About Us</li>
            </ul>

            <div onClick={toggleMenu} className='block md:hidden'>
                {showMenu ? <MdOutlineCloseFullscreen className='h-10 w-10' /> : <MdOutlineMenuOpen className='h-10 w-10' />}
            </div>

            <div className={showMenu ? 'fixed left-0 top-0 w-[60%] h-full bg-black text-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <div className='flex items-center'>
                    <img className='h-12 w-12 m-4' src={logo} alt='logo' />
                </div>
                <ul className='uppercase '>
                    <li className='p-4 hover:bg-yellow hover:text-black border-b border-b-[yellow]'>Profile</li>
                    <li className='p-4 hover:bg-yellow hover:text-black border-b border-b-[yellow]'>Settings</li>
                    <li className='p-4 hover:bg-yellow hover:text-black '>About Us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar