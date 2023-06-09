import React, { useEffect, useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { MdArrowBack } from 'react-icons/md';
import ava from '../../assets/ava.jpg';
import Receive from './Receive';
import { useNavigate } from 'react-router-dom';

const PersonChat = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div>
      {/* Header */}
      <div className="fixed sm:left-[20rem] bg-white top-0 left-0 right-0 items-center justify-between text-black px-4 py-4 border-b border-yellow">
        <div className="flex items-center">
          <div className="hover:cursor-pointer" onClick={handleGoBack}>
            <MdArrowBack className="text-2xl text-black mr-4" />
          </div>
          <img className="w-12 h-12 rounded-full" src={ava} alt="ava" />
          <div className="ml-4">
            <div className="font-medium text-black ">John Doe</div>
            <div className="text-[#717978] text-sm">Online</div>
          </div>
        </div>
      </div>

      <Receive />

      {/* Footer send chat */}
      <div className="fixed sm:left-[20rem] flex sm:pb-0 sm:pr-10 bottom-12 pb-8 max-w-[1240px] w-full items-center justify-between px-4 py-4 border-t border-yellow">
        <div className="flex items-center justify-between w-full mr-5">
          <input
            className="bg-[#E4E6E8] px-4 py-2 rounded-2xl text-black flex-grow mr-4"
            type="text"
            placeholder="Type a message"
          />
          {/* Button send */}
          <div className="hover:cursor-pointer">
            <IoMdSend className="text-black text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonChat;
