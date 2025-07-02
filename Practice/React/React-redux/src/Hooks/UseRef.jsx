import React, { useRef } from "react";

const UseRef = () => {
  const refelement = useRef();

  const getfocus = () => {
    refelement.current.focus();
    refelement.current.style.color = "red";
  };

  return (
    <div>
      <input ref={refelement} className="border" type="text" />
      <button onClick={getfocus} className="mx-3 bg-blue-500 p-2 rounded-2xl">
        Focus
      </button>
    </div>
  );
};

export default UseRef;
