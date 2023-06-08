import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import header from '../../assets/header.jpg';
import avatar from '../../assets/ava.jpg';
import { AiFillPushpin } from 'react-icons/ai';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import PostMessages from '../Post/PostMessages';

const HeaderProfile = ({ id }) => {
    const { user_id } = useParams();
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('All');

    console.log(user_id);

    const [user, setUser] = useState([]);
    const getUser = async () => {
    try {
        const response = await fetch(`http://localhost:5000/user/${user_id}`, {
            method: 'GET',
            headers: { token: localStorage.token },
        });
        const jsonData = await response.json();

        setUser(jsonData);
    } catch (err) {
        console.log(err.message);
    }
    };

    useEffect(() => {
        getUser();
    }, []);

    const date = new Date(user.birth_date);
    const birth_date =
        date.getDate() +
        ' ' +
        date.toLocaleString('default', { month: 'long' }) +
        ' ' +
        date.getFullYear();

    const handleButtonClick = (button) => {
        setActiveButton(button);
        // Define the corresponding link based on the button
        let link;
        switch (button) {
        case 'Share':
            link = `http://localhost:5000/post/share/${user_id}`;
            break;
        case 'Lost':
            link = `http://localhost:5000/post/lost/${user_id}`;
            break;
        case 'Found':
            link = `http://localhost:5000/post/found/${user_id}`;
            break;
        default:
            link = `http://localhost:5000/post/all/${user_id}`;
            break;
        }
        // Set the link to the state
        setLink(link);
    };


    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <div className="fixed sm:left-[20rem] bg-white z-10 bg-blend-screen top-0 left-0 right-0 items-center justify-between text-black px-4 py-3 border-b border-yellow">
                <div className="flex items-center">
                <div className="hover:cursor-pointer" onClick={handleGoBack}>
                    <MdArrowBack className="text-xl text-black mr-4" />
                </div>
                <div className="ml-4">
                    <div className="font-medium text-black">{user.username}</div>
                </div>
                </div>
            </div>
            <div className="profile-header sm:max-w-[1200px] left-0 right-0 pt-16 w-full h-auto pb-5 rounded-b-2xl bg-yellow sm:ml-[20rem]">
                <div className="profile-header-background items-center flex justify-center relative">
                <img src={header} alt="" className="h-30 rounded-2xl w-3/4 sm:w-1/3" />
                <div className="profile-header-picture absolute -bottom-2 left-1/2 transform -translate-x-1/2 -mb-10">
                    <img src={avatar} alt="" className="h-20 w-20 rounded-full p-1.5 bg-white" />
                </div>
                </div>
            </div>
            <div className="profile-header-name sm:max-w-[1240px] sm:ml-[20rem] flex justify-center mt-6 items-center flex-col">
                <h1 className="text-xl font-bold text-black">{user.username}</h1>
                <h1 className="text-xs font-bold text-gray-500">{user.name}</h1>
            </div>
            <div className="profile-header-bio sm:max-w-[1240px] sm:ml-[20rem] flex justify-center mt-2 pl-4 items-start flex-col">
                <h1 className="text-sm font-bold text-black">{user.bio}</h1>
                <div className="profile-header-bio-major flex items-center mt-2">
                <AiFillPushpin className="text-gray-800" />
                <h1 className="text-xs font-bold text-gray-500 ml-1">{user.jurusan_kuliah}</h1>
                </div>
                <div className="profile-header-bio-born flex items-center mt-2">
                <FaBirthdayCake className="text-gray-800" />
                <h1 className="text-xs font-bold text-gray-500 ml-1">{birth_date}</h1>
                </div>
            </div>
            <div className="profile-header-divider sm:max-w-[1240px] sm:ml-[20rem] flex justify-center mt-4">
                <div className="w-full h-0.5 bg-gray-300"></div>
            </div>
            <div className="profile-header-button sticky bg-[#222831] pb-1 rounded-b-lg mb-5 top-12 pt-2 flex-col sm:max-w-[1240px] px-5 sm:ml-[20rem] flex justify-center z-10">
                <div className="flex items-between justify-evenly">
                    <div className="profile-header-button-all flex items-center justify-center">
                        <h1
                        className={`text-sm font-bold  border-b-4 hover:cursor-pointer ${
                            activeButton === 'All' ? 'border-yellow text-white' : 'border-b-gray-500 text-gray-400'
                        }`}
                        onClick={() => handleButtonClick('All')}
                        >
                        All
                        </h1>
                    </div>
                    <div className="profile-header-button-lost flex items-center justify-center">
                        <h1
                        className={`text-sm font-bold  border-b-4 hover:cursor-pointer ${
                            activeButton === 'Lost' ? 'border-yellow text-white' : 'border-b-gray-500 text-gray-400'
                        } `}
                        onClick={() => handleButtonClick('Lost')}
                        >
                        Lost
                        </h1>
                    </div>
                    <div className="profile-header-button-found flex items-center justify-center">
                        <h1
                        className={`text-sm font-bold  border-b-4 hover:cursor-pointer ${
                            activeButton === 'Found' ? 'border-yellow text-white' : 'border-b-gray-500 text-gray-400'
                        } `}
                        onClick={() => handleButtonClick('Found')}
                        >
                        Found
                        </h1>
                    </div>
                    <div className="profile-header-button-share flex items-center justify-center">
                        <h1
                        className={`text-sm font-bold  border-b-4 hover:cursor-pointer ${
                            activeButton === 'Share' ? 'border-yellow text-white' : 'border-b-gray-500 text-gray-400'
                        }`}
                        onClick={() => handleButtonClick('Share')}
                        >
                        Share
                        </h1>
                    </div>
                </div>
            </div>
            <PostMessages link={`http://localhost:5000/posts/${activeButton.toLowerCase()}/${user.user_id}`} inProfileRoute={true} />
        </div>
    );
};

export default HeaderProfile;
