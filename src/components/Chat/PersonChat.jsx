import React, { useEffect, useState, useRef } from 'react';
import { IoMdSend } from 'react-icons/io';
import { MdArrowBack } from 'react-icons/md';
import ava from '../../assets/ava.jpg';
import { useNavigate, useParams } from 'react-router-dom';

const PersonChat = () => {
  const navigate = useNavigate();
  const { username_friend } = useParams();
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  const getMessages = async () => {
    try {
      const response = await fetch(`https://lost-and-found-be.vercel.app/chat/${localStorage.getItem('user_id')}/${localStorage.getItem('interlocutor_id')}`, {
        method: 'GET',
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      setMessages(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const message = inputRef.current.value;
      const body = { message };
      const response = await fetch(`https://lost-and-found-be.vercel.app/chat/send/${localStorage.getItem('user_id')}/${localStorage.getItem('interlocutor_id')}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', token: localStorage.token },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      getMessages();
      inputRef.current.value = ''; // Clear the input field after sending the message
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const formatTime = (timeString) => {
    const options = { hour: 'numeric', minute: 'numeric' };
    return new Date(timeString).toLocaleTimeString([], options);
  };

  return (
    <>
      {/* Header */}
      <div className="fixed sm:left-[20rem] bg-white backdrop-blur-md bg-opacity-50 z-5 top-0 left-0 right-0 items-center justify-between text-black px-4 py-4 border-b border-yellow">
        <div className="flex items-center">
          <div className="hover:cursor-pointer" onClick={handleGoBack}>
            <MdArrowBack className="text-2xl text-black mr-4" />
          </div>
          <img className="w-12 h-12 rounded-full" src={ava} alt="ava" />
          <div className="ml-4">
            <div className="font-medium text-black ">{username_friend}</div>
            <div className="text-[#717978] text-sm">Online</div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="sm:ml-[20rem] pb-16">
        <div className="flex max-w-[1240px] pt-20 flex-col-reverse overflow-y-auto h-[calc(100vh-5rem-4rem)]">
          <div className="flex flex-col-reverse">
            {messages.map((message) => (
              // Sender
              message.receiver_id === localStorage.getItem('user_id') ? (
                <div className="flex items-center justify-start px-4 py-4" key={message.id}>
                  <img className="w-12 h-12 rounded-full mr-4" src={ava} alt="ava" />
                  <div className="flex flex-col">
                    <div className="bg-[#E4E6E8] rounded-xl px-4 py-3">
                      <div className="text-black">{message.message}</div>
                    </div>
                    <div className="text-[#717978] text-sm mt-2">{formatTime(message.time)}</div>
                  </div>
                </div>
              ) : (
                // Receiver
                <div className="flex items-center justify-end px-4 py-4" key={message.id}>
                  <div className="flex flex-col items-end">
                    <div className="bg-yellow rounded-xl px-4 py-3">
                      <div className="text-black">{message.message}</div>
                    </div>
                    <div className="text-[#717978] text-sm mt-2">{formatTime(message.time)}</div>
                  </div>
                  <img className="w-12 h-12 rounded-full ml-4" src={ava} alt="ava" />
                </div>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Footer send chat */}
      <div className="fixed sm:left-[20rem] flex sm:pb-0 sm:pr-10 bottom-12 pb-8 max-w-[1240px] w-full items-center justify-between px-4 py-4 border-t border-yellow">
        <form onSubmit={sendMessage} className="flex items-center justify-between w-full mr-5">
          <input
            ref={inputRef}
            className="bg-[#E4E6E8] px-4 py-2 rounded-2xl text-black flex-grow mr-4"
            type="text"
            placeholder="Type a message"
          />
          <button type="submit" className="hover:cursor-pointer">
            <IoMdSend className="text-black text-2xl" />
          </button>
        </form>
      </div>
    </>
  );
};

export default PersonChat;
