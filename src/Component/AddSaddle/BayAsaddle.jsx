import React from "react";
import VectorIcon from "../../assets/icons/vector.svg?react";
import { RiArrowDropDownLine } from "react-icons/ri";
const BayAsaddle = () => {
  return (
    <>
      <div className=" w-full h-full  relative md:flex  md:items-center md:justify-center 
       pt-8 md:pt-6 lg:pt-6  ">
        <div className=" flex flex-wrap   items-center 
         h-auto  mx-auto   px-[22px] sm:px-2  xl:px-11  justify-between 
          2xl:px-0 xl:max-w-[1300px] w-[95%]">
        <div
          className=" flex  w-auto items-center   
       flex-wrap sm:flex    h-auto  justify-between "
        >
          <div className="   ">
            <div>
              <img src="/star_img--Q7na--3.svg" alt="" />{" "}
            </div>
            <div
              className=" flex flex-col w-auto
          "
            >
              <h1 className=" text-[48px] sm:text-[54px] text-[#2b364b] add-horse font-[700]
                md:text-[64px] leading-[100%]">
                FIND YOUR BEST
              </h1>{" "}
              <h1 className=" text-[48px] sm:text-[54px] text-[#2b364b] add-horse font-[700]  md:text-[64px] leading-[100%]">
                FITTING SADDLE
              </h1>{" "}
            </div>
            <div className=" w-[330px] sm:w-[410px]  md:gap-10 pt-5 font-[Montserrat]">
              <h3>
                SaddleFit uses advanced 3D technology to find the best fitting
                saddle based on your horse’s unique shape for a perfect fit,
                enhancing comfort and performance.
              </h3>{" "}
            </div>
          </div>
         
        </div>
        <div className=" md:flex pt-5   items-center justify-start xl:px-0 sm:mt-0 
         flex-wrap flex flex-col lg:justify-center gap-5 ">
          <div className=" flex flex-wrap gap-4  ">
          <div
            
            className=" relative"
          >
            <label
              htmlFor="Birth Date"
              className=" absolute top-[10px] right-[128px]
                 translate-y-[-50%] pr-[12px] pl-[12px] 
                  text-[14px] font-[Montserrat] bg-white text-[#2b364b] leading-[14px]  "
            >
              Filter By Horse
            </label>
            <div>
              <select
                className="w-[260px] mt-2 p-2 text-[14px] text-[#2b364b] rounded-[60px]
                 leading-[14px]  h-[60px] font-[Montserrat]  border border-[#2b364b]"
                name="horse"
                // onChange={handlerInputvalue}
                // value={changeText && inputVal.horse}
              >
                <option disabled selected value="">
                  Select Horse
                </option>

                {/* <option value="Horse1">Horse1</option>
                      <option value="Horse2">Horse2</option>
                      <option value="Horse3">Horse3</option>
                      <option value="Horse4">Horse4</option> */}
              </select>
            </div>
          </div>
          <div
            // onClick={() => {
            //   setOpenDatePicker(!openDatePicker);
            // }}
            className=" relative"
          >
            <label
              htmlFor="Birth Date"
              className=" absolute top-[10px] right-34
                 translate-y-[-50%] pr-[12px] pl-[12px] 
                  text-[14px] font-[Montserrat] bg-white text-[#2b364b] leading-[14px]  "
            >
              Filter By Discipline
            </label>
            <div>
              <select
                className="w-[260px] mt-2 p-2 text-[14px] text-[#2b364b] rounded-[60px]
                 leading-[14px]  h-[60px] font-[Montserrat]  border border-[#2b364b]"
                name="horse"
                // onChange={handlerInputvalue}
                // value={changeText && inputVal.horse}
              >
                <option disabled selected value="">
                  Select Discipline
                </option>

                {/* <option value="Horse1">Horse1</option>
                      <option value="Horse2">Horse2</option>
                      <option value="Horse3">Horse3</option>
                      <option value="Horse4">Horse4</option> */}
              </select>
            </div>
          </div>
          <div
            // onClick={() => {
            //   setOpenDatePicker(!openDatePicker);
            // }}
            className=" relative"
          >
            <label
              htmlFor="Birth Date"
              className=" absolute top-[10px] right-[128px]
                 translate-y-[-50%] pr-[12px] pl-[12px] 
                  text-[14px] font-[Montserrat] bg-white text-[#2b364b] leading-[14px]  "
            >
              Filter By Brand
            </label>

            <div>
              <select
                className="w-[260px] mt-2 p-2 text-[14px] text-[#2b364b] rounded-[60px]
                 leading-[14px]  h-[60px] font-[Montserrat]  border border-[#2b364b]"
                name="horse"
                // onChange={handlerInputvalue}
                // value={changeText && inputVal.horse}
              >
                <option disabled selected value="">
                  Select Brand
                </option>

                {/* <option value="Horse1">Horse1</option>
                      <option value="Horse2">Horse2</option>
                      <option value="Horse3">Horse3</option>
                      <option value="Horse4">Horse4</option> */}
              </select>
            </div>
          </div>
          </div>
          <div className=" flex   
          font-[Montserrat] justify-center items-center  ">
          
          <span className="pr-2" ><VectorIcon /></span>  
          
          <h3 className=" p ">
            Saddle with this icon are the top fitting saddles for your horse!
          </h3>
        </div>
        </div>
       
      </div> </div>
      <div className=" flex  text-center justify-center items-center mt-4 px-20 sm:px-0 
        font-[Montserrat] flex-wrap ">
        Unfortunately, we do not have a saddle available for this horse. Please
        check back later.
      </div>
    </>
  );
};

export default BayAsaddle;
