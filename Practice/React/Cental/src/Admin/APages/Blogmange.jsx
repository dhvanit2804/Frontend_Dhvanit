import React, { useEffect, useState } from "react";
import Aheader from "../AComan/Aheader";
import Navdata from "../AComan/Navdata";
import axios from "axios";
import { data } from "react-router-dom";

const Blogmange = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/Blog");
    console.log(res.data);
    setBlog(res.data);
  };

  const [blogdata, setBlogData] = useState({
    id: "",
    title: "",
    description: "",
    comment: "",
    name: "",
    date: "",
    img: "",
  });

  const getdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/Blog/${id}`);
    console.log(res.data);
    setBlogData(res.data);
  };

  return (
    <div>
      <Aheader />
      <Navdata title="Blog Manage" name="Blog" />
      <div className="container py-4">
        <table className="table table-dark table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">#id</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col">Comment</th>
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
                    <td>{data.name}</td>
                    <td>{data.title}</td>
                    <td>{data.date}</td>
                    <td>{data.comment}</td>
                    <td>
                      <button
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => getdata(data.id)}
                      >
                        View
                      </button>
                      <button className="btn btn-success mx-2">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
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
                <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="blog-item">
                    <div className="blog-img">
                      <img
                        src={blogdata.img}
                        className="img-fluid rounded-top w-100"
                        alt="Image"
                        style={{ height: "300px" }}
                      />
                    </div>
                    <div className="blog-content rounded-bottom p-4">
                      <div className="blog-date">{blogdata.date}</div>
                      <div className="blog-comment my-3">
                        <div className="small">
                          <span className="fa fa-user text-primary" />
                          <span className="ms-2">{blogdata.name}</span>
                        </div>
                        <div className="small">
                          <span className="fa fa-comment-alt text-primary" />
                          <span className="ms-2">{blogdata.comment}</span>
                        </div>
                      </div>
                      <a href="#" className="h4 d-block mb-3">
                        {blogdata.title}
                      </a>
                      <p className="mb-3">{blogdata.description}</p>
                      <a href="#" className>
                        Read More <i className="fa fa-arrow-right" />
                      </a>
                    </div>
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
    </div>
  );
};

export default Blogmange;
