import { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import logo from '../assets/logo_ui.svg';
import {MdHome, MdSearch, MdOutlineNotificationsActive, MdOutlineSettingsSuggest, MdLogout, MdOutlineWhereToVote} from 'react-icons/md'
import {TbMessages} from 'react-icons/tb'
import {CgProfile} from 'react-icons/cg'


export default function Example() {
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

  if (isMobile) {
    return null; // Return null to hide the sidebar on mobile
  }

  return (
    <div className="bg-black rounded-r-xl fixed h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/10">
      <div className="mb-2">
        <div className="flex items-center">
          <img className="h-16 w-16 m-4" src={logo} alt="logo" />
        </div>
      </div>
      <List>
        <ListItem className='hover:bg-yellow border-b border-b-[yellow] hover:text-black p-3'>
          <ListItemPrefix className='pr-5'>
            <MdHome className="h-10 w-10" />
          </ListItemPrefix>
          Home
        </ListItem>
        <ListItem className='hover:bg-yellow border-b border-b-[yellow] hover:text-black p-3'>
          <ListItemPrefix className='pr-5'>
            <MdSearch className="h-10 w-10" />
          </ListItemPrefix>
          Search
        </ListItem>
        <ListItem className='hover:bg-yellow border-b border-b-[yellow] hover:text-black p-3'>
          <ListItemPrefix className='pr-5'>
            <MdOutlineNotificationsActive className="h-10 w-10" />
          </ListItemPrefix>
          Notification
        </ListItem>
        <ListItem className='hover:bg-yellow border-b border-b-[yellow] hover:text-black p-3'>
          <ListItemPrefix className='pr-5'>
            <TbMessages className="h-10 w-10" />
          </ListItemPrefix>
          Massages
        </ListItem>
        <ListItem className='hover:bg-yellow border-b border-b-[yellow] hover:text-black p-3'>
          <ListItemPrefix className='pr-5'>
            <MdOutlineSettingsSuggest className="h-10 w-10" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem className='hover:bg-yellow border-b border-b-[yellow] hover:text-black p-3'>
          <ListItemPrefix className='pr-5'>
            <MdOutlineWhereToVote className="h-10 w-10" />
          </ListItemPrefix>
          About Us
        </ListItem>
        <div className='fixed bottom-0 pb-5 w-full max-w-[17rem]'>
            <ListItem className='hover:bg-yellow border-b border-b-[yellow]  hover:text-black p-3'>
            <ListItemPrefix className='pr-5'>
                <CgProfile className="h-10 w-10" />
            </ListItemPrefix>
            Profile
            </ListItem>
            <ListItem className='hover:bg-red-500 hover:text-black p-3'>
            <ListItemPrefix className='pr-5'>
                <MdLogout className="h-10 w-10" />
            </ListItemPrefix>
            Log Out
            </ListItem>
        </div>
      </List>
    </div>
  );
}
