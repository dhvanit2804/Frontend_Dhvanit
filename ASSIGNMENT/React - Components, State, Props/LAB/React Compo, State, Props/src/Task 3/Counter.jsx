import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>This is Counter</h1>
      <h1>The Current Count : {count}</h1>
      <button
        className="btn btn-success mt-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
