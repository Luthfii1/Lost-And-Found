import React from 'react'
import {IoIosCreate} from 'react-icons/io'

const Post = () => {
  return (
    // Create a post button that is fixed to the bottom right of the page
    // The button should be a circle with a plus sign in the middle
    <div className='rounded-full bg-yellow fixed bottom-24 hover:cursor-pointer hover:bg-black right-10 '>
        <IoIosCreate className='h-16 w-16 p-5' />
    </div>
  )
}

export default Post