import React from 'react'
import Footer from '../components/OptionBar/Footer'
import Sidebar from '../components/OptionBar/Sidebar'
import PersonChat from '../components/Chat/PersonChat'

const DetailChat = () => {
  return (
    <div>
        <Sidebar />
        <PersonChat />
        <div className='h-20'>
        </div>
        <Footer />
    </div>
  )
}

export default DetailChat