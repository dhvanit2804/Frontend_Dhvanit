import React from "react";
import Header from "../Coman/Header";
import Navheader from "../Coman/Navheader";
import Footer from "../Coman/Footer";
import { Helmet } from "react-helmet";

const Testimonial = () => {
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
      <Navheader title="Our Testimonial" name="Testimonial" />
      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              Our Clients<span className="text-primary"> Riviews</span>
            </h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              nemo expedita asperiores commodi accusantium at cum harum,
              excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
              quia distinctio,
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  soluta neque ab repudiandae reprehenderit ipsum eos cumque
                  esse repellendus impedit.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  soluta neque ab repudiandae reprehenderit ipsum eos cumque
                  esse repellendus impedit.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  soluta neque ab repudiandae reprehenderit ipsum eos cumque
                  esse repellendus impedit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      <Footer />
    </div>
  );
};

export default Testimonial;
