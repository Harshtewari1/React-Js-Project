import React, { useContext, useEffect} from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import food_items from '../food';

const Nav = () => {
    const { input, setinput, cate, setcate, showcart, setshowcart } = useContext(dataContext)
    useEffect(() => {
        const newlist = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input) );
        setcate(newlist)
    },[input])
    
  return (
      <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
          <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
              <MdFastfood className='w-[30px] h-[30px] text-green-500' />
          </div>
          <form className='w-[45%] md:w-[70%] h-[60px] bg-white flex items-center p-5 gap-5 rounded shadow-md' onSubmit={(e)=>e.preventDefault()}>
              <IoSearch className='text-green-500 w-[20px] h-[20px] '/>
              <input type='text' placeholder='Search items ...... ' className='w-[100%] outline-none text-[16px] md:text-[20px]' onChange={(e)=>setinput(e.target.value)} value={input} />
          </form>
          <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>{
            setshowcart(true)
          }}>
              <span className='absolute top-0 right-3 text-green-500 font-semibold text-[18px]'>0</span>
              <LuShoppingBag className='w-[30px] h-[30px] text-green-500' />
          </div>
      </div>
  )
}

export default Nav