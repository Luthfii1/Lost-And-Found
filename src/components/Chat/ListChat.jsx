import React from 'react'
// import { useState } from 'react';
import ava from '../../assets/ava.jpg'
import { useNavigate } from 'react-router-dom';

const ListChat = () => {
    const navigate = useNavigate();
  return (
    // Create a list of messages from the person include the name of the person, the last message and the time of the last message also the image of the person
    <div className="flex hover:bg-yellow rounded-xl sm:ml-[20rem] left-0 right-0 hover:cursor-pointer justify-between items-center px-4 py-4"
        onClick={() => navigate('/detailedchat')}>
        <div className="flex items-center max-w-[1240px]">
            <img className="w-12 h-12 rounded-full" src={ava} alt="ava" />
            <div className="ml-4">
                <div className="font-medium text-black ">John Doe</div>
                <div className="text-[#717978] text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</div>
            </div>
        </div>
        <div className="text-[#717978]">12:00</div>
    </div>
  )
}

export default ListChat