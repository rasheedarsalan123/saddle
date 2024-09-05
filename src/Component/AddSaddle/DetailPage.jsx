
import React from "react";
import { MdClear } from "react-icons/md";

const DetailPage = ({
  setAddSaddle,
  editIndex,
  setEditIndex,
  inputVal,
  setInputVal,
  setLocalStorageDatta,
}) => {
  const handlerInputvalue = (e) => {
    const { name, value } = e.target;
    setInputVal((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handlerSave = () => {
    const existingData = JSON.parse(localStorage.getItem("SaveInputValue")) || [];

    if (editIndex !== null) {
      existingData[editIndex] = inputVal; 
      setEditIndex(null);
    } else {
      existingData.push(inputVal);
    }

    localStorage.setItem("SaveInputValue", JSON.stringify(existingData));
    setLocalStorageDatta(existingData);
    setAddSaddle(false);
    setInputVal(false) 
  };

  return (
    <div className="flex justify-center items-center top-0 left-0 right-0 fixed z-10 w-[100%] h-[100%]">
      <div className="w-[100%] h-[100%] absolute bg-black opacity-10 z-0"></div>
      <div className="relative flex flex-col z-10 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-end cursor-pointer" onClick={() => setAddSaddle(false)}>
          <MdClear />
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="Name" className="block mb-4">
            Name
            <input
              name="Name"
              value={inputVal.Name}
              onChange={handlerInputvalue}
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded"
            />
          </label>
          <label htmlFor="FatherName" className="block mb-4">
            Father Name
            <input
              name="FatherName"
              value={inputVal.FatherName}
              onChange={handlerInputvalue}
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded"
            />
          </label>

          <button
            onClick={handlerSave}
            className="bg-blue-400 text-white p-1 rounded-lg w-20"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailPage;
