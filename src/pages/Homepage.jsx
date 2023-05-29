import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import NavbarChoice from '../components/NavbarChoice'
import Test from '../components/test'
import Post from '../components/Post'
import PostMessages from '../components/PostMessages'

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