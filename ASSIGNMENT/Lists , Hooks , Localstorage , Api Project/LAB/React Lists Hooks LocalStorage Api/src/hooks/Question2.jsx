import React, { useEffect, useState } from "react";

const Question2 = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    setdata(result);
  };
  return (
    <div>
      <h1>Question 2: Fetching Data form API</h1>
      <ul className="list-group">
        {data.map((user, index) => {
          return (
            <li key={index} className="list-group-item">
              <span className="fw-bold">Name :</span> {user.name} -{" "}
              <span className="fw-bold">Email :</span> {user.email} -{" "}
              <span className="fw-bold">Phone :</span> {user.phone}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question2;
