import React from "react";
import Header from "../Coman/Header";
import Navheader from "../Coman/Navheader";
import Footer from "../Coman/Footer";

const Blog = () => {
  return (
    <div>
      <Header />
      <Navheader title="Our Blog & News" name="Blog" />
      <div>
        {/* Blog Start */}
        <div className="container-fluid blog py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 800 }}
            >
              <h1 className="display-5 text-capitalize mb-3">
                Cental<span className="text-primary"> Blog &amp; News</span>
              </h1>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                amet nemo expedita asperiores commodi accusantium at cum harum,
                excepturi, quia tempora cupiditate! Adipisci facilis modi
                quisquam quia distinctio,
              </p>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="blog-item">
                  <div className="blog-img">
                    <img
                      src="img/blog-1.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="blog-content rounded-bottom p-4">
                    <div className="blog-date">30 Dec 2025</div>
                    <div className="blog-comment my-3">
                      <div className="small">
                        <span className="fa fa-user text-primary" />
                        <span className="ms-2">Martin.C</span>
                      </div>
                      <div className="small">
                        <span className="fa fa-comment-alt text-primary" />
                        <span className="ms-2">6 Comments</span>
                      </div>
                    </div>
                    <a href="#" className="h4 d-block mb-3">
                      Rental Cars how to check driving fines?
                    </a>
                    <p className="mb-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eius libero soluta impedit eligendi? Quibusdam,
                      laudantium.
                    </p>
                    <a href="#" className>
                      Read More <i className="fa fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="blog-item">
                  <div className="blog-img">
                    <img
                      src="img/blog-2.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="blog-content rounded-bottom p-4">
                    <div className="blog-date">25 Dec 2025</div>
                    <div className="blog-comment my-3">
                      <div className="small">
                        <span className="fa fa-user text-primary" />
                        <span className="ms-2">Martin.C</span>
                      </div>
                      <div className="small">
                        <span className="fa fa-comment-alt text-primary" />
                        <span className="ms-2">6 Comments</span>
                      </div>
                    </div>
                    <a href="#" className="h4 d-block mb-3">
                      Rental cost of sport and other cars
                    </a>
                    <p className="mb-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eius libero soluta impedit eligendi? Quibusdam,
                      laudantium.
                    </p>
                    <a href="#" className>
                      Read More <i className="fa fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="blog-item">
                  <div className="blog-img">
                    <img
                      src="img/blog-3.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="blog-content rounded-bottom p-4">
                    <div className="blog-date">27 Dec 2025</div>
                    <div className="blog-comment my-3">
                      <div className="small">
                        <span className="fa fa-user text-primary" />
                        <span className="ms-2">Martin.C</span>
                      </div>
                      <div className="small">
                        <span className="fa fa-comment-alt text-primary" />
                        <span className="ms-2">6 Comments</span>
                      </div>
                    </div>
                    <a href="#" className="h4 d-block mb-3">
                      Document required for car rental
                    </a>
                    <p className="mb-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eius libero soluta impedit eligendi? Quibusdam,
                      laudantium.
                    </p>
                    <a href="#" className>
                      Read More <i className="fa fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog End */}
        {/* Fact Counter */}
        <div className="container-fluid counter py-5">
          <div className="container py-5">
            <div className="row g-5">
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="counter-item text-center">
                  <div className="counter-item-icon mx-auto">
                    <i className="fas fa-thumbs-up fa-2x" />
                  </div>
                  <div className="counter-counting my-3">
                    <span
                      className="text-white fs-2 fw-bold"
                      data-toggle="counter-up"
                    >
                      829
                    </span>
                    <span className="h1 fw-bold text-white">+</span>
                  </div>
                  <h4 className="text-white mb-0">Happy Clients</h4>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="counter-item text-center">
                  <div className="counter-item-icon mx-auto">
                    <i className="fas fa-car-alt fa-2x" />
                  </div>
                  <div className="counter-counting my-3">
                    <span
                      className="text-white fs-2 fw-bold"
                      data-toggle="counter-up"
                    >
                      56
                    </span>
                    <span className="h1 fw-bold text-white">+</span>
                  </div>
                  <h4 className="text-white mb-0">Number of Cars</h4>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="counter-item text-center">
                  <div className="counter-item-icon mx-auto">
                    <i className="fas fa-building fa-2x" />
                  </div>
                  <div className="counter-counting my-3">
                    <span
                      className="text-white fs-2 fw-bold"
                      data-toggle="counter-up"
                    >
                      127
                    </span>
                    <span className="h1 fw-bold text-white">+</span>
                  </div>
                  <h4 className="text-white mb-0">Car Center</h4>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="counter-item text-center">
                  <div className="counter-item-icon mx-auto">
                    <i className="fas fa-clock fa-2x" />
                  </div>
                  <div className="counter-counting my-3">
                    <span
                      className="text-white fs-2 fw-bold"
                      data-toggle="counter-up"
                    >
                      589
                    </span>
                    <span className="h1 fw-bold text-white">+</span>
                  </div>
                  <h4 className="text-white mb-0">Total kilometers</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fact Counter */}
        {/* Banner Start */}
        <div
          className="container-fluid banner py-5 wow zoomInDown"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="banner-item rounded">
              <img
                src="img/banner-1.jpg"
                className="img-fluid rounded w-100"
                alt
              />
              <div className="banner-content">
                <h2 className="text-primary">Rent Your Car</h2>
                <h1 className="text-white">Interested in Renting?</h1>
                <p className="text-white">
                  Don't hesitate and send us a message.
                </p>
                <div className="banner-btn">
                  <a
                    href="#"
                    className="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2"
                  >
                    WhatchApp
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner End */}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
