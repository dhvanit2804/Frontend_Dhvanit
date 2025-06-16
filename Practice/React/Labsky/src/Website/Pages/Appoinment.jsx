import React from "react";
import Header from "../Coman/Header";
import Navheader from "../Coman/Navheader";
import Footer from "../Coman/Footer";

const Appoinment = () => {
  return (
    <div>
      <Header />
      <Navheader title="Appoinment" name="Appoinment" />
      {/* Appoinment Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-6 mb-4">
                We Ensure You Will Always Get The Best Result
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar
                tortor. Quisque vel lorem porttitor, malesuada arcu quis,
                fringilla risus. Pellentesque eu consequat augue.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar
                tortor.
              </p>
              <div
                className="d-flex align-items-start wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="icon-box-primary">
                  <i className="bi bi-geo-alt text-dark fs-1" />
                </div>
                <div className="ms-3">
                  <h5>Office Address</h5>
                  <span>123 Street, New York, USA</span>
                </div>
              </div>
              <hr />
              <div
                className="d-flex align-items-start wow fadeIn"
                data-wow-delay="0.4s"
              >
                <div className="icon-box-primary">
                  <i className="bi bi-clock text-dark fs-1" />
                </div>
                <div className="ms-3">
                  <h5>Office Time</h5>
                  <span>Mon-Sat 09am-5pm, Sun Closed</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <h2 className="mb-4">Online Appoinment</h2>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
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
                      className="form-control"
                      id="mobile"
                      placeholder="Your Mobile"
                    />
                    <label htmlFor="mobile">Your Mobile</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <select className="form-select" id="service">
                      <option selected>Pathology Testing</option>
                      <option value>Microbiology Tests</option>
                      <option value>Biochemistry Tests</option>
                      <option value>Histopatology Tests</option>
                    </select>
                    <label htmlFor="service">Choose A Service</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: 130 }}
                      defaultValue={""}
                    />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Submit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appoinment Start */}

      <Footer />
    </div>
  );
};

export default Appoinment;
