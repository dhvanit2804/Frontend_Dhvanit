import React, { useState } from "react";

function FuncState() {
  const [name, setName] = useState("Dhvanit");
  const [count, setCount] = useState(0);

  const changeName = () => {
    setName("Meet");
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <h1>This is Function State</h1>

      <h1>This is Name:- {name}</h1>
      <button className="btn btn-success" onClick={changeName}>
        Change Name
      </button>

      <h1>The Current Count is:- {count}</h1>
      <button className="btn btn-success" onClick={increment}>
        Increment
      </button>
      <button className="btn btn-danger ms-2" onClick={decrement}>Decrement</button>
      <button className="btn btn-info ms-2" onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}

export default FuncState;
