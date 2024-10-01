import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import AddSaddle from './AddSaddle/AddSaddle';
import { Link } from 'react-router-dom';
const Header = () => {
  return (

    
 
 <div className='flex bg-[#2b364b] w-full h-[95px] justify-center items-center   flex-wrap  relative z-10'>
    <div className=' flex gap-4  w-full items-center justify-between px-[150px]'>
        <img src="/saddleLogo-DQlf5x-z.svg" alt="" />
        
    
   
        <div className='  hidden lg:flex justify-between '>
            <ul className=' flex justify-center gap-10  items-center font-semibold text-white flex-wrap'>
            <li className=''>My Horse</li>
            <li> <Link to={'/addsaddle'}>My Saddle</Link> </li>
            <li> Bay a Saddle</li>
            <li> Shedule Now</li>
            <li className=' text-[23px]'><FiShoppingCart/></li>
            <li className=' text-[23px]'><FaRegHeart/></li>
            <button className=' border-solid border-2 border-white rounded-[20px] w-[90px] h-[40px]'> Sing Out</button>
            </ul>
        
       
    </div>
</div>
       
</div> 
   
  )
}

export default Header
