import React, { useEffect } from 'react'
import Sidebar from '../components/OptionBar/Sidebar'
import DataUser from '../components/Profile/DataUser'
import Footer from '../components/OptionBar/Footer'

const Profile = ({ setAuth }) => {
    useEffect(() => {
        localStorage.setItem('currentPage', '/profile');
      }, []);

  return (
    <div>
        <Sidebar setAuth={setAuth} />
        <DataUser />
        <Footer />
    </div>
  )
}

export default Profile