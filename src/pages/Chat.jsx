import React from 'react'
import PickChat from '../components/Chat/PickChat'
import Footer from '../components/OptionBar/Footer'
import Navbar from '../components/OptionBar/Navbar'
import Sidebar from '../components/OptionBar/Sidebar'
import ListChat from '../components/Chat/ListChat'

const Chat = () => {
  return (
    <div className=''>
        <Navbar />
        <Sidebar />
        <PickChat />
        <ListChat />
        <div className='h-16 sm:hidden'>
        </div>
        <Footer />
    </div>
  )
}

export default Chat