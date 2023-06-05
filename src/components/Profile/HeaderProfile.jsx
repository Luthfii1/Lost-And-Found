import React, { useState, useEffect } from 'react';
import header from '../../assets/header.jpg';
import avatar from '../../assets/ava.jpg';
import { AiFillPushpin } from 'react-icons/ai';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import PostMessages from '../Post/PostMessages';

// Create a component for profile header, including header picture, profile picture, username, name, and bio also major
const HeaderProfile = ({ id }) => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('All');

    const handleButtonClick = (button) => {
        setActiveButton(button);
        // Define the corresponding link for each button
        // let link = `http://localhost:5000/posts/all/${ id }`;
        // if (button === 'Lost') {
        //     link = `http://localhost:5000/posts/lost/${ id }`;
        // } else if (button === 'Found') {
        //     link = `http://localhost:5000/posts/found/${ id }`;
        // } else if (button === 'Share') {
        //     link = `http://localhost:5000/posts/share/${ id }`;
        // }
    };

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div>
            {/* Header username and button back */}
            <div className="fixed sm:left-[20rem] bg-white z-10 bg-blend-screen top-0 left-0 right-0 items-center justify-between text-black px-4 py-3 border-b border-yellow">
                <div className="flex items-center">
                    <div className="hover:cursor-pointer" onClick={handleGoBack}>
                        <MdArrowBack className="text-xl text-black mr-4" />
                    </div>
                    <div className="ml-4">
                        <div className="font-medium text-black ">nicholas.saputra</div>
                    </div>
                </div>
            </div>
            {/* Header profile */}
            <div className="profile-header sm:max-w-[1200px] left-0 right-0 pt-16 w-full h-auto pb-5 rounded-b-2xl bg-yellow sm:ml-[20rem]">
                {/* Profile Header picture */}
                <div className="profile-header-background items-center flex justify-center relative">
                    <img src={header} alt="" className="h-30 rounded-2xl w-3/4 sm:w-1/3" />
                    {/* Profile picture */}
                    <div className="profile-header-picture absolute -bottom-2 left-1/2 transform -translate-x-1/2 -mb-10">
                        <img src={avatar} alt="" className="h-20 w-20 rounded-full p-1.5 bg-white" />
                    </div>
                </div>
                {/* Profile name and username*/}
            </div>
            <div className="profile-header-name sm:max-w-[1240px] sm:ml-[20rem] flex justify-center mt-6 items-center flex-col">
                <h1 className="text-xl font-bold text-black">nicholas.saputra</h1>
                <h1 className="text-xs font-bold text-gray-500">Nicholas Ginting Saputra</h1>
            </div>
            {/* Bio, Major and Born Date */}
            <div className="profile-header-bio sm:max-w-[1240px] sm:ml-[20rem] flex justify-center mt-2 pl-4 items-start flex-col">
                <h1 className="text-sm font-bold text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, sint.</h1>
                <div className="profile-header-bio-major flex items-center mt-2">
                    <AiFillPushpin className="text-gray-800" />
                    <h1 className="text-xs font-bold text-gray-500 ml-1">Computer Science</h1>
                </div>
                <div className="profile-header-bio-born flex items-center mt-2">
                    <FaBirthdayCake className="text-gray-800" />
                    <h1 className="text-xs font-bold text-gray-500 ml-1"> 20th April 2000</h1>
                </div>
            </div>
            {/* Divider line */}
            <div className="profile-header-divider sm:max-w-[1240px] sm:ml-[20rem] flex justify-center mt-4">
                <div className="w-full h-0.5 bg-gray-300"></div>
            </div>
            {/* Button All, Lost, Found, Share, when scroll up it will be fixed under the header username */}
            <div className="profile-header-button sticky bg-[#222831] pb-1 rounded-b-lg mb-5 top-12 pt-2 flex-col sm:max-w-[1240px] px-5 sm:ml-[20rem] flex justify-center z-10">
                <div className="flex items-between justify-evenly">
                    <div className="profile-header-button-all flex items-center justify-center">
                        <h1 
                            className={`text-sm font-bold  border-b-4 hover:cursor-pointer ${activeButton === 'All' ? 'border-yellow text-white' : 'border-b-gray-500 text-gray-400'}`}
                            onClick={() => handleButtonClick('All')}
                        >
                        All
                        </h1>
                    </div>
                    <div className="profile-header-button-lost flex items-center justify-center">
                        <h1 
                            className={`text-sm font-bold  border-b-4 hover:cursor-pointer ${activeButton === 'Lost' ? 'border-yellow text-white' : 'border-b-gray-500 text-gray-400'} `}
                            onClick={() => handleButtonClick('Lost')}
                            >Lost</h1>
                    </div>
                    <div className="profile-header-button-found flex items-center justify-center">
                        <h1 className={`text-sm font-bold  border-b-4 hover:cursor-pointer ${activeButton === 'Found' ? 'border-yellow text-white' : 'border-b-gray-500 text-gray-400'} `}
                        onClick={() => handleButtonClick('Found')}
                        >Found</h1>
                    </div>
                    <div className="profile-header-button-share flex items-center justify-center">
                        <h1 className={`text-sm font-bold  border-b-4 hover:cursor-pointer ${activeButton === 'Share' ? 'border-yellow text-white' : 'border-b-gray-500 text-gray-400'}`}
                        onClick={() => handleButtonClick('Share')}
                        >Share</h1>
                    </div>
                </div>
            </div>
            {/* Tweet */}
            <PostMessages link={`http://localhost:5000/posts/${activeButton.toLowerCase()}/${id}`} inProfileRoute={true} />
        </div>
    );
};

export default HeaderProfile;
