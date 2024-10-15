import React, { useEffect, useState } from "react";
import DetailPage from "./DetailPage";

import { LuPenLine } from "react-icons/lu";
import { AiOutlineDelete } from "react-icons/ai";

const AddSaddle = () => {
  const [addSaddle, setAddSaddle] = useState(false);
  const [localStorageData, setLocalStorageDatta] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [inputVal, setInputVal] = useState({ Name: "" });
  const [deletCom, setDeletCom] = useState(false);
  const [indexNumber, setIndexNumber] = useState(null);

  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem("SaveInputValue"));
    if (Data) setLocalStorageDatta(Data);
  }, []);

  const handlerDeleteIcon = (val) => {
    const update = localStorageData.filter((_, index) => {
      return index !== val;
    });
    setDeletCom(false);
    setLocalStorageDatta(update);
    localStorage.setItem("SaveInputValue", JSON.stringify(update));
    setSelectedItems("");
  };

  const handlerDelete = () => {
    if (window.confirm("Are You Sure To Delete All Items")) {
      const updateData = localStorageData.filter(
        (_, index) => !selectedItems.includes(index)
      );
      setLocalStorageDatta(updateData);
      localStorage.setItem("SaveInputValue", JSON.stringify(updateData));
      setSelectedItems([]);
    }
  };

  const handleSelect = (index) => {
    setSelectedItems((preItems) =>
      preItems.includes(index)
        ? preItems.filter((item) => item !== index)
        : [...preItems, index]
    );
  };

  const handletselextAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      const allDelete = localStorageData.map((_, index) => index);
      setSelectedItems(allDelete);
    }
    setSelectAll(!selectAll);
  };

  const handlerEdit = (index) => {
    setInputVal(localStorageData[index]);
    setEditIndex(index);

    setAddSaddle(true);
  };

  return (
    <>
    <div className=" flex flex-col  sm:max-w-[1300px] justify-center  md:flex  relative md:justify-start  items-center 
     w-100% h-100% flex-wrap" >
    <div className=" hidden md:w-full h-full md:flex justify-center items-center  absolute
     top-[-50px] z-[-1]
     left-[600px] right-0 " style={{background:'url(/download.svg)',backgroundRepeat:'no-repeat', width:'auto' }} >
    </div>
   
      <div className=" flex   items-center  mx-[30px]
       flex-wrap sm:flex  md:px-[150px]  mt-[50px] md:mt-[110px] md:w-[90%] h-auto  justify-between " >
        <div className=" flex flex-col w-100%  ">
        <div>
        <img src="/star_img--Q7na--3.svg" alt="" /> </div>
        <div className=" flex flex-col w-auto gap-5
          ">
          <h1 className=" text-[54px] text-[#2b364b] add-horse font-[700]  md:text-[64px] leading-[100%]">
            HORSE PROFILE
          </h1> </div>
          <div className=" md:gap-10 pt-5 font-[Montserrat]"> <h3>Find the information you have added below.</h3>  </div> </div>
          <div className=" flex  ">
          <div className="flex  gap-5 pt-5  items-center w-auto justify-between md:gap-[40px] flex-row-reverse ">
            <button
              onClick={handlerDelete}
              className=" border-solid border-2 md:text-[20px] text-[15px]  p-1  font-[500]
               border-[#2b364b] text-[#2b364b] rounded-[30px]
                bg-[#ffffff1a]  text-center   w-[120px] sm:w-[181px]  md:px-[56px]  h-[56px]"
            >
              Delete
            </button>
            <button
              className=" bg-[#2b364b] font-[500] select-all md:text-[20px] text-[15px] text-white p-1
               rounded-[30px] md:w-[209px] w-[150px] text-center  px-[32px] md:px-[56px]  h-[56px]"
              onClick={handletselextAll}
            >
              Select All
            </button>
            
            </div>
          </div>
        
        </div> 
        <div className="flex w-auto mx-[30px] md:px-[150px] items-center mt-[80px] 
        gap-[20px]  flex-wrap  ">
          
          <div className="flex flex-col w-[313px]  md:w-[427px]  justify-between rounded-lg  md:h-[261px] h-[200px]
           p-5  border-solid border-2 border-blue-500">
    
            <div className="flex   items-center text-center justify-between ">
              <div className="flex  ">
                <h1 className="md:text-[44px] text-[22px] text-[#2b364b] font-[700] add-horse">ADD HORSE</h1>
              </div>
              <div className=" flex  w-[50px] h-[50px] items-center cursor-pointer
               justify-center rounded-[9999px] border-dashed border-2 border-[#2b364b] text-[25px]">
                <button
                  onClick={() => setAddSaddle(true)}
                
                >
                  +
                </button>
              </div>
            </div>
            <div className="border-dotted border w-70 mt-20 border-red-200"></div>
            <div className="flex justify-between">
              <h1>Date of Birth</h1>
              <h1>Last Date </h1>
            </div>
          </div>
      
            {localStorageData &&
              localStorageData.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-col w-[313px] md:w-[427px]  justify-between rounded-lg
                     md:h-[261px] h-[200px] p-5 border-solid border-2 border-blue-500"
                  >
                    <div className=" flex  ">
                      <div className=" flex items-center gap-40">
                       <div>
                        <h1 className="md:text-[40px] text-[20px] text-[#2b364b] add-horse font-[700]">
                          {item.Name}
                        </h1> </div>
                      <div className=" flex justify-between">
                        <h1 className="text-2xl text-[#2b364b] add-horse font-[700]">
                          
                          {item.horse}
                        </h1> </div>
                      </div>
                      <div className="">
                        <h1 className="text-2xl text-[#2b364b] font-semibold"></h1>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center cursor-pointer ">
                      <AiOutlineDelete
                      className="text-blue-900 w-[14px]"
                        onClick={() => {
                          setDeletCom(true);
                          setIndexNumber(index);
                        }}
                      />
                      <LuPenLine
                      className="text-blue-900 w-[14px]"
                      onClick={() => handlerEdit(index)} />
                      <label   className="font-[Montserrat] text-[#2b364b] font-[400]">
                        <input
                      
                          type="checkbox"
                          onChange={() => handleSelect(index)}
                          checked={selectedItems.includes(index)}
                        />{" "}
                        Select horse
                      </label>
                    </div>
                    <div className=" w-auto border-dotted border  mt-8 border-red-200"></div>
                    <div className="flex justify-between">
                      <h1>Date of Birth</h1>
                      <h1 className="font-[Montserrat] font-[700] text-[#2b364b] ">{item.BirthDate}</h1>
                    </div>
                  </div>

                  {deletCom && (
                    <div
                      class="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex 
       items-center"
                    >
                      <div
                        aria-hidden="true"
                        class="fixed inset-0 w-full h-full bg-black/50 cursor-pointer"
                      ></div>

                      <div class="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
                        <div
                          class="w-full py-2 bg-white cursor-default pointer-events-auto
                dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm"
                        >
                          <button
                            tabindex="-1"
                            type="button"
                            onClick={() => setDeletCom(false)}
                            class="absolute top-2 right-2 rtl:right-auto rtl:left-2"
                          >
                            <svg
                              title="Close"
                              tabindex="-1"
                              class="h-4 w-4 cursor-pointer text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414
                            1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1
                             1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>

                          <div class="space-y-2 p-2">
                            <div class="p-4 space-y-2 text-center dark:text-white">
                              <h2
                                class="text-xl font-bold tracking-tight"
                                id="page-action.heading"
                              >
                                Delete Saddle
                              </h2>

                              <p class="text-gray-500">
                                Are you sure you would like to do this?
                              </p>
                            </div>
                          </div>

                          <div class="space-y-2">
                            <div
                              aria-hidden="true"
                              class="border-t dark:border-gray-700 px-2"
                            ></div>

                            <div class="px-6 py-2">
                              <div class="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                                <button
                                  onClick={() => setDeletCom(false)}
                                  className="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-gray-800 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800"
                                >
                                  Cancel
                                </button>

                                <button
                                  onClick={() => handlerDeleteIcon(indexNumber)}
                                  class="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-offset-red-700"
                                >
                                  Confirm
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))}
          </div>
          </div>
        
        
       
      {addSaddle && (
        <DetailPage
          setAddSaddle={setAddSaddle}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
          inputVal={inputVal}
          setInputVal={setInputVal}
          setLocalStorageDatta={setLocalStorageDatta}
          addSaddle={addSaddle}
        />
      )}
    </>
  );
};

export default AddSaddle;
