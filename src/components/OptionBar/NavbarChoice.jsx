import React, { useState, useEffect } from 'react';

const NavbarChoice = () => {
  const [activeButton, setActiveButton] = useState('All');
  const [showNavbar, setShowNavbar] = useState(true);

  const handleButtonClick = (button) => {
    setActiveButton(button);
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
    <div className={`fixed top-0 left-0 right-0 justify-evenly sm:left-[20rem] text-white bg-black rounded-b-2xl 
        ${isMobile ? `${showNavbar ? 'flex' : 'hidden'}` : 'flex'}`}>
      <div className='max-w-[1240px] flex '>
        {/* Create 4 Buttons for All, Lost, Found, and Share justify between*/}
        {/* I want to set this 4 button with eventually */}

        <div className='flex items-center place-items-center justify-evenly h-20 px-4'>
          <button
            className={`p-2 w-16 rounded-md font-semibold ${
              activeButton === 'All' ? 'bg-yellow text-black' : 'bg-slate-400 text-white'
            }`}
            onClick={() => handleButtonClick('All')}
          >
            All
          </button>
          <button
            className={`p-2 w-16 ml-5 rounded-md font-semibold ${
              activeButton === 'Lost' ? 'bg-yellow text-black' : 'bg-slate-400 text-white'
            }`}
            onClick={() => handleButtonClick('Lost')}
          >
            Lost
          </button>
          <button
            className={`p-2 w-16 ml-5 rounded-md font-semibold ${
              activeButton === 'Found' ? 'bg-yellow text-black' : 'bg-slate-400 text-white'
            }`}
            onClick={() => handleButtonClick('Found')}
          >
            Found
          </button>
          <button
            className={`p-2 w-16 ml-5 rounded-md font-semibold ${
              activeButton === 'Share' ? 'bg-yellow text-black' : 'bg-slate-400 text-white'
            }`}
            onClick={() => handleButtonClick('Share')}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarChoice;
