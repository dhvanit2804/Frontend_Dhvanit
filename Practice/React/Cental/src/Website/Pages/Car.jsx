import React, { useEffect, useState } from "react";
import Header from "../Coman/Header";
import Navheader from "../Coman/Navheader";
import Footer from "../Coman/Footer";
import { Helmet } from "react-helmet";
import axios from "axios";

const Car = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/Vehicle");
    console.log(res.data);
    setCars(res.data);
  };

  return (
    <div>
      <Helmet>
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
            <div className="row">
              {cars &&
                cars.map((data, index) => {
                  console.log(data);
                  return (
                    <div className="col-md-4 mb-4">
                      <div className="card shadow-lg border-0 rounded-4 h-100">
                        <img
                          src={data.img}
                          className="card-img-top rounded-top-4"
                          style={{ height: "250px", objectFit: "cover" }}
                          alt={data.name}
                        />
                        <div className="card-body p-4">
                          <h5 className="card-title text-primary fw-bold mb-3">
                            {data.name}
                          </h5>
                          <ul className="list-unstyled text-dark mb-4">
                            <li>
                              <strong>Price:</strong> ₹{data.price}
                            </li>
                            <li>
                              <strong>Fuel:</strong> {data.fuel}
                            </li>
                            <li>
                              <strong>Mileage:</strong> {data.mileage} km/l
                            </li>
                            <li>
                              <strong>Review:</strong> ⭐ {data.review}/5
                            </li>
                            <li>
                              <strong>Model Year:</strong> {data.year}
                            </li>
                          </ul>
                          <a
                            href="#"
                            className="btn btn-success w-100 fw-semibold rounded-pill"
                          >
                            <i className="bi bi-calendar-check-fill me-2"></i>
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
