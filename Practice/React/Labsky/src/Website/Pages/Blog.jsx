import React from "react";
import Header from "../Coman/Header";
import Navheader from "../Coman/Navheader";
import Footer from "../Coman/Footer";

const Blog = () => {
  return (
    <div>
      <Header />
      <Navheader title="Our Blogs" name="Blog" />
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://wallpaperaccess.com/full/624111.jpg"
                className="card-img-top"
                alt=""
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">Medical</h5>
                <p
                  className="card-text text-muted"
                  style={{ fontSize: "0.9rem" }}
                >
                  lorenhshshshshshshshsh
                </p>
              </div>
              <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <i className="bi bi-calendar-event"></i> 12-06-2005
                </small>
                <small className="text-muted">
                  <i className="bi bi-person"></i> DHVANIT
                </small>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://wallpaperaccess.com/full/624111.jpg"
                className="card-img-top"
                alt=""
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">Medical</h5>
                <p
                  className="card-text text-muted"
                  style={{ fontSize: "0.9rem" }}
                >
                  lorenhshshshshshshshsh
                </p>
              </div>
              <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <i className="bi bi-calendar-event"></i> 12-06-2005
                </small>
                <small className="text-muted">
                  <i className="bi bi-person"></i> DHVANIT
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
