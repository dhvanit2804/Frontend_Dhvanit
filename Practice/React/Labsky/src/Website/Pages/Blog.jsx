import React, { useEffect, useState } from "react";
import Header from "../Coman/Header";
import Navheader from "../Coman/Navheader";
import Footer from "../Coman/Footer";
import axios from "axios";

const Blog = () => {
  const [blog, setblogs] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/blog");
    console.log(res.data);
    setblogs(res.data);
  };

  return (
    <div>
      <Header />
      <Navheader title="Our Blogs" name="Blog" />
      <div className="container">
        <div className="row">
          {blog &&
            blog.map((data, index) => {
              console.log(data);
              return (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card h-100 shadow-sm">
                    <img
                      src={data.img}
                      className="card-img-top"
                      alt=""
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-primary">{data.title}</h5>
                      <p
                        className="card-text text-muted"
                        style={{ fontSize: "0.9rem" }}
                      >
                        {data.desc}
                      </p>
                    </div>
                    <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
                      <small className="text-muted">
                        <i className="bi bi-calendar-event"></i> {data.date}
                      </small>
                      <small className="text-muted">
                        <i className="bi bi-person"></i> {data.author}
                      </small>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
