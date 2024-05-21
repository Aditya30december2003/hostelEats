import React,{useState , useContext} from 'react'
import {chinese} from '../Data/chinese'
import {BiCartAdd} from 'react-icons/bi'

import { ShopContext } from '../context/shop-context'

const Chinese = () => {
    const [chineses , setChinese ] = useState(chinese);
    const { addToCart , cartItems } = useContext(ShopContext);

    const filterPrice=(price)=>{
        setChinese(
          chinese.filter((item)=>{
            return item.price===price;
          })
        )
      }
  return (
    <>
    <div className='max-w-[1180px] mx-auto mb-20'>
        {/* header */}
       <div className='text-[3rem] font-bold mx-3'>
       <h1>Chinese</h1>
       </div>
       
       {/* Filter Row */}
      <div className='flex flex-col lg:flex-row lg:justify-between py-10'>
         {/* filter price */}
         <div>
            <p className='font-bold'>Filter Type</p>
            <div className='py-2 flex flex-row lg:justify-evenly flex-wrap'>
            <button onClick={()=> filterPrice('$')} className='rounded-[0.4rem] border-purple-500 text-purple-500 mx-1 w-[4.7rem] font-bold my-2 hover:text-white hover:bg-purple-500'>₹</button>
            <button onClick={()=> filterPrice('$$')} className='rounded-[0.4rem] border-purple-500 text-purple-500 mx-1 w-[4.7rem] font-bold my-2 hover:text-white hover:bg-purple-500'>₹₹</button>
            <button onClick={()=> filterPrice('$$$')} className='rounded-[0.4rem] border-purple-500 text-purple-500 mx-1 w-[4.7rem] font-bold my-2 hover:text-white hover:bg-purple-500'>₹₹₹</button>
            <button onClick={()=> filterPrice('$$$$')} className='rounded-[0.4rem] border-purple-500 text-purple-500 mx-1 w-[4.7rem] font-bold my-2 hover:text-white hover:bg-purple-500'>₹₹₹₹</button>
            </div>
         </div>


      </div>

       <div className='max-w-[1180px] mx-auto'>
       <div className='grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-6 pt-6 cursor-pointer'>
         {chineses.map((item,index)=>(
          <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-t-lg'>
            <img src={item.image} alt={item.name} className='w-full h-[12rem] object-cover  rounded-t-lg' />
            <div className='flex justify-between py-3'>
              <p className='font-bold mx-2'>{item.name}</p>
              <p className='bg-purple-500 px-5 py-1 mr-2 rounded-md text-white'>
               <span className=''><BiCartAdd onClick={()=> addToCart(item.id)} size={25} /></span>
             </p>
            </div>
          </div>
         ))}
       </div>
       </div>
    </div>
    </>
  )
}

export default Chinese