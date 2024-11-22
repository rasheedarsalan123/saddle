import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import AddSaddle from "./AddSaddle/AddSaddle";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClear } from "react-icons/md";
import Partner from "./Partner/Partner";
import { Link } from "react-router-dom";
const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className=" w-full  bg-[#2b364b]   h-[95px] pt-8 md:pt-6 lg:pt-6">
      <div
        className="flex 
           px-[22px] sm:px-2  xl:px-11  2xl:px-0 xl:max-w-[1300px] w-[95%]  items-center
            mx-auto justify-between
    relative z-10 "
      >
        <div className=" flex items-center   " onClick={() => setSidebar(false)} >
          <Link to={"/"}>
            <img
              className=" sm:w-[150px] md:w-[150px]  w-[150px] xl:w-auto "
              src="/saddleLogo-DQlf5x-z.svg"
              alt=""
            />{" "}
          </Link>
          
        </div>
        <div className=" flex pl-[40px] ">
          <ul
            className=" flex  lg:gap-8 gap-2  w-full  lg:flex cursor-pointer 
              font-[Montserrat] 
             items-center font-semibold text-white flex-wrap "
          >
            <li className="hidden lg:block text-[12px] xl:text-[14px] font-[500]">
              <Link to={"/mysaddle"}>My Saddle</Link>
            </li>
            <li className="hidden lg:block text-[14px] font-[500]">
              {" "}
              <Link to={"/horses"}>My Horse</Link>{" "}
            </li>
            <li className="hidden lg:block text-[14px] font-[500]">
              <Link to={"/buysaddle"}> Buy a Saddle</Link>
            </li>
            <li className="hidden lg:block text-[14px] font-[500]">
              {" "}
              <Link to={"/partner"}> Partner </Link>
            </li>
            {/* <li className=" text-[23px]">
                <FiShoppingCart />
              </li>
              <li className=" text-[23px]">
                <FaRegHeart />
              </li> */}
            <li>
              <button
                className="hidden lg:block border-solid border-2 text-[14px] font-[500] border-white rounded-[20px]
               w-[90px] h-[40px]"
              >
                {" "}
                Sign Out
              </button>{" "}
            </li>
            <li
              className="lg:hidden text-white text-[23px] flex "
              onClick={() => setSidebar(!sidebar)}
            >
              <RxHamburgerMenu />{" "}
            </li>
          </ul>
        </div>
      </div>
      </div>
      {sidebar && (
        <>
          <div
            className="flex absolute top-[90px] left-0 lg:hidden z-10  bg-[#2b364b]
           w-full min-h-[480px]"
          ></div>
          <div className="relative z-20 top-5 left-0">
            <ul
              className=" flex gap-3 flex-col text-[16px] text-center items-center justify-center"
              onClick={() => setSidebar(false)}
            >
              <li className="text-white">
                <Link to={"/mysaddle"}>My Saddle</Link>
              </li>
              <li className="lg:hidden">
                {" "}
                <img src="/download.png" alt="" />
              </li>
              <li className="text-white">
                <Link to={"/horses"}>My Horse </Link>{" "}
              </li>
              <li className="lg:hidden">
                {" "}
                <img src="/download.png" alt="" />
              </li>
              <li className="text-white">
                {" "}
                <Link to={"/buysaddle"}> Buy a Saddle</Link>
              </li>
              <li className="lg:hidden">
                {" "}
                <img src="/download.png" alt="" />
              </li>
              <li className="text-white">
                {" "}
                <Link to={"/partner"}> Partner </Link>
              </li>
              <li className="lg:hidden">
                {" "}
                <img src="/download.png" alt="" />
              </li>
              <button className="mx-auto text-white border-solid border-2 border-white rounded-[20px] w-[90px] h-[40px]">
                {" "}
                Sign Out
              </button>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
