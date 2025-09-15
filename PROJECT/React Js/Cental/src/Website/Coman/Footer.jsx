import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        {/* Footer Start */}
        <div
          className="container-fluid footer py-5 wow fadeIn"
          data-wow-delay="0.2s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                  <div className="footer-item">
                    <h4 className="text-white mb-4">About Us</h4>
                    <p className="mb-3">
                      Dolor amet sit justo amet elitr clita ipsum elitr
                      est.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="position-relative">
                    <input
                      className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <button
                      type="button"
                      className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                  <h4 className="text-white mb-4">Quick Links</h4>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> About
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Cars
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Car Types
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Team
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Contact us
                  </a>
                  <a href="#">
                    <i className="fas fa-angle-right me-2" /> Terms &amp;
                    Conditions
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                  <h4 className="text-white mb-4">Business Hours</h4>
                  <div className="mb-3">
                    <h6 className="text-muted mb-0">Mon - Friday:</h6>
                    <p className="text-white mb-0">09.00 am to 07.00 pm</p>
                  </div>
                  <div className="mb-3">
                    <h6 className="text-muted mb-0">Saturday:</h6>
                    <p className="text-white mb-0">10.00 am to 05.00 pm</p>
                  </div>
                  <div className="mb-3">
                    <h6 className="text-muted mb-0">Vacation:</h6>
                    <p className="text-white mb-0">
                      All Sunday is our vacation
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="footer-item d-flex flex-column">
                  <h4 className="text-white mb-4">Contact Info</h4>
                  <a href="#">
                    <i className="fa fa-map-marker-alt me-2" /> 123 Street, New
                    York, USA
                  </a>
                  <a href="mailto:info@example.com">
                    <i className="fas fa-envelope me-2" /> info@example.com
                  </a>
                  <a href="tel:+012 345 67890">
                    <i className="fas fa-phone me-2" /> +012 345 67890
                  </a>
                  <a href="tel:+012 345 67890" className="mb-3">
                    <i className="fas fa-print me-2" /> +012 345 67890
                  </a>
                  <div className="d-flex">
                    <a
                      className="btn btn-secondary btn-md-square rounded-circle me-3"
                      href
                    >
                      <i className="fab fa-facebook-f text-white" />
                    </a>
                    <a
                      className="btn btn-secondary btn-md-square rounded-circle me-3"
                      href
                    >
                      <i className="fab fa-twitter text-white" />
                    </a>
                    <a
                      className="btn btn-secondary btn-md-square rounded-circle me-3"
                      href
                    >
                      <i className="fab fa-instagram text-white" />
                    </a>
                    <a
                      className="btn btn-secondary btn-md-square rounded-circle me-0"
                      href
                    >
                      <i className="fab fa-linkedin-in text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Copyright Start */}
        <div className="container-fluid copyright py-4">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-md-6 text-center text-md-start mb-md-0">
                <span className="text-body">
                  <a href="#" className="border-bottom text-white">
                    <i className="fas fa-copyright text-light me-2" />
                    Your Site Name
                  </a>
                  , All right reserved.
                </span>
              </div>
              <div className="col-md-6 text-center text-md-end text-body">
                {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                Designed By{" "}
                <a
                  className="border-bottom text-white"
                  href="https://htmlcodex.com"
                >
                  HTML Codex
                </a>{" "}
                Distributed By{" "}
                <a
                  className="border-bottom text-white"
                  href="https://themewagon.com"
                >
                  ThemeWagon
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright End */}
      </div>
    </div>
  );
};

export default Footer;
