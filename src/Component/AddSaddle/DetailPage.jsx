import React, { useEffect, useRef, useState } from "react";
import { MdClear } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { Calendar, DateObject } from "react-multi-date-picker";
import DatePikar from "./DatePikar";

const DetailPage = ({
  setAddSaddle,
  editIndex,
  changeText,
  setEditIndex,
  inputVal,
  setInputVal,
  setLocalStorageDatta,
}) => {
  // const modalRef = useRef(null);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showCalender, setShowCalender] = useState(true);
  const [year, setYear] = useState(2024);
  const [selectDate, setSelectDate] = useState("");
  const [chnagcolMonth, setChnagcolMonth] = useState("January");
  const handlerInputvalue = (e) => {
    const { name, value } = e.target;
    setInputVal((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };


  const handleDatePickerSelect = (selectedDate) => {
    // setDate(selectedDate);
    // setDay("1");
    // setMonth(selectedDate.month.name);
    // setYear(selectedDate.year);
    const formattiDtae = `01/01/${selectedDate.year}`;
    setSelectDate(formattiDtae);
    setInputVal((preveInput) => ({ ...preveInput, BirthDate: formattiDtae }));
    // methods.setValue(
    //   "dob",
    //   `01/${selectedDate.day ? "01" : "01"}/${selectedDate.year}`
    // );
    setShowCalender(false);
  };


  const handlerSave = () => {
    if (inputVal.Name.trim() && selectDate && inputVal.horse) {
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
          className="relative scale-[0.8] w-[340px] h-[440px] md:w-[380px] md:h-[440px] flex flex-col justify-center
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
                {changeText ? changeText : "Add Horse"}
              </h1>
            </div>
          </div>
          <div className="flex">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className=" flex flex-col justify-between space-y-4">
                <div className="flex  flex-col relative h-[56px]">
                  <div className=" relative">
                    <label
                      htmlFor="Birth Date"
                      className=" absolute top-[10px]
                 translate-y-[-50%] left-[10px] pr-[12px] pl-[12px] 
                  text-[12px] font-[Montserrat] bg-white text-[#2b364b] leading-[14px]  "
                    >
                      Horse Name :*
                    </label>
                    <input
                      name="Name"
                      value={changeText && inputVal.Name}
                      onChange={handlerInputvalue}
                      type="text"
                      placeholder="Enter Your Horse Name"
                      className="w-[100%] mt-2 p-5 text-[14px] h-[44px]  rounded-[60px] 
                leading-[14px]  border border-[#2b364b] "
                    />
                  </div>
                </div>
                <div className="flex  flex-col relative h-[56px] ">
                  {showDatePicker ? (
                    <div>
                      <input
                        // value={`01/${"01" ? `01` : "01"}/${year}`}
                        type="text"
                        placeholder="date and time"
                        readOnly
                        name="BirthDate"
                        value={inputVal.BirthDate}
                        onClick={() => setShowCalender(!showCalender)}
                        className="w-[100%]   border border-[#2b364b] mt-2 p-4 text-[14px]
                 h-[43px] text-[#2b364b] rounded-[60px]
                 leading-[14px] font-[Montserrat]  "
                      />

                      {showCalender && (
                        <div
                          className="relative "
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="absolute z-10">
                            <Calendar
                              // ref={calendarRef}
                              style={{
                                marginTop: "10px",
                                borderRadius: "10px",
                              }}
                              // value={`${day ? `${day}` : "1"}/${val}/${yearVal}`}
                              value={`01 january ${year}`}
                              format="DD/MMMM/YYYY"
                              calendarPosition="bottom-left"
                              onChange={handleDatePickerSelect}
                              buttons={false}
                              highlightToday={false}
                              className="custom-calendar  z-0"
                              inputClass="custom-input"
                              disableYearPicker
                              disableMonthPicker
                            />
                          </div>

                          {/* <ChevronDownRightIcon
                            onClick={() => setShowDatePicker(false)}
                            className="!absolute !text-transparent !top-9 !left-[400px] !z-50"
                          /> */}
                        </div>
                      )}
                    </div>
                  ) : (
                    <>
                      <div
                        onClick={() => {
                          setOpenDatePicker(!openDatePicker);
                        }}
                      >
                        <label
                          htmlFor="Birth Date"
                          className=" absolute top-[10px]
                 translate-y-[-50%] left-[10px] pr-[12px] pl-[12px] 
                  text-[12px] font-[Montserrat] bg-white text-[#2b364b] leading-[14px]  "
                        >
                          Birth Date:*
                        </label>
                        <input
                          onChange={handlerInputvalue}
                          value={changeText && inputVal.BirthDate}
                          placeholder="Select horse DOB"
                          type=""
                          className="w-[100%]   border border-[#2b364b] mt-2 p-4 text-[14px]
                 h-[43px] text-[#2b364b] rounded-[60px]
                 leading-[14px] font-[Montserrat]  "
                        />{" "}
                      </div>
                    </>
                  )}

                  <div className="absolute top-5 right-2 text-blue-500 text-[15px]">
                    <MdOutlineDateRange className="relative" />
                  </div>
                  {openDatePicker && (
                    <div className=" absolute top-[56px] left-[-30px] z-10">
                      <DatePikar
                        setOpenDatePicker={setOpenDatePicker}
                        setShowDatePicker={setShowDatePicker}
                        year={year}
                        setYear={setYear}
                        chnagcolMonth={chnagcolMonth}
                        setChnagcolMonth={setChnagcolMonth}
                      />
                    </div>
                  )}
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
                      value={changeText && inputVal.horse}
                    >
                      <option disabled selected value="">
                        Select Horse Name
                      </option>

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
    </>
  );
};

export default DetailPage;
