import React, { useState, useRef, useEffect } from 'react';
import avatar from '../../assets/ava.jpg';
import { FaRegCommentDots, FaTelegramPlane, FaBookmark } from 'react-icons/fa';
import { GiOrbDirection, GiShare } from 'react-icons/gi';
import { BsThreeDots, BsLink45Deg, BsTrash } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

// Create a component for post messages like twitter
const PostMessages = ({ link }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const dropdownRef = useRef(null);
  const [tweets, setTweets] = useState([]);
  // Get user id from local storage
  const user_id = localStorage.getItem('user_id');

  const handleDropdownClick = (index) => {
    if (selectedPost === index) {
      setShowDropdown((prevState) => !prevState);
    } else {
      setSelectedPost(index);
      setShowDropdown(true);
    }
  };

  const getTweets = async () => {
    try {
      const response = await fetch(link, {
        method: 'GET',
        headers: { token: localStorage.token },
      });
      const jsonData = await response.json();

      setTweets(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getTweets();

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [link]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Lost':
        return 'bg-[#ff6b00]';
      case 'Found':
        return 'bg-[#ffd369]';
      case 'Gotcha!':
        return 'bg-[#21c54f]';
      case 'Share':
        return 'bg-[#10b5a1]';
      default:
        return '';
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} ${month} ${year} ${hours}:${minutes}`;
  };

  const handleDelete = async (tweet) => {
    try {
      // Send a DELETE request to delete the post by post_id
      const response = await fetch(`http://localhost:5000/posts/${tweet.post_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.token,
        },
      });
  
      if (response.ok) {
        // Remove the deleted tweet from the tweets state
        setTweets((prevTweets) => prevTweets.filter((t) => t.post_id !== tweet.post_id));
        toast.success('Post deleted successfully!');
      } else {
        toast.error('Failed to delete post. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error('An error occurred. Please try again later.');
    }

    setShowDropdown(false);
  };  

  return (
    <div className='md:ml-[20rem] hover:cursor-pointer mb-10 pt-20 sm:ml-[20rem] p-0 bg-transparent'>
      {tweets.map((tweet, index) => (
        <div key={index} className='py-2 rounded-lg'>
          <div className='flex justify-between px-4 items-center'>
            <div className='flex items-center'>
              <img src={avatar} alt='avatar' className='h-12 w-12 rounded-full mr-3' />
              <div className='flex flex-col'>
                <span className='font-bold text-black text-sm'>{tweet.username}</span>
                <span className='text-gray-700 text-xs'>{formatDate(tweet.post_date)}</span>
              </div>
            </div>
            <div className='items-center flex flex-col'>
              <button
                className={`bg-[#00ffb3] text-white px-4 py-2 mb-1 rounded-3xl text-xs font-normal ${getStatusColor(
                  tweet.status
                )}`}
              >
                {tweet.status}
              </button>
              <span className='text-gray-700 text-sm'>at Kutek Area</span>
            </div>
          </div>
          <div className=''>
            <div className='bg-opacity-50 px-2 rounded-lg m-2'>
              <p className='text-sm text-black'>{tweet.post_txt}</p>
            </div>
          </div>
          <div className='px-4 rounded-lg flex justify-between'>
            <div className='flex items-center text-black hover:bg-opacity-50 p-2 rounded-lg'>
              <FaRegCommentDots className='h-6 w-6 mr-2' />
              <span className='text-sm'>121</span>
            </div>
            <div className='flex items-center'>
              <FaTelegramPlane className='h-6 w-6 mr-2 text-black' />
              <span className='text-sm text-black'>DM</span>
            </div>
            <div className='flex items-center'>
              <GiOrbDirection className='h-6 w-6 mr-2 text-black' />
              <span className='text-sm text-black'>{tweet.rise_vote}</span>
            </div>
            <div className='flex items-center'>
              <FaBookmark className='h-6 w-6 mr-2 text-black' />
            </div>
            <div className='flex items-center'>
              <BsThreeDots
                className='h-6 w-6 mr-2 text-black'
                onClick={() => handleDropdownClick(index)}
              />
              {selectedPost === index && showDropdown && (
                <div ref={dropdownRef} className='absolute right-5 mb-20 bg-white rounded-lg shadow-lg'>
                  <ul className=''>
                    <li className='text-black py-2 flex pr-4 pl-2 rounded-lg hover:bg-yellow'>
                      <GiShare className='h-6 w-6 mr-2 text-black' />
                      Share
                    </li>
                    <li className='text-black py-2 flex pr-4 pl-2 rounded-lg hover:bg-yellow '>
                      <BsLink45Deg className='h-6 w-6 mr-2 text-black' />
                      Copy Link
                    </li>
                    {/* Delete just shown up if the user_id in local memory is the same as the user_id of the post */}
                    {tweet.user_id.toString() === user_id && (
                      <li
                        className='text-black py-2 flex pr-4 pl-2 rounded-lg hover:bg-red-500'
                        onClick={() => handleDelete(tweet)}
                      >
                        <MdDelete className='h-6 w-6 mr-2 text-black' />
                        Delete
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className='border-b-2 border-[#717978] mb-1'></div>
        </div>
      ))}
    </div>
  );
};

export default PostMessages;
