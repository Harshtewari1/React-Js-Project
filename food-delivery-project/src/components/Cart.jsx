import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
    return (
        <div className='w-full h-[120px]  p-2 shadow-lg rounded flex justify-between '>
            <div className='w-[60%] h-full  flex gap-[20px]'>
                <div className='w-[50%] h-full overflow-hidden rounded-lg '>
                    <img src="https://imgs.search.brave.com/gMtLd0KsdPiVSiF7CgxZwRCHl0gC97cLhz7r28TxGkc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saWxs/dW5hLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8xMS93/aGl0ZS1zYXVjZS1w/YXN0YS1yZXNpemUt/NS5qcGc" alt="" srcset="" className='object-cover '/>
                </div>
                <div className='w-[40%] h-full flex flex-col gap-4'>
                    <div className='text-lg text-gray-600 font-semibold '>White Sauce Pasta</div>
                    <div className='w-[110px] h-[40px] bg-slate-950 flex rounded-lg overflow-hidden shadow-lg font-semibold border-green-400 border-2 text-xl'>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center cursor-pointer text-green-400 hover:bg-gray-300'>-</button>
                        <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center'>1</span>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center cursor-pointer text-green-400 hover:bg-gray-300'>+</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-start items-end gap-2 pr-3'>
                <span className='text-xl text-green-400 font-semibold'>Rs. 99</span>
                <RiDeleteBin6Line className='w-[30px] h-[25px] text-red-500' />
            </div>
        </div>
    )
}

export default Cart