import React from "react";
import Header from "../Coman/Header";
import Navheader from "../Coman/Navheader";
import Footer from "../Coman/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <Navheader title="About us" name="About" />
      <div>
        {/* About Start */}
        <div className="container-fluid overflow-hidden about py-5">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="about-item">
                  <div className="pb-5">
                    <h1 className="display-5 text-capitalize">
                      Cental <span className="text-primary">About</span>
                    </h1>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ut amet nemo expedita asperiores commodi accusantium at
                      cum harum, excepturi, quia tempora cupiditate! Adipisci
                      facilis modi quisquam quia distinctio,
                    </p>
                  </div>
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="about-item-inner border p-4">
                        <div className="about-icon mb-4">
                          <img
                            src="img/about-icon-1.png"
                            className="img-fluid w-50 h-50"
                            alt="Icon"
                          />
                        </div>
                        <h5 className="mb-3">Our Vision</h5>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="about-item-inner border p-4">
                        <div className="about-icon mb-4">
                          <img
                            src="img/about-icon-2.png"
                            className="img-fluid h-50 w-50"
                            alt="Icon"
                          />
                        </div>
                        <h5 className="mb-3">Our Mision</h5>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-item my-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae, aliquam ipsum. Sed suscipit dolorem libero sequi aut
                    natus debitis reprehenderit facilis quaerat similique, est
                    at in eum. Quo, obcaecati in!
                  </p>
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="text-center rounded bg-secondary p-4">
                        <h1 className="display-6 text-white">17</h1>
                        <h5 className="text-light mb-0">Years Of Experience</h5>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="rounded">
                        <p className="mb-2">
                          <i className="fa fa-check-circle text-primary me-1" />{" "}
                          Morbi tristique senectus
                        </p>
                        <p className="mb-2">
                          <i className="fa fa-check-circle text-primary me-1" />{" "}
                          A scelerisque purus
                        </p>
                        <p className="mb-2">
                          <i className="fa fa-check-circle text-primary me-1" />{" "}
                          Dictumst vestibulum
                        </p>
                        <p className="mb-0">
                          <i className="fa fa-check-circle text-primary me-1" />{" "}
                          dio aenean sed adipiscing
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-5 d-flex align-items-center">
                      <a href="#" className="btn btn-primary rounded py-3 px-5">
                        More About Us
                      </a>
                    </div>
                    <div className="col-lg-7">
                      <div className="d-flex align-items-center">
                        <img
                          src="img/attachment-img.jpg"
                          className="img-fluid rounded-circle border border-4 border-secondary"
                          style={{ width: 100, height: 100 }}
                          alt="Image"
                        />
                        <div className="ms-4">
                          <h4>William Burgess</h4>
                          <p className="mb-0">Carveo Founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="about-img">
                  <div className="img-1">
                    <img
                      src="img/about-img.jpg"
                      className="img-fluid rounded h-100 w-100"
                      alt
                    />
                  </div>
                  <div className="img-2">
                    <img
                      src="img/about-img-1.jpg"
                      className="img-fluid rounded w-100"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
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
        {/* Features Start */}
        <div className="container-fluid feature py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 800 }}
            >
              <h1 className="display-5 text-capitalize mb-3">
                Cental <span className="text-primary">Features</span>
              </h1>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                amet nemo expedita asperiores commodi accusantium at cum harum,
                excepturi, quia tempora cupiditate! Adipisci facilis modi
                quisquam quia distinctio,
              </p>
            </div>
            <div className="row g-4 align-items-center">
              <div className="col-xl-4">
                <div className="row gy-4 gx-0">
                  <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <span className="fa fa-trophy fa-2x" />
                      </div>
                      <div className="ms-4">
                        <h5 className="mb-3">First Class services</h5>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consectetur, in illum aperiam ullam magni
                          eligendi?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <span className="fa fa-road fa-2x" />
                      </div>
                      <div className="ms-4">
                        <h5 className="mb-3">24/7 road assistance</h5>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consectetur, in illum aperiam ullam magni
                          eligendi?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-12 col-xl-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <img
                  src="img/features-img.png"
                  className="img-fluid w-100"
                  style={{ objectFit: "cover" }}
                  alt="Img"
                />
              </div>
              <div className="col-xl-4">
                <div className="row gy-4 gx-0">
                  <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="feature-item justify-content-end">
                      <div className="text-end me-4">
                        <h5 className="mb-3">Quality at Minimum</h5>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consectetur, in illum aperiam ullam magni
                          eligendi?
                        </p>
                      </div>
                      <div className="feature-icon">
                        <span className="fa fa-tag fa-2x" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="feature-item justify-content-end">
                      <div className="text-end me-4">
                        <h5 className="mb-3">Free Pick-Up &amp; Drop-Off</h5>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consectetur, in illum aperiam ullam magni
                          eligendi?
                        </p>
                      </div>
                      <div className="feature-icon">
                        <span className="fa fa-map-pin fa-2x" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features End */}
        {/* Car Steps Start */}
        <div className="container-fluid steps py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 800 }}
            >
              <h1 className="display-5 text-capitalize text-white mb-3">
                Cental<span className="text-primary"> Process</span>
              </h1>
              <p className="mb-0 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                amet nemo expedita asperiores commodi accusantium at cum harum,
                excepturi, quia tempora cupiditate! Adipisci facilis modi
                quisquam quia distinctio,
              </p>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="steps-item p-4 mb-4">
                  <h4>Come In Contact</h4>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    dolorem!
                  </p>
                  <div className="setps-number">01.</div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="steps-item p-4 mb-4">
                  <h4>Choose A Car</h4>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    dolorem!
                  </p>
                  <div className="setps-number">02.</div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="steps-item p-4 mb-4">
                  <h4>Enjoy Driving</h4>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    dolorem!
                  </p>
                  <div className="setps-number">03.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Car Steps End */}
        {/* Team Start */}
        <div className="container-fluid team py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 800 }}
            >
              <h1 className="display-5 text-capitalize mb-3">
                Customer<span className="text-primary"> Suport</span> Center
              </h1>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                amet nemo expedita asperiores commodi accusantium at cum harum,
                excepturi, quia tempora cupiditate! Adipisci facilis modi
                quisquam quia distinctio,
              </p>
            </div>
            <div className="row g-4">
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item p-4 pt-0">
                  <div className="team-img">
                    <img
                      src="img/team-1.jpg"
                      className="img-fluid rounded w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="team-content pt-4">
                    <h4>MARTIN DOE</h4>
                    <p>Profession</p>
                    <div className="team-icon d-flex justify-content-center">
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item p-4 pt-0">
                  <div className="team-img">
                    <img
                      src="img/team-2.jpg"
                      className="img-fluid rounded w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="team-content pt-4">
                    <h4>MARTIN DOE</h4>
                    <p>Profession</p>
                    <div className="team-icon d-flex justify-content-center">
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item p-4 pt-0">
                  <div className="team-img">
                    <img
                      src="img/team-3.jpg"
                      className="img-fluid rounded w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="team-content pt-4">
                    <h4>MARTIN DOE</h4>
                    <p>Profession</p>
                    <div className="team-icon d-flex justify-content-center">
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item p-4 pt-0">
                  <div className="team-img">
                    <img
                      src="img/team-4.jpg"
                      className="img-fluid rounded w-100"
                      alt="Image"
                    />
                  </div>
                  <div className="team-content pt-4">
                    <h4>MARTIN DOE</h4>
                    <p>Profession</p>
                    <div className="team-icon d-flex justify-content-center">
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        className="btn btn-square btn-light rounded-circle mx-1"
                        href
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
        {/* Banner Start */}
        <div
          className="container-fluid banner pb-5 wow zoomInDown"
          data-wow-delay="0.1s"
        >
          <div className="container pb-5">
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

export default About;
