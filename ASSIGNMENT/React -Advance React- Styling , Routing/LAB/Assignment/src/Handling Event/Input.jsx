import React, { useState } from "react";

const Input = () => {
  const [inputvalue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="text-center mt-5">
      <input
        type="text"
        value={inputvalue}
        onChange={handleChange}
        placeholder="Type Something"
        className='className="border border-black-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-72 mb-4"'
      />
      <h3 className="text-xl">
        <span className="font-medium">{inputvalue}</span>
      </h3>
    </div>
  );
};

export default Input;
