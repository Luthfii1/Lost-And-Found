import React, { useState, useEffect, useRef } from 'react';
import { IoIosCreate } from 'react-icons/io';
import avatar from '../../assets/ava.jpg';
import { MdAddLocationAlt } from 'react-icons/md';
import { BsImages } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Share'); // Set default selected option as 'Share'
  const formRef = useRef(null);
  const [post_txt, setPost_txt] = useState(''); // Set default post text as empty string
  const [post_img, setPost_img] = useState(''); // Set default post image as empty string
  const [status, setStatus] = useState('Share'); // Set default status as empty string

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setStatus(option);
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setShowForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { post_txt, status };
      // post/{idFromLocalStorage} is the route to post a new post
      const response = await fetch(`http://localhost:5000/posts/${localStorage.getItem('user_id')}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          token: localStorage.token,
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      console.log(parseRes);

      // Display toast notification and close component
      toast.success('Message sent successfully!', {
        onClose: () => {
          setShowForm(false);
          window.location.reload(); // Refresh the page
        }, // Close the component when toast is closed
        autoClose: 1000, // Automatically close the toast after 2 seconds
      });

      // Reset form fields to default values
      setSelectedOption('Share');
      setPost_txt('');
      setPost_img('');
      setStatus('');

    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSendClick = (e) => {
    e.preventDefault();
    onSubmitForm(e);
  };
  

  return (
    <div>
      <div
        className='rounded-full bg-yellow fixed bottom-24 hover:cursor-pointer hover:bg-black right-10'
        onClick={toggleForm}
      >
        <IoIosCreate className='h-16 w-16 p-5' />
      </div>

      {showForm && (
        <form
          ref={formRef}
          className='bg-[#fafafa] bg-opacity-90 sm:mx-10 rounded-lg w-full h-auto top-24 mx-auto mt-0 sm:mt-0 sm:left-[20rem] sm:right-0 sm:w-auto sm:h-auto fixed'
          onSubmit={onSubmitForm}
        >
          {/* Create Header for avatar and button option messages are lost, share or found */}
          <div className='flex justify-between items-center px-4 pt-4'>
            <div className='flex items-center'>
              <img src={avatar} alt='avatar' className='h-12 w-12 rounded-full mr-3' />
              <div className='flex text-center'>
                <div
                  className={` hover:cursor-pointer hover:bg-[#ff6b00] h-10 w-14 justify-items-center rounded-l-lg text-center text-white flex items-center ${
                    selectedOption === 'Lost' ? 'bg-[#ff6b00]' : 'bg-[#717978]'
                  }`}
                  onClick={() => {
                    handleOptionClick('Lost');
                    setStatus('Lost');
                  }}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <span className='mx-auto'>Lost</span>
                </div>
                <div
                  className={`bg-[#10b5a1] hover:cursor-pointer hover:bg-[#10b5a1] h-10 w-14 justify-items-center text-center text-white flex items-center ${
                    selectedOption === 'Share' ? '' : 'bg-[#717978]'
                  }`}
                  onClick={() => {
                    handleOptionClick('Share');
                    setStatus('Share');
                  }}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <span className='mx-auto'>Share</span>
                </div>
                <div
                  className={` hover:cursor-pointer hover:bg-[#ffd369] h-10 w-14 justify-items-center rounded-r-lg text-center text-white flex items-center ${
                    selectedOption === 'Found' ? 'bg-[#ffd369]' : 'bg-[#717978]'
                  }`}
                  onClick={() => {
                    handleOptionClick('Found');
                    setStatus('Found');
                  }}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <span className='mx-auto'>Found</span>
                </div>
              </div>
            </div>
          </div>
          {/* A body to write a message */}
          <div className='px-4 my-5'>
            <input
              className='w-full bg-yellow text-black p-3 h-32 rounded-lg bg-opacity-90'
              placeholder='Write a message...'
              type='text'
              value={post_txt}
              onChange={(e) => setPost_txt(e.target.value)}
            ></input>
          </div>
          {/* A footer to add location and image in the left side also send in the right side */}
          <div className='flex justify-between items-center px-4 pt-2 rounded-b-lg pb-3 bg-yellow'>
            <div className='flex items-center'>
              <MdAddLocationAlt className='h-6 hover:cursor-pointer w-6 mr-2 text-black' />
              <BsImages className='h-6 hover:cursor-pointer w-6 mr-2 text-black' />
            </div>
            <div className='flex items-center'>
              <FaTelegramPlane 
              className='h-6 hover:cursor-pointer w-6 mr-2 text-black' 
              onClick={handleSendClick}
              />
            </div>
          </div>
        </form>
      )}
      <ToastContainer />
    </div>
  );
};

export default Post;