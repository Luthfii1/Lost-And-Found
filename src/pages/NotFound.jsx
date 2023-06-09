import React from 'react'
import notFound from '../assets/notfound.jpg'

const NotFound = () => {
  return (
    <div>
      <img src={notFound} alt="not found" className='w-full h-screen' />
    </div>
  )
}

export default NotFound