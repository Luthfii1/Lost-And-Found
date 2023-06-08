import React from 'react'
import Navbar from '../components/OptionBar/Navbar'
import Footer from '../components/OptionBar/Footer'
import Sidebar from '../components/OptionBar/Sidebar'
import NavbarChoice from '../components/OptionBar/NavbarChoice'
import Post from '../components/Post/Post'

const Homepage = ({ setAuth }) => {
  return (
    <div>
        <Navbar setAuth={setAuth} />
        <Sidebar setAuth={setAuth} />
        <NavbarChoice />
        <Post />
        <div className='h-4 sm:h-0'></div>
        <Footer />
    </div>
  )
}

export default Homepage