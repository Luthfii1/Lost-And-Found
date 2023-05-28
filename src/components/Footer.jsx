import React, { useState } from 'react';
import { MdHome, MdSearch, MdOutlineNotificationsActive } from 'react-icons/md';
import { TbMessages } from 'react-icons/tb';

const Footer = () => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className='fixed bottom-0 left-0 w-full rounded-t-2xl sm:hidden h-16 bg-black text-white flex justify-around items-center'>
      <MdHome
        className={`h-10 w-10 ${activeButton === 'Home' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => handleButtonClick('Home')}
      />
      <MdSearch
        className={`h-10 w-10 ${activeButton === 'Search' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => handleButtonClick('Search')}
      />
      <MdOutlineNotificationsActive
        className={`h-10 w-10 ${activeButton === 'Notifications' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => handleButtonClick('Notifications')}
      />
      <TbMessages
        className={`h-10 w-10 ${activeButton === 'Messages' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => handleButtonClick('Messages')}
      />
    </div>
  );
};

export default Footer;
