import React, { useState } from 'react';
import { MdOutlineMenuOpen, MdOutlineCloseFullscreen, MdOutlineWhereToVote, MdOutlineSettingsSuggest, MdLogout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import logo from '../../assets/logo_ui.svg';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSearchRoute = location.pathname === '/Search';

  // state for menu toggle button
  const [showMenu, setShowMenu] = useState(false);

  // function to toggle menu, called when menu button is clicked
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed left-0 right-0 md:hidden sm:hidden text-white bg-black rounded-b-2xl">
      <div className="max-w-[1240px] flex px-4 items-center justify-between h-20 mx-auto">
        {/* For Logo */}
        <div className="flex items-center">
          <img className="h-12 w-12" src={logo} alt="logo" />
        </div>

        {/* For Search Bar (visible only on /Search route) */}
        {isSearchRoute && (
          <div className="flex px-4 items-center justify-between">
            <input className="p-2 mr-5 rounded-md text-black" type="text" placeholder="Search" />
          </div>
        )}

        <div onClick={toggleMenu} className="block md:hidden">
          {showMenu ? <MdOutlineCloseFullscreen className="h-10 w-10" /> : <MdOutlineMenuOpen className="h-10 w-10" />}
        </div>

        <div className={showMenu ? 'fixed left-0 top-0 w-[60%] h-full bg-black text-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <div className="flex items-center">
            <img className="h-12 w-12 m-4" src={logo} alt="logo" />
          </div>
          <ul className="uppercase">
            <li className="p-4 flex items-center hover:bg-yellow hover:text-black border-b border-b-[yellow]">
              <CgProfile className="h-10 pr-2 w-10" />
              Profile
            </li>
            <li className="p-4 flex items-center hover:bg-yellow hover:text-black border-b border-b-[yellow]">
              <MdOutlineWhereToVote className="h-10 pr-2 w-10" />
              Settings
            </li>
            <li className="p-4 flex items-center hover:bg-yellow hover:text-black border-b border-b-[yellow]">
              <MdOutlineSettingsSuggest className="h-10 pr-2 w-10" />
              About Us
            </li>
            <li className="p-4 flex items-center hover:bg-white text-white bg-red-500 hover:text-red-500 " onClick={() => navigate('/login')}>
              <MdLogout className="h-10 pr-2 w-10" />
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
