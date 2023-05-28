import { useNavigate } from 'react-router-dom'
import React from 'react'
import background from '../assets/bg-ui.png'

const Login = () => {
    const navigate = useNavigate()

  return (
    <div>
        {/* Add background image for login page, set in background of login form */}
        <img className='fixed top-0 left-0 w-full h-screen object-cover -z-30' src={background} alt='background' />

        {/* Add messages "Welcome to Lost and Found" in Title and subtitle of "find your lost item!*/}
        <div className='flex flex-col justify-center items-center pt-[1rem]'>
            <h1 className='text-3xl md:text-5xl justify-center text-center font-bold text-black mb-1'>Welcome to <br></br>Lost and Found</h1>
            <h2 className='text-md font-medium mb-5 text-black'>Find your lost item!</h2>
        </div>

        {/* Add login form */}
        <div className='flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center bg-white rounded-xl shadow-xl p-10'>
                <h1 className='text-4xl font-bold mb-5 text-black'>Login</h1>
                <form className='flex flex-col justify-center items-center'>
                    <input className='p-2 mb-5 rounded-md border-b border-b-black text-black' type='text' placeholder='Username' />
                    <input className='p-2 mb-5 rounded-md border-b border-b-black text-black' type='password' placeholder='Password' />
                    <button className='p-2 rounded-xl hover:bg-black hover:text-white bg-yellow text-black' onClick={() => navigate('/')}>Login</button>
                </form>

                <div className='flex justify-center items-center mt-5'>
                    <p className='mr-2 text-black'>Forget Password?</p>
                    <a className='text-blue-500 underline' href='/'>Click Here</a>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='mr-2 text-black'>Don't have an account?</p>
                    <a className='text-blue-500 underline' onClick={() => navigate('/register')}>Register</a>
                </div>
            </div>
        </div>

        {/* Divider and give option of continue with google or SSO */}
        <div className='flex justify-center items-center mt-5'>
            <div className='flex justify-center items-center'>
                <div className='w-1/3 h-1 bg-black'></div>
                <p className='mx-2 text-black'>or</p>
                <div className='w-1/3 h-1 divide-y bg-black'></div>
            </div>
        </div>
        {/* Button google and SSO as a column */}
        <div className='flex justify-center items-center mt-5'>
            <div className='flex flex-col justify-center items-center'>
                <button className='px-10 w-15 rounded-xl hover:bg-black hover:text-white bg-yellow text-black mb-4'>Continue with Google</button>
                <button className='px-10 w-15 rounded-xl hover:bg-black hover:text-white bg-yellow text-black'>Continue with SSO</button>
            </div>
        </div>
    </div>
  )
}

export default Login