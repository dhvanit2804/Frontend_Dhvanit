import React, { useState } from "react";
import Aheader from "../AComan/Aheader";
import Navdata from "../AComan/Navdata";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blogadd = () => {
  const [form, setform] = useState({
    id: "",
    title: "",
    description: "",
    comment: "",
    name: "",
    date: "",
    img: "",
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

    const res = await axios.post("http://localhost:3000/Blog", form);
    console.log(res.data);
    redirect("/blogmanage");
    setform({
      id: "",
      title: "",
      description: "",
      comment: "",
      name: "",
      date: "",
      img: "",
    });
  };

  return (
    <div>
      <Aheader />
      <Navdata title="Blog Add" name="Add Blog" />
      <div className="container py-5">
        <div className="bg-secondary p-5 rounded">
          <h4 className="text-primary mb-4">Blog Add</h4>
          <form onSubmit={handleblog}>
            <div className="row g-4">
              <div className="col-lg-12 col-xl-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    name="name"
                    value={form.name}
                    onChange={getChange}
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
                    value={form.title}
                    onChange={getChange}
                  />
                  <label htmlFor="email">Your Title</label>
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
                    value={form.comment}
                    onChange={getChange}
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
                    placeholder="Date"
                    name="date"
                    value={form.date}
                    onChange={getChange}
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
                    value={form.img}
                    onChange={getChange}
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
                    style={{ height: 160 }}
                    value={form.description}
                    name="description"
                    onChange={getChange}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-light w-100 py-3">Add Blog</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blogadd;
