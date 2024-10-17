import React, { useState } from "react";

const DatePikar = ({
  setOpenDatePicker,
  setShowDatePicker,
  setChnagcolMonth,
  chnagcolMonth,
  year,
  setYear,
}) => {
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
  const years = [];
  for (let year = 2024; year >= 1996; year--) {
    years.push(year);
  }

  const handlerColorChnag = (yearS) => {
    console.log(yearS);
    setYear(yearS);
  };
  const handlerColorChnagMonth = (month) => {
    // setChnagcolMonth(month);
  };
  return (
    <>
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
            {chnagcolMonth} {year}
          </h2>
        </div>
        <div
          className=" flex font-[Montserrat] text-[#2b364b] font-[400] 
            justify-center   h-[200px] 
            overflow-hidden  border-4 border-gray-300 "
        >
          <div className="   month    flex flex-col   overflow-y-scroll border-r  border-gray-300">
            {months.map((month, index) => (
              <div
                key={index}
                className={`flex px-10 py-3 ${
                  index === 0 ? "bg-blue-100 " : ""
                } `}
                onClick={() => handlerColorChnagMonth(month)}
              >
                {month}
              </div>
            ))}
          </div>

          <div className=" flex flex-col items-center month w-[200px] text-center  overflow-y-scroll ">
            {years.map((yearS, index) => (
              <div
                key={index}
                className={`px-10 py-3 flex text-center w-full ${
                  year === yearS ? "bg-blue-100 " : ""
                }`}
                onClick={() => handlerColorChnag(yearS)}
              >
                <p> {yearS} </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" "></div>
        <div class=" flex  justify-center items-center mt-3">
          <button
            className=" rounded-[25px] bg-[#2b364b] p-1 text-white w-[65px]"
            onClick={() => {
              setOpenDatePicker(false);
              setShowDatePicker(true);
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default DatePikar;
