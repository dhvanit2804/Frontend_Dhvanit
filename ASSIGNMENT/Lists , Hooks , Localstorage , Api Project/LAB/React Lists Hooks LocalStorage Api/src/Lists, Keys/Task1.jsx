import React from "react";

const Task1 = () => {
  const Frutits = ["Mango", "Apple", "Banana", "Orange", "Watermelon"];

  return (
    <div>
      <h1>Task 1: Lists of fruits</h1>
      <ul className="list-group">
        {Frutits.map((fruit, index) => {
          return (
            <li key={index} className="list-group-item">
              {fruit}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Task1;
