
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";


const Cards = (props) => {


    return (

        < div div className='w-[280px] h-[400px] bg-white p-3 rounded-2xl flex flex-col gap-3 hover:border-2 border-green-200' >
            <div className='w-[100%] h-[60%] overflow-hidden'>
                <img className='object-cover rounded-2xl' src={props.image} />
            </div>
            <div className='text-2xl font-semibold'>
                {props.name}
            </div>
            <div className='flex w-full justify-between items-center'>
                <div className='text-lg font-bold text-green-500'>Rs. {props.price}</div>
                <div  className='flex justify-center items-center gap-2 text-green-500 text-lg font-bold'>{(props.type) === "Veg" ? <LuLeafyGreen /> : <GiChickenOven  /> }<span>{props.type}</span></div>
            </div>
            <button className='w-full p-4 bg-green-300 cursor-pointer rounded-2xl text-gray-700 hover:bg-green-400 transition-all' >Add to Cart</button>
        </ div>
    )
    
}

export default Cards