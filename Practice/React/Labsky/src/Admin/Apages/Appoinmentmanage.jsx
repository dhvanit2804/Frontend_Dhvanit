import React, { useEffect, useState } from "react";
import Aheader from "../Acoman/Aheader";
import Navdata from "../Acoman/Navdata";
import axios from "axios";
import { toast } from "react-toastify";

const Appoinmentmanage = () => {
  const [appoinment, setappoinment] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/appoinment");
    console.log(res.data);
    setappoinment(res.data);
  };

  const removedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/appoinment/${id}`);
    console.log(res.data);
    fetchdata();
  };

  const [appoinmentupdate, setappoinmentupdate] = useState(null);
  const [updateappoinment, setupdateappoinment] = useState({
    id: "",
    name: "",
    email: "",
    number: "",
    service: "",
    message: "",
  });

  const openmodal = (id) => {
    setappoinmentupdate(id);
    setupdateappoinment(id);
  };

  const dataChange = (e) => {
    setupdateappoinment({
      ...updateappoinment,
      [e.target.name]: e.target.value,
    });
  };

  const updatedata = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      `http://localhost:3000/appoinment/${updateappoinment.id}`,
      updateappoinment
    );
    console.log(res.data);
    fetchdata();
    toast.success("Appoinment update successfully...!");
  };

  return (
    <div>
      <Aheader />
      <Navdata title="Appoinment Manage" name="Manage Appoinment" />
      <div className="container py-4">
        <table className="table table-striped table-primary table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">Service</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {appoinment &&
              appoinment.map((data, index) => {
                console.log(data);
                return (
                  <tr className="text-center">
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.number}</td>
                    <td>{data.service}</td>
                    <td>
                      <button
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        onClick={() => openmodal(data)}
                        data-bs-target="#exampleModal"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removedata(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {appoinmentupdate && (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title " id="exampleModalLabel">
                  Update Appoinment
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form action="">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          value={updateappoinment && updateappoinment.name}
                          name="name"
                          onChange={dataChange}
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          value={updateappoinment && updateappoinment.email}
                          name="email"
                          onChange={dataChange}
                          className="form-control"
                          id="mail"
                          placeholder="Your Email"
                        />
                        <label htmlFor="mail">Your Email</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          value={updateappoinment && updateappoinment.number}
                          name="number"
                          onChange={dataChange}
                          className="form-control"
                          id="mobile"
                          placeholder="Your Mobile"
                        />
                        <label htmlFor="mobile">Your Mobile</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          value={updateappoinment && updateappoinment.service}
                          name="service"
                          onChange={dataChange}
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="service">Choose A Service</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          value={updateappoinment && updateappoinment.message}
                          name="message"
                          onChange={dataChange}
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 130 }}
                          defaultValue={""}
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button
                        className="btn btn-primary w-100 py-3"
                        onClick={updatedata}
                        data-bs-dismiss="modal"
                        type="submit"
                      >
                        Submit Now
                      </button>
                    </div>
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

export default Appoinmentmanage;
