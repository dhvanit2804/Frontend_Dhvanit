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

  const removedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/Blog/${id}`);
    console.log(res.data);
    fetchdata();
  };

  const [blogupdate, setblogupdate] = useState(null);
  const [updateblog, setupdateblog] = useState({
    id: "",
    title: "",
    description: "",
    comment: "",
    name: "",
    date: "",
    img: "",
  });

  const openmodel = (id) => {
    setblogupdate(id);
    setupdateblog(id);
  };

  const datachange = (e) => {
    setupdateblog({
      ...updateblog,
      [e.target.name]: e.target.value,
    });
  };

  const updatedata = async (e) => {
    e.preventDefault();

    const res = await axios.put(
      `http://localhost:3000/Blog/${updateblog.id}`,
      updateblog
    );
    console.log(res.data);
    fetchdata();
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
                      <button
                        className="btn btn-success mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => openmodel(data)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
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
        {blogupdate && (
          <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    BLOG UPDATE
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div className="bg-secondary p-5 rounded">
                    <h4 className="text-primary mb-4">Blog Update Data</h4>
                    <form>
                      <div className="row g-4">
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              onChange={datachange}
                              value={updateblog && updateblog.name}
                              placeholder="Your Name"
                            />
                            <label htmlFor="name">Your Name</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="Your Email"
                              name="title"
                              onChange={datachange}
                              value={updateblog && updateblog.title}
                            />
                            <label htmlFor="text">Your Title</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="phone"
                              placeholder="Phone"
                              name="comment"
                              onChange={datachange}
                              value={updateblog && updateblog.comment}
                            />
                            <label htmlFor="phone">Your Comment</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input
                              type="date"
                              className="form-control"
                              id="project"
                              name="date"
                              onChange={datachange}
                              placeholder="Date"
                              value={updateblog && updateblog.date}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <input
                              type="url"
                              className="form-control"
                              id="subject"
                              placeholder="Subject"
                              name="img"
                              onChange={datachange}
                              value={updateblog && updateblog.img}
                            />
                            <label htmlFor="subject">Image</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea
                              className="form-control"
                              placeholder="Leave a message here"
                              id="message"
                              name="description"
                              onChange={datachange}
                              value={updateblog && updateblog.description}
                              style={{ height: 160 }}
                            />
                            <label htmlFor="message">Message</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row">
                            <div className="col-md-6">
                              <button
                                className="btn btn-light w-100 py-3"
                                data-bs-dismiss="modal"
                                onClick={updatedata}
                              >
                                update blogs
                              </button>
                            </div>
                            <div className="col-md-6">
                              <button
                                className="btn btn-light w-100 py-3"
                                data-bs-dismiss="modal"
                                onClick={() => setblogupdate(null)}
                              >
                                cancle blogs
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogmange;
