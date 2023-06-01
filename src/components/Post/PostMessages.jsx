import React, {useState, useRef, useEffect } from 'react'
import avatar from '../../assets/ava.jpg'
import {FaRegCommentDots, FaTelegramPlane, FaBookmark} from 'react-icons/fa'
import {GiOrbDirection, GiShare} from 'react-icons/gi'
import {BsThreeDots, BsLink45Deg} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'

// Create a component for post messages like twitter
const PostMessages = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    };

  return (
      <div className='md:ml-[20rem]  hover:cursor-pointer mb-10 pt-24 sm:ml-[20rem] p-5 bg-transparent'>
        {/* // Just need this component */}
        {/* Create a body component  */}
        <div className=' p-2 rounded-lg'>
            {/* Create a header component */}
            <div className='flex justify-between items-center'>
                {/* Create a avatar component */}
                <div className='flex items-center'>
                    <img src={avatar} alt='avatar' className=' h-14 w-14  rounded-full mr-3' />
                    {/* Create a username component */}
                    <div className='flex flex-col'>
                        <span className='font-bold text-black text-sm'>Dyah.laksmi</span>
                        <span className='text-gray-700 text-xs'>29 May 2023</span>
                    </div>
                </div>
                {/* Create a Labelled Button (Lost, Found, Gotcha and Share) and the location he lost the items and vertically*/}
                <div className='items-center flex flex-col '>
                    <button className='bg-[#00ffb3] text-white px-4 py-2 mb-1 rounded-3xl text-xs font-normal'>Share</button>
                    <span className='text-gray-700 text-sm ml-3'>at Kutek Area</span>
                </div>
            </div>
        </div>
        {/* Body include messages or photos */}
        <div className=''>
            <div className=' bg-opacity-50 p-2 rounded-lg m-2'>
                <p className='text-sm text-black'>I lost my wallet at Kutek Area. It's a black wallet with a picture of a cat on it. If you find it, please contact me. I will give a reward if you give me back that stuff to me</p>
            </div>
        </div>
        {/* Footer include comments, Direct Messages, upvote, Bookmark and setting. All icons and small description*/}
        <div className=' p-2 rounded-lg flex justify-between'>
            <div className='flex items-center  text-black hover:bg-opacity-50 p-2 rounded-lg '>
                <FaRegCommentDots className='h-6 w-6 mr-2 ' />
                <span className='text-sm'>121</span>
            </div>
            <div className='flex items-center'>
                <FaTelegramPlane className='h-6 w-6 mr-2 text-black' />
                <span className='text-sm text-black'>DM</span>
            </div>
            <div className='flex items-center'>
                <GiOrbDirection className='h-6 w-6 mr-2 text-black' />
                <span className='text-sm text-black'>211</span>
            </div>
            <div className='flex items-center'>
                <FaBookmark className='h-6 w-6 mr-2 text-black' />
            </div>
            {/* Dropdowns when icon clicked and showing share, copy link, and delete */}
            <div className='flex items-center'>
                <BsThreeDots className='h-6 w-6 mr-2 text-black' onClick={handleDropdownClick} />
                {showDropdown && (
                <div
                    ref={dropdownRef}
                    className='absolute right-5 mb-20 bg-white rounded-lg shadow-lg'>
                    {/* Dropdown content */}
                    <ul className=''>
                        <li className='text-black py-2 flex pr-4 pl-2 rounded-lg hover:bg-yellow'>
                            <GiShare className='h-6 w-6 mr-2 text-black' />
                            Share
                        </li>
                        <li className='text-black py-2 flex pr-4 pl-2 rounded-lg hover:bg-yellow '>
                            <BsLink45Deg className='h-6 w-6 mr-2 text-black' />
                            Copy Link
                        </li>
                        <li className='text-black py-2 flex pr-4 pl-2 rounded-lg hover:bg-red-500 hover:text-white '>
                            <MdDelete className='h-6 w-6 mr-2 text-black' />
                            Delete
                        </li>
                    </ul>
                </div>
                )}
            </div>
        </div>
        {/* Create a line divider with yellow color */}
        <div className='border-b-2 border-[#717978] mb-5'></div>
        {/* End of the main component */}

        <div className=' p-2 rounded-lg'>
            {/* Create a header component */}
            <div className='flex justify-between items-center'>
                {/* Create a avatar component */}
                <div className='flex items-center'>
                    <img src={avatar} alt='avatar' className=' h-14 w-14  rounded-full mr-3' />
                    {/* Create a username component */}
                    <div className='flex flex-col'>
                        <span className='font-bold text-black text-sm'>Dyah.laksmi</span>
                        <span className='text-gray-700 text-xs'>29 May 2023</span>
                    </div>
                </div>
                {/* Create a Labelled Button (Lost, Found, Gotcha and Share) and the location he lost the items and vertically*/}
                <div className='items-center flex flex-col '>
                    <button className='bg-[#FF6B00] text-white px-4 py-2 mb-1 rounded-3xl text-xs font-normal'>Lost</button>
                    <span className='text-gray-700 text-sm ml-3'>at Kutek Area</span>
                </div>
            </div>
        </div>
        {/* Body include messages or photos */}
        <div className=''>
            <div className=' bg-opacity-50 p-2 rounded-lg m-2'>
                <p className='text-sm text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis autem asperiores, necessitatibus blanditiis eligendi sunt nulla rerum minima reprehenderit tempora ad consequatur suscipit voluptates nam dolore, repellendus magnam soluta eius saepe pariatur, sequi assumenda unde inventore? Corrupti eveniet voluptatem amet quos. Repellat ex at sapiente. Soluta libero, consequatur quam explicabo quisquam voluptatum ex id commodi corrupti perferendis quia mollitia voluptate quidem voluptates temporibus dolores facilis architecto neque deleniti. Atque voluptatum illo magnam eaque eligendi sit iste aliquid pariatur minima esse ducimus tenetur sequi accusantium, maxime eos asperiores in commodi dolorem doloremque facilis! Sit vero architecto similique reprehenderit, ad nesciunt, recusandae animi obcaecati tenetur distinctio iusto tempora voluptates! Odio, qui ad beatae tempora mollitia laborum adipisci ipsam quas odit eius, a cum excepturi expedita, ratione repellendus harum dolorem aliquam blanditiis. Accusantium velit quia corrupti rerum rem aspernatur sit, deleniti eveniet praesentium repellendus esse reiciendis amet quibusdam tempora modi voluptas tempore eligendi.</p>
            </div>
        </div>
        {/* Footer include comments, Direct Messages, upvote, Bookmark and setting. All icons and small description*/}
        <div className=' p-2 rounded-lg flex justify-between'>
            <div className='flex items-center  text-black hover:bg-opacity-50 p-2 rounded-lg '>
                <FaRegCommentDots className='h-6 w-6 mr-2 ' />
                <span className='text-sm'>121</span>
            </div>
            <div className='flex items-center'>
                <FaTelegramPlane className='h-6 w-6 mr-2 text-black' />
                <span className='text-sm text-black'>DM</span>
            </div>
            <div className='flex items-center'>
                <GiOrbDirection className='h-6 w-6 mr-2 text-black' />
                <span className='text-sm text-black'>211</span>
            </div>
            <div className='flex items-center'>
                <FaBookmark className='h-6 w-6 mr-2 text-black' />
            </div>
            {/* Dropdowns when icon clicked and showing share, copy link, and delete */}
            <div className='flex items-center'>
                <BsThreeDots className='h-6 w-6 mr-2 text-black' onClick={handleDropdownClick} />
                {showDropdown && (
                <div
                    ref={dropdownRef}
                    className='absolute right-5 mb-20 bg-white rounded-lg shadow-lg'>
                    {/* Dropdown content */}
                    <ul className=''>
                        <li className='text-black py-2 flex pr-4 pl-2 rounded-lg hover:bg-yellow'>
                            <GiShare className='h-6 w-6 mr-2 text-black' />
                            Share
                        </li>
                        <li className='text-black py-2 flex pr-4 pl-2 rounded-lg hover:bg-yellow '>
                            <BsLink45Deg className='h-6 w-6 mr-2 text-black' />
                            Copy Link
                        </li>
                        <li className='text-black py-2 flex pr-4 pl-2 rounded-lg hover:bg-red-500 hover:text-white '>
                            <MdDelete className='h-6 w-6 mr-2 text-black' />
                            Delete
                        </li>
                    </ul>
                </div>
                )}
            </div>
        </div>
        {/* Create a line divider with yellow color */}
        <div className='border-b-2 border-[#717978] mb-5'></div>

        <div className=' p-2 rounded-lg'>
            {/* Create a header component */}
            <div className='flex justify-between items-center'>
                {/* Create a avatar component */}
                <div className='flex items-center'>
                    <img src={avatar} alt='avatar' className=' h-14 w-14  rounded-full mr-3' />
                    {/* Create a username component */}
                    <div className='flex flex-col'>
                        <span className='font-bold text-black text-sm'>Dyah.laksmi</span>
                        <span className='text-gray-700 text-xs'>29 May 2023</span>
                    </div>
                </div>
                {/* Create a Labelled Button (Lost, Found, Gotcha and Share) and the location he lost the items and vertically*/}
                <div className='items-center flex flex-col '>
                    <button className='bg-[#00ff0d] text-white px-4 py-2 mb-1 rounded-3xl text-xs font-normal'>Share</button>
                    <span className='text-gray-700 text-sm ml-3'>at Kutek Area</span>
                </div>
            </div>
        </div>
        {/* Body include messages or photos */}
        <div className=''>
            <div className=' bg-opacity-50 p-2 rounded-lg m-2'>
                <p className='text-sm text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis ducimus iure minima magnam sit non deserunt, earum adipisci rerum modi, veritatis dolorum quam? Eius mollitia vel corrupti earum esse saepe rem et perferendis perspiciatis eveniet sequi possimus ad tempora quasi, in eos dicta minima excepturi magnam impedit unde itaque. Natus dolore iste magni commodi eligendi sapiente nobis similique at placeat ipsam iure temporibus aperiam obcaecati, voluptatibus, esse, laborum ad velit cum quisquam. Magnam similique dolores numquam qui animi, accusantium quam nihil? Ratione nostrum saepe incidunt obcaecati, voluptatibus hic ducimus minus veritatis cupiditate quas eos? Ut voluptatem sequi delectus rerum.</p>
            </div>
        </div>
        {/* Footer include comments, Direct Messages, upvote, Bookmark and setting. All icons and small description*/}
        <div className=' p-2 rounded-lg flex justify-between'>
            <div className='flex items-center  text-black hover:bg-opacity-50 p-2 rounded-lg '>
                <FaRegCommentDots className='h-6 w-6 mr-2 ' />
                <span className='text-sm'>121</span>
            </div>
            <div className='flex items-center'>
                <FaTelegramPlane className='h-6 w-6 mr-2 text-black' />
                <span className='text-sm text-black'>DM</span>
            </div>
            <div className='flex items-center'>
                <GiOrbDirection className='h-6 w-6 mr-2 text-black' />
                <span className='text-sm text-black'>211</span>
            </div>
            <div className='flex items-center'>
                <FaBookmark className='h-6 w-6 mr-2 text-black' />
            </div>
            {/* Dropdowns when icon clicked and showing share, copy link, and delete */}
            <div className='flex items-center'>
                <BsThreeDots className='h-6 w-6 mr-2 text-black' onClick={handleDropdownClick} />
                {showDropdown && (
                <div
                    ref={dropdownRef}
                    className='absolute right-5 mb-20 bg-white rounded-lg shadow-lg'>
                    {/* Dropdown content */}
                    <ul className=''>
                        <li className='text-black py-2 flex pr-4 pl-2 rounded-lg hover:bg-yellow'>
                            <GiShare className='h-6 w-6 mr-2 text-black' />
                            Share
                        </li>
                        <li className='text-black py-2 flex pr-4 pl-2 rounded-lg hover:bg-yellow '>
                            <BsLink45Deg className='h-6 w-6 mr-2 text-black' />
                            Copy Link
                        </li>
                        <li className='text-black py-2 flex pr-4 pl-2 rounded-lg hover:bg-red-500 hover:text-white '>
                            <MdDelete className='h-6 w-6 mr-2 text-black' />
                            Delete
                        </li>
                    </ul>
                </div>
                )}
            </div>
        </div>
        {/* Create a line divider with yellow color */}
        <div className='border-b-2 border-[#717978] mb-5'></div>
    </div>
  )
}

export default PostMessages