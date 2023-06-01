import React from 'react'
import Navbar from '../components/OptionBar/Navbar'
import Footer from '../components/OptionBar/Footer'
import Sidebar from '../components/OptionBar/Sidebar'
import Achievement from '../components/Search/Achievement'
import Trending from '../components/Search/trending'

const Search = () => {
  return (
    <div >
        <Sidebar />
        <div className='sm:absolute sm:mr-0 sm:right-0 bg-[#EEEEEE] sm:w-96'>
          {/* Header Title for achievement just for desktop */}
          <div className='hidden mb-1 sm:flex justify-between items-center bg-black h-16 rounded-b-lg'>
            <h1 className='text-2xl font-bold ml-4'>Achievement</h1>
            <div className='mr-4'>
              <button className='bg-yellow text-black rounded-md px-4 py-1'>See All</button>
            </div>
          </div>
          <Achievement />
          <Trending />
        </div>
        <Navbar />
        <Footer />
    </div>
  )
}

export default Search