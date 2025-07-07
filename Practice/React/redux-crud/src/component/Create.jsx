import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createuser } from "../Slicedata/userSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const redirect = useNavigate();

  const [form, setform] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });

  const getChange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const dispatch = useDispatch();

  const getSubmit = (e) => {
    e.preventDefault();

    dispatch(createuser(form));
    redirect("/");
    setform({
      id: "",
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-3">
      <form action="" onSubmit={getSubmit}>
        <div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Name{" "}
            </label>
            <input
              type="text"
              value={form.name}
              name="name"
              onChange={getChange}
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={form.email}
              name="email"
              onChange={getChange}
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput3" className="form-label">
              your password
            </label>
            <input
              type="password"
              value={form.password}
              name="password"
              onChange={getChange}
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="your password"
            />
          </div>
          <div className="mb-3">
            <input type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
