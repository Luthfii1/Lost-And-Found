import React from 'react'
import Navbar from '../components/OptionBar/Navbar'
import Footer from '../components/OptionBar/Footer'
import Sidebar from '../components/OptionBar/Sidebar'
import NavbarChoice from '../components/OptionBar/NavbarChoice'
import Post from '../components/Post/Post'

const Homepage = ({ setAuth }) => {
  return (
    <div>
        <Navbar />
        <Sidebar setAuth={setAuth} />
        <NavbarChoice />
        <Post />
        <Footer />
    </div>
  )
}

export default Homepage