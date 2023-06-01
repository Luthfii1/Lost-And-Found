import React from 'react'
import Footer from '../components/OptionBar/Footer'
import Sidebar from '../components/OptionBar/Sidebar'
import PersonChat from '../components/Chat/PersonChat'
import Receive from '../components/Chat/Receive'


const DetailChat = () => {
  return (
    <div>
        <Sidebar />
        <PersonChat />
        <Footer />
    </div>
  )
}

export default DetailChat