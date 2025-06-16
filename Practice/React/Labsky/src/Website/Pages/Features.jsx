import React from "react";
import Header from "../Coman/Header";
import Navheader from "../Coman/Navheader";
import Footer from "../Coman/Footer";

const Features = () => {
  return (
    <div>
      <Header />
      <Navheader title="Features" name="Features" />
      <div>
        {/* Features Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-0 feature-row">
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.1s"
              >
                <div className="feature-item border h-100 p-5">
                  <div className="icon-box-primary mb-4">
                    <i className="bi bi-award text-dark" />
                  </div>
                  <h5 className="mb-3">Award Winning</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tellus augue.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <div className="feature-item border h-100 p-5">
                  <div className="icon-box-primary mb-4">
                    <i className="bi bi-people text-dark" />
                  </div>
                  <h5 className="mb-3">Expet Doctors</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tellus augue.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="feature-item border h-100 p-5">
                  <div className="icon-box-primary mb-4">
                    <i className="bi bi-cash-coin text-dark" />
                  </div>
                  <h5 className="mb-3">Fair Prices</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tellus augue.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-3 wow fadeIn"
                data-wow-delay="0.7s"
              >
                <div className="feature-item border h-100 p-5">
                  <div className="icon-box-primary mb-4">
                    <i className="bi bi-headphones text-dark" />
                  </div>
                  <h5 className="mb-3">24/7 Support</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tellus augue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features End */}
        {/* Features Start */}
        <div
          className="container-fluid feature mt-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-6 pt-lg-5">
                <div className="bg-white p-5 mt-lg-5">
                  <h1
                    className="display-6 mb-4 wow fadeIn"
                    data-wow-delay="0.3s"
                  >
                    The Best Medical Test &amp; Laboratory Solution
                  </h1>
                  <p className="mb-4 wow fadeIn" data-wow-delay="0.4s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur tellus augue, iaculis id elit eget, ultrices
                    pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu
                    quis, fringilla risus. Pellentesque eu consequat augue.
                  </p>
                  <div className="row g-5 pt-2 mb-5">
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                      <div className="icon-box-primary mb-4">
                        <i className="bi bi-person-plus text-dark" />
                      </div>
                      <h5 className="mb-3">Experience Doctors</h5>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </div>
                    <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                      <div className="icon-box-primary mb-4">
                        <i className="bi bi-check-all text-dark" />
                      </div>
                      <h5 className="mb-3">Advanced Microscopy</h5>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </span>
                    </div>
                  </div>
                  <a
                    className="btn btn-primary py-3 px-5 wow fadeIn"
                    data-wow-delay="0.5s"
                    href
                  >
                    Explore More
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row h-100 align-items-end">
                  <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ minHeight: 300 }}
                    >
                      <button
                        type="button"
                        className="btn-play"
                        data-bs-toggle="modal"
                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                        data-bs-target="#videoModal"
                      >
                        <span />
                      </button>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="bg-primary p-5">
                      <div
                        className="experience mb-4 wow fadeIn"
                        data-wow-delay="0.3s"
                      >
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-white">Sample Preparation</span>
                          <span className="text-white">90%</span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div
                        className="experience mb-4 wow fadeIn"
                        data-wow-delay="0.4s"
                      >
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-white">Result Accuracy</span>
                          <span className="text-white">95%</span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            aria-valuenow={95}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div
                        className="experience mb-0 wow fadeIn"
                        data-wow-delay="0.5s"
                      >
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-white">Lab Equipments</span>
                          <span className="text-white">90%</span>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar bg-dark"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features End */}
      </div>

      <Footer />
    </div>
  );
};

export default Features;
