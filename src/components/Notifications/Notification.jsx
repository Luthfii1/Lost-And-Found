import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
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
      </div>
    </div>
  );
};

export default Notification;
