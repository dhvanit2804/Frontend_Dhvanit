import React, { useEffect, useState } from "react";
import Aheader from "../AComan/Aheader";
import Navdata from "../AComan/Navdata";
import axios from "axios";

const Userlogin = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/user");
    console.log(res.data);
    setuser(res.data);
  };

  const [formopen, setformopen] = useState(null);
  const [updateform, setupdateform] = useState({
    id: "",
    name: "",
    email: "",
    status: "",
  });

  const getChange = (e) => {
    setupdateform({
        ...updateform,
        [e.target.name] : e.target.value
    })
    console.log(updateform)
  }

  const model = (id) => {
    setformopen(id);
    setupdateform(id);
  };

  const updatedata = async (e) => {
    e.preventDefault();

    const res = await axios.put(`http://localhost:3000/user/${updateform.id}`, updateform)
    console.log(res.data)
    fetchdata()
  }


  return (
    <div>
      <Aheader />
      <Navdata title="User Manage" name="User Manage" />
      <div className="container py-5">
        <h1 className="display-4 fw-bold text-center text-secondary my-3 mb-4">
          <u>Status Management</u>
        </h1>
        <table className="table table-dark table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((data, index) => {
                console.log(data);
                return (
                  <tr className="text-center" key={index}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.status}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => model(data)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {formopen && (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  UPDATE USER
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <h1 className="text-center fw-bold text-primary my-4">
                    <u>User Status</u>
                  </h1>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={getChange}
                      value={updateform && updateform.email}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example1cg">
                      Your Email
                    </label>
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="text"
                      id="status"
                      name="status"
                      onChange={getChange}
                      value={updateform && updateform.status}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example3cg">
                      Your Status
                    </label>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      class="btn btn-success me-3"
                      data-bs-dismiss="modal"
                      onClick={updatedata}
                    >
                      Update Status
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Userlogin;
