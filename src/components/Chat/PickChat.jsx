import React, { useState, useEffect } from 'react';

const PickChat = () => {
  const [activeButton, setActiveButton] = useState('All');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="sticky top-0 left-0 right-0 sm:left-[20rem] max-w-[1240px] bg-white items-center justify-center flex-col content-center w-full">
      {/* For Search Bar (visible only on /Search route) */}
      <div className="mt-24 sm:mt-0 py-5 flex px-4 items-center justify-center">
        <input className="bg-yellow px-4 py-2 rounded-2xl text-white" type="text" placeholder="Search" />
      </div>
      {/* Create a chosen messages of All messages or unread, when all messages will appear all of the list messages person */}
      <div className="flex justify-evenly items-center">
        <div
          className={`font-medium border-b-4 hover:cursor-pointer ${
            activeButton === 'All' ? 'border-b-yellow text-black' : 'text-[#717978] border-b-grey-500'
          }`}
          onClick={() => handleButtonClick('All')}
        >
          All Messages
        </div>
        <div
          className={`font-medium border-b-4 hover:cursor-pointer ${
            activeButton === 'Unread' ? 'border-b-yellow text-black' : 'text-[#717978] border-b-grey-500'
          }`}
          onClick={() => handleButtonClick('Unread')}
        >
          Unread
        </div>
      </div>
      <div className="border-b-2 pt-4 border-yellow"></div>
    </div>
  );
};

export default PickChat;
