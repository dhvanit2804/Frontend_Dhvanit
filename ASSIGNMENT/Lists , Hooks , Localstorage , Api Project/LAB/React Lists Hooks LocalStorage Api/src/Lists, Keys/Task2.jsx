import React from "react";

const Task2 = () => {
  const users = [
    { id: 1, name: "Dhvanit", age: 20 },
    { id: 2, name: "Dhruv", age: 21 },
    { id: 3, name: "Kartik", age: 22 },
    { id: 4, name: "Karan", age: 23 },
    { id: 5, name: "Kunal", age: 24 },
  ];

  return (
    <div>
      <h1>Task 2: List of Users</h1>
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li key={user.id} className="list-group-item">
              {user.name} - {user.age} years old
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Task2;
