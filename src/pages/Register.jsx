import React from 'react'
import background from '../assets/bg-ui.png'
import {ImCheckboxChecked} from 'react-icons/im'
import {FaEyeSlash, FaEye} from 'react-icons/fa'

const Register = () => {
  return (
    // Add background image for register page, set in background of register form
    <div>
        {/* Add background image for login page, set in background of login form */}
        <img className='fixed top-0 left-0 w-full h-screen object-cover -z-30' src={background} alt='background' />

        {/* Add messages "Let's get to know you!" in Title and subtitle of "complete your profile!*/}
        <div className='flex flex-col justify-start items-start pl-6 pt-6'>
            <h1 className='text-3xl md:text-5xl justify-start text-center font-bold text-black mb-1'>Let's get to know you!</h1>
            <h2 className='text-md font-medium mb-5 text-black'>complete your profile!</h2>
        </div>

        {/* Add register form with checked icon black if filled and white if not filled yet*/}
        <div className='flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center bg-white rounded-xl shadow-xl p-10'>
                <h1 className='text-4xl font-bold mb-5 text-black'>Register</h1>
                <form className='flex flex-col justify-center items-center'>
                    <input className='p-2 mb-5 rounded-md border-b border-b-black text-black' type='text' placeholder='Username' />
                    {/* When icon eyes clicked, could see the password */}
                    <input className='p-2 mb-5 rounded-md border-b border-b-black text-black' type='password' placeholder='Password' />
                    <input className='p-2 mb-5 rounded-md border-b border-b-black text-black' type='password' placeholder='Confirm Password' />
                    <input className='p-2 mb-5 rounded-md border-b border-b-black text-black' type='text' placeholder='Full Name' />
                    <input className='p-2 mb-5 rounded-md border-b border-b-black text-black' type='text' placeholder='Date of Birth' />
                    <input className='p-2 mb-5 rounded-md border-b border-b-black text-black' type='text' placeholder='Major' />
                </form>
                <div className='flex justify-center items-center'>
                    <button className='p-2 rounded-md bg-yellow text-black font-semibold hover:bg-black hover:text-white'>Register</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Register