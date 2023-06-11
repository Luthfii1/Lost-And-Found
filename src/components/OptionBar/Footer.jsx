import React, { useState } from 'react';
import { MdHome, MdSearch, MdOutlineNotificationsActive } from 'react-icons/md';
import { TbMessages } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (button) => {
    // If the clicked button is already active, no need to navigate
    if (activeButton === button) return;

    setActiveButton(button);

    // Perform navigation based on the button
    if (button === 'Home') {
      navigate('/Homepage');
    } else if (button === 'Search') {
      navigate('/Search');
    } else if (button === 'Notifications') {
      // Handle notifications navigation
    } else if (button === 'Messages') {
      navigate(`/Chat/${localStorage.getItem('user_id')}`);
    }
  };

  return (
    <div className='fixed bottom-0 left-0 w-full  rounded-t-2xl sm:hidden h-16 bg-black text-white flex justify-around items-center'>
      <MdHome
        className={`h-10 w-10 ${activeButton === 'Home' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => handleButtonClick('Home')}
      />
      <MdSearch
        className={`h-10 w-10 ${activeButton === 'Search' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => handleButtonClick('Search')}
      />
      <div className='flex'>
        <MdOutlineNotificationsActive
          className={`h-10 w-10 ${activeButton === 'Notifications' ? 'opacity-100' : 'opacity-50'}`}
          onClick={() => handleButtonClick('Notifications')}
        />
        <span className="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-semibold text-black bg-yellow rounded-full">2</span>
      </div>
      <div className='flex'>
        <TbMessages
          className={`h-10 w-10 ${activeButton === 'Messages' ? 'opacity-100' : 'opacity-50'}`}
          onClick={() => handleButtonClick('Messages')}
        />
        <span className="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-semibold text-black bg-yellow rounded-full">2</span>
      </div>
    </div>
  );
};

export default Footer;
