import React, { useState } from "react";

function Formobj() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const getchange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  return (
    <div className="container">
      <h1>This is Form</h1>
      <div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Enter your name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your name"
            name="name"
            value={data.name}
            onChange={getchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            name="email"
            placeholder="name@example.com"
            value={data.email}
            onChange={getchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            Enter your Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="exampleFormControlInput3"
            name="phone"
            placeholder="Enter your Phone"
            value={data.phone}
            onChange={getchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput4" className="form-label">
            Enter your password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput4"
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={getchange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </div>
    </div>
  );
}

export default Formobj;
