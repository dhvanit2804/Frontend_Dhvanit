import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateuser } from "../Slicedata/userSlice";

const Update = () => {
  const redirect = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [updatedata, setupdatedata] = useState([]);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.users);
  useEffect(() => {
    const singleuser = user.filter((data) => data.id === id);
    console.log(singleuser[0]);
    setupdatedata(singleuser[0]);
  }, []);

  //   console.log(user)

  const getChange = (e) => {
    setupdatedata({
      ...updatedata,
      [e.target.name]: e.target.value,
    });
  };

  const getSubmit = (e) => {
    e.preventDefault();

    dispatch(updateuser(updatedata));
    redirect("/");
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
              name="name"
              onChange={getChange}
              className="form-control"
              value={updatedata && updatedata.name}
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
              name="email"
              onChange={getChange}
              value={updatedata && updatedata.email}
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
              name="password"
              onChange={getChange}
              value={updatedata && updatedata.password}
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

export default Update;
