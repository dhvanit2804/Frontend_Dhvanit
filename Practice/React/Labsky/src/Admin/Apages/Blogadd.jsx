import React, { useState } from "react";
import Aheader from "../Acoman/Aheader";
import Navdata from "../Acoman/Navdata";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blogadd = () => {
  const [form, setform] = useState({
    id: "",
    title: "",
    desc: "",
    img: "",
    date: "",
    author: "",
  });

  const redirect = useNavigate();

  const getChange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleblog = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/blog", form);
    console.log(res.data);
    redirect("/blogmanage");
    setform({
      id: "",
      title: "",
      desc: "",
      img: "",
      date: "",
      author: "",
    });
  };

  return (
    <div>
      <Aheader />
      <Navdata title="Blog Add" name="Add Blog" />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="p-5 rounded-4 shadow-lg bg-light position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
                borderLeft: "6px solid #0d6efd",
                borderTop: "4px solid #0d6efd",
              }}
            >
              <div className="position-absolute top-0 end-0 p-3">
                <i className="bi bi-pencil-square fs-1 text-primary opacity-25"></i>
              </div>

              <h2 className="mb-4 text-primary fw-bold text-center">
                <i className="bi bi-journal-plus me-2"></i>Add New Blog
              </h2>

              <form onSubmit={handleblog}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Blog Title</label>
                    <input
                      type="text"
                      value={form.title}
                      name="title"
                      onChange={getChange}
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
                      value={form.author}
                      name="author"
                      onChange={getChange}
                      className="form-control form-control-lg"
                      placeholder="Enter author name"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Image URL</label>
                    <input
                      type="url"
                      value={form.img}
                      name="img"
                      onChange={getChange}
                      className="form-control form-control-lg"
                      placeholder="Paste blog image URL"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold">Enter Date</label>
                    <input
                      type="date"
                      value={form.date}
                      name="date"
                      onChange={getChange}
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
                      value={form.desc}
                      name="desc"
                      onChange={getChange}
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
                      <i className="bi bi-upload me-2"></i>Publish Blog
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogadd;
