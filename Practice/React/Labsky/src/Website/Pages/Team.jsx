import React from "react";
import Header from "../Coman/Header";
import Navheader from "../Coman/Navheader";
import Footer from "../Coman/Footer";

const Team = () => {
  return (
    <div>
      <Header />
      <Navheader title="Our Team" name="Our Team" />
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
                Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar
                tortor. Quisque vel lorem porttitor, malesuada arcu quis,
                fringilla risus. Pellentesque eu consequat augue.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar
                tortor. Quisque vel lorem porttitor, malesuada arcu quis,
                fringilla risus. Pellentesque eu consequat augue.
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

      <Footer />
    </div>
  );
};

export default Team;
