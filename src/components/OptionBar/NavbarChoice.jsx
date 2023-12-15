import React, { useState, useEffect } from 'react';
import PostMessages from '../Post/PostMessages';

const NavbarChoice = () => {
  const [activeButton, setActiveButton] = useState('All');
  const [showNavbar, setShowNavbar] = useState(true);

  const handleButtonClick = (button) => {
    setActiveButton(button);
    // Define the corresponding link based on the button
    let link = 'https://lost-and-found-be.vercel.app/posts';
    if (button === 'Lost') {
      link = 'https://lost-and-found-be.vercel.app/posts/lost';
    } else if (button === 'Found') {
      link = 'https://lost-and-found-be.vercel.app/posts/found';
    } else if (button === 'Share') {
      link = 'https://lost-and-found-be.vercel.app/posts/share';
    }
    // Pass the link to the callback function
    // updateTweetData(link);
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowNavbar(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowNavbar(true); // Set the initial state of the navbar to be visible
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div >
      <div className={`fixed top-0 left-0 right-0 justify-evenly sm:left-[20rem] text-white bg-black bg-opacity-80 z-5 backdrop-blur-md rounded-b-2xl 
        ${isMobile ? `${showNavbar ? 'flex' : 'hidden'}` : 'flex z-10'}`}>

      <div className='max-w-[1240px] flex '>
        {/* Create 4 Buttons for All, Lost, Found, and Share justify between*/}
        {/* I want to set this 4 button with eventually */}

        <div className='flex items-center place-items-center justify-evenly h-20 px-4'>
          <button
            className={`p-2 w-16 rounded-md font-semibold ${
              activeButton === 'All' ? 'bg-yellow text-black' : 'bg-black text-white'
            }`}
            onClick={() => handleButtonClick('All')}
            // passing this button the 'https://lost-and-found-be.vercel.app/posts/' to PostMessages.jsx
            >
            All
          </button>
          <button
            className={`p-2 w-16 ml-5 rounded-md font-semibold ${
              activeButton === 'Lost' ? 'bg-yellow text-black' : 'bg-black text-white'
            }`}
            onClick={() => handleButtonClick('Lost')}
            // passing this button the 'https://lost-and-found-be.vercel.app/posts/lost' to PostMessages.jsx
            >
            Lost
          </button>
          <button
            className={`p-2 w-16 ml-5 rounded-md font-semibold ${
              activeButton === 'Found' ? 'bg-yellow text-black' : 'bg-black text-white'
            }`}
            onClick={() => handleButtonClick('Found')}
            // passing this button the 'https://lost-and-found-be.vercel.app/posts/found' to PostMessages.jsx
          >
            Found
          </button>
          <button
            className={`p-2 w-16 ml-5 rounded-md font-semibold ${
              activeButton === 'Share' ? 'bg-yellow text-black' : 'bg-black text-white'
            }`}
            onClick={() => handleButtonClick('Share')}
            // passing this button the 'https://lost-and-found-be.vercel.app/posts/share' to PostMessages.jsx
            >
            Share
          </button>
        </div>
      </div>
      </div>
      <PostMessages link={`https://lost-and-found-be.vercel.app/posts/${activeButton.toLowerCase()}`} />
    </div>
  );
};

export default NavbarChoice;
