import React, { useEffect, useRef } from "react";
import { MdClear } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
const DetailPage = ({
  setAddSaddle,
  editIndex,
  setEditIndex,
  inputVal,
  setInputVal,
  setLocalStorageDatta,
}) => {
  const modalRef = useRef(null);

  const handlerInputvalue = (e) => {
    const { name, value } = e.target;
    setInputVal((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setAddSaddle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setAddSaddle]);

  return (
    <div className="flex justify-center items-center top-0 left-0 right-0 fixed z-10 w-[100%] h-[100%]">
      <div className=" w-[100%] h-[100%] absolute bg-black opacity-10 z-0"></div>

      <div
        ref={modalRef}
        className="relative  w-[380px] flex flex-col  z-10 bg-white p-8 rounded-lg shadow-lg"
      >
        <div
            className="flex absolute top-0 right-0 p-4 justify-end cursor-pointer"
            onClick={() => setAddSaddle(false)}
          >
            <MdClear className=" text-[20px]" />
          </div>
        <div className=" flex mt-[-10px] h-[120px] items-center justify-center space-x-3">
          <div
            className="  text-[40px] mb-0 text-blue-950  font-bold
         justify-center items-center text-center"
          >
            <h1>ADD HORSE</h1>{" "}
          </div>
          
        </div>
        <div className=" flex justify-between  ">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className=" flex flex-col justify-between space-y-4">
            <div className="flex  flex-col relative h-[56px]">         
              <label htmlFor="Name" className="  absolute top-0
              leading-normal translate-y-[-50%] left-0 pr-[12px] pl-[12px] z-1  text-[14px] font-medium font-mono  ">
             Horse Name  </label> 
              <div className=" relative">
              <input
                name="Name"
                value={inputVal.Name}
                onChange={handlerInputvalue}
                type="text"
                className="w-[100%] mt-2 p-2 text-[14px] h-[43px]  rounded-[60px] leading-[14px] font-mono border-2 border-[#999] "
              />
            </div> </div>

            <div className="flex  flex-col relative h-[56px] ">
            <label htmlFor="Birth Date" className=" absolute top-0
              leading-normal translate-y-[-50%] left-0 pr-[12px] pl-[12px] z-1
                text-[14px] font-medium font-mono">
 
              Birth Date</label>
              <div className=" relativ">             
                 <input
                name="BirthDate"
                value={inputVal.BirthDate}
                onChange={handlerInputvalue}
                type="date"
                className="w-[100%] mt-2 p-2 text-[14px] h-[43px]  rounded-[60px] leading-[14px] font-mono border-2 border-[#999] "

              />
             </div>  </div>
             <div className="flex  flex-col relative h-[56px]"> 
            <label htmlFor="Horse Category" className=" absolute top-0
              leading-normal translate-y-[-50%] left-0 pr-[12px] pl-[12px] z-1
                text-[14px] font-medium font-mono">Horse Category</label> 
            <div>
              <select
                className="w-[100%] mt-2 p-2 text-[14px] h-[43px]  rounded-[60px] leading-[14px] font-mono border-2 border-[#999]"
                name="horse"
                onChange={handlerInputvalue}
              >
                <option value="Horse1">Horse1</option>
                <option value="Horse2">Horse2</option>
                <option value="Horse3">Horse3</option>
                <option value="Horse4">Horse4</option>
              </select>
            </div>
             </div> </div>
          </form>
          <div
            className="bg-[#d9d9d9] items-center text-center w-[100px] justify-center
             pt-10 pl-10 rounded-xl mt-2
          ml-5 h-[110px] text-[20px]"
          >
            <MdOutlineFileUpload />
          </div>
        </div>
        <div className=" flex justify-around space-x-5 mt-4">
          <button
            onClick={handlerSave}
            className="bg-blue-950  text-white p-1 rounded-[30px] w-[130px] "
          >
            Save
          </button>
          <button
            className=" border-solid border-2 border-blue-950 p-1 rounded-[30px] w-[140px]"
            onClick={() => setAddSaddle(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
