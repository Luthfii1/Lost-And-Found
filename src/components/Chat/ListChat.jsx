import React, { useEffect, useState } from 'react';
import ava from '../../assets/ava.jpg';
import { useNavigate } from 'react-router-dom';

const ListChat = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);

  const getChat = async () => {
    try {
      const response = await fetch(`http://localhost:5000/chat/${localStorage.getItem('user_id')}`, {
        method: 'GET',
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      setChats(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getChat();
  }, []);

  const getTimeDifference = (lastTime) => {
    const currentTime = new Date();
    const dbTime = new Date(lastTime);
    const timeDiff = Math.abs(currentTime - dbTime);
    const minutesDiff = Math.floor(timeDiff / (1000 * 60));
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const weeksDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));

    if (minutesDiff < 60) {
      return `${minutesDiff} min ago`;
    } else if (hoursDiff < 24) {
      return `${hoursDiff} hours ago`;
    } else if (daysDiff < 7) {
      return `${daysDiff} days ago`;
    } else if (weeksDiff < 4) {
      return `${weeksDiff} weeks ago`;
    } else {
      return "a long time ago";
    }
  };

  return (
    <>
      {chats.map((chat) => {
        const username =
          localStorage.getItem('user_id') === chat.person_1.toString()
            ? chat.username_2
            : chat.username_1;

          const timeDiff = getTimeDifference(chat.last_time);

        return (
          <div
            key={chat.id_room}
            className="flex hover:bg-yellow rounded-xl sm:ml-[20rem] left-0 right-0 hover:cursor-pointer justify-between items-center px-4 py-4"
            onClick={() => navigate('/detailedchat')}
          >
            <div className="flex items-center max-w-[1240px]">
              <img className="w-12 h-12 rounded-full" src={ava} alt="ava" />
              <div className="ml-4">
                <div className="font-medium text-black ">{username}</div>
                <div className="text-[#717978] text-sm ">{chat.last_message}</div>
              </div>
            </div>
            <div className="text-[#717978]">{timeDiff}</div>
          </div>
        );
      })}
    </>
  );
};

export default ListChat;
