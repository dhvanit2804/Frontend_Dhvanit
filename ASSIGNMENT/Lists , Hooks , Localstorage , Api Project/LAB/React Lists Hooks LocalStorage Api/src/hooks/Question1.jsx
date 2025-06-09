import React, { useState } from "react";

const Question1 = () => {
  const [count, setCount] = useState(0);
  const incremet = () => {
    setCount(count + 1);
  };
  const decremet = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button className="btn btn-primary me-2" onClick={incremet}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={decremet}>
        Decrement
      </button>
      <button className="btn btn-success ms-2" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Question1;
