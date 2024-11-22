import React from "react";
import IconImage from "../../assets/icons/vector.svg";

const Partner = () => {
  return (
    <div className=" w-full  min-h-screen   ">
      <div className=" section-1 flex justify-center  items-center h-full w-full">
        <div className=" relative  h-auto w-full ">
          <img src="Component 9.png" alt="" />
        </div>
        {/* <div className=" flex justify-center items-center absolute top-[200px]   left-[370px] pb-10  ">
          <h2 className="text-[44px] sm:text-[54px] text-white add-horse font-[700]  md:text-[64px] leading-[100%]">
            BECOME A PARTNER
          </h2>{" "}
        </div> */}
      </div>
      <div className=" section-2 h-full bg-[#2b364b]  w-auto   pt-24 md-pt-12 pb-14 ">
        <div className=" w-[80%] mx-auto">
          <h3 className="text-[40px] text-center sm:text-[54px] text-white add-horse font-[700]  md:text-[64px] leading-[100%]">
            WHY BECOME A PARTNER
          </h3>
        </div>
        <div className=" flex pt-10 flex-wrap justify-center gap-6 mx-[20px]">
          <div
            className=" border border-white lg:w-[468px] w-[333px] md:w-[328px] lg:h-[305px] md:h-[297px]
              h-[312px] md:py-6 md:px-12 py-[30px] text-white px-[30px] rounded-[10px] font-[Montserrat]"
          >
            <div>
              {" "}
              <img src="Vector.png" alt="" />
            </div>
            <h4 className=" text-[24px] font-bold mt-[20px] leading-[100%]">
              {" "}
              Enhance Your Product
            </h4>
            <p className=" text-sm font-medium mt-[20px]">
              Build better saddles while increasing market share.​
            </p>
          </div>
          <div
            className=" border border-white lg:w-[468px] w-[333px] md:w-[328px] lg:h-[305px] md:h-[297px]
              h-[312px] md:py-6 md:px-12 py-[30px] text-white px-[30px] rounded-[10px] font-[Montserrat]"
          >
            <div>
              {" "}
              <img src="Vector (1).png" alt="" />
            </div>
            <h4 className=" text-[24px] font-bold mt-[20px] leading-[100%]">
              {" "}
              Cutting-Edge Technology
            </h4>
            <p className=" text-sm font-medium mt-[20px]">
              Technology based on horse anatomy, leading saddle fitting experts
              and proven methodology.
            </p>
          </div>
          <div
            className=" border border-white lg:w-[468px] w-[333px] md:w-[328px] lg:h-[305px] md:h-[297px]
              h-[312px] md:py-6 md:px-12 py-[30px] text-white px-[30px] rounded-[10px] font-[Montserrat]"
          >
            <div>
              <img src="Vector (2).png" alt="" />
            </div>
            <h4 className=" text-[24px] font-bold mt-[20px] leading-[100%]">
              {" "}
              Revolutionizing Saddle Measurement
            </h4>
            <p className=" text-sm font-medium mt-[20px]">
              SaddleFit technology will be the only way to measure a horse for a
              saddle.
            </p>
          </div>
          <div
            className=" border border-white lg:w-[468px] w-[333px] md:w-[328px] lg:h-[305px] md:h-[297px]
              h-[312px] md:py-6 md:px-12 py-[30px] text-white px-[30px] rounded-[10px] font-[Montserrat]"
          >
            <div>
              {" "}
              <img src="Vector (3).png" alt="" />
            </div>
            <h4 className=" text-[24px] font-bold mt-[20px] leading-[100%]">
              {" "}
              Unlock Industry Challenges
            </h4>
            <p className=" text-sm font-medium mt-[20px]">
              Combining your manufacturing capabilities with SaddleFit’s
              design/engineering capabilities can solve the challenges of the
              industry.
            </p>
          </div>
          <div
            className=" border border-white lg:w-[468px] w-[333px] md:w-[328px] lg:h-[305px] md:h-[297px]
              h-[312px] md:py-6 md:px-12 py-[30px] text-white px-[30px] rounded-[10px] font-[Montserrat]"
          >
            <div>
              {" "}
              <img src="Vector (4).png" alt="" />
            </div>
            <h4 className=" text-[24px] font-bold mt-[20px] leading-[100%]">
              {" "}
              Create Custom-Fit Saddles
            </h4>
            <p className=" text-sm font-medium mt-[20px]">
              Provide leading saddle manufacturers the tools to build saddles
              that are custom-fit to each horse's unique size and shape.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full   w-auto   pt-10 md-pt-6 pb-14">
        <div className=" w-[80%] mx-[auto]">
          <h3 className="text-4xl text-center md:text-5xl text-[#2b364b] add-horse font-[700]   leading-tight mb-12">
            GIVE YOUR BRAND THA SADDLEFIT ADVANTAGE
          </h3>
        </div>
        <div className=" flex">
          <div className=" sm:w-[582px] w-[339px] h-auto"></div>
          <div className=" flex flex-wrap text-center items-center p-6  rounded-[32px] sm:w-[582px] w-[339px] h-auto shadow-lg ">
           
            <div >
              <h3 className="text-[16px] text-center md:text-[24px] font-[Montserrat] text-[#2b364b]  font-bold mb-[24px] leading-auto md:leading-[110%]">
              Request Information to Become a Partner.
              </h3>
            </div>
            <div className=" w-full flex flex-col  flex-wrap gap-5">
                
            <div className=" relative w-full flex flex-wrap ">
                    <label
                      htmlFor="Birth Date"
                      className=" absolute top-[10px]
                 translate-y-[-50%] left-[10px] pr-[12px] pl-[12px] 
                  text-[14px] font-[Montserrat] bg-white text-[#2b364b] leading-[14px]  text-opacity-42  "
                    >
                      Company 
                    </label>
                    <input
                      name="Name"
                    //   value={changeText && inputVal.Name}
                    //   onChange={handlerInputvalue}
                      type="text"
                      placeholder="Barrel Racers"
                      className="w-[100%] mt-2 p-5 text-[14px] h-[54px] border-opacity-40  rounded-[60px] 
                leading-[14px]  border border-[#2b364b] "
                    />
                  </div>
                  <div className=" flex justify-between flex-wrap">
                  <div className=" relative w-[230px]  ">
                    <label
                      htmlFor="Birth Date"
                      className=" absolute top-[10px]
                 translate-y-[-50%] left-[10px] pr-[12px] pl-[12px] 
                  text-[14px] font-[Montserrat] bg-white text-[#2b364b] leading-[14px]  text-opacity-42  "
                    >
                      Company 
                    </label>
                    <input
                      name="Name"
                    //   value={changeText && inputVal.Name}
                    //   onChange={handlerInputvalue}
                      type="text"
                      placeholder="Barrel Racers"
                      className="w-[100%] mt-2 p-5 text-[14px] h-[54px] border-opacity-40  rounded-[60px] 
                leading-[14px]  border border-[#2b364b] "
                    />
                  </div>
                  <div className=" relative w-[260px] ">
                    <label
                      htmlFor="Birth Date"
                      className=" absolute top-[10px]
                 translate-y-[-50%] left-[10px] pr-[12px] pl-[12px] 
                  text-[14px] font-[Montserrat] bg-white text-[#2b364b] leading-[14px]  text-opacity-42  "
                    >
                      Company 
                    </label>
                    <input
                      name="Name"
                    //   value={changeText && inputVal.Name}
                    //   onChange={handlerInputvalue}
                      type="text"
                      placeholder="Barrel Racers"
                      className="w-[100%] mt-2 p-5 text-[14px] h-[54px] border-opacity-40  rounded-[60px] 
                leading-[14px]  border border-[#2b364b] "
                    />
                  </div>
                  </div>
                  <div className=" flex justify-between">
                  <div className=" relative w-[230px] ">
                    <label
                      htmlFor="Birth Date"
                      className=" absolute top-[10px]
                 translate-y-[-50%] left-[10px] pr-[12px] pl-[12px] 
                  text-[14px] font-[Montserrat] bg-white text-[#2b364b] leading-[14px]  text-opacity-42  "
                    >
                      Company 
                    </label>
                    <input
                      name="Name"
                    //   value={changeText && inputVal.Name}
                    //   onChange={handlerInputvalue}
                      type="text"
                      placeholder="Barrel Racers"
                      className="w-[100%] mt-2 p-5 text-[14px] h-[54px] border-opacity-40  rounded-[60px] 
                leading-[14px]  border border-[#2b364b] "
                    />
                  </div>
                  <div className=" relative w-[260px] ">
                    <label
                      htmlFor="Birth Date"
                      className=" absolute top-[10px]
                 translate-y-[-50%] left-[10px] pr-[12px] pl-[12px] 
                  text-[14px] font-[Montserrat] bg-white text-[#2b364b] leading-[14px]  text-opacity-42  "
                    >
                      Company 
                    </label>
                    <input
                      name="Name"
                    //   value={changeText && inputVal.Name}
                    //   onChange={handlerInputvalue}
                      type="text"
                      placeholder="Barrel Racers"
                      className="w-[100%] mt-2 p-5 text-[14px] h-[54px] border-opacity-40  rounded-[60px] 
                leading-[14px]  border border-[#2b364b] "
                    />
                  </div>
                  </div>
                  </div>
                  <button className=" bg-[#2b364b] text-white m-5 font-[Montserrat] py-[7px] px-[35px] rounded-[24px] text-[16px]">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
