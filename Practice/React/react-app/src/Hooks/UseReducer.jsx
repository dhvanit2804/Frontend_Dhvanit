import React, { useReducer } from "react";

const initialstate = 0;

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);

  return <div>
    <h1>Hello</h1>
  </div>;
};

export default UseReducer;
