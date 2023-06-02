import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';

const Notification = ({ message, type, onClose }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    const interval = setInterval(() => {
      setProgress(prevProgress => prevProgress - (100 / 2000) * 1000);
    }, 0);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onClose]);

  // Set the notification in the middle of the screen with absolute position and white background
  return (
    <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center z-100'>
      <div
        className={`text-black rounded-xl shadow-md sm:w-800 sm:px-36 sm:py-36 sm:h-800 w-500 h-500 px-5 py-20 m-4 ${
          type === 'success' ? 'bg-yellow' : 'bg-red-500'
        } animated-notification`}
      >
        <div className='flex justify-between items-center'>
          <p className='font-bold'>{message}</p>
          <button onClick={onClose} className='text-black bg-white ml-3'>
            <MdClose size={20} />
          </button>
        </div>
        <div className='bg-white h-2 mt-2'>
          <div
            className='bg-black h-full'
            style={{ width: `${progress * 1}%`, transition: 'width 1s linear' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
