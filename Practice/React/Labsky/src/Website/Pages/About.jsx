import React from "react";
import Header from "../Coman/Header";
import Navheader from "../Coman/Navheader";
import Footer from "../Coman/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <Navheader title="About" name="About" />
      <div>
        {/* About Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="row g-0">
                  <div className="col-6">
                    <img className="img-fluid" src="img/about-1.jpg" />
                  </div>
                  <div className="col-6">
                    <img className="img-fluid" src="img/about-2.jpg" />
                  </div>
                  <div className="col-6">
                    <img className="img-fluid" src="img/about-3.jpg" />
                  </div>
                  <div className="col-6">
                    <div className="bg-primary w-100 h-100 mt-n5 ms-n5 d-flex flex-column align-items-center justify-content-center">
                      <div className="icon-box-light">
                        <i className="bi bi-award text-dark" />
                      </div>
                      <h1
                        className="display-1 text-white mb-0"
                        data-toggle="counter-up"
                      >
                        25
                      </h1>
                      <small className="fs-5 text-white">
                        Years Experience
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 className="display-6 mb-4">
                  Trusted Lab Experts and Latest Lab Technologies
                </h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur tellus augue, iaculis id elit eget, ultrices
                  pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu
                  quis, fringilla risus. Pellentesque eu consequat augue.
                </p>
                <div className="row g-4 g-sm-5 justify-content-center">
                  <div className="col-sm-6">
                    <div className="about-fact btn-square flex-column rounded-circle bg-primary ms-sm-auto">
                      <p className="text-white mb-0">Awards Winning</p>
                      <h1 className="text-white mb-0" data-toggle="counter-up">
                        9999
                      </h1>
                    </div>
                  </div>
                  <div className="col-sm-6 text-start">
                    <div className="about-fact btn-square flex-column rounded-circle bg-secondary me-sm-auto">
                      <p className="text-white mb-0">Complete Cases</p>
                      <h1 className="text-white mb-0" data-toggle="counter-up">
                        9999
                      </h1>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="about-fact mt-n130 btn-square flex-column rounded-circle bg-dark mx-sm-auto">
                      <p className="text-white mb-0">Happy Clients</p>
                      <h1 className="text-white mb-0" data-toggle="counter-up">
                        9999
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Features Start */}
        <div
          className="container-fluid feature my-5 wow fadeInUp"
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
        {/* Video Modal Start */}
        <div
          className="modal modal-video fade"
          id="videoModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">
                  Youtube Video
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                {/* 16:9 aspect ratio */}
                <div className="ratio ratio-16x9">
                  <iframe
                    className="embed-responsive-item"
                    src
                    id="video"
                    allowFullScreen
                    allowscriptaccess="always"
                    allow="autoplay"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video Modal End */}
        {/* Team Start */}
        <div className="container-fluid container-team py-5">
          <div className="container pb-5">
            <div className="row g-5 align-items-center mb-5">
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                <img className="img-fluid w-100" src="img/team-1.jpg" alt />
              </div>
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 className="display-6 mb-3">Dr. John Martin</h1>
                <p className="mb-1">CEO &amp; Founder</p>
                <p className="mb-5">Labsky, New York, USA</p>
                <h3 className="mb-3">Biography</h3>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur tellus augue, iaculis id elit eget, ultrices
                  pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu
                  quis, fringilla risus. Pellentesque eu consequat augue.
                </p>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur tellus augue, iaculis id elit eget, ultrices
                  pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu
                  quis, fringilla risus. Pellentesque eu consequat augue.
                </p>
                <div className="d-flex">
                  <a className="btn btn-lg-square btn-primary me-2" href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-lg-square btn-primary me-2" href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-lg-square btn-primary me-2" href>
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-lg-square btn-primary me-2" href>
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="img/team-2.jpg" alt />
                    <div className="team-social">
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-1">Alex Robin</h5>
                    <span>Lab Assistant</span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="img/team-3.jpg" alt />
                    <div className="team-social">
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-1">Andrew Bon</h5>
                    <span>Lab Assistant</span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="img/team-4.jpg" alt />
                    <div className="team-social">
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-1">Martin Tompson</h5>
                    <span>Lab Assistant</span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="img/team-5.jpg" alt />
                    <div className="team-social">
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a className="btn btn-square btn-light mx-1" href>
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <h5 className="mb-1">Clarabelle Samber</h5>
                    <span>Lab Assistant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
      </div>

      <Footer />
    </div>
  );
};

export default About;
