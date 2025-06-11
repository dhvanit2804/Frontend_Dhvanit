import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div className="container-fluid mt-1 bg-dark p-5 mb-1">
          <h1 className="text-light text-center display-1 fw-bold">
            About Car Markte Place
          </h1>
          <h4 className="text-center display-6 fw-normal text-light">
            Your trusted automotive marketplace since 2020
          </h4>
        </div>
      </section>
      {/* About Hero Image */}
      <section>
        <div className="container-fluid p-0 mb-1">
          <img
            src="https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Car Showroom"
            className="img-fluid w-100"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>
      </section>
      {/* About Content */}
      <section>
        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="display-5 fw-bold mb-4">Our Story</h2>
              <p className="fs-5 mb-3">
                Founded in 2020, Car Market emerged from a simple vision: to
                revolutionize the way people buy, sell, and rent cars. What
                started as a small startup with a handful of passionate
                automotive enthusiasts has grown into one of the most trusted
                car marketplaces in the industry.
              </p>
              <p className="fs-5 mb-3">
                We believe that finding the perfect car should be exciting, not
                stressful. That's why we've built a platform that combines
                cutting-edge technology with genuine human expertise to deliver
                an unparalleled automotive experience.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team at work"
                className="img-fluid rounded shadow-lg"
                style={{ height: "350px", objectFit: "cover", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Content end */}
      {/* Mission Start */}
      <section>
        <div className="container-fluid bg-dark p-5 mb-1">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="text-light text-center">
                  <h1 className="display-6 fw-bold mb-3">Our Misson</h1>
                  <p className="fs-5">
                    To democratize car ownership by providing a transparent,
                    secure, and user-friendly platform that connects buyers,
                    sellers, and renters across the automotive ecosystem.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="text-light text-center">
                  <h1 className="display-6 fw-bold mb-3">Our Vision</h1>
                  <p className="fs-5">
                    To become the world's most trusted automotive marketplace,
                    where every transaction is seamless, every customer is
                    satisfied, and every car finds its perfect match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Misson end */}
      {/* Statistics start */}
      <section>
        <div className="container-fluid bg-dark p-5 mb-1">
          <div className="container">
            <h2 className="text-light text-center fw-bold display-4 mb-5">
              Our Impact
            </h2>
            <div className="row text-center">
              <div className="col-md-3 mb-4">
                <div className="text-light">
                  <h3 className="display-4 fw-bold text-success">50k+</h3>
                  <p className="fs-5">Car Sold</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="text-light">
                  <h3 className="display-4 fw-bold text-success">25k+</h3>
                  <p className="fs-5">Happy Customers</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="text-light">
                  <h3 className="display-4 fw-bold text-success">100+</h3>
                  <p className="fs-5">Partner Dealers</p>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="text-light">
                  <h3 className="display-4 fw-bold text-success">15k+</h3>
                  <p className="fs-5">Car Rented</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container my-5">
          <h2 className="text-center display-4 fw-bold mb-5">
            Why Choose Car Market?
          </h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <div
                  className="bg-dark text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <span className="fs-1">🔒</span>
                </div>
                <h4 className="fw-bold">Secure Transactions</h4>
                <p className="fs-6">
                  All transactions are protected with bank-level security and
                  comprehensive fraud protection.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <div
                  className="bg-dark text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <span className="fs-1">✅</span>
                </div>
                <h4 className="fw-bold">Verified Listings</h4>
                <p className="fs-6">
                  Every car listing is thoroughly verified to ensure accuracy
                  and authenticity.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <div
                  className="bg-dark text-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <span className="fs-1">🎯</span>
                </div>
                <h4 className="fw-bold">Expert Support</h4>
                <p className="fs-6">
                  Our automotive experts are available 24/7 to help you make the
                  best decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
