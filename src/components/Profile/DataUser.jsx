import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import header from '../../assets/header.jpg';
import avatar from '../../assets/ava.jpg';
import { AiFillPushpin, AiOutlineEdit, AiOutlineMessage, AiOutlineClose } from 'react-icons/ai';
import { FaBirthdayCake, FaUserFriends } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import PostMessages from '../Post/PostMessages';
import { toast } from 'react-toastify';

const HeaderProfile = ({ id }) => {
    const { user_id } = useParams();
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('All');
    const [link, setLink] = useState(`http://localhost:5000/posts/all/${user_id}`);
    const [editProfileModal, setEditProfileModal] = useState(false);
    const [user, setUser] = useState([]);
    // account include username, name, bio, jurusan_kuliah, birth_date, photo_profile, photo_header
    const [birth_date, setBirth_date] = useState(user.birth_date || ''); // Default: user.birth_date or empty string
    const [photo_profile, setPhoto_profile] = useState('');
    const [photo_header, setPhoto_header] = useState('');
    const [name, setName] = useState(user.name || ''); // Default: user.name or empty string
    const [username, setUsername] = useState(user.username || ''); // Default: user.username or empty string
    const [bio, setBio] = useState(user.bio || ''); // Default: user.bio or empty string
    const [jurusan_kuliah, setjurusan_kuliah] = useState(user.jurusan_kuliah || ''); // Default: user.jurusan_kuliah or empty string
    
    
    const getUser = async () => {
        try {
            const response = await fetch(`http://localhost:5000/user/${user_id}`, {
                method: 'GET',
                headers: { token: localStorage.token },
            });
            const jsonData = await response.json();

            setBirth_date(jsonData.birth_date);
            setPhoto_profile(jsonData.photo_profile);
            setPhoto_header(jsonData.photo_header);
            setName(jsonData.name);
            setUsername(jsonData.username);
            setBio(jsonData.bio);
            setjurusan_kuliah(jsonData.jurusan_kuliah);

            
            setUser(jsonData);
        } catch (err) {
        console.log(err.message);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    const date = new Date(user.birth_date);
    const birth_date_constant =
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
            link = `http://localhost:5000/posts/share/${user_id}`;
            break;
        case 'Lost':
            link = `http://localhost:5000/posts/lost/${user_id}`;
            break;
        case 'Found':
            link = `http://localhost:5000/posts/found/${user_id}`;
            break;
        default:
            link = `http://localhost:5000/posts/all/${user_id}`;
            break;
        }
        // Set the link to the state
        setLink(link);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleCreateRoomChat = async (user) => {
        try {
        const response = await fetch(`http://localhost:5000/chat/add/${localStorage.getItem('user_id')}/${user.user_id}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            token: localStorage.token,
            },
        });

        if (response.ok) {
            // Redirect to the chat room
            navigate(`/detailedchat/${user.username}`);
        } else {
            toast.error('Failed to create room chat. Please try again.');
        }

        } catch (error) {
        console.error('Error creating room chat:', error);
        toast.error('An error occurred. Please try again later.');
        }
    };

    const handleEditProfile = () => {
        setEditProfileModal(true);
    };

    // handleUpdateProfile
    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            const body = {
                birth_date,
                // photo_profile,
                // photo_header,
                name,
                username,
                bio,
                jurusan_kuliah,
            };
            const response = await fetch(`http://localhost:5000/user/update/${user_id}`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                token: localStorage.token,
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                // Redirect to the chat room
                toast.success('Profile updated successfully!');
                setEditProfileModal(false);
                getUser();
                setBio('');
                setBirth_date('');
                setjurusan_kuliah('');
                setName('');
                setUsername('');
            } else {
                toast.error('Failed to update profile. Please try again.');
            }

        } catch (error) {
        console.error('Error updating profile:', error);
        toast.error('An error occurred. Please try again later.');
        }
    };


    return (
        <div>
        <div className="fixed sm:left-[20rem] bg-white  backdrop-blur-md bg-opacity-70 z-10 bg-blend-screen top-0 left-0 right-0 items-center justify-between text-black px-4 py-3 border-b  border-yellow">
            <div className="flex items-center">
            <div className="hover:cursor-pointer" onClick={handleGoBack}>
                <MdArrowBack className="text-xl text-black mr-4" />
            </div>
            <div className="ml-4">
                <div className="font-medium text-black">{user.username}</div>
            </div>
            </div>
        </div>
        <div className="profile-header sm:max-w-[1240px] sm:ml-[20rem] flex justify-center items-center flex-col pt-16 bg-yellow pb-5 rounded-b-2xl">
            <div className="profile-header-background items-center flex justify-center relative">
                <img src={header} alt="" className="h-30 rounded-2xl w-3/4 sm:w-2/3" />
                <div className="profile-header-picture absolute -bottom-2 left-1/2 transform -translate-x-1/2 -mb-10">
                    <img src={avatar} alt="" className="h-20 w-20 rounded-full p-1.5 bg-white" />
                </div>
            </div>
        </div>
        <div className="profile-header-name sm:max-w-[1240px] sm:ml-[20rem] flex justify-center mt-6 items-center flex-col">
            <h1 className="text-xl font-bold text-black">{user.username}</h1>
            <h1 className="text-xs font-bold text-gray-500">{user.name}</h1>
        </div>
        <div className="profile-header-bio sm:max-w-[1240px] sm:ml-[20rem] flex justify-center mt-2 pl-4 flex-col">
            <h1 className="text-sm font-bold text-black">{user.bio}</h1>
            <div className="flex justify-between">
                {/* Set in the left */}
                <div className="flex flex-col">
                    <div className="profile-header-bio-jurusan_kuliah flex p-1 items-center mt-4">
                    <AiFillPushpin className="text-gray-800" />
                    <h1 className="text-xs font-bold text-gray-500 ml-1">{user.jurusan_kuliah}</h1>
                    </div>
                    <div className="profile-header-bio-born flex p-1 items-center mt-2">
                    <FaBirthdayCake className="text-gray-800" />
                    <h1 className="text-xs font-bold text-gray-500 ml-1">{birth_date_constant}</h1>
                    </div>
                </div>
                {/* Set in the right */}
                <div className="flex flex-col justify-center items-center ml-auto mr-3">
                    <div 
                    className="profile-header-bio-jurusan_kuliah border-2 p-2 rounded-xl bg-yellow flex items-center mt-2 hover:cursor-pointer"
                    onClick={() => {
                        localStorage.setItem('interlocutor_id', user.user_id);
                        handleCreateRoomChat(user);
                    }}
                    >
                        <AiOutlineMessage className="text-black" />
                        <h1 
                            className="text-xs font-bold text-black ml-1"
                        >
                        Direct Message
                        </h1>
                    </div>
                    {user.user_id === localStorage.getItem('user_id') && (
                        <div 
                            className="profile-header-bio-born flex border-2 p-2 rounded-xl bg-yellow items-center  hover:cursor-pointer"
                            // onClick activate the edit profile modal
                            onClick={() => setEditProfileModal(true)}
                            >
                            <AiOutlineEdit className="text-black" />
                            <h1 className="text-xs font-bold text-black ml-1">Edit Profile</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="profile-header-divider sm:max-w-[1240px] sm:ml-[20rem] flex justify-center mt-4">
            <div className="w-full h-0.5 bg-gray-300"></div>
        </div>
        <div className="profile-header-button sticky bg-[#222831] pb-1 rounded-b-lg mb-0 top-12 pt-2 flex-col sm:max-w-[1240px] px-5 sm:ml-[20rem] flex justify-center ">
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
        <PostMessages link={link} inProfileRoute={true} />
        {/* Create for edit profile to update header image, photo profile, name, username, bio, jurusan_kuliah and birth_data */}
        { editProfileModal && (
            <div className="fixed top-0 left-0 backdrop-blur-sm w-full h-full bg-black bg-opacity-50 z-5 flex justify-center items-center sm:max-w-[1240px] sm:ml-[20rem]">
                <div className="bg-white w-5/6 rounded-lg h-3/4">
                    <div className="flex justify-between items-center px-5 py-3">
                        <h1 className="text-xl font-bold text-gray-800">Edit Profile</h1>
                        <AiOutlineClose
                            className="text-xl text-gray-800 hover:cursor-pointer"
                            onClick={() => setEditProfileModal(false)}
                        />
                    </div>
                    <div className="profile-header sm:max-w-[1200px] left-0 right-0 pt-2 w-full h-auto pb-5 rounded-b-2xl bg-yellow">
                        <div className="profile-header-background items-center flex justify-center relative">
                            <img src={header} alt="" className="h-30 rounded-2xl w-3/4 sm:w-1/3" />
                            <div className="profile-header-picture absolute -bottom-2 left-1/2 transform -translate-x-1/2 -mb-10">
                            <img src={avatar} alt="" className="h-20 w-20 rounded-full p-1.5 bg-white" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start ml-4 mt-5">
                        <div className="flex items-center justify-between w-full sm:justify-evenly">
                            <h1 className="text-lg font-bold text-gray-800 sm:w-40">Name</h1>
                            <input
                            type="text"
                            className="border-2 text-black border-gray-300 rounded-lg px-3 py-1 w-1/2 mr-3 sm:w-1/3 mt-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    <div className="flex items-center justify-between w-full sm:justify-evenly">
                        <h1 className="text-lg font-bold text-gray-800 mt-5 sm:w-40">Username</h1>
                        <input
                        type="text"
                        className="border-2 text-black border-gray-300 rounded-lg px-3 py-1 w-1/2 mr-3 sm:w-1/3 mt-2"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between w-full sm:justify-evenly">
                        <h1 className="text-lg font-bold text-gray-800 mt-5 sm:w-40">Bio</h1>
                        <textarea
                        type="text"
                        className="border-2 text-black border-gray-300 rounded-lg px-3 py-1 w-1/2 mr-3 sm:w-1/3 mt-2"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between w-full sm:justify-evenly">
                        <h1 className="text-lg font-bold text-gray-800 mt-5 sm:w-40">Major</h1>
                        <select
                        className="border-2 text-black text-sm border-gray-300 rounded-lg  py-1 w-1/2 mr-3 sm:w-1/3 mt-2"
                        value={jurusan_kuliah}
                        onChange={(e) => setjurusan_kuliah(e.target.value)}
                        >
                        <option value="">Select major</option>
                        <option value="TEKNIK KOMPUTER">TEKNIK KOMPUTER</option>
                        <option value="TEKNIK SIPIL">TEKNIK SIPIL</option>
                        <option value="TEKNIK PERKAPALAN">TEKNIK PERKAPALAN</option>
                        <option value="TEKNIK MESIN">TEKNIK MESIN</option>
                        <option value="ARSITEKTUR">ARSITEKTUR</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between w-full sm:justify-evenly">
                        <h1 className="text-lg font-bold text-gray-800 mt-5 sm:w-40">Birth Date</h1>
                        <input
                        type="date"
                        className="border-2 text-black border-gray-300 rounded-lg px-3 py-1 w-1/2 mr-3 sm:w-1/3 mt-2"
                        value={birth_date}
                        onChange={(e) => setBirth_date(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center w-full mt-5">
                        <button
                        className="bg-yellow rounded-lg px-5 py-1 hover:cursor-pointer"
                        onClick={handleUpdateProfile}
                        >
                        Update Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )}
        <div className='h-10 sm:h-0'></div>
        </div>
    );
};

export default HeaderProfile;
