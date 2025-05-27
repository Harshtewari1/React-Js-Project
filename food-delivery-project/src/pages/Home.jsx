import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Cards from '../components/Cards'
import food_items from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Cart from '../components/Cart'


const Home = () => {
    const {cate,setcate,input,showcart, setshowcart} = useContext(dataContext)
    
    function filter(category) {
        if (category === "All") {
            setcate(food_items);
        } else {
            let newList = food_items.filter((items) => (items.category === category));
            setcate(newList)
        }
    }

    return (
        <div className='bg-slate-200 w-full min-h-screen'>
            <Nav />
            {!input ? <div className='flex justify-center items-center gap-5 w-[100%]'>
                {Categories.map((items) => {
                    return <div onClick={() => { filter(items.name) }} className='w-[140px] h-[150px] bg-white flex flex-col items-center gap-5 p-5 cursor-pointer text-[16px] font-bold text-gray-600 rounded-lg shadow-lg hover:bg-green-200 transition-all duration-200'>
                        <div>{items.icon}</div>
                        <div>{items.name}</div>
                    </div>
                })}
            </div>:null}
           
            <div className='w-full flex flex-wrap gap-[20px] px-5 pt-8 justify-center items-center pb-8'>
                {cate.map((items) => {
                    return <Cards name={items.food_name} image={items.image} category={items.category} price={items.price} type={items.type} /> 
                })}
            </div>

            <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all ${showcart?"translate-x-0":"translate-x-full"}`}  >
                <header className='w-[100%] flex justify-between  items-center ' >
                    <span className='text-green-400 text-[18px] font-semibold'>Order Items</span>
                    <RxCross2 className='text-green-400 text-[18px] font-semibold w-[30px] h-[30px] cursor-pointer' onClick={()=>{setshowcart(false)}} />
                </header>
                <Cart /> 
            </div>
            

        </div>
    )
}

export default Home