import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { account } from '../Appwrite/appwrite';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const SignUpNow = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    password: '',
    email: '',
  });

  const signupUser = async (e) => {
    e.preventDefault();
    try {
      // Create user
      const response = await account.create(
        uuidv4(),
        user.email,
        user.password,
        user.name
      );

      // Log in user to create a session
      await account.createEmailSession(user.email, user.password);

      console.log(response);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='w-full h-screen relative'>
        <div className='h-screen w-full absolute bg-black/60'>
          {/* header */}
          <div className='flex items-center justify-between'>
            <div className='text-[2.3rem] md:text-[3rem] font-bold text-white '>
              hostel<span className='text-purple-500'>Eats</span>
            </div>
          </div>

          {/* signup-card */}
          <div className='bg-purple-500/70 w-11/12 md:w-2/3 lg:w-1/3 mx-auto md:mt-7 mt-20 p-5'>
            <h1 className='text-[2rem] text-white font-bold'>Sign Up</h1>
            <div className='flex flex-col gap-5 my-5'>
              <input
                onChange={(e) => {
                  setUser({
                    ...user,
                    name: e.target.value,
                  });
                }}
                type='text'
                placeholder='Name'
                className='px-2 py-3 rounded-md outline-none bg-white text-black font-bold'
              />
              <input
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
                type='text'
                placeholder='Email'
                className='px-2 py-3 rounded-md outline-none bg-white text-black font-bold'
              />
              <input
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: e.target.value,
                  });
                }}
                type='password'
                placeholder='Password'
                className='px-2 py-3 rounded-md outline-none bg-white text-black font-bold'
              />
            </div>
            <button
              onClick={signupUser}
              className='w-full mt-7 rounded-md bg-purple-800 border-none text-white font-bold'
            >
              Sign Up
            </button>
            <p className='mt-2 text-white/60 font-bold '>
              Already Signed Up?
              <NavLink to='/' className='font-bold text-white cursor-pointer'>
                {' '}
                Sign in
              </NavLink>
            </p>
          </div>
        </div>
        <img
          className='w-full h-full object-cover'
          src='https://images.pexels.com/photos/9738992/pexels-photo-9738992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
        />
      </div>
    </div>
  );
};

export default SignUpNow;

