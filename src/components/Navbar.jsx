import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHamburger, FaShoppingCart , FaSearch } from 'react-icons/fa';
import { MdOutlineShoppingCart, MdDeliveryDining } from 'react-icons/md';
import { IoFastFood } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiHome5Fill } from 'react-icons/ri';
import { MdHelp } from 'react-icons/md';
import { AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillSaveFill } from 'react-icons/bs';
import { FaWallet } from 'react-icons/fa';
import { account } from '../Appwrite/appwrite';

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const LogOut = () => {
    let logout = document.querySelector('.logout');
    if (logout.classList.contains('account-active')) {
      logout.classList.remove('account-active');
    } else {
      logout.classList.add('account-active');
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[1640px] nav flex justify-between items-center h-full px-[1rem] md:px-[2rem] py-[0.3rem] mx-auto">
      <div className="left-side flex space-x-4 items-center text-center">
        <div className="cursor-pointer right-30" onClick={() => setNav(!nav)}>
          <FaHamburger size={30} />
        </div>
        <NavLink to="/home">
          <h1 className="text-2xl sm:text-2xl lg:text-4xl text-white bg-black p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            hostel<span className="font-bold text-purple-500">Eats</span>
          </h1>
        </NavLink>
        <div className="radio space-x-3 hidden lg:flex items-center bg-gray-300 rounded-full p-1">
          <p className="cursor-pointer text-white bg-purple-500 rounded-full p-2">
            <MdDeliveryDining size={30} />
          </p>
          <p className="cursor-pointer p-2 text-white">
            <IoFastFood size={30} />
          </p>
        </div>
      </div>

      <div className="middle flex items-center border-2 border-purple-500 rounded-full p-2 w-[35rem] mx-auto ml-3">
        <input
          type="text"
          className="mx-2 w-full outline-none placeholder:text-purple-500/40 placeholder:font-bold"
          placeholder="Search food"
        />
        <FaSearch size={20} className="cursor-pointer mx-1 text-purple-500" />
      </div>

      <div className="right mr-[1rem] hidden md:flex md:gap-5">
        <button className="">
          <NavLink to="/Cart">
            <MdOutlineShoppingCart size={25} />
          </NavLink>
        </button>
        <button  onClick={handleLogout} className="flex place-items-center w-24 hover:bg-black hover:text-white">
          <div
            className="mx-auto text-center"
          >
            Log out
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {nav ? <div className="bg-black/80 z-10 fixed w-full h-screen top-0 left-0"></div> : ''}

      {/* slide drawer menu */}
      <div className={nav ? "fixed top-0 left-0 w-[13rem] h-screen bg-white z-10 duration-500" : "fixed top-0 left-[-100%] w-[13rem] h-screen bg-white z-10 duration-300"}>
        <AiOutlineClose size={20} className="cursor-pointer absolute right-2 top-3" onClick={() => setNav(!nav)} />

        <h2 className="mt-2 ml-2 text-2xl">
          <span className="font-bold text-white bg-black p-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            hostel
          </span>
          <span className="font-bold text-purple-500 bg-black p-1 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">Eats</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-5 space-y-3">
            <li className="flex items-center text-xl cursor-pointer"><TbTruckDelivery className="mr-4" size={25} /> Orders</li>
            <NavLink to="/" className="flex items-center text-xl cursor-pointer"><RiHome5Fill className="mr-4" size={25} /> Home</NavLink>
            <li onClick={handleLogout} className="flex items-center text-xl cursor-pointer">Logout</li>
            <NavLink to="/Cart" className="flex items-center text-xl cursor-pointer"><FaShoppingCart className="mr-4" size={25} /> Cart</NavLink>
            <li className="flex items-center text-xl cursor-pointer"><FaWallet className="mr-4" size={20} /> Wallet</li>
            <li className="flex items-center text-xl cursor-pointer"><MdHelp className="mr-4" size={20} /> Help</li>
            <li className="flex items-center text-xl cursor-pointer"><AiFillTag className="mr-4" size={20} /> Promotions</li>
            <li className="flex items-center text-xl cursor-pointer"><BsFillSaveFill className="mr-4" size={20} /> Best One</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

