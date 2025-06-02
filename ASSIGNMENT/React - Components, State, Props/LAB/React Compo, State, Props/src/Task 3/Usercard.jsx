import React from "react";

function Usercard({ name, age, location }) {
  return (
    <div className="container mt-3">
      <div className="card text-bg-success" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Hello {name}</h5>
          <h5 className="card-title">My Age is {age}</h5>
          <p className="card-text">I am Living in {location}</p>
        </div>
      </div>
    </div>
  );
}

export default Usercard;
