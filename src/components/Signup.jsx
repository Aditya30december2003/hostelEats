import React , {useState} from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import {account} from '../Appwrite/appwrite'
const Signup = () => {
  const navigate = useNavigate()
  const [user , setUser] = useState({
    email:"",
    password:""
  })

  const loginUser = async(e) =>{
    e.preventDefault()

    try{
    await  account.createEmailSession(user.email , user.password)
    navigate("/home")
    }
    catch(error){
      console.log(error)
    }
  }

    

  return (
    <div>

    <div className='w-full h-screen relative'>
        <div className='h-screen w-full absolute bg-black/60'>
            {/* header */}
            <div className='flex items-center justify-between'>
            <div className='text-[2.3rem] md:text-[3rem] font-bold text-white '>
                hostel<span className='text-purple-500'>Eats</span>
            </div>
            <NavLink to='/' className='hidden md:text-white md:text-[1.3rem] md:mr-[6rem]'>Home</NavLink>
            </div>

            {/* signup-card */}
            <div className='bg-purple-500/70 w-11/12 md:w-2/3 lg:w-1/3 mx-auto md:mt-7 mt-20 p-5'>
                <h1 className='text-[2rem] text-white font-bold'>Sign In</h1>
                <div className='flex flex-col gap-5 my-5'>
                <input onChange={(e)=>{
                  setUser({
                    ...user,
                    email:e.target.value
                  })
                }} type="text" placeholder='Email'  className='px-2 py-3 rounded-md outline-none bg-white text-black font-bold' />
                <input onChange={(e)=>{
                  setUser({
                    ...user,
                    password:e.target.value
                  })
                }} type="password" placeholder='Password' className='px-2 py-3 rounded-md outline-none bg-white text-black font-bold' />
                </div>
                 <button onClick={loginUser} className='w-full mt-7 rounded-md bg-purple-800 border-none text-white font-bold'>Sign in</button>

                 <p className='mt-5 text-white/80 mb-10'>New to hostelEats? <NavLink to='/signupNow'>Sign up now</NavLink></p>
            </div>

        </div>
        <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/9738992/pexels-photo-9738992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    </div>

    </div>
  )
}

export default Signup
