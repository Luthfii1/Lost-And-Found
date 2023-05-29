import React from 'react'
import avatar from '../assets/ava.jpg'
import {FaRegCommentDots, FaTelegramPlane, FaBookmark} from 'react-icons/fa'
import {GiOrbDirection} from 'react-icons/gi'
import {BsThreeDots} from 'react-icons/bs'

// Create a component for post messages like twitter
const PostMessages = () => {

  return (
      <div className='md:ml-[20rem] sm:pt-24 sm:ml-[20rem] p-5 bg-transparent'>
        {/* // Just need this component */}
        {/* Create a body component  */}
        <div className='bg-yellow p-2 rounded-lg'>
            {/* Create a header component */}
            <div className='flex justify-between items-center'>
                {/* Create a avatar component */}
                <div className='flex items-center'>
                    <img src={avatar} alt='avatar' className=' h-14 w-14  rounded-full mr-3' />
                    {/* Create a username component */}
                    <div className='flex flex-col'>
                        <span className='font-bold text-sm'>Dyah.laksmi</span>
                        <span className='text-gray-700 text-xs'>29 May 2023</span>
                    </div>
                </div>
                {/* Create a Labelled Button (Lost, Found, Gotcha and Share) and the location he lost the items and vertically*/}
                <div className='items-center flex flex-col '>
                    <button className='bg-[#FF6B00] text-white mb-1 rounded-3xl text-sm font-normal'>Lost</button>
                    <span className='text-gray-700 text-sm ml-3'>at Kutek Area</span>
                </div>
            </div>
        </div>
        {/* Body include messages or photos */}
        <div className=''>
            <div className='bg-yellow bg-opacity-50 p-2 rounded-lg m-2'>
                <p className='text-sm text-black'>I lost my wallet at Kutek Area. It's a black wallet with a picture of a cat on it. If you find it, please contact me. I will give a reward if you give me back that stuff to me</p>
            </div>
        </div>
        {/* Footer include comments, Direct Messages, upvote, Bookmark and setting. All icons and small description*/}
        <div className='bg-yellow p-2 rounded-lg flex mb-5 justify-between'>
            <div className='flex items-center'>
                <FaRegCommentDots className='h-6 w-6 mr-2 text-black' />
                <span className='text-sm text-black'>121</span>
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
            <div className='flex items-center'>
                <BsThreeDots className='h-6 w-6 mr-2 text-black' />
            </div>
        </div>
        {/* End of the main component */}

        <div className='bg-yellow p-2 rounded-lg'>
            {/* Create a header component */}
            <div className='flex justify-between items-center'>
                {/* Create a avatar component */}
                <div className='flex items-center'>
                    <img src={avatar} alt='avatar' className=' h-14 w-14  rounded-full mr-3' />
                    {/* Create a username component */}
                    <div className='flex flex-col'>
                        <span className='font-bold text-sm'>Dyah.laksmi</span>
                        <span className='text-gray-700 text-xs'>29 May 2023</span>
                    </div>
                </div>
                {/* Create a Labelled Button (Lost, Found, Gotcha and Share) and the location he lost the items and vertically*/}
                <div className='items-center flex flex-col '>
                    <button className='bg-[#FF6B00] text-white mb-1 rounded-3xl text-sm font-normal'>Lost</button>
                    <span className='text-gray-700 text-sm ml-3'>at Kutek Area</span>
                </div>
            </div>
        </div>
        {/* Body include messages or photos */}
        <div className=''>
            <div className='bg-yellow bg-opacity-50 p-2 rounded-lg m-2'>
                <p className='text-sm text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut corporis ex nihil quae cumque praesentium consectetur quasi? Consequuntur obcaecati atque libero amet. Nesciunt magnam quam beatae. Inventore esse voluptates veritatis et maxime nihil nemo, quae quaerat voluptatibus. Animi dolor, ratione quidem quisquam fugit, aut fugiat saepe, velit necessitatibus qui maiores earum impedit iste a. Adipisci quasi doloremque vel repellendus modi impedit provident, corrupti hic vitae magni, vero neque tempore. Placeat dolor magnam suscipit. Quod ullam iste eaque, necessitatibus tempora repellendus hic? Atque alias eos officiis, maxime sit tempora voluptate magnam assumenda numquam quasi! Officia repellat saepe, accusamus ratione aspernatur mollitia! Beatae accusamus libero ad doloribus consequatur consequuntur, temporibus hic reprehenderit placeat, obcaecati sunt nesciunt. Earum unde consequuntur ipsam officiis neque, minus quaerat, corrupti perspiciatis, voluptatibus repellendus reprehenderit! Corrupti optio ea voluptatum nulla, iste repellat earum neque illum saepe voluptas repellendus tempora, sit error fuga officia, iure eos architecto dolorum? Enim at a illo exercitationem quisquam, quo laborum labore quasi voluptatem eos, impedit, ducimus explicabo vero dicta molestiae quaerat porro in fuga nulla repellendus. Voluptates impedit recusandae veniam nulla quas animi veritatis molestias iure! Error quis fugiat voluptates cumque ea aspernatur eaque blanditiis unde tenetur consequuntur ratione, architecto impedit velit totam ipsum fuga repellendus accusantium omnis, nam beatae. Aut porro possimus laudantium ullam recusandae placeat eius quo praesentium illum optio soluta, repellat ut veritatis dolores facere quae sint beatae quis earum a voluptatum. Ducimus velit hic cupiditate unde placeat? Ducimus facilis neque, minima nisi aliquam optio. Quas ex fugiat magni quis enim iure aut, nesciunt velit voluptas similique nemo doloribus consequatur ea earum, ullam sequi aperiam amet cum aliquid optio, accusamus id! Quibusdam cum voluptate sunt officia nesciunt mollitia, ducimus, numquam dignissimos fugit veniam, autem voluptatibus sequi recusandae nam eveniet. Eius delectus molestiae inventore temporibus, nostrum tempora sint tempore cupiditate odio. I lost my wallet at Kutek Area. It's a black wallet with a picture of a cat on it. If you find it, please contact me. I will give a reward if you give me back that stuff to me</p>
            </div>
        </div>
        {/* Footer include comments, Direct Messages, upvote, Bookmark and setting. All icons and small description*/}
        <div className='bg-yellow p-2 rounded-lg flex mb-5 justify-between'>
            <div className='flex items-center'>
                <FaRegCommentDots className='h-6 w-6 mr-2 text-black' />
                <span className='text-sm text-black'>121</span>
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
            <div className='flex items-center'>
                <BsThreeDots className='h-6 w-6 mr-2 text-black' />
            </div>
        </div>

        <div className='bg-yellow p-2 rounded-lg'>
            {/* Create a header component */}
            <div className='flex justify-between items-center'>
                {/* Create a avatar component */}
                <div className='flex items-center'>
                    <img src={avatar} alt='avatar' className=' h-14 w-14  rounded-full mr-3' />
                    {/* Create a username component */}
                    <div className='flex flex-col'>
                        <span className='font-bold text-sm'>Dyah.laksmi</span>
                        <span className='text-gray-700 text-xs'>29 May 2023</span>
                    </div>
                </div>
                {/* Create a Labelled Button (Lost, Found, Gotcha and Share) and the location he lost the items and vertically*/}
                <div className='items-center flex flex-col '>
                    <button className='bg-[#FF6B00] text-white mb-1 rounded-3xl text-sm font-normal'>Lost</button>
                    <span className='text-gray-700 text-sm ml-3'>at Kutek Area</span>
                </div>
            </div>
        </div>
        {/* Body include messages or photos */}
        <div className=''>
            <div className='bg-yellow bg-opacity-50 p-2 rounded-lg m-2'>
                <p className='text-sm text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, perspiciatis hic corrupti ipsam, maxime nostrum dolore, quo magnam odit voluptatum illo doloremque officia repellendus molestias. Nulla, perspiciatis eveniet tempore modi, error at velit, amet consectetur nemo ut facilis dolore quaerat impedit qui delectus in ratione voluptatibus! Deleniti, velit excepturi earum nostrum cum obcaecati tenetur ea ratione ex eligendi, fugiat dolore quas. Perspiciatis quidem impedit distinctio ex ratione eveniet nihil fugit cumque quisquam inventore itaque, eos eius! Impedit maxime sint inventore dignissimos quibusdam cupiditate deserunt minus obcaecati laborum, eos, laudantium officia animi eum nisi in error provident. Molestias quos architecto iure! I lost my wallet at Kutek Area. It's a black wallet with a picture of a cat on it. If you find it, please contact me. I will give a reward if you give me back that stuff to me</p>
            </div>
        </div>
        {/* Footer include comments, Direct Messages, upvote, Bookmark and setting. All icons and small description*/}
        <div className='bg-yellow p-2 rounded-lg flex mb-5 justify-between'>
            <div className='flex items-center'>
                <FaRegCommentDots className='h-6 w-6 mr-2 text-black' />
                <span className='text-sm text-black'>121</span>
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
            <div className='flex items-center'>
                <BsThreeDots className='h-6 w-6 mr-2 text-black' />
            </div>
        </div>
    </div>
  )
}

export default PostMessages