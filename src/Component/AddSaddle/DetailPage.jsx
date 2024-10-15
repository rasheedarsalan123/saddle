import React, { useEffect, useRef, useState } from "react";
import { MdClear } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import DatePikar from "./DatePikar";

const DetailPage = ({
  setAddSaddle,
  editIndex,
  setEditIndex,
  inputVal,
  setInputVal,
  setLocalStorageDatta,
}) => {
  // const modalRef = useRef(null);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const handlerInputvalue = (e) => {
    const { name, value } = e.target;
    setInputVal((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  console.log("openDatePikar", openDatePicker);

  const handlerSave = () => {
    if (inputVal.Name.trim() && inputVal.BirthDate && inputVal.horse) {
      const existingData =
        JSON.parse(localStorage.getItem("SaveInputValue")) || [];
      if (editIndex !== null) {
        existingData[editIndex] = inputVal;
        setEditIndex(null);
      } else {
        existingData.push(inputVal);
      }
      localStorage.setItem("SaveInputValue", JSON.stringify(existingData));
      setLocalStorageDatta(existingData);
      setAddSaddle(false);
      setInputVal(false);
    }
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       setAddSaddle(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [setAddSaddle]);

  return (
    <>
      <div
        className="flex justify-center items-center top-0 left-0 right-0 fixed z-10 w-[100%] h-[100%]
     "
      >
        <div className=" w-[100%] h-[100%] absolute bg-black opacity-60 z-0"></div>

        <div
          // ref={modalRef}
          className="relative    w-[340px] h-[440px] md:w-[380px] md:h-[440px] flex flex-col justify-center
         p-3 items-center z-10 bg-white  rounded-lg shadow-lg"
        >
          <div
            className="flex absolute top-0 right-0 p-4  opacity-35 text-[#2b364b] justify-end cursor-pointer"
            onClick={() => setAddSaddle(false)}
          >
            <MdClear className=" text-[20px]" />
          </div>
          <div className=" flex   items-center justify-center">
            <div
              className="  
         justify-center items-center text-center "
            >
              <h1 className="add-horse text-[48px]  text-[#2b364b] font-[700]">
                ADD HORSE
              </h1>
            </div>
          </div>
          <div className="flex">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className=" flex flex-col justify-between space-y-4">
                <div className="flex  flex-col relative h-[56px]">
                  <label
                    htmlFor="Name"
                    className=" absolute top-[10px]
             text-[#2b364b] translate-y-[-50%] leading-[14px] font-[Montserrat]  bg-white left-[10px] 
             pr-[12px] pl-[12px] z-10  text-[12px]  "
                  >
                    Horse Name:*{" "}
                  </label>
                  <div className=" relative">
                    <input
                      name="Name"
                      value={inputVal.Name}
                      onChange={handlerInputvalue}
                      type="text"
                      placeholder="Enter Your Horse Name"
                      className="w-[100%] mt-2 p-5 text-[14px] h-[44px]  rounded-[60px] 
                leading-[14px]  border border-[#2b364b] "
                    />
                  </div>{" "}
                </div>
                <div className="flex  flex-col relative h-[56px] ">
                  <label
                    htmlFor="Birth Date"
                    className=" absolute top-[10px]
               translate-y-[-50%] left-[10px] pr-[12px] pl-[12px] 
                text-[12px] font-[Montserrat] bg-white text-[#2b364b] leading-[14px]  "
                  >
                    Birth Date:*
                  </label>
                  <div className=" relativ">
                    <input
                      name="BirthDate"
                      value={inputVal.BirthDate}
                      onChange={handlerInputvalue}
                      placeholder="Select horse DOB"
                      type=""
                      className="w-[100%]   border border-[#2b364b] mt-2 p-4 text-[14px]
                 h-[43px] text-[#2b364b] rounded-[60px]
                 leading-[14px] font-[Montserrat]  "
                    />
                  </div>
                  <div
                    className="absolute top-5 right-2 text-blue-500 text-[15px]"
                    onClick={() => {
                      setOpenDatePicker(!openDatePicker);
                    }}
                  >
                    <MdOutlineDateRange />
                  </div>
                </div>
                <div className="flex  flex-col relative h-[56px] ">
                  <label
                    htmlFor="Horse Category"
                    className=" absolute top-[10px]
              leading-[14px] translate-y-[-50%] left-[10px] pr-[12px] pl-[12px] 
                text-[12px] font-medium font-[Montserrat] bg-white text-[#2b364b] "
                  >
                    Horse Category:*
                  </label>
                  <div>
                    <select
                      className="w-[100%] mt-2 p-2 text-[14px] h-[43px] text-[#2b364b] rounded-[60px]
                 leading-[14px] font-[Montserrat]  border border-[#2b364b]"
                      name="horse"
                      onChange={handlerInputvalue}
                    >
                      <option value="Horse1">Horse1</option>
                      <option value="Horse2">Horse2</option>
                      <option value="Horse3">Horse3</option>
                      <option value="Horse4">Horse4</option>
                    </select>
                  </div>
                </div>{" "}
              </div>
            </form>
            <div
              className="bg-[#d9d9d9] items-center text-center w-[80px] md:w-[90px] justify-center
            pt-9 md:pl-9 pl-7  rounded-xl mt-1
          ml-2 h-[95px] text-[18px]  font-[Montserrat] text-[#2b364b] font-[400] "
            >
              <MdOutlineFileUpload />
            </div>
          </div>
          <div className=" flex justify-center gap-6 mt-4">
            <button
              onClick={handlerSave}
              className="bg-[#2b364b]  font-[Montserrat] text-white p-[2px] rounded-[30px] w-[120px] md:w-[145px] "
            >
              Save
            </button>
            <button
              className=" border-solid border-2 border-[#2b364b] text-[#2b364b] 
            font-[Montserrat] font-[400] md:p-[6px] h-[42px] rounded-[30px] w-[120px] md:w-[145px] "
              onClick={() => setAddSaddle(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      {openDatePicker && <DatePikar />}
    </>
  );
};

export default DetailPage;
