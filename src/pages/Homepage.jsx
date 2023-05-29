import React from 'react'
import Navbar from '../components/OptionBar/Navbar'
import Footer from '../components/OptionBar/Footer'
import Sidebar from '../components/OptionBar/Sidebar'
import NavbarChoice from '../components/OptionBar/NavbarChoice'
import Post from '../components/Post/Post'
import PostMessages from '../components/Post/PostMessages'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <PostMessages />
        <NavbarChoice />
        <Post />
        <Footer />
    </div>
  )
}

export default Homepage