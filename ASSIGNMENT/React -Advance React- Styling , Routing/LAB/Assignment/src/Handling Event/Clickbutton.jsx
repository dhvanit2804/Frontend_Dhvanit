import React, { useState } from "react";

const Clickbutton = () => {
  const [text, setText] = useState("Not Clicked");

  const handleclick = () => {
    setText("Clicked");
  };
  return (
    <div className="text-center mt-5">
      <h1 className="text-4xl font-bold text-black-500">{text}</h1>
      <button
        className="text-white font-bold bg-green-400 mt-4 p-2 rounded-sm"
        onClick={handleclick}
      >
        Click Me !
      </button>
    </div>
  );
};

export default Clickbutton;
