import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-[#2b364b] w-[100%] h-[390px] '>
     
        <div className=' w-auto  h-full  justify-around text-white  flex text-center
         items-center   font-[Montserrat]
          '>
          <div className=" flex-col items-center gap-4  ">
            <div >
          
            <img
              className=" sm:w-[150px] md:w-[150px]  w-[150px] xl:w-auto "
              src="/saddleLogo-DQlf5x-z.svg"
              alt=""
            /></div>
         <div> <p>SCAN. FIT. PERFORM.</p></div>
          </div>
        <div ><div className='text-white   text-[20px] font-[Montserrat]
        font-[700]'><h3>About</h3></div>
         <div>site map</div></div>
        <div ><div className='text-white   text-[20px] font-[Montserrat]
         font-[700]'><h3>Company</h3></div> <div> <p>Tearm & Conditions</p> <p>
          Privacy Police</p></div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer
