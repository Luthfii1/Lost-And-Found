import React from 'react'
import Navbar from '../components/OptionBar/Navbar'
import Footer from '../components/OptionBar/Footer'
import Sidebar from '../components/OptionBar/Sidebar'
import Post from '../components/Post/Post'
import HeaderProfile from '../components/Profile/HeaderProfile'

const Profile = ({ id, setAuth }) => {
  return (
    <div>
        {/* <Navbar /> */}
        <Sidebar setAuth={setAuth} />
        <HeaderProfile id={id}/>
        <Post />
        <Footer />
    </div>
  )
}

export default Profile