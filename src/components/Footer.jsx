import React from 'react'
import {MdHome, MdSearch, MdOutlineNotificationsActive, } from 'react-icons/md'
import {TbMessages} from 'react-icons/tb'

const Footer = () => {

  return (
    // Creat a footer with home, search, notification, and message icons 100% opacity if selected, 50% opacity if not selected
    // The footer should be fixed to the bottom of the page
    // The footer should be black with white text
    <div className='fixed bottom-0 left-0 w-full rounded-t-2xl sm:hidden h-16 bg-black text-white flex justify-around items-center'>
        <MdHome className='h-10 w-10 ' />
        <MdSearch className='h-10 w-10' />
        <MdOutlineNotificationsActive className='h-10 w-10' />
        <TbMessages className='h-10 w-10' />
    </div>

  )
}

export default Footer