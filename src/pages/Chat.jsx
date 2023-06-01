import React from 'react'
import PickChat from '../components/Chat/PickChat'
import Footer from '../components/OptionBar/Footer'
import Navbar from '../components/OptionBar/Navbar'
import Sidebar from '../components/OptionBar/Sidebar'

const Chat = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <PickChat />
        <Footer />
    </div>
  )
}

export default Chat