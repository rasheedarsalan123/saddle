import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import AddSaddle from './AddSaddle/AddSaddle';
import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from 'react-router-dom';
const Header = () => {
  const [sidebar,setSidebar]=useState(false)
  return (

    
 
 <div className='flex bg-[#2b364b] w-full   h-[95px] justify-center items-center 
   flex-wrap  relative z-10'>
    <div className='  flex max-w-[1300px] sm:max-w-[1300px] items-center justify-center
      md:flex gap-10 md:w-full md:items-center
     md:justify-between sm:px-[150px]'>
     <Link to={"/home"}>  
      <img className=' w-[150px] md:w-auto' src="/saddleLogo-DQlf5x-z.svg" alt=""  /> </Link>
        
    
   
        <div className=' flex  justify-between lg:flex lg:justify-between '>
            <ul className=' flex gap-5 lg:flex cursor-pointer font-[Montserrat] 
             justify-center md:gap-6  items-center font-semibold text-white flex-wrap'>
            <li className='hidden lg:block'>My Saddle</li>
            <li className='hidden lg:block'> <Link to={'/addsaddle'}>My  Horse </Link> </li>
            <li className='hidden lg:block'> Buy a Saddle</li>
            <li className='hidden lg:block'> Schedule Now</li>
            <li className=' text-[23px]'><FiShoppingCart/></li>
            <li className=' text-[23px]'><FaRegHeart/></li>
            <button className='hidden lg:block border-solid border-2 border-white rounded-[20px] w-[90px] h-[40px]'
            > Sign Out</button>
                     <li className='lg:hidden text-white text-[23px] flex ' onClick={()=>setSidebar(true)}> <RxHamburgerMenu/> </li>

            </ul>
            
           
    </div>
   
    
</div>
{ sidebar && <>
            <div className=' flex fixed   bg-[#2b364b] w-full h-full'> </div>
            <div className=' flex justify-center items-center absolute top-48 '>
              <div className=' flex fixed   flex-col justify-center items-center text-white'>
                <ul className=' flex gap-10 flex-col text-center'>
              <li className=''>My Saddle</li>
            <li className=''> <Link to={'/addsaddle'}>My Horse </Link> </li>
            <li className=''> Buy a Saddle</li>
            <li className=''> Schedule Now</li>
            <button className=' border-solid border-2 border-white rounded-[20px] w-[90px] h-[40px]'
            > Sign Out</button></ul>
</div> </div> </>  }
</div> 
   
  )
}

export default Header
