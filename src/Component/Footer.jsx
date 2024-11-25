import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
const Footer = () => {
  return (
    <div className=" bg-[#2b364b] w-[100%] xl:h-[390px] h-auto mt-5 text-center flex justify-center items-center">
      <div
        className=" w-full  h-full p-5 sm:justify-around  text-white 
        sm:flex lg:flex flex-wrap text-center items-center   font-[Montserrat]
          "
      >
        <div className=" flex-col flex  justify-between items-center gap-4  ">
          <div>
            <img
              className=" sm:w-[150px] md:w-[150px]  w-[150px] xl:w-auto "
              src="/saddleLogo-DQlf5x-z.svg"
              alt=""
            />
          </div>
          <div className=" ">
            {" "}
            <p className=" opacity-45">SCAN. FIT. PERFORM.</p>
          </div>
        </div>
        <div>
          <div
            className="text-white  p-4 text-[20px] font-[Montserrat]
        font-[700]"
          >
            <h3>ABOUT</h3>
          </div>
          <div>
            <p className=" opacity-45">site map</p>
          </div>
        </div>
        <div>
          <div
            className="text-white p-4  text-[20px] font-[Montserrat]
         font-[700]"
          >
            <h3>COMPANY</h3>
          </div>{" "}
          <div>
            {" "}
            <p className=" opacity-45">Terms & Conditions</p>{" "}
            <p className=" opacity-35">Privacy Policy</p>
          </div>
        </div>
        <div>
          <ul className=" flex gap-5 p-4 text-[25px] items-center justify-center">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <TiSocialFacebook />
            </li>
            <li>
              <IoLogoTiktok />
            </li>
          </ul>{" "}
          <p className=" pt-2 opacity-45">
            SaddleFit 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
