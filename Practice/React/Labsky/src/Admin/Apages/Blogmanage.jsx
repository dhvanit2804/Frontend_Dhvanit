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

  const removedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/blog/${id}`);
    console.log(res.data);
    fetchdata();
  };

  const [blogupdate, setblogupdate] = useState(null);
  const [updateblog, setupdateblog] = useState({
    id: "",
    title: "",
    desc: "",
    img: "",
    date: "",
    author: "",
  });

  const openmodal = (id) => {
    setblogupdate(id);
    setupdateblog(id);
  };

  const dataChange = (e) => {
    setupdateblog({
      ...updateblog,
      [e.target.name]: e.target.value,
    });
  };

  const updatedata = async (e) => {
    e.preventDefault();
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
                      <button
                        className="btn btn-success"
                        onClick={() => getdata(data.id)}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        View
                      </button>
                      <button
                        onClick={() => openmodal(data)}
                        className="btn btn-info mx-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
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
      {blogupdate && (
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="mb-4 text-primary fw-bold text-center">
                  <i className="bi bi-journal-plus me-2"></i>Update Blog
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
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Blog Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        onChange={dataChange}
                        value={updateblog && updateblog.title}
                        className="form-control form-control-lg"
                        placeholder="Enter blog title"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Author Name
                      </label>
                      <input
                        type="text"
                        name="author"
                        onChange={dataChange}
                        value={updateblog && updateblog.author}
                        className="form-control form-control-lg"
                        placeholder="Enter author name"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Image URL
                      </label>
                      <input
                        type="url"
                        name="img"
                        onChange={dataChange}
                        value={updateblog && updateblog.img}
                        className="form-control form-control-lg"
                        placeholder="Paste blog image URL"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Enter Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        onChange={dataChange}
                        value={updateblog && updateblog.date}
                        className="form-control form-control-lg"
                        placeholder="Write a short summary of the blog"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Short Description
                      </label>
                      <textarea
                        rows="5"
                        name="desc"
                        onChange={dataChange}
                        value={updateblog && updateblog.desc}
                        className="form-control form-control-lg"
                        placeholder="Write Description"
                      ></textarea>
                    </div>

                    <div className="col-12 text-center mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary px-5 py-2 fs-5 fw-bold rounded-pill shadow-sm"
                        style={{ transition: "0.3s", letterSpacing: "1px" }}
                      >
                        <i className="bi bi-upload me-2"></i>Update Blog
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

export default Blogmanage;
