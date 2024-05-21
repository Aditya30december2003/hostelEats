import React from 'react'
import {FaXTwitter} from 'react-icons/fa6'
import {LuGithub} from 'react-icons/lu'
import {FiLinkedin} from 'react-icons/fi'
import {BiLogoGmail} from 'react-icons/bi'

const Bottom = () => {
  return (
    <div className=' bg-purple-500  mx-auto w-full'>
    <h1 className='font-bold text-[1.7rem] w-full mx-auto text-center text-white pt-20'>Aditya Jain</h1>

    <div>
      <ul className='py-4 flex gap-2 w-full md:w-1/3  md:mx-auto'>

        
        <li className=' cursor-pointer bg-gray-500 p-3 rounded-[100%] mx-auto'>
        <a target="_blank" href="https://www.linkedin.com/in/aditya-jain-065484226/"> <FiLinkedin color='white' size={20}/></a>
        </li>
        
        
        
        <li className=' cursor-pointer bg-gray-500 p-3 rounded-[100%] mx-auto'>
        <a target="_blank" href="https://twitter.com/AdityaJ47361990">  <FaXTwitter color='white' size={20}/></a>
        </li>
        

       
        <li className=' cursor-pointer bg-gray-500 p-3 rounded-[100%] mx-auto'>
        <a target="_blank" href="https://github.com/Aditya30december2003"><LuGithub color='white' size={20}/>  </a>
        </li>
       

        
        <li className=' cursor-pointer bg-gray-500 p-3 rounded-[100%] mx-auto'>
        <a target="_blank" href="mailto:adityasmjain@gmail.com"> <BiLogoGmail color='white' size={20}/> </a>
        </li>
       

      </ul>
    </div>

    <hr  className='w-10/12 lg:w-1/4 mx-auto my-4'/>

    <div className='text-white font-bold text-center pb-5'>
    <p>&#169; Copyright 2023 Aditya Jain</p>
    </div>
   
   </div>
  )
}

export default Bottom

