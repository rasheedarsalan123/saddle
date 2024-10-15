import React, { useState } from "react";

const DatePikar = () => {
  const [changCol, setChangCol] = useState(null);
  const [chnagcolMonth ,setChnagcolMonth] =useState(null)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = [
    2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
  ];
  const handlerColorChnag = (year,e) => {
    console.log(year,e)
    setChangCol(year);
  };
  const handlerColorChnagMonth = (month) => {
    setChnagcolMonth(month);
  };
  return (
    <div
      class="fixed inset-0 z-40 top-48  left-2 w-100% h-100% min-h-full overflow-y-auto   overflow-x-hidden transition flex 
    items-center"
    >
      <div
        class="w-[360px]  h-[320px] rounded-lg border-solid border border-black bg-white
           cursor-default pointer-events-auto
             dark:bg-gray-800 relative  mx-auto max-w-sm"
      >
        <div class="  text-center py-4  ">
          <h2
            class="text-[18px]  font-[Montserrat] text-[#2b364b] font-[700] tracking-tight"
            id="page-action.heading"
          >
            January 2024
          </h2>
        </div>
        <div
          className=" flex font-[Montserrat] text-[#2b364b] font-[400] 
            justify-center   h-[200px] 
            overflow-hidden  border-4 border-gray-300 "
        >
          <div className="   month    flex flex-col   overflow-y-scroll border-r  border-gray-300">
            {months.map((month, index) => (
              <div key={index} className={`flex px-10 py-3 ${
                 chnagcolMonth === month ? "bg-blue-100 " : ""} `} onClick={()=> handlerColorChnagMonth(month)}>
                {month}
              </div>
            ))}
          </div>
   
          <div className=" flex flex-col items-center month w-[200px] text-center  overflow-y-scroll ">
            {years.map((year, index) => (
              <div
                key={index}
                className={`px-10 py-3 flex text-center w-full ${
                  changCol === year ? "bg-blue-100 " : ""
                }`}
                onClick={(e) => handlerColorChnag(year,e)}
              >
                <p> {year} </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" "></div>
        <div class=" flex  justify-center items-center mt-3">
          <button className=" rounded-[25px] bg-[#2b364b] p-1 text-white w-[65px]">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePikar;
