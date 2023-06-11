import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import header from '../../assets/header.jpg';
import avatar from '../../assets/ava.jpg';
import { AiFillPushpin, AiOutlineEdit, AiOutlineMessage } from 'react-icons/ai';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProfile = () => {
  return (
    <div>
        {/* Create for edit profile to update header image, photo profile, name, username, bio, major and birth_data */}
        <div className='m-5 bg-grey'>

        </div>
    </div>
  )
}

export default EditProfile