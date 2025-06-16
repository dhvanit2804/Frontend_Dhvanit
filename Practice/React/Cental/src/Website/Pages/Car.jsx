import React from "react";
import Header from "../Coman/Header";
import Navheader from "../Coman/Navheader";
import Footer from "../Coman/Footer";
import { Helmet } from "react-helmet";

const Car = () => {
  return (
    <div>
      <Helmet >

                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/wow/wow.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/counterup/counterup.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>



                <script src="js/main.js"></script>
            </Helmet>
      <Header />
      <Navheader title="Our Cars" name="Car" />
      <div>
        {/* Car categories Start */}
        <div className="container-fluid categories py-5">
          <div className="container py-5">
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

export default Car;
