import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
import { PiHamburgerBold } from "react-icons/pi";

const Categories = [
    {
        id: 1,
        name: "All",
        icon: <TiThSmallOutline className='w-[60px] h-[60px] text-green-500' />
    },
    {
        id: 2,
        name: "Breakfast",
        icon: <MdOutlineFreeBreakfast className='w-[60px] h-[60px] text-green-500' />
    },
    {
        id: 3,
        name: "Soups",
        icon: <TbSoup className='w-[60px] h-[60px] text-green-500' />
    },
    {
        id: 4,
        name: "Main Course",
        icon: <MdOutlineFoodBank className='w-[60px] h-[60px] text-green-500' />
    },
    {
        id: 5,
        name: "Pasta",
        icon: <CiBowlNoodles className='w-[60px] h-[60px] text-green-500' />
    },
    {
        id: 6,
        name: "Pizza",
        icon: <FaPizzaSlice className='w-[60px] h-[60px] text-green-500' />
    },
   
    {
        id: 8,
        name: "Burger", 
        icon: <PiHamburgerBold className='w-[60px] h-[60px] text-green-500' />
    }
]

export default Categories;