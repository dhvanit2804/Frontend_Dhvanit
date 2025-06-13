import React from "react";
import Header from "../Coman/Header";
import Footer from "../Coman/Footer";

const Home = () => {
  return (
    <div>
        <Header />
      <div>
        {/* Carousel Start */}
        <div className="header-carousel">
          <div
            id="carouselId"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="false"
          >
            <ol className="carousel-indicators">
              <li
                data-bs-target="#carouselId"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="First slide"
              />
              <li
                data-bs-target="#carouselId"
                data-bs-slide-to={1}
                aria-label="Second slide"
              />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  src="img/carousel-2.jpg"
                  className="img-fluid w-100"
                  alt="First slide"
                />
                <div className="carousel-caption">
                  <div className="container py-4">
                    <div className="row g-5">
                      <div
                        className="col-lg-6 fadeInLeft animated"
                        data-animation="fadeInLeft"
                        data-delay="1s"
                        style={{ animationDelay: "1s" }}
                      >
                        <div className="bg-secondary rounded p-5">
                          <h4 className="text-white mb-4">
                            CONTINUE CAR RESERVATION
                          </h4>
                          <form>
                            <div className="row g-3">
                              <div className="col-12">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected>Select Your Car type</option>
                                  <option value={1}>VW Golf VII</option>
                                  <option value={2}>Audi A1 S-Line</option>
                                  <option value={3}>Toyota Camry</option>
                                  <option value={4}>BMW 320 ModernLine</option>
                                </select>
                              </div>
                              <div className="col-12">
                                <div className="input-group">
                                  <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                    <span className="fas fa-map-marker-alt" />{" "}
                                    <span className="ms-1">Pick Up</span>
                                  </div>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter a City or Airport"
                                    aria-label="Enter a City or Airport"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <a
                                  href="#"
                                  className="text-start text-white d-block mb-2"
                                >
                                  Need a different drop-off location?
                                </a>
                                <div className="input-group">
                                  <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                    <span className="fas fa-map-marker-alt" />
                                    <span className="ms-1">Drop off</span>
                                  </div>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter a City or Airport"
                                    aria-label="Enter a City or Airport"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="input-group">
                                  <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                    <span className="fas fa-calendar-alt" />
                                    <span className="ms-1">Pick Up</span>
                                  </div>
                                  <input className="form-control" type="date" />
                                  <select
                                    className="form-select ms-3"
                                    aria-label="Default select example"
                                  >
                                    <option selected>12:00AM</option>
                                    <option value={1}>1:00AM</option>
                                    <option value={2}>2:00AM</option>
                                    <option value={3}>3:00AM</option>
                                    <option value={4}>4:00AM</option>
                                    <option value={5}>5:00AM</option>
                                    <option value={6}>6:00AM</option>
                                    <option value={7}>7:00AM</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="input-group">
                                  <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                    <span className="fas fa-calendar-alt" />
                                    <span className="ms-1">Drop off</span>
                                  </div>
                                  <input className="form-control" type="date" />
                                  <select
                                    className="form-select ms-3"
                                    aria-label="Default select example"
                                  >
                                    <option selected>12:00AM</option>
                                    <option value={1}>1:00AM</option>
                                    <option value={2}>2:00AM</option>
                                    <option value={3}>3:00AM</option>
                                    <option value={4}>4:00AM</option>
                                    <option value={5}>5:00AM</option>
                                    <option value={6}>6:00AM</option>
                                    <option value={7}>7:00AM</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-12">
                                <button className="btn btn-light w-100 py-2">
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 d-none d-lg-flex fadeInRight animated"
                        data-animation="fadeInRight"
                        data-delay="1s"
                        style={{ animationDelay: "1s" }}
                      >
                        <div className="text-start">
                          <h1 className="display-5 text-white">
                            Get 15% off your rental Plan your trip now
                          </h1>
                          <p>Treat yourself in USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="img/carousel-1.jpg"
                  className="img-fluid w-100"
                  alt="First slide"
                />
                <div className="carousel-caption">
                  <div className="container py-4">
                    <div className="row g-5">
                      <div
                        className="col-lg-6 fadeInLeft animated"
                        data-animation="fadeInLeft"
                        data-delay="1s"
                        style={{ animationDelay: "1s" }}
                      >
                        <div className="bg-secondary rounded p-5">
                          <h4 className="text-white mb-4">
                            CONTINUE CAR RESERVATION
                          </h4>
                          <form>
                            <div className="row g-3">
                              <div className="col-12">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected>Select Your Car type</option>
                                  <option value={1}>VW Golf VII</option>
                                  <option value={2}>Audi A1 S-Line</option>
                                  <option value={3}>Toyota Camry</option>
                                  <option value={4}>BMW 320 ModernLine</option>
                                </select>
                              </div>
                              <div className="col-12">
                                <div className="input-group">
                                  <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                    <span className="fas fa-map-marker-alt" />
                                    <span className="ms-1">Pick Up</span>
                                  </div>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter a City or Airport"
                                    aria-label="Enter a City or Airport"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <a
                                  href="#"
                                  className="text-start text-white d-block mb-2"
                                >
                                  Need a different drop-off location?
                                </a>
                                <div className="input-group">
                                  <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                    <span className="fas fa-map-marker-alt" />
                                    <span className="ms-1">Drop off</span>
                                  </div>
                                  <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter a City or Airport"
                                    aria-label="Enter a City or Airport"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="input-group">
                                  <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                    <span className="fas fa-calendar-alt" />
                                    <span className="ms-1">Pick Up</span>
                                  </div>
                                  <input className="form-control" type="date" />
                                  <select
                                    className="form-select ms-3"
                                    aria-label="Default select example"
                                  >
                                    <option selected>12:00AM</option>
                                    <option value={1}>1:00AM</option>
                                    <option value={2}>2:00AM</option>
                                    <option value={3}>3:00AM</option>
                                    <option value={4}>4:00AM</option>
                                    <option value={5}>5:00AM</option>
                                    <option value={6}>6:00AM</option>
                                    <option value={7}>7:00AM</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="input-group">
                                  <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                                    <span className="fas fa-calendar-alt" />
                                    <span className="ms-1">Drop off</span>
                                  </div>
                                  <input className="form-control" type="date" />
                                  <select
                                    className="form-select ms-3"
                                    aria-label="Default select example"
                                  >
                                    <option selected>12:00AM</option>
                                    <option value={1}>1:00AM</option>
                                    <option value={2}>2:00AM</option>
                                    <option value={3}>3:00AM</option>
                                    <option value={4}>4:00AM</option>
                                    <option value={5}>5:00AM</option>
                                    <option value={6}>6:00AM</option>
                                    <option value={7}>7:00AM</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-12">
                                <button className="btn btn-light w-100 py-2">
                                  Book Now
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 d-none d-lg-flex fadeInRight animated"
                        data-animation="fadeInRight"
                        data-delay="1s"
                        style={{ animationDelay: "1s" }}
                      >
                        <div className="text-start">
                          <h1 className="display-5 text-white">
                            Get 15% off your rental! Choose Your Model{" "}
                          </h1>
                          <p>Treat yourself in USA</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel End */}
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
        <div className="container-fluid counter bg-secondary py-5">
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
        {/* Services Start */}
        <div className="container-fluid service py-5">
          <div className="container py-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 800 }}
            >
              <h1 className="display-5 text-capitalize mb-3">
                Cental <span className="text-primary">Services</span>
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
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item p-4">
                  <div className="service-icon mb-4">
                    <i className="fa fa-phone-alt fa-2x" />
                  </div>
                  <h5 className="mb-3">Phone Reservation</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item p-4">
                  <div className="service-icon mb-4">
                    <i className="fa fa-money-bill-alt fa-2x" />
                  </div>
                  <h5 className="mb-3">Special Rates</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item p-4">
                  <div className="service-icon mb-4">
                    <i className="fa fa-road fa-2x" />
                  </div>
                  <h5 className="mb-3">One Way Rental</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item p-4">
                  <div className="service-icon mb-4">
                    <i className="fa fa-umbrella fa-2x" />
                  </div>
                  <h5 className="mb-3">Life Insurance</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item p-4">
                  <div className="service-icon mb-4">
                    <i className="fa fa-building fa-2x" />
                  </div>
                  <h5 className="mb-3">City to City</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="service-item p-4">
                  <div className="service-icon mb-4">
                    <i className="fa fa-car-alt fa-2x" />
                  </div>
                  <h5 className="mb-3">Free Rides</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services End */}
        {/* Car categories Start */}
        <div className="container-fluid categories pb-5">
          <div className="container pb-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 800 }}
            >
              <h1 className="display-5 text-capitalize mb-3">
                Vehicle <span className="text-primary">Categories</span>
              </h1>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                amet nemo expedita asperiores commodi accusantium at cum harum,
                excepturi, quia tempora cupiditate! Adipisci facilis modi
                quisquam quia distinctio,
              </p>
            </div>
            <div
              className="categories-carousel owl-carousel wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="categories-item p-4">
                <div className="categories-item-inner">
                  <div className="categories-img rounded-top">
                    <img
                      src="img/car-1.png"
                      className="img-fluid w-100 rounded-top"
                      alt
                    />
                  </div>
                  <div className="categories-content rounded-bottom p-4">
                    <h4>Mercedes Benz R3</h4>
                    <div className="categories-review mb-4">
                      <div className="me-3">4.5 Review</div>
                      <div className="d-flex justify-content-center text-secondary">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star text-body" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                        $99:00/Day
                      </h4>
                    </div>
                    <div className="row gy-2 gx-0 text-center mb-4">
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-users text-dark" />{" "}
                        <span className="text-body ms-1">4 Seat</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-car text-dark" />{" "}
                        <span className="text-body ms-1">AT/MT</span>
                      </div>
                      <div className="col-4">
                        <i className="fa fa-gas-pump text-dark" />{" "}
                        <span className="text-body ms-1">Petrol</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-car text-dark" />{" "}
                        <span className="text-body ms-1">2015</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-cogs text-dark" />{" "}
                        <span className="text-body ms-1">AUTO</span>
                      </div>
                      <div className="col-4">
                        <i className="fa fa-road text-dark" />{" "}
                        <span className="text-body ms-1">27K</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill d-flex justify-content-center py-3"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="categories-item p-4">
                <div className="categories-item-inner">
                  <div className="categories-img rounded-top">
                    <img
                      src="img/car-2.png"
                      className="img-fluid w-100 rounded-top"
                      alt
                    />
                  </div>
                  <div className="categories-content rounded-bottom p-4">
                    <h4>Toyota Corolla Cross</h4>
                    <div className="categories-review mb-4">
                      <div className="me-3">3.5 Review</div>
                      <div className="d-flex justify-content-center text-secondary">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star text-body" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                        $128:00/Day
                      </h4>
                    </div>
                    <div className="row gy-2 gx-0 text-center mb-4">
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-users text-dark" />{" "}
                        <span className="text-body ms-1">4 Seat</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-car text-dark" />{" "}
                        <span className="text-body ms-1">AT/MT</span>
                      </div>
                      <div className="col-4">
                        <i className="fa fa-gas-pump text-dark" />{" "}
                        <span className="text-body ms-1">Petrol</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-car text-dark" />{" "}
                        <span className="text-body ms-1">2015</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-cogs text-dark" />{" "}
                        <span className="text-body ms-1">AUTO</span>
                      </div>
                      <div className="col-4">
                        <i className="fa fa-road text-dark" />{" "}
                        <span className="text-body ms-1">27K</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill d-flex justify-content-center py-3"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="categories-item p-4">
                <div className="categories-item-inner">
                  <div className="categories-img rounded-top">
                    <img
                      src="img/car-3.png"
                      className="img-fluid w-100 rounded-top"
                      alt
                    />
                  </div>
                  <div className="categories-content rounded-bottom p-4">
                    <h4>Tesla Model S Plaid</h4>
                    <div className="categories-review mb-4">
                      <div className="me-3">3.8 Review</div>
                      <div className="d-flex justify-content-center text-secondary">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star text-body" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                        $170:00/Day
                      </h4>
                    </div>
                    <div className="row gy-2 gx-0 text-center mb-4">
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-users text-dark" />{" "}
                        <span className="text-body ms-1">4 Seat</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-car text-dark" />{" "}
                        <span className="text-body ms-1">AT/MT</span>
                      </div>
                      <div className="col-4">
                        <i className="fa fa-gas-pump text-dark" />{" "}
                        <span className="text-body ms-1">Petrol</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-car text-dark" />{" "}
                        <span className="text-body ms-1">2015</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-cogs text-dark" />{" "}
                        <span className="text-body ms-1">AUTO</span>
                      </div>
                      <div className="col-4">
                        <i className="fa fa-road text-dark" />{" "}
                        <span className="text-body ms-1">27K</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill d-flex justify-content-center py-3"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="categories-item p-4">
                <div className="categories-item-inner">
                  <div className="categories-img rounded-top">
                    <img
                      src="img/car-4.png"
                      className="img-fluid w-100 rounded-top"
                      alt
                    />
                  </div>
                  <div className="categories-content rounded-bottom p-4">
                    <h4>Hyundai Kona Electric</h4>
                    <div className="categories-review mb-4">
                      <div className="me-3">4.8 Review</div>
                      <div className="d-flex justify-content-center text-secondary">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                        $187:00/Day
                      </h4>
                    </div>
                    <div className="row gy-2 gx-0 text-center mb-4">
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-users text-dark" />{" "}
                        <span className="text-body ms-1">4 Seat</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-car text-dark" />{" "}
                        <span className="text-body ms-1">AT/MT</span>
                      </div>
                      <div className="col-4">
                        <i className="fa fa-gas-pump text-dark" />{" "}
                        <span className="text-body ms-1">Petrol</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-car text-dark" />{" "}
                        <span className="text-body ms-1">2015</span>
                      </div>
                      <div className="col-4 border-end border-white">
                        <i className="fa fa-cogs text-dark" />{" "}
                        <span className="text-body ms-1">AUTO</span>
                      </div>
                      <div className="col-4">
                        <i className="fa fa-road text-dark" />{" "}
                        <span className="text-body ms-1">27K</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn btn-primary rounded-pill d-flex justify-content-center py-3"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Car categories End */}
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
        {/* Team Start */}
        <div className="container-fluid team pb-5">
          <div className="container pb-5">
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
        {/* Testimonial Start */}
        <div className="container-fluid testimonial pb-5">
          <div className="container pb-5">
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 800 }}
            >
              <h1 className="display-5 text-capitalize mb-3">
                Our Clients<span className="text-primary"> Riviews</span>
              </h1>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                amet nemo expedita asperiores commodi accusantium at cum harum,
                excepturi, quia tempora cupiditate! Adipisci facilis modi
                quisquam quia distinctio,
              </p>
            </div>
            <div
              className="owl-carousel testimonial-carousel wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="testimonial-item">
                <div className="testimonial-quote">
                  <i className="fa fa-quote-right fa-2x" />
                </div>
                <div className="testimonial-inner p-4">
                  <img src="img/testimonial-1.jpg" className="img-fluid" alt />
                  <div className="ms-4">
                    <h4>Person Name</h4>
                    <p>Profession</p>
                    <div className="d-flex text-primary">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star text-body" />
                    </div>
                  </div>
                </div>
                <div className="border-top rounded-bottom p-4">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam soluta neque ab repudiandae reprehenderit ipsum eos
                    cumque esse repellendus impedit.
                  </p>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-quote">
                  <i className="fa fa-quote-right fa-2x" />
                </div>
                <div className="testimonial-inner p-4">
                  <img src="img/testimonial-2.jpg" className="img-fluid" alt />
                  <div className="ms-4">
                    <h4>Person Name</h4>
                    <p>Profession</p>
                    <div className="d-flex text-primary">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star text-body" />
                      <i className="fas fa-star text-body" />
                    </div>
                  </div>
                </div>
                <div className="border-top rounded-bottom p-4">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam soluta neque ab repudiandae reprehenderit ipsum eos
                    cumque esse repellendus impedit.
                  </p>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-quote">
                  <i className="fa fa-quote-right fa-2x" />
                </div>
                <div className="testimonial-inner p-4">
                  <img src="img/testimonial-3.jpg" className="img-fluid" alt />
                  <div className="ms-4">
                    <h4>Person Name</h4>
                    <p>Profession</p>
                    <div className="d-flex text-primary">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star text-body" />
                      <i className="fas fa-star text-body" />
                      <i className="fas fa-star text-body" />
                    </div>
                  </div>
                </div>
                <div className="border-top rounded-bottom p-4">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam soluta neque ab repudiandae reprehenderit ipsum eos
                    cumque esse repellendus impedit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
