import React, { useEffect, useState } from "react";
import Aheader from "../Acoman/Aheader";
import Navdata from "../Acoman/Navdata";
import axios from "axios";

const Blogmanage = () => {
  const [blog, setblog] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/blog");
    console.log(res.data);
    setblog(res.data);
  };

  const [blogdata, setblogdata] = useState({
    id: "",
    title: "",
    desc: "",
    img: "",
    date: "",
    author: "",
  });

  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/blog/${id}`);
    console.log(res.data);
    setblogdata(res.data);
  };

  return (
    <div>
      <Aheader />
      <Navdata title="Blog Manage" name="Manage blog" />
      <div className="container py-4">
        <table className="table table-striped table-primary table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {blog &&
              blog.map((data, index) => {
                console.log(data);
                return (
                  <tr className="text-center" key={index}>
                    <th scope="row">{data.id}</th>
                    <td>{data.author}</td>
                    <td>{data.title}</td>
                    <td>{data.date}</td>
                    <td>
                      <button className="btn btn-success" onClick={()=> getdata(data.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                      <button className="btn btn-info mx-2">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
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
                Blog Data
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={blogdata.img}
                      className="card-img-top"
                      alt=""
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-primary">{blogdata.title}</h5>
                      <p
                        className="card-text text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {blogdata.desc}
                      </p>
                    </div>
                    <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        <i className="bi bi-calendar-event"></i> {blogdata.date}
                      </small>
                      <small className="text-muted">
                        <i className="bi bi-person"></i> {blogdata.author}
                      </small>
                    </div>
                  </div>
                </div>
            
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogmanage;
