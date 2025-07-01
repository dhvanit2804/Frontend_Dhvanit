import React, { useReducer } from "react";

const initialstate = 0;

export const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return (state += 1);
      break;
    case "decrement":
      return (state -= 1);
      break;
    case "Zero":
      return initialstate;
      break;
    default:
      return state;
      break;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);

  return (
    <div>
      <h1 className="m-4 text-2xl">Hello this is count : {count}</h1>
      <button
        onClick={() => dispatch("increment")}
        className="p-2 m-4 bg-green-500 font-semibold rounded-2xl"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch("decrement")}
        className="m-2 bg-red-500 p-2 rounded-2xl font-semibold"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch("Zero")}
        className="m-2 bg-blue-500 font-semibold p-2 rounded-2xl"
      >
        Zero
      </button>
    </div>
  );
};

export default UseReducer;
