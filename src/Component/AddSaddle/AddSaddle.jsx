import React, { useEffect, useState } from "react";
import DetailPage from "./DetailPage";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaUserPen } from "react-icons/fa6";

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
      <div className="flex justify-center flex-col w-[full] ml-5 flex-wrap gap-5">
        <div className="text-blue-500 gap-5 flex ml-[60px]">
          <h1 className="text-5xl text-blue-900 font-semibold">
            Horse Profile
          </h1>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlerDelete}
              className="text-2xl border-solid border-2 border-blue-500 h-[10] w-[130px] rounded-md p-1 text-white bg-blue-900 font-semibold"
            >
              Delete
            </button>
            <button
              className="text-2xl border-solid border-2 w-[120px]  border-blue-500 rounded-md p-1 text-white bg-blue-900 font-semibold"
              onClick={handletselextAll}
            >
              Select All
            </button>
          </div>
        </div>
        <div className="flex w-[full] justify-center flex-wrap ">
          <div className="flex flex-col justify-between rounded-lg w-80 h-[200px] p-5 border-solid border-2 border-blue-500">
            <div className="flex gap-14 w-70 justify-between">
              <div className="flex w-50 justify-between">
                <h1 className="text-2xl text-blue-900 font-semibold">ADD</h1>
              </div>
              <div className="">
                <button
                  onClick={() => setAddSaddle(true)}
                  className="flex items-center font-bold border w-15 border-black border-dotted p-5 text-center h-[40px] text-2xl text-blue-900 rounded-full"
                >
                  +
                </button>
              </div>
            </div>
            <div className="border-dotted border-2 w-70 mt-10 border-gray-500"></div>
            <div className="flex justify-between">
              <h1>Date of Birth</h1>
              <h1>Last Date </h1>
            </div>
          </div>
          <div className="flex w-[900px] justify-between  flex-wrap">
            {localStorageData &&
              localStorageData.map((item, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-wrap justify-between flex-col rounded-lg  h-[200px] p-5 border-solid border-2 border-blue-500"
                  >
                    <div className="flex-wrap flex  justify-between">
                      <div className=" flex space-x-3">
                        <h1 className="text-2xl text-blue-900 font-semibold">
                          {item.Name}
                        </h1>
                        <h1 className="text-2xl text-blue-900 font-semibold">
                          {item.horse}
                        </h1>
                      </div>
                      <div className="">
                        <h1 className="text-2xl text-blue-900 font-semibold"></h1>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center cursor-pointer">
                      <MdOutlineDeleteOutline
                        onClick={() => {
                          setDeletCom(true);
                          setIndexNumber(index);
                        }}
                      />
                      <FaUserPen onClick={() => handlerEdit(index)} />
                      <label>
                        <input
                          type="checkbox"
                          onChange={() => handleSelect(index)}
                          checked={selectedItems.includes(index)}
                        />{" "}
                        Select Box
                      </label>
                    </div>
                    <div className="border-dotted border-2 w-60 mt-10 border-gray-500"></div>
                    <div className="flex justify-between">
                      <h1>Date of Birth</h1>
                      <h1>{item.BirthDate}</h1>
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
              ))}{" "}
          </div>
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
